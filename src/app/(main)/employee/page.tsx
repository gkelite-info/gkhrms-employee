"use client"
import {
  Cake,
  ChartBar,
  ChatCircleDots,
  Eye,
  Heart,
  MapPin,
  Megaphone,
  Moon,
  NotePencil,
  Plus,
  Repeat,
  ShareNetwork,
  SignIn,
  SignOut,
  Sun,
  UsersThree,
} from "phosphor-react"
import { useEffect, useState } from "react"
import TaskCard from "../../../../utils/taskCard"
import MyTeam from "../../../../utils/myTeam"
import PercentPie from "../../../../utils/pieChart"
import PostUploadCard from "../../../../utils/PostUploadCard"
import BirthdatNewJoinCount from "../../../../utils/BirthdatNewJoinCount"
import QuickUpdatedPostCard from "../../../../utils/QuickUpdatedPostCard"
import PostItem from "../../../../utils/PostItem"
import Calendar from "react-calendar"
import PendingTaskCard from "../../../../utils/pendingTaskcard"
import MeetingCalendarComp from "../../../../utils/meetingCalendar"
import DashboardAttendanceTracker from "../../../../utils/DashboardAttendanceTracker"

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function Dashboard() {
  const [value, onChange] = useState<Value>(new Date())
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
    <div className="flex justify-between">
      <div className="w-[60%] h-auto flex flex-col items-center overflow-y-auto">
        <div className="bg-red-00 flex h-31 w-[95%]">
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
        <div className="bg-[#F9FAFB] rounded-lg flex items-center justify-between h-40 w-[95%] mt-1 shadow-md">
          <div className="w-[60%] h-[100%] bg-green-00 flex flex-col gap-1 items-start justify-between p-3 rounded-l-lg">
            <div className="bg-red-00 h-[35%] w-[100%] flex justify-between">
              <p className="text-xs text-[#323232] font-medium">
                Today&apos;s Login Time
              </p>
              <div className="h-[100%] w-[45%] bg-white flex flex-col justify-between">
                <div className="bg-blue-00 h-[49%] w-[100%] flex items-center gap-1">
                  <p className="text-[#007752] font-medium text-xs">Log In</p>
                  <SignIn size={19} color="#007752" weight="fill" />
                  <p className="text-[#007752] text-xs">:</p>
                  <p className="text-[#007752] text-xs">10:30 AM</p>
                </div>
                <div className="bg-blue-00 h-[49%] w-[100%] flex items-center gap-1">
                  <p className="text-[#B31212] font-medium text-xs">Log Out</p>
                  <SignOut size={19} color="#B31212" weight="fill" />
                  <p className="text-[#B31212] text-xs">:</p>
                  <p className="text-[#B31212] text-xs">07:30 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-00 h-[65%] w-[100%] flex flex-col justify-between">
              <div className="h-[32%] bg-blue-00 flex items-center gap-5">
                <p className="text-xs font-medium text-[#323232] w-[50%]">
                  Total Effective Hours
                </p>
                <p className="text-xs font-semibold text-[#100E2E]">5 Hours</p>
              </div>
              <div className="h-[32%] bg-blue-00 flex items-center gap-5">
                <p className="text-xs font-medium text-[#323232] w-[50%]">
                  Total Break
                </p>
                <p className="text-xs font-semibold text-[#100E2E]">2 Hours</p>
              </div>
              <div className="h-[32%] bg-blue-00 flex items-center gap-5">
                <p className="text-xs font-medium text-[#323232] w-[50%]">
                  Total Gross Hours
                </p>
                <p className="text-xs font-semibold text-[#100E2E]">1 Hour</p>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[100%] flex items-center justify-center">
            <div className="h-[75%] w-[85%] bg-gradient-to-b from-[#D0CEF7] to-[#E7E7E8] flex flex-col rounded-lg">
              <div className="w-[100%] bg-blue-00 h-[30%] flex items-end justify-center rounded-tr-lg rounded-tl-lg">
                <h3 className="font-semibold text-white">Mood Tracker</h3>
              </div>
              <div className="w-[100%] h-[70%] bg-red-00 flex items-center justify-center gap-3 rounded-br-lg rounded-bl-lg">
                <div className="bg-green-00 flex flex-col justify-center items-center">
                  <img
                    src="/images/happy.png"
                    alt="happy.png"
                    className="h-7.5 w-7.5 cursor-pointer hover:h-9 hover:w-9 transition-all hover:-translate-y-1 duration-200"
                  />
                  <p
                    style={{ fontSize: 8, color: "#111827", cursor: "pointer" }}
                  >
                    Happy
                  </p>
                </div>
                <div className="bg-green-00 flex flex-col justify-center items-center">
                  <img
                    src="/images/sad.png"
                    alt="happy.png"
                    className="h-7.5 w-7 cursor-pointer hover:h-9.5 hover:w-9 transition-all hover:-translate-y-1 duration-200"
                  />
                  <p
                    style={{ fontSize: 8, color: "#111827", cursor: "pointer" }}
                  >
                    Sad
                  </p>
                </div>
                <div className="bg-green-00 flex flex-col justify-center items-center">
                  <img
                    src="/images/cool.png"
                    alt="happy.png"
                    className="h-7.5 w-7 cursor-pointer hover:h-9.5 hover:w-9 transition-all hover:-translate-y-1 duration-200"
                  />
                  <p
                    style={{ fontSize: 8, color: "#111827", cursor: "pointer" }}
                  >
                    Cool
                  </p>
                </div>
                <div className="bg-green-00 flex flex-col justify-center items-center">
                  <img
                    src="/images/relaxed.png"
                    alt="happy.png"
                    className="h-7.5 w-7 cursor-pointer hover:h-9.5 hover:w-9 transition-all hover:-translate-y-1 duration-200"
                  />
                  <p
                    style={{ fontSize: 8, color: "#111827", cursor: "pointer" }}
                  >
                    Relaxed
                  </p>
                </div>
                <div className="bg-green-00 flex flex-col justify-center items-center">
                  <img
                    src="/images/angry.png"
                    alt="happy.png"
                    className="h-8 w-7.5 cursor-pointer hover:h-10 hover:w-9.5 transition-all hover:-translate-y-1 duration-200"
                  />
                  <p
                    style={{ fontSize: 8, color: "#111827", cursor: "pointer" }}
                  >
                    Angry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-400 rounded-lg flex flex-col justify-center items-between h-95 w-[95%] mt-2">
          <TaskCard
            style="w-[100%]"
            gapStyle="w-[14%]"
            rounded="rounded-t-lg"
            boxShadow="shadow-md"
            customHeight="h-[70%]"
          />
          <PendingTaskCard style="w-[100%]" rounded="rounded-b-lg" />
        </div>
        <MeetingCalendarComp />
        <div className="bg-[#F9FAFB] rounded-lg flex flex-col items-center h-85 w-[95%] mt-2 shadow-md pt-3 p-3">
          <h3 className="text-[#111827] font-semibold">Attendance Tracker</h3>
          <DashboardAttendanceTracker />
        </div>
        <MyTeam />
      </div>
      <div className="bg-yellow-00 w-[40%] flex flex-col">
        <PostUploadCard />
        <BirthdatNewJoinCount />
        <QuickUpdatedPostCard />
        <PostItem
          imageUrl="/images/occation.png"
          title="Occation of the Day."
        />
        <PostItem imageUrl="/images/event.jpg" title="Spotlight Events." />
      </div>
    </div>
  )
}
