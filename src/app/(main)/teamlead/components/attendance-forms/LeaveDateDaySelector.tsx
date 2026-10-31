"use client"

import type { ChangeEvent } from "react"
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
  const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (toDate && val && new Date(val) > new Date(toDate)) {
      toast.error("From Date cannot be after To Date.", { position: "top-right" })
      onToDateChange(val)
    }
    onFromDateChange(val)
  }

  const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
            <button
              type="button"
              onClick={() => onDayTypeChange("full")}
              className={`h-10 px-3.5 sm:px-4 rounded-xl border flex items-center gap-2.5 sm:gap-3 transition-all cursor-pointer select-none ${
                dayType === "full"
                  ? "bg-[#EEF2FF] border-[#C7D2FE] text-[#1E1B4B]"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  dayType === "full"
                    ? "bg-[#5B50EC]"
                    : "border border-gray-300 bg-white"
                }`}
              >
                {dayType === "full" && (
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                )}
              </span>
              <span
                className={`text-xs sm:text-sm whitespace-nowrap ${
                  dayType === "full"
                    ? "font-bold text-[#1E1B4B]"
                    : "font-medium text-gray-600"
                }`}
              >
                Full Day
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                onDayTypeChange("half")
                if (fromDate) onToDateChange(fromDate)
              }}
              className={`h-10 px-3.5 sm:px-4 rounded-xl border flex items-center gap-2.5 sm:gap-3 transition-all cursor-pointer select-none ${
                dayType === "half"
                  ? "bg-[#EEF2FF] border-[#C7D2FE] text-[#1E1B4B]"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  dayType === "half"
                    ? "bg-[#5B50EC]"
                    : "border border-gray-300 bg-white"
                }`}
              >
                {dayType === "half" && (
                  <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                )}
              </span>
              <span
                className={`text-xs sm:text-sm whitespace-nowrap ${
                  dayType === "half"
                    ? "font-bold text-[#1E1B4B]"
                    : "font-medium text-gray-600"
                }`}
              >
                Half Day
              </span>
            </button>
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
