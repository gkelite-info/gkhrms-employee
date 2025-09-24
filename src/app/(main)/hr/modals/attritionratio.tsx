"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import AreaCharts from "../../../../../utils/areaChart"
import AttritionTrendCard from "../components/attritionGraph"

export default function AttritionRatioModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const departments = ["HR", "Engineering"]
  const designations = ["Manager", "Developer", "Intern"]
  const period = ["Monthly", "Quarterly", "Half Yearly", "Yearly"]

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
  ]

  const userActivityData = [
    { name: 'Day 1', uv: 80, pv: 80 },
    { name: 'Day 2', uv: 80, pv: 78 },
    { name: 'Day 3', uv: 95, pv: 92 },
    { name: 'Day 4', uv: 70, pv: 65 },
    { name: 'Day 5', uv: 88, pv: 84 },
    { name: 'Day 6', uv: 92, pv: 90 },
    { name: 'Day 7', uv: 92, pv: 92 },
  ];

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

            <div className="flex flex-col mt-6 bg-red-00 h-20 p-2 rounded-lg shadow-md sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg text-[#323232] font-semibold">
                  Attrition Ratio
                </h2>
                <p className="text-[#8E57EB] font-bold"> {tableData.length}%</p>
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

                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#585858]">Time Period:</span>
                  <select className="border px-2 text-[#323232] focus:outline-none py-1 rounded">
                    <option>All</option>
                    {period.map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-green-00 rounded-lg flex justify-between">
              <div className="bg-white h-60 w-[49%] rounded-lg shadow-md p-2 flex flex-col justify-between">
                <h3 className="text-lg text-[#111827] font-semibold">Attrition Trend</h3>
                <div className="w-[100%] h-[85%] bg-red-00">
                  <AreaCharts data={userActivityData} width={500} />
                </div>
              </div>
              <div className="bg-white h-60 w-[49%] rounded-lg shadow-md p-2 flex flex-col justify-between">
                <h3 className="text-lg text-[#111827] font-semibold">Department-wise Attrition</h3>
                <div className="w-[100%] h-[85%] bg-red-00">
                  <AttritionTrendCard />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mt-4 bg-red-00 rounded-lg shadow-md">
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
