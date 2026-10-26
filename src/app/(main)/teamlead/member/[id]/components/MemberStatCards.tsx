"use client"

import React from "react"
import { CircleNotch, User, Clock } from "phosphor-react"

interface MemberStatCardsProps {
  attendancePercentage: number
  presentDays: number
  leaveDays: number
  lateDays: number
}

export default function MemberStatCards({
  attendancePercentage,
  presentDays,
  leaveDays,
  lateDays,
}: MemberStatCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center flex-shrink-0">
          <CircleNotch size={24} weight="bold" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-medium">Attendance %</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {attendancePercentage}%
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#E8FAF4] text-[#10B981] flex items-center justify-center flex-shrink-0">
          <User size={22} weight="bold" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-medium">Present Days</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {presentDays}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#FFF8EC] text-[#F59E0B] flex items-center justify-center flex-shrink-0">
          <User size={22} weight="bold" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-medium">Leave Days</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {leaveDays}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#FFF1EB] text-[#F97316] flex items-center justify-center flex-shrink-0">
          <Clock size={22} weight="bold" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-medium">Late Days</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {lateDays}
          </span>
        </div>
      </div>
    </div>
  )
}
