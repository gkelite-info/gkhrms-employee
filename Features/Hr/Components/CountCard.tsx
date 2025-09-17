"use client"
import React from "react"

type CountCardProps = {
  title: string
  count: number
  icon: React.ReactNode
  iconBg?: string
}

const CountCard: React.FC<CountCardProps> = ({
  title,
  count,
  icon,
  iconBg = "#E0DEFBD6",
}) => {
  return (
    <div className="w-full md:w-[250px] h-[100px] bg-white shadow rounded-lg flex justify-around items-center">
      <span
        className="w-[50px] h-[50px] rounded-full flex justify-center items-center"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[#323232]">{title}</span>
        <span className="text-[28px] text-[#323232] font-semibold">
          {count}
        </span>
      </div>
    </div>
  )
}

export default CountCard
