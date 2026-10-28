"use client"

import React from "react"
import { Clock, CheckCircle, XCircle, ArrowUp } from "phosphor-react"

interface RequestsStatsCardsProps {
  pendingCount: number
  approvedCount: number
  rejectedCount: number
  activeStatus?: string
  onStatusSelect?: (status: string) => void
}

export default function RequestsStatsCards({
  pendingCount,
  approvedCount,
  rejectedCount,
  activeStatus,
  onStatusSelect,
}: RequestsStatsCardsProps) {
  const isInteractive = Boolean(onStatusSelect)

  const handleCardClick = (status: "Pending" | "Approved" | "Rejected") => {
    if (!onStatusSelect) return
    onStatusSelect(activeStatus === status ? "All Statuses" : status)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <button
        type="button"
        disabled={!isInteractive}
        onClick={() => handleCardClick("Pending")}
        className={`bg-white text-left rounded-2xl p-4 sm:p-5 border shadow-xs flex items-center gap-4 transition-all duration-150 ${
          isInteractive ? "cursor-pointer hover:shadow-md" : ""
        } ${
          activeStatus === "Pending"
            ? "border-[#F59E0B] ring-2 ring-[#F59E0B]/20 bg-[#FFFDF7]"
            : "border-gray-100 hover:border-gray-200"
        }`}
      >
        <div className="w-12 h-12 rounded-2xl bg-[#FFF8EC] text-[#F59E0B] flex items-center justify-center flex-shrink-0">
          <Clock size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-gray-400 font-medium">Pending Requests</span>
          <span className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {pendingCount}
          </span>
          <span className="text-[11px] font-semibold text-[#F59E0B] flex items-center gap-0.5 mt-0.5">
            <ArrowUp size={11} weight="bold" />
            <span>+14.3%</span>
          </span>
        </div>
      </button>

      <button
        type="button"
        disabled={!isInteractive}
        onClick={() => handleCardClick("Approved")}
        className={`bg-white text-left rounded-2xl p-4 sm:p-5 border shadow-xs flex items-center gap-4 transition-all duration-150 ${
          isInteractive ? "cursor-pointer hover:shadow-md" : ""
        } ${
          activeStatus === "Approved"
            ? "border-[#10B981] ring-2 ring-[#10B981]/20 bg-[#F6FDF9]"
            : "border-gray-100 hover:border-gray-200"
        }`}
      >
        <div className="w-12 h-12 rounded-2xl bg-[#E8FAF4] text-[#10B981] flex items-center justify-center flex-shrink-0">
          <CheckCircle size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-gray-400 font-medium">Approved This Month</span>
          <span className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {approvedCount}
          </span>
          <span className="text-[11px] font-semibold text-[#10B981] flex items-center gap-0.5 mt-0.5">
            <ArrowUp size={11} weight="bold" />
            <span>+27.3%</span>
          </span>
        </div>
      </button>

      <button
        type="button"
        disabled={!isInteractive}
        onClick={() => handleCardClick("Rejected")}
        className={`bg-white text-left rounded-2xl p-4 sm:p-5 border shadow-xs flex items-center gap-4 transition-all duration-150 ${
          isInteractive ? "cursor-pointer hover:shadow-md" : ""
        } ${
          activeStatus === "Rejected"
            ? "border-[#F43F5E] ring-2 ring-[#F43F5E]/20 bg-[#FFF8F8]"
            : "border-gray-100 hover:border-gray-200"
        }`}
      >
        <div className="w-12 h-12 rounded-2xl bg-[#FFF1F2] text-[#F43F5E] flex items-center justify-center flex-shrink-0">
          <XCircle size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs text-gray-400 font-medium">Rejected This Month</span>
          <span className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">
            {rejectedCount}
          </span>
          <span className="text-[11px] font-semibold text-[#F43F5E] flex items-center gap-0.5 mt-0.5">
            <ArrowUp size={11} weight="bold" />
            <span>+8.3%</span>
          </span>
        </div>
      </button>
    </div>
  )
}
