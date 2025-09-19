"use client"

import { Bell, MagnifyingGlass, Megaphone, Tray } from "phosphor-react"
import NotificationCount from "../utils/notificationCount"
import { useState } from "react"
import NotificationModal from "../utils/notificationModel"
import InboxModal from "../utils/inboxModal"

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const [showIndex, setShowIndex] = useState(false)

  return (
    <>
      <div className="w-full h-[70px] flex items-center">
        <div className="bg-white w-[108.5px] h-[100%] flex items-center justify-center border border-0 border-r-1">
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
                placeholder="Search employees or action (Ex: Leave Request)"
                className="text-[#323232] font-medium focus:text-[#323232] text-xs focus:outline-none w-full"
              />
            </div>
          </div>

          {/* //icons */}
          <div className="h-[100%] w-[12%] bg-green-00 flex items-center justify-center gap-5">
            <div className="relative bg-yellow-00 h-[24px]">
              <Bell
                onClick={() => setShowModal(true)}
                className="text-[#1E1D32] bg-pink-00 cursor-pointer h-6 w-6 hover:shadow-xl transition-all duration-200"
              />
              <NotificationCount count={100} />
            </div>
            <Tray
              onClick={() => setShowIndex(true)}
              className="text-[#1E1D32] bg-blue-00 cursor-pointer h-6 w-6 hover:shadow-xl transition-all duration-200"
            />
            <NotificationCount count={100} style="right-18 top-5" />
            <div className="h-8 w-8 flex items-center justify-center bg-blue-400 rounded-full cusor-pointer">
              <p className="cursor-pointer">X</p>
            </div>
          </div>
        </div>
      </div>
      <NotificationModal open={showModal} onClose={() => setShowModal(false)} />
      <InboxModal open={showIndex} onClose={() => setShowIndex(false)} />
    </>
  )
}
