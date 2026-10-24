"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  House,
  User,
  UsersThree,
  CurrencyCircleDollar,
  Buildings,
  TrendUp,
  ChatCircleDots,
} from "phosphor-react"

export const employeeNavItems = [
  { label: "Home", href: "/employee", icon: House, exact: true },
  { label: "Me", href: "/employee/me", icon: User },
  { label: "My Team", href: "/employee/myteam", icon: UsersThree },
  {
    label: "Finance &\nPayroll",
    href: "/employee/finance",
    icon: CurrencyCircleDollar,
  },
  { label: "Org", href: "/employee/org", icon: Buildings },
  { label: "Performance", href: "/employee/performance", icon: TrendUp },
  { label: "Engage", href: "/employee/engage", icon: ChatCircleDots },
]

export default function EmployeeNavbar() {
  const pathname = usePathname()

  return (
    <div className="w-[100px] min-w-[100px] bg-white relative h-full flex flex-col items-center text-center gap-1 border-r border-[#E5E7EB] z-10 select-none">
      {employeeNavItems.map((item) => {
        const Icon = item.icon
        const isActive = item.exact
          ? pathname === item.href
          : pathname === item.href || pathname?.startsWith(`${item.href}/`)

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{ backgroundColor: isActive ? "#C5C1FF" : "" }}
            className={`w-full p-2.5 transition-all duration-150 ${
              isActive ? "bg-[#C5C1FF]" : "hover:bg-[#F3F2FD]"
            }`}
          >
            <h3 className="flex flex-col items-center gap-1 text-[12px] font-medium cursor-pointer text-[#1F2937]">
              <Icon
                size={20}
                weight="bold"
                className="transition-all duration-200"
              />
              <span className="leading-tight whitespace-pre-line text-[11px]">
                {item.label}
              </span>
            </h3>
          </Link>
        )
      })}

      <span className="absolute left-1/2 bottom-3 -translate-x-1/2 font-semibold text-[8px] text-[#404040] whitespace-nowrap">
        Powered by GK Elite
      </span>
    </div>
  )
}
