"use client"
import React, { FC } from "react"
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from "recharts"

type ChartData = {
  name: string
  value: number
  color?: string
}

interface BarChartComponentProps {
  title: string
  data: ChartData[]
  height?: number
}

const BarChartComponent: FC<BarChartComponentProps> = ({
  title,
  data,
  height = 300,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4">
      <h2 className="text-center font-semibold text-sm text-[#111827]">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#333" }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="value" barSize={40} radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#4F46E5"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent
