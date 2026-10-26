"use client"

import React from "react"
import { Clock, CalendarCheck, Check } from "phosphor-react"
import { DateFilterValue, MONTH_NAMES, QuickRangeOption } from "./types"

interface QuickRangeViewProps {
  currentValue: DateFilterValue
  onSelectRange: (range: QuickRangeOption) => void
  options?: QuickRangeOption[]
}

export default function QuickRangeView({
  currentValue,
  onSelectRange,
  options,
}: QuickRangeViewProps) {
  const now = new Date()
  const curMonth = now.getMonth()
  const curYear = now.getFullYear()
  const prevMonth = curMonth === 0 ? 11 : curMonth - 1
  const prevMonthYear = curMonth === 0 ? curYear - 1 : curYear

  const defaultOptions: QuickRangeOption[] = [
    {
      mode: "30-days",
      label: "Last 30 Days",
      desc: "View attendance for the past 30 days",
    },
    {
      mode: "month",
      label: `This Month (${MONTH_NAMES[curMonth]} ${curYear})`,
      desc: "Current active month records",
      selectedMonth: curMonth,
      selectedYear: curYear,
    },
    {
      mode: "month",
      label: `Last Month (${MONTH_NAMES[prevMonth]} ${prevMonthYear})`,
      desc: "Previous completed month",
      selectedMonth: prevMonth,
      selectedYear: prevMonthYear,
    },
    {
      mode: "year",
      label: `This Year (${curYear})`,
      desc: "Full year attendance overview",
      selectedYear: curYear,
    },
  ]

  const items = options && options.length > 0 ? options : defaultOptions

  return (
    <div className="w-full flex flex-col gap-2.5 pt-0.5">
      <div className="flex flex-col gap-2">
        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-1">
          Quick Range Presets
        </div>

        <div className="flex flex-col gap-1.5">
          {items.map((opt) => {
            const isSelected =
              currentValue.label === opt.label ||
              (opt.mode === "30-days" && currentValue.mode === "30-days")

            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => onSelectRange(opt)}
                className={`flex items-center justify-between p-2.5 rounded-2xl border text-left transition-all cursor-pointer select-none ${
                  isSelected
                    ? "bg-[#F1F0FD] border-[#5B50EC] text-[#5B50EC] shadow-2xs"
                    : "bg-gray-50/70 hover:bg-[#F9F8FE] border-gray-100 hover:border-gray-200 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-[#5B50EC] text-white"
                        : "bg-white text-gray-400 border border-gray-100"
                    }`}
                  >
                    {opt.mode === "30-days" ? (
                      <Clock size={15} weight="bold" />
                    ) : (
                      <CalendarCheck size={15} weight="bold" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold block leading-tight">
                      {opt.label}
                    </span>
                    {opt.desc && (
                      <span className="text-[10px] text-gray-400 font-medium block">
                        {opt.desc}
                      </span>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <Check size={16} weight="bold" className="text-[#5B50EC] shrink-0" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="text-[10px] text-gray-400 text-center font-medium pt-2 border-t border-gray-100 shrink-0">
        Choose a preset or use tabs above for custom dates
      </div>
    </div>
  )
}
