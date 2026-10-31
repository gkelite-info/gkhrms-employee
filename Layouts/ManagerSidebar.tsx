"use client"

import { UsersThree, User } from "phosphor-react"
import ReusableSidebar, {
  ReusableSidebarItem,
} from "../reusableComponents/ReusableSidebar"

export const managerNavItems: ReusableSidebarItem[] = [
  { label: "Attendance", href: "/manager", icon: UsersThree },
  { label: "Profile", href: "/manager/profile", icon: User },
]

export default function ManagerSidebar() {
  const isManagerItemActive = (
    item: ReusableSidebarItem,
    currentPath: string
  ): boolean => {
    const isProfile =
      currentPath === "/manager/profile" ||
      currentPath.startsWith("/manager/profile/")

    if (item.href === "/manager") {
      return (
        !isProfile &&
        (currentPath === "/manager" ||
          currentPath.startsWith("/manager/member") ||
          currentPath.startsWith("/manager"))
      )
    }

    return isProfile
  }

  return (
    <ReusableSidebar
      items={managerNavItems}
      toggleEventName="toggle-manager-sidebar"
      closeEventName="close-manager-sidebar"
      isItemActive={isManagerItemActive}
    />
  )
}
