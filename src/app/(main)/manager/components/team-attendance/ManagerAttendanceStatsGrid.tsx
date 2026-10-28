"use client"

import React from "react"
import {
  UsersThree,
  CheckCircle,
  XCircle,
  CalendarBlank,
  HouseLine,
} from "phosphor-react"

interface ManagerAttendanceStatsGridProps {
  totalMembersCount: number
  totalPresent: number
  totalAbsent: number
  totalLeave: number
  totalWfh: number
  presentPercentage: number
  absentPercentage: number
  leavePercentage: number
  wfhPercentage: number
}

export default function ManagerAttendanceStatsGrid({
  totalMembersCount,
  totalPresent,
  totalAbsent,
  totalLeave,
  totalWfh,
  presentPercentage,
  absentPercentage,
  leavePercentage,
  wfhPercentage,
}: ManagerAttendanceStatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 w-full">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
          <UsersThree size={22} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs text-gray-500 font-medium leading-snug break-words">
            Total Team Members
          </span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mt-1">
            {totalMembersCount}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-[#E8FAF4] text-[#10B981] flex items-center justify-center shrink-0">
          <CheckCircle size={22} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs text-gray-500 font-medium leading-snug break-words">
            Present Today
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {totalPresent}
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E8FAF4] text-[#10B981]">
              {presentPercentage}%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-[#FFF1F2] text-[#F43F5E] flex items-center justify-center shrink-0">
          <XCircle size={22} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs text-gray-500 font-medium leading-snug break-words">
            Absent Today
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {totalAbsent}
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFF1F2] text-[#F43F5E]">
              {absentPercentage}%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-[#FFF8EC] text-[#F59E0B] flex items-center justify-center shrink-0">
          <CalendarBlank size={22} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs text-gray-500 font-medium leading-snug break-words">
            On Leave
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {totalLeave}
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFF8EC] text-[#F59E0B]">
              {leavePercentage}%
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center shrink-0">
          <HouseLine size={22} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs text-gray-500 font-medium leading-snug break-words">
            Work From Home
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {totalWfh}
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F3E8FF] text-[#9333EA]">
              {wfhPercentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
