"use client"
import React from "react"

type InfoItemProps = {
  icon: React.ReactNode
  count: number | string
  label: string
  bgColor?: string
}

const Approvals: React.FC<InfoItemProps> = ({
  icon,
  count,
  label,
  bgColor,
}) => {
  return (
    <div className="w-full flex items-center gap-4">
      <span
        className={`w-[40px] h-[40px] rounded-full flex justify-center items-center`}
        style={{ backgroundColor: bgColor || "#51B677" }}
      >
        {icon}
      </span>
      <span className="font-semibold text-xl text-[#323232]">{count}</span>
      <span className="text-[#323232] font-medium text-xs">{label}</span>
    </div>
  )
}

export default Approvals
