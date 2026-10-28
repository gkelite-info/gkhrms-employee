"use client"

import { CaretDown } from "phosphor-react"

interface TopEmployee {
  rank: number
  name: string
  role: string
  height: string // Tailwind height or style
  score: string
}

const topEmployees: TopEmployee[] = [
  {
    rank: 1,
    name: "Priya Sharma",
    role: "UI Designer",
    height: "h-36 sm:h-40",
    score: "4.9",
  },
  {
    rank: 2,
    name: "Rohit Verma",
    role: "Frontend Developer",
    height: "h-28 sm:h-32",
    score: "4.8",
  },
  {
    rank: 3,
    name: "Neha Kapoor",
    role: "UX Researcher",
    height: "h-20 sm:h-24",
    score: "4.7",
  },
]

export default function TopEmployeesChart() {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-gray-100 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight text-center">
        Top 3 Employees of the Month
      </h3>

      {/* 3 Vertical Gradient Bars */}
      <div className="flex items-end justify-center gap-5 sm:gap-6 pt-6 pb-2 min-h-[200px]">
        {topEmployees.map((emp) => (
          <div
            key={emp.rank}
            className="flex flex-col items-center flex-1 max-w-[85px] group"
          >
            {/* The Gradient Bar */}
            <div className="w-full flex justify-center items-end h-40">
              <div
                className={`w-10 sm:w-12 ${emp.height} rounded-t-xl bg-gradient-to-b from-[#DDD6FE] to-[#8571EE] shadow-xs group-hover:brightness-105 transition-all duration-200 relative`}
              >
                {/* Subtle shine highlight */}
                <div className="absolute inset-x-0 top-0 h-2 bg-white/40 rounded-t-xl" />
              </div>
            </div>

            {/* Employee Label Below Bar */}
            <div className="flex flex-col items-center text-center mt-2.5">
              <div className="flex items-center gap-0.5 text-xs font-bold text-gray-900 leading-tight">
                <CaretDown size={11} weight="fill" className="text-gray-700 shrink-0" />
                <span className="truncate max-w-[80px]">{emp.name}</span>
              </div>
              <span className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">
                {emp.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
