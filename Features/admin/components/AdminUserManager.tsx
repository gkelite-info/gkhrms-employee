"use client"
import {
  UsersThree,
  UserPlus,
  UserCircle,
  HourglassSimpleHigh,
  MinusCircle,
} from "phosphor-react"
import React from "react"

type IconWithCountProps = {
  icon: React.ReactNode
  label: string
  count: number
  bgColor?: string
}

const IconWithCount = ({
  icon,
  label,
  count,
  bgColor = "#E1DFFB",
}: IconWithCountProps) => {
  return (
    <div
      className={`w-full lg:w-[32%] h-[100px] flex flex-col justify-center items-center gap-1 rounded-md`}
      style={{ backgroundColor: bgColor }}
    >
      <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white">
        {icon}
      </span>
      <span className="text-xs text-[#323232]">{label}</span>
      <span className="text-sm font-semibold text-black">{count}</span>
    </div>
  )
}

const AdminUserManager = () => {
  const userStats = [
    {
      icon: <UsersThree color="#8B54E9" size={22} />,
      label: "Active Users",
      count: 200,
      bgColor: "#E1DFFB",
    },
    {
      icon: <HourglassSimpleHigh color="#8B54E9" size={22} />,
      label: "Pending Access Request",
      count: 50,
      bgColor: "#E1DFFB",
    },
    {
      icon: <MinusCircle color="#8B54E9" size={22} />,
      label: "Deactivated Users",
      count: 10,
      bgColor: "#E1DFFB",
    },
  ]

  return (
    <div className="w-full p-4 h-40 bg-white rounded-lg flex flex-col gap-1">
      <h2 className="text-[#111827] font-semibold text-base">
        User Management
      </h2>
      <div className="w-full flex flex-wrap gap-2">
        {userStats.map((stat, idx) => (
          <IconWithCount
            key={idx}
            icon={stat.icon}
            label={stat.label}
            count={stat.count}
            bgColor={stat.bgColor}
          />
        ))}
      </div>
    </div>
  )
}

export default AdminUserManager
