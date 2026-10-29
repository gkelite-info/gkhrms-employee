"use client"

import React from "react"
import { UsersThree, User, ChartLineUp } from "phosphor-react"
import ReusableSidebar, {
  ReusableSidebarItem,
} from "../reusableComponents/ReusableSidebar"

export const teamLeadNavItems: ReusableSidebarItem[] = [
  { label: "Attendance", href: "/teamlead", icon: UsersThree },
  { label: "Performance", href: "/teamlead/performance", icon: ChartLineUp },
  { label: "Profile", href: "/teamlead/profile", icon: User },
]

export default function TeamLeadSidebar() {
  const isTeamLeadItemActive = (
    item: ReusableSidebarItem,
    currentPath: string
  ): boolean => {
    const isOtherSubRoute = [
      "/teamlead/performance",
      "/teamlead/profile",
    ].some((route) => currentPath === route || currentPath.startsWith(`${route}/`))

    if (item.href === "/teamlead") {
      return (
        currentPath === "/teamlead" ||
        currentPath.startsWith("/teamlead/member") ||
        (!isOtherSubRoute && currentPath.startsWith("/teamlead"))
      )
    }

    return currentPath === item.href || currentPath.startsWith(`${item.href}/`)
  }

  return (
    <ReusableSidebar
      items={teamLeadNavItems}
      toggleEventName="toggle-teamlead-sidebar"
      closeEventName="close-teamlead-sidebar"
      isItemActive={isTeamLeadItemActive}
    />
  )
}
