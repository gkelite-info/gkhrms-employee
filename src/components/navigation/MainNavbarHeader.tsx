"use client"

import { Bell, MagnifyingGlass, Tray } from "phosphor-react"
import NotificationCount from "../../../utils/notificationCount"
import { useState } from "react"
import NotificationModal from "../../../utils/notificationModel"
import InboxModal from "../../../utils/inboxModal"
import { usePathname, useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { RootState } from "../../../Redux/Store"

export default function MainNavbarHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false)
  const [showIndex, setShowIndex] = useState(false)

  const { fullname, photoURL, role } = useSelector(
    (state: RootState) => state.auth
  )

  const userInitial = fullname ? fullname.charAt(0).toUpperCase() : "A"

  const handleProfile = () => {
    const targetRole =
      (role && role.toLowerCase()) ||
      (pathname?.startsWith("/admin")
        ? "admin"
        : pathname?.startsWith("/hr")
        ? "hr"
        : pathname?.startsWith("/manager")
        ? "manager"
        : "employee")
    router.push(`/${targetRole}/profile`)
  }

  return (
    <>
      <div className="w-full h-[70px] flex items-center bg-white border-b border-gray-100 select-none">
        <div className="bg-white w-[108.5px] h-[100%] flex items-center justify-center border-r border-gray-100">
          <img
            src="/images/gkLogoblack.png"
            alt="gkLogoblack.png"
            className="w-[60%]"
          />
        </div>
        <div className="bg-white h-[100%] w-[100%] flex items-center justify-between pr-4">
          <div className="flex items-center justify-end h-[100%] w-[66%] gap-5">
            <div className="flex items-center bg-[#C5C1FF] gap-3 h-[40px] w-[60%] rounded-full px-3">
              <MagnifyingGlass
                size={19}
                weight="bold"
                className="text-[#323232] cursor-pointer"
              />
              <input
                placeholder="Search employees, Payroll , Leave, Performance"
                className="text-[#323232] font-medium placeholder:text-[#4B5563] text-xs focus:outline-none w-full bg-transparent"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="h-[100%] w-[12%] flex items-center justify-center gap-5">
            <div className="relative h-[24px]">
              <Bell
                onClick={() => setShowModal(true)}
                className="text-[#1E1D32] cursor-pointer h-6 w-6 hover:shadow-xl transition-all duration-200"
              />
              <NotificationCount count={100} />
            </div>
            <Tray
              onClick={() => setShowIndex(true)}
              className="text-[#1E1D32] cursor-pointer h-6 w-6 hover:shadow-xl transition-all duration-200"
            />
            <NotificationCount count={100} style="right-18 top-5" />
            <div
              className="h-9 w-9 flex items-center justify-center rounded-full cursor-pointer overflow-hidden border border-gray-200 hover:ring-2 hover:ring-[#8570EE] transition-all bg-purple-100 flex-shrink-0"
              onClick={handleProfile}
              title="Alexander - View Profile"
              style={{ cursor: "pointer" }}
            >
              <img
                src={photoURL || "/images/alexander.png"}
                alt={fullname || "Alexander"}
                className="h-full w-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/alexander.png";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <NotificationModal open={showModal} onClose={() => setShowModal(false)} />
      <InboxModal open={showIndex} onClose={() => setShowIndex(false)} />
    </>
  )
}
