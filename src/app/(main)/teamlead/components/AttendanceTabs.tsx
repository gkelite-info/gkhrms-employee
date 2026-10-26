"use client"

import React from "react"
import { User, UsersThree, Article } from "phosphor-react"

export type TabKey = "my-attendance" | "team-attendance" | "requests"

interface AttendanceTabsProps {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

export default function AttendanceTabs({
  activeTab,
  onTabChange,
}: AttendanceTabsProps) {
  const tabs = [
    {
      key: "my-attendance" as TabKey,
      label: "My Attendance",
      icon: User,
    },
    {
      key: "team-attendance" as TabKey,
      label: "Team Attendance",
      icon: UsersThree,
    },
    {
      key: "requests" as TabKey,
      label: "Requests",
      icon: Article,
    },
  ]

  return (
    <div className="select-none overflow-x-auto pb-1 scrollbar-hide">
      <div className="bg-white rounded-full p-1 shadow-xs border border-gray-100 inline-flex items-center gap-1 sm:gap-1.5 min-w-max">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.key

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onTabChange(tab.key)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs transition-all duration-150 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? "bg-[#5B50EC] text-white font-semibold shadow-xs"
                  : "text-[#4B5563] hover:text-[#5B50EC] hover:bg-gray-50/80 font-medium"
              }`}
            >
              <Icon size={16} weight={isActive ? "bold" : "regular"} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

