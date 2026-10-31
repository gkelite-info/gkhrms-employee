"use client"
import { MapPin, Moon, Sun } from "phosphor-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MicrCircle from "./MicrCircle"
import { getEmployeeProfile } from "@/api-requests/employeeApi"

interface Person {
  location: string
  firstname: string
}

const UserDetailsCard = () => {
  const [today, setToday] = useState("")
  const [timeString, setTimeString] = useState("")
  const [isDaytime, setIsDaytime] = useState(true)
  const [profile, setProfile] = useState<Person | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeId = localStorage.getItem("employeeId")

        if (!employeeId) {
          return
        }

        const data = await getEmployeeProfile(employeeId)
        setProfile(data)
      } catch (error) {
        console.error("Failed to fetch Data", error)
      }
    }
    fetchData()
  }, [])

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
      className="w-full h-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-xs min-w-0"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0 w-full sm:w-auto">
        <div className="w-12 h-12 rounded-full bg-white text-xs font-bold text-[#1F2937] shadow-xs border border-gray-100 flex items-center justify-center shrink-0">
          Profile
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <h2 className="text-[#323232] text-xl sm:text-2xl font-semibold leading-tight">
            Hii {profile?.firstname ? `${profile.firstname} !` : "!"}
          </h2>
          <p className="text-[#4B4B4B] text-xs mt-0.5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-2">
            {profile?.location && (
              <div className="flex items-center gap-1.5 text-xs text-[#323232] font-medium">
                <MapPin size={15} weight="fill" className="text-[#5B50EC]" />
                <span className="truncate">{profile.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-xs text-[#323232] font-medium">
              {isDaytime ? (
                <Sun size={20} color="#ffc800" weight="fill" />
              ) : (
                <Moon size={20} color="#9e9e9e" weight="fill" />
              )}
              <span>{today}</span>
              <span className="text-xl sm:text-2xl text-[#323232] font-semibold ml-1">
                {timeString}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 self-end sm:self-center">
        <MicrCircle />
      </div>
    </motion.div>
  )
}

export default UserDetailsCard
