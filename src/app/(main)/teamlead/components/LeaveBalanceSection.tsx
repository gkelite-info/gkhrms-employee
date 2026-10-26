"use client"

import React from "react"

export default function LeaveBalanceSection() {
  const leaves = [
    {
      label: "Sick Leaves",
      fillWidth: "52%",
      bgGradient: "bg-gradient-to-r from-[#5046E5] to-[#3730A3]",
      dotColor: "bg-[#5046E5]",
    },
    {
      label: "Paid Leaves",
      fillWidth: "58%",
      bgGradient: "bg-gradient-to-r from-[#F472B6] to-[#A855F7]",
      dotColor: "bg-[#F472B6]",
    },
    {
      label: "Holidays",
      fillWidth: "54%",
      bgGradient: "bg-gradient-to-r from-[#F59E0B] to-[#B45309]",
      dotColor: "bg-[#F59E0B]",
    },
    {
      label: "Unpaid Leaves",
      fillWidth: "60%",
      bgGradient: "bg-gradient-to-r from-[#EF4444] to-[#7F1D1D]",
      dotColor: "bg-[#EF4444]",
    },
    {
      label: "Vacation",
      fillWidth: "66%",
      bgGradient: "bg-gradient-to-r from-[#FDE047] to-[#84CC16]",
      dotColor: "bg-[#84CC16]",
    },
  ]

  return (
    <div className="w-full flex flex-col gap-2.5 select-none">
      <h3 className="text-base font-bold text-[#1F2433]">Leave Balance</h3>

      {/* Grid of 5 pill progress bars matching Image 3 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {leaves.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            {/* Thick pill track with rounded full ends and gradient fill */}
            <div className="w-full h-5 sm:h-6 rounded-full bg-white shadow-xs overflow-hidden border border-gray-100 p-0.5 flex items-center">
              <div
                className={`h-full rounded-full ${item.bgGradient} transition-all duration-300`}
                style={{ width: item.fillWidth }}
              />
            </div>

            {/* Centered label with colored dot matching Image 3 */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-gray-500 font-medium">
              <span className={`w-2 h-2 rounded-full ${item.dotColor} shrink-0`} />
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

