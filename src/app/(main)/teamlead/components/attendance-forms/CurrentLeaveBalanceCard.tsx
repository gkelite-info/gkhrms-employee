"use client"

import { Database, CalendarBlank, Heartbeat, Sun, Info } from "phosphor-react"
import { LeaveBalanceItem } from "./types"

const balances: LeaveBalanceItem[] = [
  {
    id: "casual",
    label: "Casual Leave",
    used: 8,
    total: 12,
    icon: CalendarBlank,
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    id: "sick",
    label: "Sick Leave",
    used: 6,
    total: 10,
    icon: Heartbeat,
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#059669]",
  },
  {
    id: "earned",
    label: "Earned Leave",
    used: 14,
    total: 20,
    icon: Sun,
    iconBg: "bg-[#FFFBEB]",
    iconColor: "text-[#D97706]",
  },
]

export default function CurrentLeaveBalanceCard() {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-xs flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
          <Database size={20} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
            Current Leave Balance
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Your available leave balance
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {balances.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className="p-3.5 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-all flex items-center justify-between gap-3 shadow-2xs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0`}
                >
                  <Icon size={18} weight="bold" />
                </div>
                <span className="text-xs font-bold text-gray-900 truncate">
                  {item.label}
                </span>
              </div>
              <div className="flex flex-col items-end shrink-0">
                <span className="text-xs font-bold text-gray-900">
                  {item.used} / {item.total}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  days remaining
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="rounded-xl bg-[#EEF2FF] p-3 flex items-start gap-2.5 text-[#5B50EC]">
        <Info size={16} weight="fill" className="shrink-0 mt-0.5" />
        <span className="text-xs font-medium text-[#4338CA] leading-snug">
          Leave balance reflects your current available leaves.
        </span>
      </div>
    </div>
  )
}
