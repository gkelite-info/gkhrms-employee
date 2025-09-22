"use client"
import { motion } from "framer-motion"
import React from "react"

interface ProgressBarProps {
  percent: number
  fromColor: string
  toColor: string
  label: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  fromColor,
  toColor,
  label,
}) => {
  return (
    <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full overflow-hidden">
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
