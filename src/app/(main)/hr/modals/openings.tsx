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
  const statuses = ["Open", "Interviews Ongoing", "On Hold"]

  // ---- 15 rows of sample job openings ----
  const jobData = Array.from({ length: 15 }).map((_, idx) => {
    const titles = ["Data Analyst", "UX Designer", "Cloud Engineer", "HR Executive", "Sales Manager"]
    const departments = ["IT", "Design", "IT", "HR", "Sales"]
    const managers = ["Shiva", "Prasad", "Sarala", "Deekshitha", "Vamshi"]
    const applications = [3, 8, 1, 7, 5, 10, 2, 4, 6]

    return {
      jobId: `POS-${String(idx + 1).padStart(3, "0")}`,
      jobTitle: titles[idx % titles.length],
      department: departments[idx % departments.length],
      hiringManager: managers[idx % managers.length],
      postedDate: `2025-09-${String((idx % 28) + 1).padStart(2, "0")}`,
      applications: applications[idx % applications.length],
      status: statuses[idx % statuses.length],
    }
  })

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

            {/* Header with count */}
            <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg text-[#323232] font-semibold">
                  Job Openings
                </h2>
                <p className="text-[#8E57EB] font-bold"> ({jobData.length})</p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-[100%] border-collapse text-center">
                <thead>
                  <tr className="bg-gray-200 text-[#323232] text-sm">
                    <th className="px-3 py-2">Job ID</th>
                    <th className="px-3 py-2">Job Title</th>
                    <th className="px-3 py-2">Department</th>
                    <th className="px-3 py-2">Hiring Manager</th>
                    <th className="px-3 py-2">Posted Date</th>
                    <th className="px-3 py-2">Applications</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-100 text-[#585858] text-xs">
                      <td className="px-3 py-2">{row.jobId}</td>
                      <td className="px-3 py-2">{row.jobTitle}</td>
                      <td className="px-3 py-2">{row.department}</td>
                      <td className="px-3 py-2">{row.hiringManager}</td>
                      <td className="px-3 py-2">{row.postedDate}</td>
                      <td className="px-3 py-2">{row.applications}</td>
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
