"use client"

import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { CloudArrowUp, FileText, X } from "phosphor-react"
import { UploadedFileItem } from "./types"

const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "jpg", "jpeg", "png"]
const MAX_FILE_SIZE = 5 * 1024 * 1024
const MAX_FILES = 5

interface FileUploadDropzoneProps {
  files: UploadedFileItem[]
  onFilesChange: (files: UploadedFileItem[]) => void
}

export default function FileUploadDropzone({
  files,
  onFilesChange,
}: FileUploadDropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const validateAndAddFiles = (newFileList: FileList | File[]) => {
    if (files.length >= MAX_FILES) {
      toast.error(`You can only upload up to ${MAX_FILES} files.`, {
        position: "top-right",
      })
      return
    }

    const remainingSlots = MAX_FILES - files.length
    const incomingFiles = Array.from(newFileList)

    if (incomingFiles.length > remainingSlots) {
      toast.error(
        `Only ${remainingSlots} file${remainingSlots > 1 ? "s" : ""} accepted. Maximum ${MAX_FILES} files allowed.`,
        { position: "top-right" }
      )
    }

    const filesToProcess = incomingFiles.slice(0, remainingSlots)
    const validItems: UploadedFileItem[] = []

    filesToProcess.forEach((file) => {
      const ext = file.name.split(".").pop()?.toLowerCase() || ""
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        toast.error(
          `"${file.name}" is not supported. Please upload PDF, DOC, DOCX, JPG, or PNG.`,
          { position: "top-right" }
        )
        return
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error(`"${file.name}" exceeds the 5 MB limit.`, {
          position: "top-right",
        })
        return
      }

      validItems.push({
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        file,
        name: file.name,
        size: file.size,
        formattedSize: formatSize(file.size),
      })
    })

    if (validItems.length > 0) {
      onFilesChange([...files, ...validItems])
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) validateAndAddFiles(e.dataTransfer.files)
  }

  const removeFile = (id: string) => {
    onFilesChange(files.filter((f) => f.id !== id))
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-gray-700">
          Attachment <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <span className="text-[11px] text-gray-400 font-medium">
          {files.length}/{MAX_FILES} files
        </span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        disabled={files.length >= MAX_FILES}
        onChange={(e) => {
          if (e.target.files) validateAndAddFiles(e.target.files)
          if (fileInputRef.current) fileInputRef.current.value = ""
        }}
        className="hidden"
      />

      <div
        onClick={() => {
          if (files.length < MAX_FILES) fileInputRef.current?.click()
          else
            toast.error(`Maximum of ${MAX_FILES} files already uploaded.`, {
              position: "top-right",
            })
        }}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        className={`w-full p-4 rounded-xl border-2 border-dashed transition-all cursor-pointer flex items-center gap-3.5 ${
          files.length >= MAX_FILES
            ? "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"
            : isDragging
            ? "border-[#5B50EC] bg-[#EEF2FF]"
            : "border-[#C7D2FE] bg-[#F8FAFF] hover:bg-[#EEF2FF]/40"
        }`}
      >
        <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
          <CloudArrowUp size={22} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-gray-700">
            Drag and drop a file here, or{" "}
            <span className="text-[#5B50EC]">click to upload</span>
          </span>
          <span className="text-[11px] text-gray-400 font-medium mt-0.5">
            Supports PDF, DOC, DOCX, JPG, PNG (Max 5 MB each, up to {MAX_FILES} files)
          </span>
        </div>
      </div>

      {files.length > 0 && (
        <div className="flex flex-col gap-1.5 mt-1">
          {files.map((item) => (
            <div
              key={item.id}
              className="p-2.5 rounded-xl border border-gray-100 bg-white flex items-center justify-between gap-3 shadow-2xs"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
                  <FileText size={16} weight="bold" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-gray-900 truncate">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {item.formattedSize}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(item.id)}
                className="p-1 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
              >
                <X size={15} weight="bold" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
