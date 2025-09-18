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

export default function Dashboard() {
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
        <div className="bg-white rounded-lg flex items-center justify-between h-40 w-[95%] mt-1 shadow-md">
          <div className="w-[60%] h-[100%] bg-green-00 flex flex-col gap-1 items-start justify-between p-3 rounded-l-lg">
            <div className="bg-red-00 h-[35%] w-[100%] flex justify-between">
              <p className="text-xs text-[#323232] font-medium">
                Today's Login Time
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
        <div className="rounded-lg flex items-center justify-between h-50 w-[95%] mt-2">
          <TaskCard />
          <div className="bg-white h-[100%] w-[49%] rounded-lg shadow-md">
            <div className="bg-blue-00 h-[100%] w-[100%] rounded-lg p-2 flex flex-col">
              <h3 className="font-semibold text-[#111827] text-sm">
                Direct Links
              </h3>
              <div className="w-[100%] h-[15%] flex justify-between items-center mt-1">
                <div className="flex bg-red-00 flex items-center">
                  <div className="rounded-full h-5 w-5 bg-[#272372] flex items-center justify-center">
                    <p className="text-xs font-semibold text-white">5</p>
                  </div>
                  <p className="text-[#272372] font-medium ml-2 text-xs">
                    Links
                  </p>
                </div>
              </div>
              <div className="h-[85%] w-[100%] bg-green-00 flex flex-col p-3 pl-0 justify-between">
                <div className="flex w-[100%] bg-red-00 items-center">
                  <a
                    href="https://www.gkeliteinfo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272372] text-xs ml-3"
                  >
                    GKElite
                  </a>
                </div>
                <div className="flex w-[100%] bg-red-00 items-center">
                  <a
                    href="https://www.gkeliteinfo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272372] text-xs ml-3"
                  >
                    OutlookLink
                  </a>
                </div>
                <div className="flex w-[100%] bg-red-00 items-center">
                  <a
                    href="https://www.gkeliteinfo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272372] text-xs ml-3"
                  >
                    GooglemeetLink
                  </a>
                </div>
                <div className="flex w-[100%] bg-red-00 items-center">
                  <a
                    href="https://www.gkeliteinfo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272372] text-xs ml-3"
                  >
                    ZoommeetLink
                  </a>
                </div>
                <div className="flex w-[100%] bg-red-00 items-center">
                  <a
                    href="https://www.gkeliteinfo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272372] text-xs ml-3"
                  >
                    OutlookLink
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyTeam />
        <div className="bg-white rounded-lg flex flex-col items-center h-85 w-[95%] mt-2 shadow-md mb-7 pt-3">
          <h3 className="text-[#111827] font-semibold">Attendance Tracker</h3>
          <div className="flex justify-between w-[100%] h-[80%] mt-3">
            <div className="bg-blue-00 w-[56%] h-[100%] flex flex-col items-center p-2">
              <div className="bg-[#F7D396] w-[23%] flex items-center justify-center rounded-md">
                <h2 className="text-black text-md">Monthly</h2>
              </div>
              <PercentPie />
            </div>
            <div className="bg-red-00 w-[44%] h-[100%] flex flex-col items-start text-center p-2 gap-2">
              <div className="w-full flex justify-center">
                <div className="bg-[#F7D396] w-[25%] flex items-center justify-center rounded-md">
                  <h2 className="text-black text-md">Yearly</h2>
                </div>
              </div>
              <div className="bg-blue-00 mt-2 h-full w-[90%] flex flex-col justify-between">
                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                  <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#A7A2F2] to-[#4C43DB] rounded-r-full"></div>
                </div>
                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                  <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#FF9FF1] to-[#9D338E] rounded-r-full"></div>
                </div>
                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                  <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#FFC055] to-[#CA8106] rounded-r-full"></div>
                </div>
                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                  <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#E83E1B] to-[#82230F] rounded-r-full"></div>
                </div>
                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                  <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#F8FF91] to-[#B8C500] rounded-r-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-pink-00 w-[95%] h-[15%] flex items-center justify-between">
            <div className="bg-white w-[20%] flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#6366F1] flex items-center justify-center">
                <img
                  src="/images/sick.png"
                  alt="sick.png"
                  style={{ height: 21 }}
                />
              </div>
              <p className="text-xs text-black">Sick Leaves</p>
            </div>
            <div className="bg-white w-[20%] flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#FF9FF1] flex items-center justify-center">
                <img
                  src="/images/paidLeaves.png"
                  alt="paidLeaves.png"
                  style={{ height: 14, marginBottom: 2 }}
                />
              </div>
              <p className="text-xs text-black">Paid Leaves</p>
            </div>
            <div className="bg-white w-[18%] flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#F59E0B] flex items-center justify-center">
                <img
                  src="/images/holidays.png"
                  alt="holidays.png"
                  style={{ height: 16, marginBottom: 2 }}
                />
              </div>
              <p className="text-xs text-black">Holidays</p>
            </div>
            <div className="bg-white w-[22%] flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#CB7475] flex items-center justify-center">
                <img
                  src="/images/unpaidLeaves.png"
                  alt="unpaidLeaves.png"
                  style={{ height: 20, marginBottom: 2, marginRight: 1 }}
                />
              </div>
              <p className="text-xs text-black">Unpaid Leaves</p>
            </div>
            <div className="bg-white w-[20%] flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#F8FF91] flex items-center justify-center">
                <img
                  src="/images/vacation.png"
                  alt="vacation.png"
                  style={{ height: 17 }}
                />
              </div>
              <p className="text-xs text-black">Vacation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-00 w-[40%] flex flex-col">
        <div className="w-[95%] bg-white h-34 rounded-lg shadow-md mt-3">
          <div className="bg-red-00 h-[35%] flex items-center justify-between py-2 px-3 rounded-t-lg border-0 border-b-[#C2C2C2] border-b-1">
            <div className="bg-green-00 w-[30%] flex items-center justify-center">
              <NotePencil
                size={23}
                color="#00AF9B"
                className="cursor-pointer"
              />
              <p className="text-[#111827] ml-1 font-medium text-sm cursor-pointer">
                Post
              </p>
            </div>
            <div className="bg-green-00 w-[30%] flex items-center justify-center">
              <ChartBar size={23} color="#AD5A5A" className="cursor-pointer" />
              <p className="text-[#111827] ml-1 font-medium text-sm cursor-pointer">
                Poll
              </p>
            </div>
          </div>
          <div className="bg-blue-00 rounded-b-lg h-full p-2">
            <p className="text-xs text-[#545454]">
              Share the post here and tag your colleagues
            </p>
          </div>
        </div>
        <div className="shadow-md h-15 w-[95%] bg-[#C5C1FF] mt-2 p-3 rounded-lg flex justify-between">
          <div className="h-full w-[32%] bg-white flex items-center justify-center gap-1 px-3 rounded-lg">
            <Cake size={16} color="#1F2937" />
            <p style={{ fontWeight: "500", fontSize: 10, color: "#323232" }}>
              Birthdays
            </p>
          </div>
          <div className="h-full w-[32%] bg-white flex items-center justify-center rounded-lg">
            <p style={{ fontSize: 10, fontWeight: "500", color: "#323232" }}>
              0 Work Anniversaries
            </p>
          </div>
          <div className="h-full w-[32%] bg-white flex items-center justify-between px-3 rounded-lg">
            <UsersThree size={16} color="#1F2937" />
            <p style={{ fontWeight: "500", fontSize: 10, color: "#323232" }}>
              0 New Joiners
            </p>
          </div>
        </div>
        <div className="shadow-md h-76 w-[95%] bg-white mt-2 rounded-lg">
          <div className="bg-red-00 h-[15%] flex items-center justify-between px-3 py-2 rounded-t-lg">
            <div className="bg-red-00 w-[30%] h-[100%] flex items-center justify-start gap-2">
              <Megaphone
                size={18}
                color="#111827"
                className="transform -scale-x-100 cursor-pointer"
              />
              <p className="text-xs cursor-pointer text-[#111827]">
                Quick Update
              </p>
            </div>
            <div className="bg-red-00 w-[30%] h-[100%] flex items-center justify-center gap-2">
              <Eye
                size={18}
                color="#111827"
                className="transform -scale-x-100 cursor-pointer"
              />
              <p className="text-xs cursor-pointer text-[#111827]">View More</p>
            </div>
            <div className="bg-red-00 w-[30%] h-[100%] flex items-center justify-end gap-2">
              <div className="bg-[#C5C1FF] h-5 w-5 flex items-center justify-center cursor-pointer">
                <Plus
                  size={17}
                  color="#111827"
                  weight="fill"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="h-65 bg-green-00 rounded-b-lg flex flex-col items-start p-2 pt-0">
            <p className="text-[#1C2334] font-medium text-xs">
              Employee of the Month
            </p>
            <div className="bg-blue-00 w-[100%] flex items-center justify-center mt-1">
              <img
                src="/images/eom.png"
                alt="eom.png"
                className="rounded-lg h-45 w-[80%]"
              />
            </div>
            <div className="bg-red-00 mt-3 flex items-center justify-center gap-7 w-[100%]">
              <div className="flex flex-col items-center justify-center">
                <Heart size={20} color="#1C2334" className="cursor-pointer" />
                <p className="text-xs text-[#1C2334] cursor-pointer">Like</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ChatCircleDots
                  size={20}
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Comment</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Repeat size={20} color="#1C2334" className="cursor-pointer" />
                <p className="text-xs text-[#1C2334] cursor-pointer">Repost</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ShareNetwork
                  size={20}
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Share</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md h-68 w-[95%] bg-white mt-2 rounded-lg">
          <div className="h-68 bg-green-00 rounded-b-lg flex flex-col items-start p-2">
            <p className="text-[#1C2334] font-medium text-sm">
              Occation of the Day.
            </p>
            <div className="bg-blue-00 w-[100%] flex items-center justify-center mt-2">
              <img
                src="/images/occation.png"
                alt="occation.png"
                className="rounded-lg h-45 w-[80%]"
              />
            </div>
            <div className="bg-red-00 mt-3 flex items-center justify-center gap-7 w-[100%]">
              <div className="flex flex-col items-center justify-center">
                <Heart
                  size={20}
                  weight="regular"
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Like</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ChatCircleDots
                  size={20}
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Comment</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Repeat size={20} color="#1C2334" className="cursor-pointer" />
                <p className="text-xs text-[#1C2334] cursor-pointer">Repost</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ShareNetwork
                  size={20}
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Share</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md h-68 w-[95%] bg-white mt-2 rounded-lg">
          <div className="h-68 bg-green-00 rounded-b-lg flex flex-col items-start p-2">
            <p className="text-[#1C2334] font-medium text-sm">
              Spotlight Events.
            </p>
            <div className="bg-blue-00 w-[100%] flex items-center justify-center mt-2">
              <img
                src="/images/event.jpg"
                alt="event.jpg"
                className="rounded-lg h-45 w-[80%]"
              />
            </div>
            <div className="bg-red-00 mt-3 flex items-center justify-center gap-7 w-[100%]">
              <div className="flex flex-col items-center justify-center">
                <Heart
                  size={20}
                  weight="regular"
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Like</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ChatCircleDots
                  size={20}
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Comment</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Repeat size={20} color="#1C2334" className="cursor-pointer" />
                <p className="text-xs text-[#1C2334] cursor-pointer">Repost</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ShareNetwork
                  size={20}
                  color="#1C2334"
                  className="cursor-pointer"
                />
                <p className="text-xs text-[#1C2334] cursor-pointer">Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
