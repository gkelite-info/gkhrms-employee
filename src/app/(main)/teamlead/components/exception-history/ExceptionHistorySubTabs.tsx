"use client"

import { User, UsersThree } from "phosphor-react"
import { ExceptionSubTab } from "./types"

interface ExceptionHistorySubTabsProps {
  activeSubTab: ExceptionSubTab
  onSubTabChange: (tab: ExceptionSubTab) => void
}

export default function ExceptionHistorySubTabs({
  activeSubTab,
  onSubTabChange,
}: ExceptionHistorySubTabsProps) {
  const tabs = [
    { key: "me" as ExceptionSubTab, label: "Me", icon: User },
    { key: "team" as ExceptionSubTab, label: "Team", icon: UsersThree },
  ]

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-0.5">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = activeSubTab === tab.key

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onSubTabChange(tab.key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
              isActive
                ? "bg-[#EEF2FF] text-[#5B50EC] shadow-2xs font-bold"
                : "bg-white text-gray-600 hover:text-[#5B50EC] hover:bg-gray-50 border border-gray-100"
            }`}
          >
            <Icon size={14} weight={isActive ? "bold" : "regular"} />
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
