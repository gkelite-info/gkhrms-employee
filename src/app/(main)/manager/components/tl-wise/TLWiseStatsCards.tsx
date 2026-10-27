"use client"

import React from "react"
import { UsersThree, User, Clock, House } from "phosphor-react"

interface TLWiseStatsCardsProps {
  totalLeadsCount: number
  presentLeadsCount: number
  leaveLeadsCount: number
  wfhLeadsCount: number
}

export default function TLWiseStatsCards({
  totalLeadsCount,
  presentLeadsCount,
  leaveLeadsCount,
  wfhLeadsCount,
}: TLWiseStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0">
          <UsersThree size={24} weight="regular" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold leading-tight">
            Total Team Leads
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mt-1">
            {totalLeadsCount}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
          <User size={24} weight="regular" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold leading-tight">
            Present Today
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mt-1">
            {presentLeadsCount}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
          <Clock size={24} weight="regular" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold leading-tight">
            On Leave
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mt-1">
            {leaveLeadsCount}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
          <House size={24} weight="regular" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold leading-tight">
            Work From Home
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mt-1">
            {wfhLeadsCount}
          </span>
        </div>
      </div>
    </div>
  )
}
