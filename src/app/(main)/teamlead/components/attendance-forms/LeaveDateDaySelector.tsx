"use client"

import toast from "react-hot-toast"
import { CalendarBlank } from "phosphor-react"
import { DayOption } from "./types"

interface LeaveDateDaySelectorProps {
  fromDate: string
  onFromDateChange: (val: string) => void
  toDate: string
  onToDateChange: (val: string) => void
  dayType: DayOption
  onDayTypeChange: (val: DayOption) => void
  totalDays: number
}

export default function LeaveDateDaySelector({
  fromDate,
  onFromDateChange,
  toDate,
  onToDateChange,
  dayType,
  onDayTypeChange,
  totalDays,
}: LeaveDateDaySelectorProps) {
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (toDate && val && new Date(val) > new Date(toDate)) {
      toast.error("From Date cannot be after To Date.", { position: "top-right" })
      onToDateChange(val)
    }
    onFromDateChange(val)
  }

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (fromDate && val && new Date(val) < new Date(fromDate)) {
      toast.error("To Date cannot be before From Date.", { position: "top-right" })
      return
    }
    onToDateChange(val)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0">
        <div className="flex flex-col gap-1.5 min-w-0">
          <label className="text-xs font-bold text-gray-700">
            From Date <span className="text-red-500">*</span>
          </label>
          <div className="relative flex items-center min-w-0">
            <CalendarBlank
              size={16}
              className="absolute left-3.5 text-gray-400 pointer-events-none shrink-0"
            />
            <input
              type="date"
              value={fromDate}
              max={toDate || undefined}
              onChange={handleFromChange}
              className="w-full h-10 pl-10 pr-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 bg-white hover:border-[#5B50EC] focus:border-[#5B50EC] outline-none cursor-pointer min-w-0"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 min-w-0">
          <label className="text-xs font-bold text-gray-700">
            To Date <span className="text-red-500">*</span>
          </label>
          <div className="relative flex items-center min-w-0">
            <CalendarBlank
              size={16}
              className="absolute left-3.5 text-gray-400 pointer-events-none shrink-0"
            />
            <input
              type="date"
              value={toDate}
              min={fromDate || undefined}
              disabled={dayType === "half"}
              onChange={handleToChange}
              className="w-full h-10 pl-10 pr-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 bg-white hover:border-[#5B50EC] focus:border-[#5B50EC] outline-none cursor-pointer disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed min-w-0"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-start w-full min-w-0">
        <div className="flex flex-col gap-1.5 min-w-0">
          <label className="text-xs font-bold text-gray-700">
            Day Type <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 h-10">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer select-none">
              <input
                type="radio"
                name="leaveDayType"
                checked={dayType === "full"}
                onChange={() => onDayTypeChange("full")}
                className="w-4 h-4 text-[#5B50EC] accent-[#5B50EC] cursor-pointer shrink-0"
              />
              <span>Full Day</span>
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer select-none">
              <input
                type="radio"
                name="leaveDayType"
                checked={dayType === "half"}
                onChange={() => {
                  onDayTypeChange("half")
                  if (fromDate) onToDateChange(fromDate)
                }}
                className="w-4 h-4 text-[#5B50EC] accent-[#5B50EC] cursor-pointer shrink-0"
              />
              <span>Half Day</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 min-w-0">
          <label className="text-xs font-bold text-gray-700">Total Days</label>
          <div>
            <input
              type="text"
              readOnly
              value={totalDays}
              className="w-full h-10 px-3.5 rounded-xl border border-gray-100 bg-gray-50 text-xs font-bold text-gray-800 cursor-default"
            />
            <p className="text-[11px] text-gray-400 font-medium mt-1">
              Total days will be calculated automatically.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
