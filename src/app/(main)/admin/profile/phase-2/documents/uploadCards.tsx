"use client";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

interface UploadCardProps {
  label: string;
}

export default function UploadCard({ label }: UploadCardProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-55 flex flex-col text-center items-center m-2">
      <div
        onClick={handleClick}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer hover:bg-gray-100"
      >
        <Plus className="text-gray-600" size={20} />
      </div>

      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <p className="mt-3 text-sm font-medium text-[#323232]">{label}</p>

      <p className="text-xs text-gray-500 mt-1">(Must be in PDF Format)</p>

      {fileName && (
        <p className="mt-2 text-xs text-green-600 font-medium truncate max-w-[150px]">
          {fileName}
        </p>
      )}
    </div>
  );
}
