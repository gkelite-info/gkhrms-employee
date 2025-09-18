"use client"

import { PieChart, Pie, Cell } from "recharts"

export default function PercentPie() {
  const data = [
    { name: "Complete", value: 95 },
    { name: "Remaining", value: 5 },
  ]

  return (
    <div className="flex items-center mt-4 justify-center">
      <div className="relative w-40 h-40">
        <PieChart width={160} height={160}>
          <defs>
            <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#1A174C" />
            </linearGradient>
          </defs>

          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={70}
            startAngle={90}
            endAngle={-270}
            animationDuration={400}
            animationEasing="ease-in-out"
            stroke="none"
          >
            <Cell fill="url(#progressGradient)" />
            <Cell fill="#DEDEDE" className="rounded-full" />
          </Pie>
        </PieChart>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold text-[#100E2E]">95%</span>
          <span className="text-sm font-semibold text-[#100E2E]">
            Dynam Month
          </span>
        </div>
      </div>
    </div>
  )
}
