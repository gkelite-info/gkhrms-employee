"use client"

import { useState, useEffect } from "react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import { ChevronDown } from "lucide-react"

const monthlyData = [
  { month: "Jan", companies: 20 },
  { month: "Feb", companies: 30 },
  { month: "Mar", companies: 45 },
  { month: "Apr", companies: 65 },
  { month: "May", companies: 85 },
  { month: "Jun", companies: 110 },
  { month: "Jul", companies: 125 },
  { month: "Aug", companies: 142 },
  { month: "Sep", companies: 155 },
  { month: "Oct", companies: 168 },
  { month: "Nov", companies: 175 },
  { month: "Dec", companies: 182 },
]

export default function CompanyGrowthChart() {
  const [mounted, setMounted] = useState(false)
  const [timeRange, setTimeRange] = useState("Last 12 Months")

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-white border border-slate-100/90 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-slate-800 tracking-tight">
          Company Growth
        </h2>

        {/* Dropdown Selector */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-lg text-xs font-semibold text-slate-600 transition-colors cursor-pointer"
          >
            <span>{timeRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-64">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={monthlyData}
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            >
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B50E5" stopOpacity={0.28} />
                  <stop offset="95%" stopColor="#5B50E5" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94A3B8" }}
                dy={6}
              />
              <YAxis
                domain={[0, 200]}
                ticks={[0, 50, 100, 150, 200]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#94A3B8" }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs shadow-lg font-medium">
                        <span className="font-semibold text-indigo-300">
                          {label}:
                        </span>{" "}
                        {payload[0].value} companies
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="companies"
                stroke="#5B50E5"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#growthGradient)"
                dot={{
                  r: 3.5,
                  fill: "#FFFFFF",
                  stroke: "#5B50E5",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 5.5,
                  fill: "#5B50E5",
                  stroke: "#FFFFFF",
                  strokeWidth: 2.5,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full bg-slate-50/50 rounded-xl flex items-center justify-center">
            <span className="text-xs text-slate-400 font-medium animate-pulse">
              Loading chart...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
