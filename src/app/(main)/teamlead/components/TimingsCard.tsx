"use client"

import { Timer } from "phosphor-react"

export default function TimingsCard() {
  const days = [
    { label: "M", active: true },
    { label: "T", active: true },
    { label: "W", active: true },
    { label: "T", active: true },
    { label: "F", active: true },
    { label: "S", active: false },
    { label: "S", active: false },
  ]

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-md min-h-[140px] h-full gap-3">
      {/* Top Header with Title and Day Circles */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#1F2433]">Timings</h3>

        {/* Days of week circles */}
        <div className="flex items-center gap-1">
          {days.map((day, idx) => (
            <div
              key={idx}
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold border ${
                day.active
                  ? "border-gray-300 text-gray-700 bg-white"
                  : "border-gray-200 text-gray-400 bg-gray-50"
              }`}
            >
              {day.label}
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-xs text-gray-500 font-medium -mt-1">
        Today (10:30 AM - 7:00 PM)
      </div>

      {/* Progress Bar */}
      <div className="w-full flex flex-col gap-1.5">
        <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#5B50EC] to-[#8278F5]"
            style={{ width: "55%" }}
          />
        </div>

        {/* Duration & Break info */}
        <div className="flex items-center justify-between text-xs text-gray-600 font-medium">
          <span>Duration: 9h 0m</span>
          <div className="flex items-center gap-1 text-gray-500">
            <Timer size={14} weight="bold" />
            <span>60 min</span>
          </div>
        </div>
      </div>
    </div>
  )
}
