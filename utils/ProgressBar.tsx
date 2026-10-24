"use client"
import { motion } from "framer-motion"
import React from "react"

interface ProgressBarProps {
  percent: number
  fromColor: string
  toColor: string
  label?: string
  onClick?: () => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  fromColor,
  toColor,
  label,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#E6E6E6] h-6 w-full rounded-r-full overflow-hidden ${
        onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : ""
      }`}
    >
      <motion.div
        className={`h-full rounded-r-full bg-gradient-to-r ${fromColor} ${toColor}`}
        initial={{ width: "0%" }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  )
}

export default ProgressBar
