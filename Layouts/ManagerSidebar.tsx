"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  UsersThree,
  User,
  X,
} from "phosphor-react"

export const managerNavItems = [
  { label: "Attendance", href: "/manager", icon: UsersThree },
  { label: "Profile", href: "/manager/profile", icon: User },
]

export default function ManagerSidebar() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleToggle = () => setDrawerOpen((prev) => !prev)
    const handleClose = () => setDrawerOpen(false)
    window.addEventListener("toggle-manager-sidebar", handleToggle)
    window.addEventListener("close-manager-sidebar", handleClose)
    return () => {
      window.removeEventListener("toggle-manager-sidebar", handleToggle)
      window.removeEventListener("close-manager-sidebar", handleClose)
    }
  }, [])

  const renderNavList = () => (
    <nav className="flex flex-col gap-1.5 w-full">
      {managerNavItems.map((item) => {
        const Icon = item.icon
        const isProfile = pathname === "/manager/profile" || pathname?.startsWith("/manager/profile/")

        const isActive =
          item.href === "/manager"
            ? !isProfile && (pathname === "/manager" || pathname?.startsWith("/manager/member") || pathname?.startsWith("/manager"))
            : isProfile

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setDrawerOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-150 ${
              isActive
                ? "bg-[#5B50EC] text-white shadow-sm ring-1 ring-[#5B50EC]/30"
                : "text-[#4B5563] hover:text-[#5B50EC] hover:bg-[#F3F2FD]"
            }`}
          >
            <Icon
              size={19}
              weight={isActive ? "fill" : "bold"}
              className="flex-shrink-0"
            />
            <span className="truncate">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 z-50 w-[240px] bg-white p-5 shadow-2xl flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Menu
                  </span>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X size={18} weight="bold" />
                  </button>
                </div>
                {renderNavList()}
              </div>

              <div className="pt-4 text-center">
                <span className="text-[10px] font-semibold text-[#8C8EA6] tracking-wide">
                  Powered by GK Elite
                </span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <aside className="hidden lg:flex w-[210px] min-w-[210px] bg-white h-full border-r border-gray-100 p-4 flex-col justify-between select-none">
        <div className="flex flex-col pt-1">
          {renderNavList()}
        </div>

        <div className="pt-4 pb-1 text-center">
          <span className="text-[10px] font-semibold text-[#8C8EA6] tracking-wide">
            Powered by GK Elite
          </span>
        </div>
      </aside>
    </>
  )
}
