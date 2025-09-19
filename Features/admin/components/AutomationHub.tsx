"use client"
import Link from "next/link"
import React, { useState } from "react"
import ToggleSwitch from "../../../utils/ToggleSwitch"
type AutomationItem = {
  name: string
  navLink: string
}

const automationItems: AutomationItem[] = [
  { name: "Auto-Approve WFH up to 2 days", navLink: "/admin/auto-approve-wfh" },
  { name: "Auto Send Reminders", navLink: "/admin/auto-send-reminders" },
  { name: "Auto Close Help Desk", navLink: "/admin/auto-approve-wfh" },
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
      <h2 className="text-[#111827] font-semibold text-sm">Automation Hub</h2>

      {automationItems.map((item) => (
        <div
          key={item.name}
          className="w-full flex items-center justify-between"
        >
          <Link href={item.navLink}>
            <span className="text-xs text-[#464646]">{item.name}</span>
          </Link>
          <ToggleSwitch
            checked={enabledItems[item.name]}
            onChange={() => toggleItem(item.name)}
          />
        </div>
      ))}
    </div>
  )
}

export default AutomationHub
