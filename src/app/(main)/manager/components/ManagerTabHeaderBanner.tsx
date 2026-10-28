"use client"

import { User, Users, UsersThree, CalendarBlank } from "phosphor-react"
import { ManagerTabKey } from "./ManagerAttendanceTabs"

interface ManagerTabHeaderBannerProps {
  activeTab: ManagerTabKey
}

export default function ManagerTabHeaderBanner({
  activeTab,
}: ManagerTabHeaderBannerProps) {
  const tabMetadata: Record<
    ManagerTabKey,
    { title: string; subtitle: string; icon: React.ElementType }
  > = {
    "my-attendance": {
      title: "My Attendance",
      subtitle:
        "Track your personal attendance records, daily timings, and leave balance overview.",
      icon: User,
    },
    "team-attendance": {
      title: "Team Attendance",
      subtitle:
        "Monitor real-time team attendance, daily working hours, and check-in statuses.",
      icon: Users,
    },
    "tl-wise-attendance": {
      title: "TL-wise Attendance",
      subtitle:
        "Overview attendance metrics and distribution segregated by Team Leads and their teams.",
      icon: UsersThree,
    },
    requests: {
      title: "Attendance Requests",
      subtitle:
        "Review and manage leave and work from home requests from your team members and team leads.",
      icon: CalendarBlank,
    },
  }

  const current = tabMetadata[activeTab]
  const IconComponent = current.icon

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center justify-between gap-4 min-w-0 transition-all">
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
          <IconComponent size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight break-words">
            {current.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5 break-words">
            {current.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
