"use client"

import { useState, useEffect } from "react"
import { FileText } from "phosphor-react"

export default function ActionsCard() {
  const [isCheckedIn, setIsCheckedIn] = useState(true)
  const [currentTime, setCurrentTime] = useState("07:18:08 PM")
  const [showPolicyModal, setShowPolicyModal] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      )
    }
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-md min-h-[140px] h-full gap-3 overflow-hidden">
        {/* Top: Title & Controls */}
        <div className="flex items-center justify-between gap-2 flex-wrap min-w-0">
          <h3 className="text-sm font-bold text-[#1F2433]">Actions</h3>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
            {/* Live Clock Display with fixed width & tabular-nums to prevent button movement */}
            <div className="w-[82px] sm:w-[90px] text-center border border-gray-200 rounded-lg py-1 text-[11px] sm:text-xs font-semibold text-[#1F2433] bg-gray-50/80 whitespace-nowrap tabular-nums font-mono shrink-0 select-none">
              {currentTime}
            </div>

            {/* Check-In/Check-Out Button */}
            <button
              type="button"
              onClick={() => setIsCheckedIn(!isCheckedIn)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold text-white transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0 ${
                isCheckedIn
                  ? "bg-[#A62627] hover:bg-[#8e2021]"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {isCheckedIn ? "Remote Check-Out" : "Remote Check-In"}
            </button>
          </div>
        </div>

        {/* Date and Since Last Login */}
        <div className="flex items-center justify-between text-xs text-gray-500 font-medium pt-1">
          <span>Fri 22 Aug 2025</span>
          <span className="text-gray-600 font-semibold whitespace-nowrap">
            5h : 8m <span className="font-normal text-gray-400">Since Last Login</span>
          </span>
        </div>

        {/* Attendance Policy Link */}
        <div className="pt-0.5">
          <button
            type="button"
            onClick={() => setShowPolicyModal(true)}
            className="flex items-center gap-1.5 text-xs text-[#5B50EC] hover:underline font-semibold cursor-pointer"
          >
            <FileText size={14} weight="bold" />
            <span>Attendance Policy</span>
          </button>
        </div>
      </div>

      {/* Attendance Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-base font-bold text-[#1F2433] mb-2">
              GK-HRMS Attendance Policy
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Employees are required to complete a minimum of 8 gross hours per
              shift. Daily check-in window opens at 10:00 AM. Remote checkout is
              logged with geo-tagging and time verification. Overtime requires
              pre-approval from the reporting Team Lead.
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-4 py-2 bg-[#5B50EC] text-white text-xs font-semibold rounded-xl hover:bg-[#4d42e0] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
