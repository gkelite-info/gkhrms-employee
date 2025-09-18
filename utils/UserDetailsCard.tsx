"use client"
import { MapPin, Moon, Sun } from "phosphor-react"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MicrCircle from "./MicrCircle"

const UserDetailsCard = () => {
  const [today, setToday] = useState("")
  const [timeString, setTimeString] = useState("")
  const [isDaytime, setIsDaytime] = useState(true)

  useEffect(() => {
    const now = new Date()
    setToday(
      now.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTimeString(
        now
          .toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
          .toUpperCase()
      )

      const hour = now.getHours()
      setIsDaytime(hour >= 6 && hour < 18)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[100%] bg-red-00 h-auto flex items-between overflow-y-auto"
    >
      <div className="bg-red-00 flex h-31 w-[65%]">
        <div className="w-[15%] flex justify-center pl-2">
          <div className="bg-white text-xs text-black h-15 w-15 rounded-full mt-4 flex items-center justify-center">
            Profile
          </div>
        </div>
        <div className="w-[85%] flex flex-col pt-2">
          <h2 className="text-[#323232] text-3xl font-semibold">
            Good Morning !
          </h2>
          <div className="flex items-end justify-between pr-10">
            <p className="text-[#4B4B4B] text-xs mt-1">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry
            </p>
          </div>

          <div className="flex w-full mt-2 gap-4">
            <div className="flex items-center gap-2 w-[20%]">
              <MapPin size={15} weight="fill" className="text-[#323232]" />
              <p className="text-[#323232] text-xs font-medium">Location</p>
            </div>
            <div className="flex items-center w-[80%] px-3 gap-2">
              {isDaytime ? (
                <Sun size={23} color="#ffc800" weight="fill" />
              ) : (
                <Moon size={23} color="#9e9e9e" weight="fill" />
              )}
              <p className="text-xs text-[#323232] font-medium">{today}</p>
              <p className="text-2xl text-[#323232] font-semibold ml-2">
                {timeString}
              </p>
            </div>
          </div>
        </div>
      </div>
      <MicrCircle />
    </motion.div>
  )
}

export default UserDetailsCard
