"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  House,
  User,
  Buildings,
  UsersThree,
  CurrencyCircleDollar,
  Timer,
  ChartBar,
  Tray,
  Files,
  Airplay,
  Gear,
  Lock,
  Plugs,
  ChatsCircle,
} from "phosphor-react"

const roleBasedNav = {
  Admin: [
    { label: "Home", href: "/dashboard", icon: House },
    { label: "System & Users", href: "/admin/system-users", icon: Airplay },
    {
      label: "Policies & Configuration",
      href: "/admin/policies-configuration",
      icon: Gear,
    },
    {
      label: "Audit & Security",
      href: "/admin/audit-security",
      icon: Lock,
    },
    {
      label: "Integrations & Automation",
      href: "/admin/integration-automation",
      icon: Plugs,
    },
    {
      label: "Analytics & Reports",
      href: "/admin/analytics-reports",
      icon: ChartBar,
    },
    {
      label: "Engage",
      href: "/admin/engage",
      icon: ChatsCircle,
    },
  ],
  Manager: [
    { label: "Home", href: "/dashboard", icon: House },
    { label: "Me", href: "/manager_dash/details", icon: User },
    { label: "Inbox", href: "/manager/inbox", icon: Tray },
    { label: "My Team", href: "/manager/my-team", icon: UsersThree },
    { label: "Reports", href: "/manager/reports", icon: Files },
    { label: "Org Engage", href: "/manager/org-engage", icon: Buildings },
  ],
  Employee: [
    { label: "Home", href: "/dashboard", icon: House },
    { label: "Me", href: "employee/details", icon: User },
    { label: "Inbox", href: "employee/inbox", icon: Tray },
    {
      label: "My Finance",
      href: "employee/finance",
      icon: CurrencyCircleDollar,
    },
    { label: "Org", href: "employee/org", icon: Buildings },
    { label: "Engage", href: "employee/engage", icon: Buildings },
  ],
  Hr: [
    { label: "Home", href: "/", icon: House },
    { label: "Workforce", href: "/hr/workforce", icon: User },
    {
      label: "Payroll & Compliance",
      href: "/hr/payrole-compliance",
      icon: CurrencyCircleDollar,
    },
    { label: "Attendance & Leave", href: "/hr/attendance-leaves", icon: Timer },
    {
      label: "Engagement & Culture",
      href: "/hr/engagement-culture",
      icon: Timer,
    },
    {
      label: "Analytics & Reports",
      href: "/hr/analytics-reports",
      icon: ChartBar,
    },
  ],
}

export default function Sidebar() {
  const pathname = usePathname()

  const role = "Hr"

  const navItems = roleBasedNav[role] || []

  return (
    <div className="w-[100px] bg-white relative h-full flex flex-col items-center text-center gap-1">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{ backgroundColor: isActive ? "#C5C1FF" : "" }}
            className="w-full p-2.5"
          >
            <h3
              className={`flex flex-col items-center gap-1 text-[12px] font-medium cursor-pointer transition-colors ${
                isActive
                  ? "text-[#1F2937] text-xs"
                  : "text-[#1F2937] hover:text-red-400 text-xs"
              }`}
            >
              <Icon
                weight="bold"
                className={`h-4 w-4 transition-all duration-200 ${
                  !isActive ? "hover:h-5 hover:w-5" : ""
                }`}
              />
              {item.label}
            </h3>
          </Link>
        )
      })}
      <span className="absolute left-1/2 bottom-2 -translate-x-1/2 text-[7px] text-[#404040]">
        Powered by GK Elite
      </span>
    </div>
  )
}
