"use client"

import React, { useState } from "react"
import ReusableDropdown from "../../../../../reusableComponents/ReusableDropdown"

export default function AttendanceStatsCard() {
  const [period, setPeriod] = useState("Last Week")
  const periods = ["Today", "Last Week", "This Month", "Last Month"]

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-md min-h-[140px] h-full gap-3">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-[#1F2433]">Attendance Stats</h3>
        <ReusableDropdown
          value={period}
          options={periods}
          onChange={(newVal) => setPeriod(String(newVal))}
          buttonClassName="py-1 px-2 text-xs"
        />
      </div>

      {/* Two stats columns */}
      <div className="grid grid-cols-2 gap-4 pt-1">
        <div>
          <span className="text-[11px] text-gray-400 font-semibold block uppercase tracking-tight">
            Avg Hrs / Per DAY
          </span>
          <span className="text-xl font-bold text-[#1F2433] leading-none mt-1 block">
            2h
          </span>
        </div>
        <div>
          <span className="text-[11px] text-gray-400 font-semibold block uppercase tracking-tight">
            Avg % /Per DAY
          </span>
          <span className="text-xl font-bold text-[#1F2433] leading-none mt-1 block">
            25%
          </span>
        </div>
      </div>
    </div>
  )
}
