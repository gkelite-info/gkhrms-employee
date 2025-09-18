"use client"
import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { DonotChatData } from "../features/hr/components/ExperienceDistribution"

interface DonutChartProps {
  chartData: DonotChatData[]
}

const DonutChart: React.FC<DonutChartProps> = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={0}
          //   label={({ name, percent }) =>
          //     `${name} ${(percent * 100).toFixed(0)}%`
          //   }
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* <Tooltip /> */}
        {/* <Legend /> */}
      </PieChart>
    </ResponsiveContainer>
  )
}

export default DonutChart
