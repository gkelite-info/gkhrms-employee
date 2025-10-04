'use client'

import { useState, useRef } from 'react';

interface PhotoUploadFormProps {
  employeeId: string;
  onUploadSuccess: () => void;
}

export default function PhotoUploadForm({ employeeId, onUploadSuccess }: PhotoUploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'success' | 'error' | ''>('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage('');
      setStatus('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select an image file (JPG/PNG).');
      setStatus('error');
      return;
    }

    setLoading(true);
    setMessage('Uploading...');
    setStatus('');

    const formData = new FormData();
    formData.append('profile_photo', file);

    try {
      const response = await fetch(`http://localhost:5000/api/v1/employees/${employeeId}/photo`, {
        method: 'POST',
        body: formData,
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { message: 'Invalid response from server' };
      }

      if (response.ok) {
        setMessage(`Success! Photo uploaded. URL: ${result.photoURL}`);
        setStatus('success');
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        onUploadSuccess();
      } else {
        setMessage(`Upload failed: ${result.message || 'Server error'}`);
        setStatus('error');
      }
    } catch (error) {
      setMessage('Network error: Could not connect to backend.');
      setStatus('error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-1 border border-gray-200 rounded-lg shadow-sm bg-white mb-0 h-[100%]">
      {/* <h2 className="text-s font-semibold mb-3 text-gray-800">Upload Profile Photo</h2> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          ref={fileInputRef}
          type="file"
          name="profile_photo"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          type="submit"
          disabled={!file || loading}
          className={`px-0 py-2 text-white text-xs font-medium rounded-lg transition duration-150 ${!file || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
        >
          {loading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-xs ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
