"use client"

import { useRouter } from "next/navigation"
import { User, Users, UsersThree, FileText } from "phosphor-react"

export type ManagerTabKey =
  | "my-attendance"
  | "team-attendance"
  | "tl-wise-attendance"
  | "requests"

interface ManagerAttendanceTabsProps {
  activeTab: ManagerTabKey
  onTabChange?: (tab: ManagerTabKey) => void
}

export default function ManagerAttendanceTabs({
  activeTab,
  onTabChange,
}: ManagerAttendanceTabsProps) {
  const router = useRouter()

  const tabs = [
    {
      key: "my-attendance" as ManagerTabKey,
      label: "My Attendance",
      icon: User,
    },
    {
      key: "team-attendance" as ManagerTabKey,
      label: "Team Attendance",
      icon: Users,
    },
    {
      key: "tl-wise-attendance" as ManagerTabKey,
      label: "TL-wise Attendance",
      icon: UsersThree,
    },
    {
      key: "requests" as ManagerTabKey,
      label: "Requests",
      icon: FileText,
    },
  ]

  const handleTabClick = (tabKey: ManagerTabKey) => {
    if (onTabChange) {
      onTabChange(tabKey)
    } else {
      router.push(`/manager?tab=${tabKey}`)
    }
  }

  return (
    <div className="w-full select-none overflow-x-auto pb-1 scrollbar-hide">
      <div className="w-fit min-w-full flex items-center justify-center px-3 sm:px-0">
        <div className="bg-white rounded-full p-1 shadow-xs border border-gray-100 inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.key

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleTabClick(tab.key)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-full text-xs transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#5B50EC] text-white font-semibold shadow-xs"
                    : "text-[#4B5563] hover:text-[#5B50EC] hover:bg-gray-50/80 font-medium"
                }`}
              >
                <Icon size={16} weight={isActive ? "bold" : "regular"} className="shrink-0" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
