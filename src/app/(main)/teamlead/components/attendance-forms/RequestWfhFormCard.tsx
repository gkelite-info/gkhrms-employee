"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { House, CalendarBlank } from "phosphor-react"
import FileUploadDropzone from "./FileUploadDropzone"
import { DayOption, UploadedFileItem } from "./types"

export default function RequestWfhFormCard() {
  const router = useRouter()
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [dayType, setDayType] = useState<DayOption>("full")
  const [reason, setReason] = useState("")
  const [files, setFiles] = useState<UploadedFileItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (toDate && val && new Date(val) > new Date(toDate)) {
      toast.error("From Date cannot be after To Date.", { position: "top-right" })
      setToDate(val)
    }
    setFromDate(val)
  }

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (fromDate && val && new Date(val) < new Date(fromDate)) {
      toast.error("To Date cannot be before From Date.", { position: "top-right" })
      return
    }
    setToDate(val)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fromDate) {
      toast.error("Please select a From Date.", { position: "top-right" })
      return
    }
    if (dayType === "full" && !toDate) {
      toast.error("Please select a To Date.", { position: "top-right" })
      return
    }
    if (fromDate && toDate && new Date(toDate) < new Date(fromDate)) {
      toast.error("To Date cannot be earlier than From Date.", { position: "top-right" })
      return
    }
    if (!reason.trim()) {
      toast.error("Please enter the reason for your work from home request.", { position: "top-right" })
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Work from home request submitted successfully!", { position: "top-right" })
      setTimeout(() => router.push("/teamlead?tab=requests"), 600)
    }, 500)
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-xs flex flex-col gap-5">
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
          <House size={20} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">Request Work From Home</h2>
          <p className="text-xs text-gray-400 font-medium mt-0.5">Submit a work from home request for approval.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-700">
            WFH Date / Date Range <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full min-w-0">
            <div className="relative flex-1 min-w-0 flex items-center">
              <CalendarBlank size={16} className="absolute left-3.5 text-gray-400 pointer-events-none shrink-0" />
              <input
                type="date"
                value={fromDate}
                max={toDate || undefined}
                onChange={handleFromDateChange}
                className="w-full h-10 pl-10 pr-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 bg-white hover:border-[#5B50EC] focus:border-[#5B50EC] outline-none cursor-pointer min-w-0"
              />
            </div>
            <span className="hidden sm:inline-block text-gray-400 font-bold select-none shrink-0">-</span>
            <div className="relative flex-1 min-w-0 flex items-center">
              <CalendarBlank size={16} className="absolute left-3.5 text-gray-400 pointer-events-none shrink-0" />
              <input
                type="date"
                value={toDate}
                min={fromDate || undefined}
                disabled={dayType === "half"}
                onChange={handleToDateChange}
                className="w-full h-10 pl-10 pr-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 bg-white hover:border-[#5B50EC] focus:border-[#5B50EC] outline-none cursor-pointer disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed min-w-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-700">
            Day Type <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap items-center gap-5 min-h-[32px]">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer select-none">
              <input
                type="radio"
                name="wfhDayType"
                checked={dayType === "full"}
                onChange={() => setDayType("full")}
                className="w-4 h-4 text-[#5B50EC] accent-[#5B50EC] cursor-pointer shrink-0"
              />
              <span>Full Day</span>
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer select-none">
              <input
                type="radio"
                name="wfhDayType"
                checked={dayType === "half"}
                onChange={() => {
                  setDayType("half")
                  if (fromDate) setToDate(fromDate)
                }}
                className="w-4 h-4 text-[#5B50EC] accent-[#5B50EC] cursor-pointer shrink-0"
              />
              <span>Half Day</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-700">
            Reason <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea
              rows={4}
              maxLength={500}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please enter the reason for your work from home request..."
              className="w-full p-3 pb-6 rounded-xl border border-gray-200 text-xs text-gray-700 placeholder:text-gray-400 hover:border-[#5B50EC] focus:border-[#5B50EC] outline-none resize-none min-h-[90px]"
            />
            <span className="absolute bottom-2 right-3 text-[10px] text-gray-400 font-medium pointer-events-none">
              {reason.length}/500
            </span>
          </div>
        </div>

        <FileUploadDropzone files={files} onFilesChange={setFiles} />

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
          <button
            type="button"
            onClick={() => router.push("/teamlead")}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-xl bg-[#5B50EC] hover:bg-[#4d42e0] text-xs font-semibold text-white transition-all shadow-xs cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  )
}
