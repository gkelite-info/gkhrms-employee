"use client"
import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const FullPieGrapgh = ({
  data,
  title,
  variant = "full",
  style = "flex-col",
  linkStyle = "flex",
  shadow = "shadow-none",
  onClick,
}: {
  data?: any
  title?: string
  variant?: string
  style?: string
  linkStyle?: string
  shadow?: string
  onClick?: () => void
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-3 flex flex-col items-center justify-center gap-1.5 ${shadow}`}
    >
      <h3 className="text-sm  text-gray-700 mb-2">{title || "Pie Graph"}</h3>
      <div className={`${style} flex items-center gap-3`}>
        <div
          className="w-35 h-30 relative flex items-center justify-center"
          onClick={onClick}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="legend"
                innerRadius={variant === "donut" ? 30 : 0}
                outerRadius={60} // 60
                startAngle={90}
                endAngle={-270}
                paddingAngle={1}
              >
                {data.map((entry: { color: string }, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color || `hsl(${(index * 60) % 360} 70% 50%)`}
                    stroke="none"
                    className="cursor-pointer"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1">
          <ul className={`gap-2 ${linkStyle}`}>
            {data.map((d, i) => (
              <li key={`legend-${i}`} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded"
                  style={{
                    background: d.color || `hsl(${(i * 60) % 360} 70% 50%)`,
                  }}
                />

                <span className="font-medium text-[10px] text-gray-800">
                  {d.legend}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FullPieGrapgh
