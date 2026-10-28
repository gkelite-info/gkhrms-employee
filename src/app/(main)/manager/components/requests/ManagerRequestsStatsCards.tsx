"use client"

import {
  CalendarBlank,
  Check,
  X,
  AirplaneTilt,
  House,
} from "phosphor-react"

interface ManagerRequestsStatsCardsProps {
  pendingCount: number
  approvedCount: number
  rejectedCount: number
  leaveCount: number
  wfhCount: number
}

export default function ManagerRequestsStatsCards({
  pendingCount,
  approvedCount,
  rejectedCount,
  leaveCount,
  wfhCount,
}: ManagerRequestsStatsCardsProps) {
  const cards = [
    {
      id: "Pending",
      label: "Pending Requests",
      count: pendingCount,
      icon: CalendarBlank,
      iconWeight: "bold" as const,
      cardBg: "bg-[#F7F6FE] border-[#E9E8FC]",
      iconBg: "bg-white border border-[#E0DEF7] text-[#5B50EC]",
    },
    {
      id: "Approved",
      label: "Approved This Month",
      count: approvedCount,
      icon: Check,
      iconWeight: "bold" as const,
      cardBg: "bg-[#F0FDF4] border-[#DCFCE7]",
      iconBg: "bg-[#10B981] text-white",
    },
    {
      id: "Rejected",
      label: "Rejected This Month",
      count: rejectedCount,
      icon: X,
      iconWeight: "bold" as const,
      cardBg: "bg-[#FEF2F2] border-[#FEE2E2]",
      iconBg: "bg-[#EF4444] text-white",
    },
    {
      id: "Leave",
      label: "Leave Requests",
      count: leaveCount,
      icon: AirplaneTilt,
      iconWeight: "fill" as const,
      cardBg: "bg-[#FFFBEB] border-[#FEF3C7]",
      iconBg: "bg-[#F59E0B] text-white",
    },
    {
      id: "Work From Home",
      label: "Work From Home Requests",
      count: wfhCount,
      icon: House,
      iconWeight: "fill" as const,
      cardBg: "bg-[#F0F9FF] border-[#E0F2FE]",
      iconBg: "bg-[#0284C7] text-white",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 w-full">
      {cards.map((card) => {
        const Icon = card.icon

        return (
          <div
            key={card.id}
            className={`p-4 rounded-2xl border transition-all duration-200 flex items-center gap-3.5 min-w-0 ${card.cardBg}`}
          >
            <div
              className={`w-11 h-11 rounded-2xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
            >
              <Icon size={22} weight={card.iconWeight} />
            </div>

            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                {card.count}
              </span>
              <span className="text-xs text-gray-600 font-medium leading-snug break-words mt-0.5">
                {card.label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
