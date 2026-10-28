"use client"

import {  useState  } from "react";

interface LogRecord {
  sNo: string
  date: string
  name: string
  statusDot: "green" | "orange" | "red"
  email: string
  empId: string
  dept: string
  attendance: string
  effective: string
  gross: string
  checkIn: string
  checkOut: string
  mood: string
}

const mockData: LogRecord[] = [
  { sNo: "01", date: "09/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UI Designer", attendance: "89%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😊" },
  { sNo: "02", date: "08/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "80%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "03", date: "07/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "75%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "🤩" },
  { sNo: "04", date: "06/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UI Designer", attendance: "89%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😊" },
  { sNo: "05", date: "05/09/2025", name: "Stanly", statusDot: "orange", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "80%", effective: "0h 0min", gross: "0h 0min", checkIn: "-", checkOut: "-", mood: "-" },
  { sNo: "06", date: "04/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "75%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😐" },
  { sNo: "07", date: "03/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UI Designer", attendance: "89%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "08", date: "02/09/2025", name: "Stanly", statusDot: "orange", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "80%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😐" },
  { sNo: "09", date: "01/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "75%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😊" },
  { sNo: "10", date: "30/08/2025", name: "Stanly", statusDot: "red", email: "stanly@", empId: "1234", dept: "UI Designer", attendance: "89%", effective: "0h 0min", gross: "0h 0min", checkIn: "-", checkOut: "-", mood: "-" },
  { sNo: "11", date: "29/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "80%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😐" },
  { sNo: "12", date: "28/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "75%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "13", date: "27/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UI Designer", attendance: "89%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😊" },
  { sNo: "14", date: "26/09/2025", name: "Stanly", statusDot: "orange", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "80%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😐" },
  { sNo: "15", date: "25/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "75%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "🤩" },
  { sNo: "16", date: "24/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UI Designer", attendance: "89%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "17", date: "23/09/2025", name: "Stanly", statusDot: "orange", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "80%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😐" },
  { sNo: "18", date: "22/09/2025", name: "Stanly", statusDot: "green", email: "stanly@", empId: "1234", dept: "UX Designer", attendance: "75%", effective: "6h 0min", gross: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "🤩" },
]

const filterTabs = [
  { key: "30days", label: "30 DAYS" },
  { key: "jun", label: "JUN" },
  { key: "may", label: "MAY" },
  { key: "apr", label: "APR" },
  { key: "mar", label: "MAR" },
  { key: "feb", label: "FEB" },
  { key: "jan", label: "JAN" },
]

export default function EmployeeAttendanceLogTable() {
  const [activeFilter, setActiveFilter] = useState("30days")

  const getDotClass = (dot: "green" | "orange" | "red") => {
    switch (dot) {
      case "green":
        return "bg-[#10B981]"
      case "orange":
        return "bg-[#F59E0B]"
      case "red":
        return "bg-[#EF4444]"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <div className="w-full max-w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-2">
      {/* Top Header of Table Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
        <div>
          <h3 className="text-base font-bold text-[#1F2937]">Attendance Log</h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5">Last 30 Days</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#7D73E3] text-white shadow-sm"
                    : "bg-[#E1DFFB] text-[#323232] hover:bg-[#d5d2fa]"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Responsive Data Table */}
      <div className="w-full max-w-full overflow-x-auto rounded-xl">
        <table className="w-full text-left text-xs text-[#323232] border-collapse whitespace-nowrap min-w-[750px]">
          <thead>
            <tr className="text-gray-400 font-semibold border-b border-gray-100 text-[11px]">
              <th className="py-2.5 px-2 font-semibold">S.No</th>
              <th className="py-2.5 px-2 font-semibold">Date</th>
              <th className="py-2.5 px-2 font-semibold">Name</th>
              <th className="py-2.5 px-2 font-semibold">Email</th>
              <th className="py-2.5 px-2 font-semibold">Employee ID</th>
              <th className="py-2.5 px-2 font-semibold">Department</th>
              <th className="py-2.5 px-2 font-semibold">Attendance %</th>
              <th className="py-2.5 px-2 font-semibold">Effective Hours</th>
              <th className="py-2.5 px-2 font-semibold">Gross Hours</th>
              <th className="py-2.5 px-2 font-semibold">Check-in</th>
              <th className="py-2.5 px-2 font-semibold">Check-Out</th>
              <th className="py-2.5 px-2 text-center font-semibold">Mood</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockData.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-[#F9F9FE] transition-colors font-medium text-[12px]"
              >
                <td className="py-2.5 px-2 text-gray-400">{row.sNo}</td>
                <td className="py-2.5 px-2 text-gray-700">{row.date}</td>
                <td className="py-2.5 px-2 font-semibold text-gray-800">
                  <div className="flex items-center gap-1.5">
                    <span>{row.name}</span>
                    <span
                      className={`h-2 w-2 rounded-full ${getDotClass(row.statusDot)}`}
                    />
                  </div>
                </td>
                <td className="py-2.5 px-2 text-gray-500">{row.email}</td>
                <td className="py-2.5 px-2 text-gray-600">{row.empId}</td>
                <td className="py-2.5 px-2 text-gray-600">{row.dept}</td>
                <td className="py-2.5 px-2 font-semibold text-gray-800">
                  {row.attendance}
                </td>
                <td className="py-2.5 px-2 text-gray-700">{row.effective}</td>
                <td className="py-2.5 px-2 text-gray-700">{row.gross}</td>
                <td className="py-2.5 px-2 text-gray-600">{row.checkIn}</td>
                <td className="py-2.5 px-2 text-gray-600">{row.checkOut}</td>
                <td className="py-2.5 px-2 text-center text-sm">{row.mood}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
