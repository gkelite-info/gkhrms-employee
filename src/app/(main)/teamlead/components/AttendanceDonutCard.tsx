"use client"

import React from "react"

export default function AttendanceDonutCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between gap-3 transition-all hover:shadow-md min-h-[110px] h-auto">
      <div className="flex flex-col justify-between h-full py-0.5">
        <div>
          <h3 className="text-sm font-bold text-[#1F2433]">Attendance</h3>
          <p className="text-xs text-gray-400 font-medium">October Month</p>
        </div>

        {/* Legend dots */}
        <div className="flex items-center gap-3 text-[10px] text-gray-500 font-medium pt-1">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span>Holidays</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
            <span>Unpaid leave</span>
          </div>
        </div>
      </div>

      {/* Circular Donut Gauge */}
      <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
          {/* Background circle */}
          <path
            className="text-gray-100"
            strokeWidth="3.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Main Attendance Purple Arc 85% */}
          <path
            className="text-[#5B50EC]"
            strokeDasharray="85, 100"
            strokeWidth="3.5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Holiday Orange segment */}
          <path
            className="text-[#F59E0B]"
            strokeDasharray="6, 100"
            strokeDashoffset="-86"
            strokeWidth="3.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Unpaid Red segment */}
          <path
            className="text-[#EF4444]"
            strokeDasharray="4, 100"
            strokeDashoffset="-93"
            strokeWidth="3.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[11px] font-bold text-[#1F2433]">95 %</span>
        </div>
      </div>
    </div>
  )
}
