"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { CaretRight, User } from "phosphor-react"

export default function EmployeeMetricsRow({
  onSelectPerformance,
  onSelectProfile,
}: {
  onSelectPerformance?: () => void
  onSelectProfile?: () => void
}) {
  const router = useRouter()

  const handleProfileClick = () => {
    if (onSelectProfile) {
      onSelectProfile()
    } else {
      router.push("/employee/profile")
    }
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 1. Employee Profile Card */}
      <div
        onClick={handleProfileClick}
        style={{ cursor: "pointer" }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-3.5 cursor-pointer hover:border-[#7D73E3]/40 hover:shadow-md transition-all group select-none"
      >
        <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
          <img
            src="/images/alexander.png"
            alt="Alexander"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-[#1F2937] leading-snug group-hover:text-[#5B50E5] transition-colors">
            Alexander
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5">Employee ID : 154358</p>
        </div>
      </div>

      {/* 2. Attendance Card with Donut */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-between">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm font-bold text-[#1F2937]">Attendance</h3>
            <p className="text-xs text-gray-400 font-medium mt-0.5">October Month</p>
          </div>
          <div className="flex flex-col gap-1 mt-2.5">
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]"></span>
              <span>Holidays</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
              <span className="h-2 w-2 rounded-full bg-[#EF4444]"></span>
              <span>Unpaid leave</span>
            </div>
          </div>
        </div>

        {/* Circular Donut Ring 95% */}
        <div className="relative h-16 w-16 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            {/* Background path */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#F3F4F6"
              strokeWidth="4"
            />
            {/* Orange/Red small segment */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#F59E0B"
              strokeWidth="4"
              strokeDasharray="88 88"
              strokeDashoffset="0"
            />
            {/* Main Purple segment 95% */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#7D73E3"
              strokeWidth="4"
              strokeDasharray="83.6 88"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-xs font-bold text-[#1F2937]">95 %</span>
        </div>
      </div>

      {/* 3. Attendance Requests Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
        <h3 className="text-sm font-bold text-[#1F2937]">Attendance Requests</h3>
        <div className="flex flex-col gap-2 mt-2">
          <button
            type="button"
            className="flex items-center justify-between text-xs text-gray-700 font-medium hover:text-[#7D73E3] transition-colors focus:outline-none"
          >
            <span>New Approval</span>
            <CaretRight size={14} className="text-gray-400" />
          </button>
          <button
            type="button"
            className="flex items-center justify-between text-xs text-gray-700 font-medium hover:text-[#7D73E3] transition-colors focus:outline-none"
          >
            <span>Pending</span>
            <CaretRight size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* 4. Performance Card with Donut */}
      <div
        onClick={onSelectPerformance}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-between cursor-pointer hover:shadow-md hover:border-[#7D73E3]/50 transition-all group"
        title="Click to view detailed Performance analysis"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm font-bold text-[#1F2937] group-hover:text-[#7D73E3] transition-colors">
              Performance
            </h3>
            <p className="text-xs text-gray-400 font-medium mt-0.5">This Month (OCT)</p>
          </div>
        </div>

        {/* Circular Donut Ring 95% */}
        <div className="relative h-16 w-16 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#F3F4F6"
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#7D73E3"
              strokeWidth="4"
              strokeDasharray="83.6 88"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-xs font-bold text-[#1F2937]">95 %</span>
        </div>
      </div>
    </div>
  )
}
