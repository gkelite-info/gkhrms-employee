"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { roleBasedNav } from "./RoleBasedLink"
import { RootState } from "../Redux/Store"
import { useSelector } from "react-redux"

export default function Sidebar() {
  const pathname = usePathname()
  const { role } = useSelector((state: RootState) => state.auth)

  // const role = "Hr"

  const navItems = roleBasedNav[role ?? "Hr"] || []

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
      <span className="absolute left-1/2 bottom-2 -translate-x-1/2 font-semibold text-[7px] text-[#404040]">
        Powered by GK Elite
      </span>
    </div>
  )
}
