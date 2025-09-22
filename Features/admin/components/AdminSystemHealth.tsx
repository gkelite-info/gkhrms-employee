"use client"
import React from "react"
import { motion } from "framer-motion"

const AdminSystemHealth: React.FC = () => {
  return (
    <div className="w-full p-4 py-5 flex flex-col gap-4 bg-white shadow rounded-lg">
      <h2 className="text-[#111827] font-semibold text-sm">System Health</h2>
      <ProgressBar
        label="Maintanancy"
        value={30}
        color="bg-gradient-to-r from-[#D0CEF7] to-[#9891F7]"
      />
      <ProgressBar
        label="Failure Rate"
        value={70}
        color="bg-gradient-to-r from-[#D0CEF7] to-[#D291F7]"
      />
      <ProgressBar
        label="Bio Metric Rate"
        value={55}
        color="bg-gradient-to-r from-[#D0CEF7] to-[#9891F7]"
      />
    </div>
  )
}

export default AdminSystemHealth

interface ProgressBarProps {
  label?: string
  value: number
  color: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value = 0,
  color,
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && <span className="text-xs text-[#464646]">{label}</span>}
      <div className="w-full h-[15px] bg-gray-200 rounded-md relative overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-md absolute top-0 left-0`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
