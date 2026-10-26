"use client"

import React from "react"
import { UsersThree, CheckCircle, XCircle, Clock, ArrowUp, ArrowDown } from "phosphor-react"

interface TeamAttendanceStatsProps {
  totalCount: number
  presentCount: number
  absentCount: number
  lateCount: number
}

export default function TeamAttendanceStats({
  totalCount,
  presentCount,
  absentCount,
  lateCount,
}: TeamAttendanceStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center flex-shrink-0">
          <UsersThree size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-gray-400 font-medium">Total Team Members</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {totalCount}
          </span>
          <span className="text-[11px] font-semibold text-gray-400 mt-0.5 truncate">
            Across 5 departments
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#E8FAF4] text-[#10B981] flex items-center justify-center flex-shrink-0">
          <CheckCircle size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-gray-400 font-medium">Present Today</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {presentCount}
          </span>
          <span className="text-[11px] font-semibold text-[#10B981] flex items-center gap-0.5 mt-0.5">
            <ArrowUp size={11} weight="bold" />
            <span>91.7% attendance</span>
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#FFF1F2] text-[#F43F5E] flex items-center justify-center flex-shrink-0">
          <XCircle size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-gray-400 font-medium">Absent / On Leave</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {absentCount}
          </span>
          <span className="text-[11px] font-semibold text-[#F43F5E] flex items-center gap-0.5 mt-0.5">
            <ArrowDown size={11} weight="bold" />
            <span>8.3% absence</span>
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#FFF8EC] text-[#F59E0B] flex items-center justify-center flex-shrink-0">
          <Clock size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-gray-400 font-medium">Late Arrivals</span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {lateCount}
          </span>
          <span className="text-[11px] font-semibold text-[#F59E0B] mt-0.5">
            After 9:30 AM
          </span>
        </div>
      </div>
    </div>
  )
}
