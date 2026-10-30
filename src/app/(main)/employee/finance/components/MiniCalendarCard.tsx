import React from "react"

export interface MiniCalendarCardProps {
  monthName?: string
  className?: string
}

interface CalendarDay {
  val: string
  current?: boolean
  muted?: boolean
}

interface CalendarWeek {
  days: CalendarDay[]
}

const DAYS_HEADER = ["m", "t", "w", "t", "f", "s", "s"]

const WEEKS_DATA: CalendarWeek[] = [
  {
    days: [
      { val: "01" },
      { val: "02", current: true },
      { val: "03" },
      { val: "04" },
      { val: "05" },
      { val: "06" },
      { val: "07" },
    ],
  },
  {
    days: [
      { val: "08" },
      { val: "09" },
      { val: "10" },
      { val: "11" },
      { val: "12" },
      { val: "13" },
      { val: "14" },
    ],
  },
  {
    days: [
      { val: "15" },
      { val: "16" },
      { val: "17" },
      { val: "18" },
      { val: "19" },
      { val: "20" },
      { val: "21" },
    ],
  },
  {
    days: [
      { val: "22" },
      { val: "23" },
      { val: "24" },
      { val: "25" },
      { val: "26" },
      { val: "27" },
      { val: "28" },
    ],
  },
  {
    days: [
      { val: "29" },
      { val: "30" },
      { val: "31" },
      { val: "01", muted: true },
      { val: "02", muted: true },
      { val: "03", muted: true },
      { val: "04", muted: true },
    ],
  },
]

export default function MiniCalendarCard({
  monthName = "January",
  className = "",
}: MiniCalendarCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-3 sm:p-3.5 border border-slate-100 shadow-2xs flex flex-col justify-between ${className}`}
    >
      <h5 className="font-semibold text-xs text-slate-800 mb-1.5">
        {monthName}
      </h5>

      <div className="grid grid-cols-7 text-center mb-1">
        {DAYS_HEADER.map((day, idx) => (
          <span
            key={idx}
            className="text-[10px] text-slate-400 lowercase select-none"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        {WEEKS_DATA.map((week, wIdx) => (
          <div key={wIdx} className="grid grid-cols-7 text-center items-center">
            {week.days.map((d, dIdx) => {
              if (d.current) {
                return (
                  <span
                    key={dIdx}
                    className="w-4.5 h-4.5 mx-auto rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center select-none shadow-2xs"
                  >
                    {d.val}
                  </span>
                )
              }
              return (
                <span
                  key={dIdx}
                  className={`text-[9.5px] sm:text-[10px] select-none ${
                    d.muted
                      ? "text-slate-300 font-normal"
                      : "text-slate-600 font-medium"
                  }`}
                >
                  {d.val}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
