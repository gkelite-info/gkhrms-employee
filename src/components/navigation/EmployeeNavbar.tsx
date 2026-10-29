"use client"

import React from "react"
import {
  House,
  User,
  UsersThree,
  CurrencyCircleDollar,
  Buildings,
  TrendUp,
  ChatCircleDots,
} from "phosphor-react"
import ReusableSidebar, {
  ReusableSidebarItem,
} from "../../../reusableComponents/ReusableSidebar"

export const employeeNavItems: ReusableSidebarItem[] = [
  { label: "Home", href: "/employee", icon: House, exact: true },
  { label: "Me", href: "/employee/me", icon: User },
  { label: "My Team", href: "/employee/myteam", icon: UsersThree },
  {
    label: "Finance & Payroll",
    href: "/employee/finance",
    icon: CurrencyCircleDollar,
  },
  { label: "Org", href: "/employee/org", icon: Buildings },
  { label: "Performance", href: "/employee/performance", icon: TrendUp },
  { label: "Engage", href: "/employee/engage", icon: ChatCircleDots },
]

export interface EmployeeNavbarProps {
  className?: string
}

export default function EmployeeNavbar({ className = "" }: EmployeeNavbarProps) {
  return (
    <ReusableSidebar
      items={employeeNavItems}
      toggleEventName="toggle-employee-sidebar"
      closeEventName="close-employee-sidebar"
      desktopWidthClass="w-[210px] min-w-[210px]"
      drawerWidthClass="w-[240px]"
      activeColorClass="bg-[#5B50EC] text-white shadow-sm ring-1 ring-[#5B50EC]/30"
      inactiveColorClass="text-[#4B5563] hover:text-[#5B50EC] hover:bg-[#F3F2FD]"
      footerText="Powered by GK Elite"
      className={className}
    />
  )
}
