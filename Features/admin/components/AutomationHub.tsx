"use client"
import React, { useState } from "react"

type AutomationItem = {
  name: string
}

const automationItems: AutomationItem[] = [
  { name: "Auto-Approve WFH up to 2 days" },
  { name: "Auto Send Reminders" },
  { name: "Auto Close Help Desk" },
]

const AutomationHub: React.FC = () => {
  const [enabledItems, setEnabledItems] = useState<Record<string, boolean>>(
    automationItems.reduce((acc, item) => {
      acc[item.name] = false
      return acc
    }, {} as Record<string, boolean>)
  )

  const toggleItem = (name: string) => {
    setEnabledItems((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-4 shadow">
      <h2 className="text-[#111827] font-semibold text-base">Automation Hub</h2>

      {automationItems.map((item) => (
        <div
          key={item.name}
          className="w-full flex items-center justify-between"
        >
          <span className="text-xs text-[#464646]">{item.name}</span>

          {/* Switch */}
          <button
            onClick={() => toggleItem(item.name)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
              enabledItems[item.name] ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
                enabledItems[item.name] ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default AutomationHub
