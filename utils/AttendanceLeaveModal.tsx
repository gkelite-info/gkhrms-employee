"use client"

import React, { useState, useEffect } from "react"
import { Search, X } from "lucide-react"

export interface AttendanceRecord {
  id: string
  name: string
  email: string
  employeeId: string
  department: string
  attendance: string
  checkIn: string
  checkOut: string
  mood: string
}

export const defaultAttendanceRecords: AttendanceRecord[] = [
  {
    id: "01",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "89%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "02",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UX Designer",
    attendance: "80%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/sad.png",
  },
  {
    id: "03",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UX Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "04",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UX Designer",
    attendance: "89%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/angry.png",
  },
  {
    id: "05",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "80%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/sad.png",
  },
  {
    id: "06",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "07",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "08",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "89%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "09",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "80%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/sad.png",
  },
  {
    id: "10",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "11",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "89%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/angry.png",
  },
  {
    id: "12",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "80%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/sad.png",
  },
  {
    id: "13",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "14",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "15",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/angry.png",
  },
  {
    id: "16",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "89%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/sad.png",
  },
  {
    id: "17",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "80%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "18",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
  {
    id: "19",
    name: "Stanly",
    email: "stanly@",
    employeeId: "1234",
    department: "UI Designer",
    attendance: "75%",
    checkIn: "9:00 PM",
    checkOut: "6:00 PM",
    mood: "/images/happy.png",
  },
]

interface AttendanceLeaveModalProps {
  isOpen: boolean
  onClose: () => void
  records?: AttendanceRecord[]
}

export default function AttendanceLeaveModal({
  isOpen,
  onClose,
  records = defaultAttendanceRecords,
}: AttendanceLeaveModalProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Sync URL query param ?attendance=true
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href)
        if (!url.searchParams.has("attendance")) {
          url.searchParams.set("attendance", "true")
          window.history.pushState({}, "", url.toString())
        }
      }
    }
  }, [isOpen])

  const handleClose = () => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      if (url.searchParams.has("attendance") || url.searchParams.has("attendanceModal")) {
        url.searchParams.delete("attendance")
        url.searchParams.delete("attendanceModal")
        window.history.pushState({}, "", url.pathname + (url.search ? url.search : ""))
      }
    }
    onClose()
  }

  // Filter records based on search input
  const filteredRecords = records.filter((rec) => {
    const q = searchTerm.toLowerCase().trim()
    if (!q) return true
    return (
      rec.id.toLowerCase().includes(q) ||
      rec.name.toLowerCase().includes(q) ||
      rec.email.toLowerCase().includes(q) ||
      rec.employeeId.toLowerCase().includes(q) ||
      rec.department.toLowerCase().includes(q) ||
      rec.attendance.toLowerCase().includes(q) ||
      rec.checkIn.toLowerCase().includes(q) ||
      rec.checkOut.toLowerCase().includes(q)
    )
  })

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      {/* Modal Container (Matches Image 2 exactly) */}
      <div
        className="relative w-full max-w-[960px] bg-white rounded-xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden p-6 pt-5 pb-5 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button top-right */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 cursor-pointer z-10"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Centered Search Bar */}
        <div className="w-full flex justify-center mb-5 shrink-0">
          <div className="w-full max-w-[460px] bg-[#EAEAEA] rounded-full px-4 py-2 flex items-center gap-2.5 shadow-2xs focus-within:bg-[#E5E5E5] transition-all">
            <Search className="w-4 h-4 text-[#555555] shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search here......"
              className="w-full bg-transparent border-none text-[13.5px] text-[#1F2937] placeholder-[#6B7280] focus:outline-hidden"
            />
          </div>
        </div>

        {/* Table Container with Custom Scrollbar */}
        <div className="flex-1 min-h-0 overflow-x-auto overflow-y-auto pr-1">
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-100/60 text-[#1F2937] font-semibold text-[13.5px]">
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">S.No</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Name</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Email</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Employee ID</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Department</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Attendance %</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Check-in</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Check-Out</th>
                <th className="py-2.5 px-3 font-semibold whitespace-nowrap">Mood</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-50 text-[13px] text-[#374151]">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-gray-500">
                      {row.id}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-[#1F2937]">
                      {row.name}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-gray-500">
                      {row.email}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-gray-600">
                      {row.employeeId}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-[#1F2937]">
                      {row.department}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-gray-600">
                      {row.attendance}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-gray-500">
                      {row.checkIn}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap font-normal text-gray-500">
                      {row.checkOut}
                    </td>
                    <td className="py-2.5 px-3 whitespace-nowrap">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <img
                          src={row.mood}
                          alt="mood"
                          className="w-4.5 h-4.5 object-contain"
                          onError={(e) => {
                            ;(e.currentTarget as HTMLImageElement).src =
                              "/images/happy.png"
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="py-8 text-center text-sm text-gray-400 font-medium"
                  >
                    No attendance records found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
