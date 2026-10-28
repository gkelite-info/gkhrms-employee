"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { PencilSimpleLine } from "phosphor-react"
import { ReusableDropdown } from "@/components/reusableComponents"
import FileUploadDropzone from "./FileUploadDropzone"
import LeaveDateDaySelector from "./LeaveDateDaySelector"
import { DayOption, UploadedFileItem } from "./types"

const leaveOptions = [
  "Casual Leave",
  "Sick Leave",
  "Earned Leave",
  "Maternity / Paternity Leave",
  "Loss of Pay (LOP)",
]

export default function ApplyLeaveFormCard() {
  const router = useRouter()
  const [leaveType, setLeaveType] = useState("")
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [dayType, setDayType] = useState<DayOption>("full")
  const [reason, setReason] = useState("")
  const [files, setFiles] = useState<UploadedFileItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const calculateDays = () => {
    if (!fromDate) return 0
    if (dayType === "half") return 0.5
    if (!toDate) return 1
    const s = new Date(fromDate)
    const e = new Date(toDate)
    if (isNaN(s.getTime()) || isNaN(e.getTime()) || e < s) return 1
    return Math.floor((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24)) + 1
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!leaveType) {
      toast.error("Please select a leave type.", { position: "top-right" })
      return
    }
    if (!fromDate) {
      toast.error("Please select a From Date.", { position: "top-right" })
      return
    }
    if (dayType === "full" && !toDate) {
      toast.error("Please select a To Date.", { position: "top-right" })
      return
    }
    if (fromDate && toDate && new Date(toDate) < new Date(fromDate)) {
      toast.error("To Date cannot be earlier than From Date.", {
        position: "top-right",
      })
      return
    }
    if (!reason.trim()) {
      toast.error("Please enter the reason for your leave request.", {
        position: "top-right",
      })
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Leave request submitted successfully!", {
        position: "top-right",
      })
      setTimeout(() => router.push("/teamlead?tab=requests"), 600)
    }, 500)
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-xs flex flex-col gap-5">
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
          <PencilSimpleLine size={20} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
            Apply Leave
          </h2>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Submit a leave request for approval.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-700">
            Leave Type <span className="text-red-500">*</span>
          </label>
          <ReusableDropdown
            value={leaveType}
            options={leaveOptions}
            onChange={(val) => setLeaveType(String(val))}
            placeholder="Select leave type"
            className="w-full"
            align="full"
            buttonClassName="w-full h-10 px-3.5 rounded-xl border-gray-200 text-xs font-medium"
            menuClassName="w-full"
          />
        </div>

        <LeaveDateDaySelector
          fromDate={fromDate}
          onFromDateChange={setFromDate}
          toDate={toDate}
          onToDateChange={setToDate}
          dayType={dayType}
          onDayTypeChange={setDayType}
          totalDays={calculateDays()}
        />

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
              placeholder="Please enter the reason for your leave request..."
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
