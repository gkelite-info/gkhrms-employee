"use client"

import {  useEffect, useState  } from "react";
import { MapPin, Moon, Sun } from "phosphor-react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../../Redux/Store"
import { getEmployeeProfile } from "@/api-requests/employeeApi"

interface Person {
  location: string
  firstname: string
}

export default function EmployeeGreeting() {
  const { fullname, photoURL } = useSelector((state: RootState) => state.auth)
  const [today, setToday] = useState("")
  const [timeString, setTimeString] = useState("")
  const [isDaytime, setIsDaytime] = useState(true)
  const [profile, setProfile] = useState<Person | null>({
    firstname: "Employee",
    location: "Hyderabad",
  })

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (typeof window === "undefined") return
        const employeeId = localStorage.getItem("employeeId")
        const token = localStorage.getItem("token")

        if (!employeeId || !token) return

        const data = await getEmployeeProfile(employeeId)
        if (data) {
          setProfile(data)
        }
      } catch (error) {
        console.warn("Could not fetch employee profile details:", error)
      }
    }
    fetchProfile()
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

    const updateClock = () => {
      const current = new Date()
      setTimeString(
        current
          .toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
          .toUpperCase()
      )
      const hour = current.getHours()
      setIsDaytime(hour >= 6 && hour < 18)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  const displayName = fullname?.split(" ")[0] || profile?.firstname || "Employee"

  return (
    <div className="w-full flex items-start gap-4 pt-1 pb-3">
      {/* Profile Avatar */}
      <div className="flex-shrink-0">
        <div className="bg-white text-xs font-semibold text-[#1F2937] h-16 w-16 rounded-full shadow-sm flex items-center justify-center overflow-hidden border border-white/80">
          {photoURL ? (
            <img
              src={photoURL}
              alt={displayName}
              className="h-full w-full object-cover rounded-full"
            />
          ) : (
            <span>Profile</span>
          )}
        </div>
      </div>

      {/* Greeting and Details */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#1F2937] text-3xl font-bold tracking-tight">
          Hii {displayName} !
        </h1>
        <p className="text-[#4B4B4B] text-xs mt-1 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting Industry
        </p>

        {/* Location & Live Date / Clock */}
        <div className="flex items-center flex-wrap gap-5 mt-2.5">
          <div className="flex items-center gap-1.5">
            <MapPin size={16} weight="fill" className="text-[#323232]" />
            <span className="text-[#323232] text-xs font-medium">
              {profile?.location || "Hyderabad"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isDaytime ? (
              <Sun size={22} color="#F59E0B" weight="fill" />
            ) : (
              <Moon size={22} color="#9E9E9E" weight="fill" />
            )}
            <span className="text-xs text-[#323232] font-medium">{today}</span>
            <span className="text-2xl text-[#1F2937] font-bold ml-1 tracking-tight">
              {timeString || "10:25:17 AM"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
