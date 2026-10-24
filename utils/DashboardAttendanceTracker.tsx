"use client"
import React, { useState, useEffect } from "react"
import PercentPie from "./pieChart"
import ProgressBar from "./ProgressBar"
import AttendanceLeaveModal from "./AttendanceLeaveModal"

const DashboardAttendanceTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Open modal if URL has ?attendance=true or ?attendanceModal=true
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search)
      if (
        searchParams.get("attendance") === "true" ||
        searchParams.get("attendanceModal") === "true"
      ) {
        setIsModalOpen(true)
      }
    }
  }, [])

  return (
    <div className="w-full flex flex-col gap-2 bg-[#F4F3FF] rounded-lg p-1.5">
      <div className="flex justify-between w-[100%]">
        {/* Left Side: Monthly + PercentPie (Circle) */}
        <div className="bg-blue-00 w-[56%] h-[100%] flex flex-col items-center p-2">
          <div className="bg-[#F7D396] w-[30%] flex items-center justify-center rounded-md">
            <h2 className="text-black text-md">Monthly</h2>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer hover:opacity-90 transition-opacity"
            title="Click to view Attendance Details"
          >
            <PercentPie onClick={() => setIsModalOpen(true)} />
          </div>
        </div>

        {/* Right Side: Yearly + ProgressBars (Attendance Bars) */}
        <div className="bg-red-00 w-[44%] h-[100%] flex flex-col items-start text-center p-2 gap-2">
          <div className="w-full flex justify-center">
            <div className="bg-[#F7D396] w-[30%] flex items-center justify-center rounded-md">
              <h2 className="text-black text-md">Yearly</h2>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-00 mt-2 h-full w-[90%] flex flex-col justify-between gap-2 cursor-pointer hover:opacity-90 transition-opacity"
            title="Click to view Attendance Details"
          >
            <ProgressBar
              percent={75}
              fromColor="from-[#A7A2F2]"
              toColor="to-[#4C43DB]"
              label="Sick Leaves"
            />
            <ProgressBar
              percent={75}
              fromColor="from-[#FF9FF1]"
              toColor="to-[#9D338E]"
              label="Paid Leaves"
            />
            <ProgressBar
              percent={75}
              fromColor="from-[#FFC055]"
              toColor="to-[#CA8106]"
              label="Holidays"
            />
            <ProgressBar
              percent={75}
              fromColor="from-[#E83E1B]"
              toColor="to-[#82230F]"
              label="Unpaid Leaves"
            />
            <ProgressBar
              percent={75}
              fromColor="from-[#F8FF91]"
              toColor="to-[#B8C500]"
              label="Vacation"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-between pl-1.5 pb-2">
        <div className="w-[20%] flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-[#6366F1] flex items-center justify-center">
            <img src="/images/sick.png" alt="sick.png" style={{ height: 13 }} />
          </div>
          <p className="text-[10px] text-black">Sick Leaves</p>
        </div>
        <div className="w-[20%] flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-[#FF9FF1] flex items-center justify-center">
            <img
              src="/images/paidLeaves.png"
              alt="paidLeaves.png"
              style={{ height: 11 }}
            />
          </div>
          <p className="text-[10px] text-black">Paid Leaves</p>
        </div>
        <div className="w-[18%] flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-[#F59E0B] flex items-center justify-center">
            <img
              src="/images/holidays.png"
              alt="holidays.png"
              style={{ height: 11 }}
            />
          </div>
          <p className="text-[10px] text-black">Holidays</p>
        </div>
        <div className="w-[22%] flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-[#CB7475] flex items-center justify-center">
            <img
              src="/images/unpaidLeaves.png"
              alt="unpaidLeaves.png"
              style={{ height: 13 }}
            />
          </div>
          <p className="text-[10px] text-black">Unpaid Leaves</p>
        </div>
        <div className="w-[20%] flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-[#F8FF91] flex items-center justify-center">
            <img
              src="/images/vacation.png"
              alt="vacation.png"
              style={{ height: 13 }}
            />
          </div>
          <p className="text-[10px] text-black">Vacation</p>
        </div>
      </div>

      {/* Attendance & Leave Details Modal (Image 2) */}
      <AttendanceLeaveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default DashboardAttendanceTracker
