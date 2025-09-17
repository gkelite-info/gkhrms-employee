"use client"
import React from "react"
import { BarChart, Bar, ResponsiveContainer, Cell, LabelList } from "recharts"

type ChartData = {
  name: string
  value: number
  color: string
}

type CustomBarChartProps = {
  data: ChartData[]
  barHeight?: number
}

const StandLineGraph: React.FC<CustomBarChartProps> = ({
  data,
  barHeight = 300,
}) => {
  // find highest value dynamically
  const maxValue = Math.max(...data.map((d) => d.value))

  // prepare stacked data
  const processedData = data.map((d) => ({
    ...d,
    remaining: Math.max(0, maxValue - d.value),
  }))

  return (
    <ResponsiveContainer width="100%" height={barHeight}>
      <BarChart
        data={processedData}
        margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
      >
        {/* Colored value bar */}
        <Bar dataKey="value" stackId="a">
          {processedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              radius={
                entry.remaining === 0 ? [10, 10, 0, 0] : [0, 0, 0, 0] // 🔥 only round when full
              }
            />
          ))}

          {/* Vertical text label */}
          <LabelList
            dataKey="value"
            content={({ x, y, value, width, height, index }) => {
              if (
                !height ||
                Number(height) <= 0 ||
                index === undefined ||
                !processedData[index]
              ) {
                return null
              }

              const cx = (Number(x) || 0) + (Number(width) || 0) / 2
              const cy = (Number(y) || 0) + (Number(height) || 0) / 2

              return (
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(-90, ${cx}, ${cy})`}
                  fill="#fff"
                  fontSize={12}
                >
                  <tspan x={cx} dy="-0.3em" fontWeight="bold">
                    {value}
                  </tspan>
                  <tspan x={cx} dy="1.2em">
                    {processedData?.[index].name}
                  </tspan>
                </text>
              )
            }}
          />
        </Bar>

        {/* Remaining gray bar */}
        <Bar
          dataKey="remaining"
          stackId="a"
          fill="#E0E0E0"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default StandLineGraph
