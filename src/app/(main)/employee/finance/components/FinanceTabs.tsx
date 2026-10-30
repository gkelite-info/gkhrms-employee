import React from "react"
import { FinanceTabType } from "./types"

export interface FinanceTabsProps {
  activeTab: FinanceTabType
  onSelectTab: (tab: FinanceTabType) => void
}

interface TabItem {
  id: FinanceTabType
  label: string
}

const TABS: TabItem[] = [
  { id: "summary", label: "Summary" },
  { id: "mypay", label: "My Pay" },
  { id: "manage_tax", label: "Manage TAX" },
  { id: "expenses_travel", label: "Expenses and Travel" },
]

export default function FinanceTabs({
  activeTab,
  onSelectTab,
}: FinanceTabsProps) {
  return (
    <div className="w-full bg-white rounded-xl shadow-2xs p-1 sm:p-1.5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`w-full py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg font-medium text-xs sm:text-sm text-center transition-all duration-150 cursor-pointer select-none focus:outline-none truncate ${
                isActive
                  ? "bg-[#7D73E3] text-white shadow-2xs"
                  : "bg-[#A3A3A3] text-white hover:bg-[#969696]"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
