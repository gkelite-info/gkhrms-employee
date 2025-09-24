"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TotalEmployeesModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const departments = ["HR", "Engineering"]
  const designations = ["Manager", "Developer", "Intern"]
  const statuses = ["Joined", "Pending", "Offer Accepted"]

  const tableData = [
    { username: "John Doe", email: "john@example.com", employeeID: "EMP001", role: "Developer", dateOfJoining: "2025-09-01", status: "Joined" },
    { username: "Jane Smith", email: "jane@example.com", employeeID: "EMP002", role: "Manager", dateOfJoining: "2025-09-03", status: "Pending" },
    { username: "Alice Johnson", email: "alice@example.com", employeeID: "EMP003", role: "Developer", dateOfJoining: "2025-08-21", status: "Offer Accepted" },
    { username: "Bob Brown", email: "bob@example.com", employeeID: "EMP004", role: "Intern", dateOfJoining: "2025-09-10", status: "Joined" },
    { username: "Charlie Davis", email: "charlie@example.com", employeeID: "EMP005", role: "Developer", dateOfJoining: "2025-09-15", status: "Pending" },
    { username: "Emma Wilson", email: "emma@example.com", employeeID: "EMP006", role: "Manager", dateOfJoining: "2025-09-11", status: "Offer Accepted" },
    { username: "Frank Lee", email: "frank@example.com", employeeID: "EMP007", role: "Developer", dateOfJoining: "2025-09-09", status: "Joined" },
    { username: "Grace Hill", email: "grace@example.com", employeeID: "EMP008", role: "Intern", dateOfJoining: "2025-09-14", status: "Pending" },
    { username: "Henry Adams", email: "henry@example.com", employeeID: "EMP009", role: "Developer", dateOfJoining: "2025-08-30", status: "Offer Accepted" },
    { username: "Isla Green", email: "isla@example.com", employeeID: "EMP010", role: "Manager", dateOfJoining: "2025-09-18", status: "Joined" },
    { username: "Jack White", email: "jack@example.com", employeeID: "EMP011", role: "Developer", dateOfJoining: "2025-09-07", status: "Pending" },
    { username: "Kara Black", email: "kara@example.com", employeeID: "EMP012", role: "Intern", dateOfJoining: "2025-09-22", status: "Offer Accepted" },
    { username: "Liam Gray", email: "liam@example.com", employeeID: "EMP013", role: "Developer", dateOfJoining: "2025-09-12", status: "Joined" },
    { username: "Mia Brown", email: "mia@example.com", employeeID: "EMP014", role: "Manager", dateOfJoining: "2025-09-05", status: "Pending" },
    { username: "Noah King", email: "noah@example.com", employeeID: "EMP015", role: "Developer", dateOfJoining: "2025-09-19", status: "Offer Accepted" },
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
              className="absolute top-2 mr-1 right-2 text-gray-600 cursor-pointer"
              onClick={onClose}
            >
              ✕
            </button>

            <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg text-[#323232] font-semibold">
                  New Hired
                </h2>
                <p className="text-[#8E57EB] font-bold"> ({tableData.length})</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#585858]">Department:</span>
                  <select className="border px-2 text-[#323232] focus:outline-none py-1 rounded">
                    <option>All</option>
                    {departments.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#585858]">Designation:</span>
                  <select className="border px-2 text-[#323232] focus:outline-none py-1 rounded">
                    <option>All</option>
                    {designations.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#585858]">Joining Status:</span>
                  <select className="border px-2 text-[#323232] focus:outline-none py-1 rounded">
                    <option>All</option>
                    {statuses.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
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
                    <th className="px-3 py-2">Date of Joining</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-100 text-[#585858] text-xs">
                      <td className="px-3 py-2">{row.username}</td>
                      <td className="px-3 py-2">{row.email}</td>
                      <td className="px-3 py-2">{row.employeeID}</td>
                      <td className="px-3 py-2">{row.role}</td>
                      <td className="px-3 py-2">{row.dateOfJoining}</td>
                      <td className="px-3 py-2">{row.status}</td>
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
