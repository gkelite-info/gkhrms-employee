"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

type CountCardProps = {
  title: string
  count: number
  icon: React.ReactNode
  iconBg?: string
  style?: string
}

const CountCard: React.FC<CountCardProps> = ({
  title,
  count,
  icon,
  iconBg = "#E0DEFBD6",
  style = 'h-[100px]'
}) => {
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = count
    if (start === end) return

    const increment = end / 50
    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(counter)
      }
      setDisplayCount(Math.floor(start))
    }, 30)

    return () => clearInterval(counter)
  }, [count])

  return (
    <motion.div
      className={`w-full md:w-[250px] bg-white shadow rounded-lg flex justify-around items-center ${style}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.span
        className="w-[50px] h-[50px] rounded-full flex justify-center items-center"
        style={{ backgroundColor: iconBg }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        {icon}
      </motion.span>

      <div className="flex flex-col gap-1">
        <motion.span
          className="text-xs text-[#323232]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.span>
        <motion.span
          className="text-[28px] text-[#323232] font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
        >
          {displayCount}
        </motion.span>
      </div>
    </motion.div>
  )
}

export default CountCard
