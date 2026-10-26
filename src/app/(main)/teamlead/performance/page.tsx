"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, TrendUp, Star, CheckCircle } from "phosphor-react"

export default function TeamLeadPerformancePage() {
  const metrics = [
    { title: "Team Attendance Rate", value: "95%", change: "+3.2%", icon: TrendUp, color: "text-[#5B50EC]" },
    { title: "Task Completion", value: "92%", change: "+5.1%", icon: CheckCircle, color: "text-emerald-600" },
    { title: "Lead Rating", value: "4.8 / 5.0", change: "Top 10%", icon: Star, color: "text-amber-500" },
  ]

  return (
    <div className="w-full flex-1 p-4 md:p-6 flex flex-col gap-5 max-w-[1600px] mx-auto animate-in fade-in duration-200">
      <div className="flex items-center gap-3">
        <Link
          href="/teamlead"
          className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-[#5B50EC] transition-colors"
        >
          <ArrowLeft size={16} weight="bold" />
        </Link>
        <div>
          <h1 className="text-lg font-bold text-[#1F2433]">Team Performance Overview</h1>
          <p className="text-xs text-gray-400">Team metrics and monthly evaluation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon
          return (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 font-medium">{m.title}</p>
                <h3 className="text-2xl font-bold text-[#1F2433] mt-1">{m.value}</h3>
                <span className="text-xs text-emerald-600 font-semibold">{m.change}</span>
              </div>
              <div className={`p-3 rounded-xl bg-gray-50 ${m.color}`}>
                <Icon size={28} weight="bold" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
