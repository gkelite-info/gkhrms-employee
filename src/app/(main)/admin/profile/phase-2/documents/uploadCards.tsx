"use client";
import { useRef, useState, useEffect } from "react";
import { Plus, Download } from "lucide-react";

interface UploadCardProps {
  label: string;
  file: File | null;
  setFile: (file: File | null) => void;
}

export default function UploadCard({ label, file, setFile }: UploadCardProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState(file?.name ?? null);

  useEffect(() => {
    setFileName(file?.name ?? null);
    if (file && file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
  };

  const handleDownload = () => {
    if (!file) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-55 flex flex-col text-center items-center m-2">
      {!fileName && (
        <>
          <div
            onClick={handleClick}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-[#E7E5FF] cursor-pointer"
          >
            <Plus className="text-[#9884D6]" size={20} />
          </div>

          <p className="mt-3 text-sm font-medium text-[#323232]">{label}</p>
          <p className="text-xs text-gray-500 mt-1">(PDF or Image Files)</p>
        </>
      )}

      <input
        type="file"
        accept="application/pdf,image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {fileName && (
        <div className="flex flex-col items-center">
          <p className="mt-2 text-xs text-green-600 font-medium truncate max-w-[150px]">
            {fileName}
          </p>

          {previewUrl && (
            <>
              <img
                src={previewUrl}
                alt="Preview"
                className="mt-2 w-24 h-24 object-cover rounded-md border"
              />

              <button
                onClick={handleDownload}
                className="mt-3 flex items-center gap-1 bg-[#9884D6] cursor-pointer text-white text-xs px-3 py-1 rounded-md hover:bg-[#7c67c2] transition"
              >
                <Download size={14} />
                Download
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
