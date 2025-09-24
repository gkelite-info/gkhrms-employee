"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ActiveEmployeesModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const departments = ["HR", "Engineering"]
  const designations = ["Manager", "Developer", "Intern"]
  const statuses = ["Active", "Leave", "WFH"]

  const tableData = [
    {
      username: "John Doe",
      email: "john@example.com",
      employeeID: "EMP001",
      role: "Developer",
      loginTime: "09:00 AM",
      mood: "😊",
      status: "Active",
    },
    {
      username: "Jane Smith",
      email: "jane@example.com",
      employeeID: "EMP002",
      role: "Manager",
      loginTime: "09:15 AM",
      mood: "😐",
      status: "Active",
    },
    {
      username: "Alice Johnson",
      email: "alice@example.com",
      employeeID: "EMP003",
      role: "Developer",
      loginTime: "08:55 AM",
      mood: "😊",
      status: "WFH",
    },
    {
      username: "Bob Brown",
      email: "bob@example.com",
      employeeID: "EMP004",
      role: "Intern",
      loginTime: "09:30 AM",
      mood: "😔",
      status: "Leave",
    },
    {
      username: "Charlie Davis",
      email: "charlie@example.com",
      employeeID: "EMP005",
      role: "Developer",
      loginTime: "09:05 AM",
      mood: "😊",
      status: "Active",
    },
    {
      username: "Vamshi",
      email: "Vamshi@example.com",
      employeeID: "EMP006",
      role: "Developer",
      loginTime: "09:05 AM",
      mood: "😊",
      status: "Active",
    },
    {
      username: "Vamsi",
      email: "vamsi@example.com",
      employeeID: "EMP007",
      role: "Developer",
      loginTime: "09:05 AM",
      mood: "😊",
      status: "Active",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="modal"
            className="bg-white p-6 rounded-lg w-[90%] h-[90%] max-w-5xl relative overflow-x-auto"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              className="absolute top-2 right-2 mr-1 text-gray-600 cursor-pointer"
              onClick={onClose}
            >
              ✕
            </button>

            <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg text-[#323232] font-semibold">
                  Active Employees
                </h2>
                <p className="text-[#8E57EB] font-bold"> ({tableData.length})</p>
              </div>


              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#585858]">Department:</span>
                  <select className="border px-2 text-[#323232] focus:outline-none py-1 rounded">
                    <option>All</option>
                    {departments.map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#585858]">Designation:</span>
                  <select className="border px-2 text-[#323232] focus:outline-none py-1 rounded">
                    <option>All</option>
                    {designations.map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-[100%] border-collapse text-center">
                <thead>
                  <tr className="bg-gray-200 text-[#323232] text-sm">
                    <th className="px-3 py-2">Username</th>
                    <th className="px-3 py-2">Email</th>
                    <th className="px-3 py-2">Employee ID</th>
                    <th className="px-3 py-2">Role</th>
                    <th className="px-3 py-2">Login Time</th>
                    <th className="px-3 py-2">Mood</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-100 text-[#585858] text-xs">
                      <td className="px-3 py-2">{row.username}</td>
                      <td className="px-3 py-2">{row.email}</td>
                      <td className="px-3 py-2">{row.employeeID}</td>
                      <td className="px-3 py-2">{row.role}</td>
                      <td className="px-3 py-2">{row.loginTime}</td>
                      <td className="px-3 py-2">{row.mood}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
