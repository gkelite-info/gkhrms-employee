'use client';

import { Bell, MagnifyingGlass, Tray } from "phosphor-react";

export default function Header() {
  return (
    <>
      <div className="w-full h-[70px] bg-amber-400 flex items-center">
        <div className="bg-[#9884D6] w-[108.5px] h-[100%] flex items-center justify-center border border-0 border-r-1">
          <img src="/gkLogo.png" alt="gkLogo.png" className="w-[60%]" />
        </div>
        <div className="bg-[#9884D6] h-[100%] w-[100%] flex items-center justify-between pr-4">
          <div className="flex items-center h-[100%] w-[60%] gap-5">
            <div className="bg-red-400 h-[100%] w-[17%] flex items-center justify-center">
              Logo
            </div>
            <div className="flex items-center bg-[#1C334E] gap-3 h-[60%] w-[70%] rounded-full px-3">
              <MagnifyingGlass size={19} weight="bold" className="text-white cursor-pointer" />
              <input
                placeholder="Search employees or action (Ex: Leave Request)"
                className="text-white focus:outline-none w-full"
              />
            </div>
          </div>

          {/* //icons */}
          <div className="h-[100%] w-[12%] bg- flex items-center justify-center gap-4">
            <Bell className="text-white cursor-pointer h-6 w-6 hover:h-7 hover:w-7 transition-all duration-200" />
            <Tray className="text-white cursor-pointer h-6 w-6 hover:h-7 hover:w-7 transition-all duration-200" />
            <div className="h-8 w-8 flex items-center justify-center bg-blue-400 rounded-full cusor-pointer">
              <p className="cursor-pointer">X</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}