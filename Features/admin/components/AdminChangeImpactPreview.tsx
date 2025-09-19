"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const data = [
  {
    name: "Employee shift timing",
    values: [40, 70],
    colors: ["from-purple-400 to-purple-600", "from-pink-400 to-pink-600"],
    labels: ["Shift A", "Shift B"],
    navLink: "/admin/image-impact-preview",
  },
  {
    name: "Payroll",
    values: [155, 200],
    colors: ["from-green-400 to-green-600", "from-yellow-400 to-yellow-600"],
    labels: ["HR", "Finance"],
    navLink: "/admin/image-impact-preview",
  },
  {
    name: "All policy changes",
    values: [80, 50],
    colors: ["from-blue-400 to-blue-600", "from-red-400 to-red-600"],
    labels: ["Policy A", "Policy B"],
    navLink: "/admin/image-impact-preview",
  },
]

const AdminChangeImpactPreview: React.FC = () => {
  const [selected, setSelected] = useState(0)
  const selectedItem = data[selected]

  const maxValue = Math.max(...selectedItem.values)

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-2">
      <h2 className="text-[#111827] font-semibold text-sm">
        Change Impact Preview
      </h2>

      <div className="w-full flex justify-between items-start gap-4">
        {/* Left side buttons */}
        <div className="w-1/2 flex flex-col gap-3">
          {data.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`text-sm text-[#464646] text-left px-2 py-2 rounded-md cursor-pointer ${
                selected === idx
                  ? "bg-indigo-100 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right side bars */}
        <div className="w-1/2 flex items-end justify-center gap-20">
          {selectedItem.values.map((val, idx) => {
            const heightPercent = (val / maxValue) * 100

            return (
              <Link
                href={selectedItem.navLink}
                key={idx}
                className="flex flex-col items-center"
              >
                <div className="relative w-10 h-30 bg-gray-200 rounded-md overflow-hidden flex items-end">
                  <motion.div
                    className={`w-full bg-gradient-to-t ${selectedItem.colors[idx]} rounded-md`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${heightPercent}%` }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </div>
                <span className="mt-2 text-xs text-gray-600">
                  {selectedItem.labels
                    ? selectedItem.labels[idx]
                    : `Bar ${idx + 1}`}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminChangeImpactPreview
