"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { House, User, Users, Buildings, ChartBar, Wallet, ChatCircle, UsersThree, TrendUp } from "phosphor-react"

const navItems = [
  { label: "Home", href: "/", icon: House },
  { label: "Me", href: "/d", icon: User },
  { label: "My Team", href: "/e", icon: UsersThree },
  { label: "Org", href: "/f", icon: Buildings },
  { label: "Performance", href: "/g", icon: TrendUp },
  { label: "My Finance", href: "/h", icon: Wallet },
  { label: "Engage", href: "/i", icon: ChatCircle },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-[100px] bg-[#061E3B] h-full flex flex-col items-center text-center gap-1">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              backgroundColor: isActive ? "#ebebeb" : "",
            }}
            className="w-full p-2.5"
          >
            <h3
              className={`flex flex-col items-center gap-1 text-sm font-medium cursor-pointer transition-colors ${isActive ? "text-[#303030]" : "text-[#AAAAAA] hover:text-red-400"
                }`}
            >
              {Icon && <Icon size={24} weight="bold" />}
              {item.label}
            </h3>
          </Link>
        )
      })}
    </div>
  )
}
