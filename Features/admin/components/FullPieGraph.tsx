"use client"
import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const FullPieGrapgh = ({ data, title, variant = "full" }) => {
  return (
    <div className=" bg-white rounded-lg p-3 flex flex-col items-center justify-center gap-1.5">
      <h3 className="text-sm  text-gray-700 mb-2">{title || "Pie Graph"}</h3>

      <div className="w-35 h-30 relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="legend"
              innerRadius={variant === "donut" ? 30 : 0} // full = 0, donut = 40
              outerRadius={60}
              startAngle={90}
              endAngle={-270}
              paddingAngle={1}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || `hsl(${(index * 60) % 360} 70% 50%)`}
                  stroke="none"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1">
        <ul className="flex  gap-2">
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
  )
}

export default FullPieGrapgh
