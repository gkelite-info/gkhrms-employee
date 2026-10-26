"use client"

import { useState, useEffect } from "react"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"

const subscriptionData = [
  { name: "Basic Plan", value: 58, percentage: "41%", color: "#818CF8" },
  { name: "Professional Plan", value: 52, percentage: "37%", color: "#5B50E5" },
  { name: "Enterprise Plan", value: 32, percentage: "22%", color: "#312E81" },
]

export default function SubscriptionDistributionChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-white border border-slate-100/90 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-bold text-slate-800 tracking-tight">
          Subscription Distribution
        </h2>
        <span className="px-2.5 py-0.5 bg-[#EEF0FD] text-[#5B50E5] text-[11px] font-bold rounded-full">
          142 Total
        </span>
      </div>

      {/* Donut Chart with Center Text */}
      <div className="relative w-full h-44 flex items-center justify-center">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-slate-900 text-white px-2.5 py-1 rounded-md text-xs shadow-md">
                        <span className="font-semibold">{data.name}:</span>{" "}
                        {data.value} ({data.percentage})
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Pie
                data={subscriptionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={68}
                paddingAngle={2}
                stroke="#FFFFFF"
                strokeWidth={2}
              >
                {subscriptionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-28 h-28 rounded-full border-4 border-slate-100 animate-pulse" />
        )}

        {/* Center Text inside Donut */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-lg font-extrabold text-slate-800 leading-none">
            142
          </span>
          <span className="text-[10px] font-semibold text-slate-400 mt-0.5">
            Companies
          </span>
        </div>
      </div>

      {/* Segmented Horizontal Progress Bar */}
      <div className="w-full flex h-2 rounded-full overflow-hidden my-3 gap-0.5 bg-slate-100">
        <div className="h-full bg-[#818CF8]" style={{ width: "41%" }} />
        <div className="h-full bg-[#5B50E5]" style={{ width: "37%" }} />
        <div className="h-full bg-[#312E81]" style={{ width: "22%" }} />
      </div>

      {/* Breakdown Legend List */}
      <div className="flex flex-col gap-2 mt-1">
        {subscriptionData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-semibold text-slate-700">{item.name}</span>
            </div>
            <span className="font-bold text-slate-800">
              {item.value}{" "}
              <span className="text-slate-400 font-medium">
                ({item.percentage})
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
