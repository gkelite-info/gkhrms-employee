"use client"

import {  useState, useEffect  } from "react";
import { CaretDown, ArrowUp } from "phosphor-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { month: "Jan", score: 2.0 },
  { month: "Feb", score: 2.6 },
  { month: "Mar", score: 2.3 },
  { month: "Apr", score: 3.5 },
  { month: "May", score: 3.6 },
  { month: "Jun", score: 3.8 },
  { month: "Jul", score: 3.7 },
  { month: "Aug", score: 2.9 },
  { month: "Sep", score: 3.4 },
  { month: "Oct", score: 3.9 },
  { month: "Nov", score: 4.5 },
  { month: "Dec", score: 4.2 },
]

export default function PerformanceScoreChart() {
  const [mounted, setMounted] = useState(false)
  const [timeFilter, setTimeFilter] = useState("Month")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-gray-100 flex flex-col justify-between h-full">
      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight">
            Performance Score by Month
          </h3>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#16A34A] bg-emerald-50 px-2 py-0.5 rounded-full">
            <ArrowUp size={11} weight="bold" />
            <span>10%</span>
            <span className="text-gray-500 font-normal hidden sm:inline">
              Compared to last month
            </span>
          </span>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="inline-flex items-center gap-1.5 bg-[#C5C1FF] hover:bg-[#b8b3ff] text-gray-800 text-xs font-semibold px-3 py-1 rounded-md transition-colors cursor-pointer select-none"
          >
            <span>{timeFilter}</span>
            <CaretDown
              size={12}
              weight="bold"
              className={`transition-transform duration-150 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30 min-w-[100px]">
              {["Month", "Quarter", "Year"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setTimeFilter(opt)
                    setDropdownOpen(false)
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-purple-50 hover:text-[#8571EE] cursor-pointer ${
                    timeFilter === opt
                      ? "text-[#8571EE] font-bold bg-purple-50/50"
                      : "text-gray-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recharts Area Canvas */}
      <div className="w-full h-56 sm:h-64 mt-2">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 12, right: 12, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8571EE" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#8571EE" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#64748B" }}
                dy={6}
              />
              <YAxis
                domain={[0, 5]}
                ticks={[1, 2, 3, 4, 5]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#64748B" }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs shadow-lg font-medium flex items-center gap-1.5">
                        <span className="font-bold text-purple-300">
                          {label}:
                        </span>
                        <span>{payload[0].value} / 5</span>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#8571EE"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#scoreGradient)"
                dot={{
                  r: 3,
                  fill: "#FFFFFF",
                  stroke: "#8571EE",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 5,
                  fill: "#8571EE",
                  stroke: "#FFFFFF",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full bg-gray-50/50 rounded-xl flex items-center justify-center">
            <span className="text-xs text-gray-400 font-medium">
              Loading chart...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
