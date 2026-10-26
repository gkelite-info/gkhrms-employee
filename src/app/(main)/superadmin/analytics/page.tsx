"use client"

import { useState, useEffect } from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts"
import { BarChart3, TrendingUp, Users, Activity, Server } from "lucide-react"

const monthlyLogins = [
  { month: "Jan", count: 12500 },
  { month: "Feb", count: 14200 },
  { month: "Mar", count: 18900 },
  { month: "Apr", count: 22400 },
  { month: "May", count: 26800 },
  { month: "Jun", count: 31200 },
  { month: "Jul", count: 35600 },
  { month: "Aug", count: 42100 },
]

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Platform Analytics & Health
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            System performance telemetry, active user concurrency, and infrastructure telemetry.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">
              Platform Uptime
            </span>
            <Server className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-xl font-extrabold text-emerald-600 mt-2">99.98%</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">
              Daily Active Users
            </span>
            <Users className="w-4 h-4 text-[#5B50E5]" />
          </div>
          <p className="text-xl font-extrabold text-slate-800 mt-2">18,450</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">
              Avg API Latency
            </span>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-xl font-extrabold text-slate-800 mt-2">42 ms</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">
              Retention Rate
            </span>
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </div>
          <p className="text-xl font-extrabold text-slate-800 mt-2">96.4%</p>
        </div>
      </div>

      {/* Monthly Active Logins Chart */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">
            Monthly Employee Session Volume
          </h2>
          <span className="text-xs font-semibold text-slate-400">
            2025 Platform Wide
          </span>
        </div>

        <div className="w-full h-72">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyLogins} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                  tickFormatter={(val) => `${val / 1000}k`}
                />
                <Tooltip
                  formatter={(val: number) => [`${val.toLocaleString()} sessions`, "Sessions"]}
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#5B50E5"
                  radius={[6, 6, 0, 0]}
                  barSize={32}
                >
                  {monthlyLogins.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === monthlyLogins.length - 1 ? "#5B50E5" : "#A5B4FC"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full bg-slate-50/50 rounded-xl flex items-center justify-center">
              <span className="text-xs text-slate-400 font-medium">Loading telemetry...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
