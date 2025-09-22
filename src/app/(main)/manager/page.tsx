"use client"

import {
  CheckCircle,
  MapPin,
  Megaphone,
  Moon,
  SignIn,
  SignOut,
  Sun,
  WarningCircle,
  XCircle,
} from "phosphor-react"
import { useEffect, useState } from "react"
import NotificationCount from "../../../../utils/notificationCount"
import TeamSnapshot from "../../../../features/manager/components/teamSnapshot"
import TeamLeads from "../../../../features/manager/components/teamLeads"
import TaskCard from "../../../../utils/taskCard"
import PendingTaskCard from "../../../../utils/pendingTaskcard"
import LeaveTable from "../../../../utils/leaveTable"
import PercentPie from "../../../../utils/pieChart"
import Table from "../../../../utils/Table/Table"
import KeenSlider from "../../../../utils/keen-slider"
import { useAttendanceLeavsUserTableData } from "../../../../features/hr/data/AttendanceLeaveUser.data"
import { useAttendaceLeavsHook } from "../../../../features/hr/hooks/AttendanceLeaves.hook"
import UserDetailsCard from "../../../../utils/UserDetailsCard"
import LoginLogoutMoodtracker from "../../../../utils/LoginLogoutMoodtracker"
import DashboardAttendanceTracker from "../../../../utils/DashboardAttendanceTracker"
import MeetingCalendar from "../../../../utils/calendar"
import MeetingCalendarComp from "../../../../utils/meetingCalendar"
import AttendanceLeaveCard from "../../../../features/hr/components/AttendanceLeaveCard"
import Link from "next/link"

export default function ManagerDashboard() {
  const [today, setToday] = useState("")
  const [timeString, setTimeString] = useState("")
  const [isDaytime, setIsDaytime] = useState(true)

  const { column } = useAttendanceLeavsUserTableData({ isDisplayMood: true })
  const { attendanceUser } = useAttendaceLeavsHook()

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
    <>
      <div className="flex flex-col pt-6">
        <UserDetailsCard />
        <div className="bg-blue-00 h-auto flex justify-between">
          <div className="w-[50%] bg-red-00 p-4">
            <LoginLogoutMoodtracker />
            <div className="bg-[#F9FAFB] h-82 mt-2 rounded-lg p-2 shadow-md">
              <TeamSnapshot />
              <TeamLeads />
            </div>
            <div className="h-92 bg-[#F9FAFB] flex flex-col rounded-lg mt-2 p-3 shadow-md">
              <TaskCard
                style="w-[100%]"
                gapStyle="w-[14%]"
                rounded="rounded-t-lg"
                boxShadow="shadow-none"
                customHeight="h-[60%]"
              />
              <PendingTaskCard
                style="w-[100%]"
                rounded="rounded-b-lg"
                shadow="shadow-none"
              />
            </div>
            {/* <div className="bg-[#F9FAFB] h-143 mt-2 shadow-md rounded-lg p-3 pt-0 flex flex-col items-center justify-center">
              <div className="bg-red-00 w-[98%] flex flex-col items-center gap-4 justify-between">
                <h3 className="text-[#111827] font-semibold ">
                  Attendance & Leave
                </h3>
                <DashboardAttendanceTracker />
                <div className="h-40 bg-[#F4F3FF] py-1.5 w-[100%] rounded-lg">
                  <div className="px-3 pt-3 w-full flex justify-end items-end">
                    <span className="text-end  text-xs cursor-pointer">
                      See All
                    </span>
                  </div>
                  <Table
                    columns={column}
                    data={attendanceUser}
                    bgColor="#F4F3FF"
                    headerTextColor="#000"
                  />
                </div>
              </div>
            </div> */}
            <div className="w-[100%] mt-2 rounded-lg shadow-md">
              <AttendanceLeaveCard styles="lg:w-full" />
            </div>
          </div>
          <div className="w-[50%] bg-gray-00 p-4 pt-4 pl-0">
            <div className="bg-[#F9FAFB] h-124 w-[100%] rounded-lg p-5 flex flex-col shadow-md">
              <div className="bg-indigo-00">
                <h3 className="text-md font-semibold text-[#111827]">
                  Team Performance{" "}
                </h3>
                <h4 className="text-sm font-medium text-[#111827] ml-3 mt-2">
                  Performance Highlights
                </h4>
              </div>
              <div className="bg-red-00 w-[100%] flex items-center mt-3">
                <CheckCircle size={28} color="#48A083" weight="fill" />
                <p className="text-[#464646] ml-1 text-xs">
                  2 Employees exceeded targets last.....
                </p>
              </div>
              <div className="bg-green-00 w-[100%] flex items-center mt-2 pl-0.5">
                <div className="bg-[#DE483B] rounded-full h-6 w-6 flex items-center justify-center">
                  <WarningCircle size={18} color="#FFFFFF" />
                </div>
                <p className="text-[#464646] ml-1 text-xs ml-2">
                  1 Employee lagging
                </p>
              </div>
              <div className="bg-gray-00 mt-5">
                <h2 className="text-md text-[#111827] font-semibold">
                  Workload
                </h2>
                <div className="w-[100%] bg-indigo-00 flex flex-col mt-3">
                  <h3 className="text-sm text-[#464646] font-medium">
                    John Doe
                  </h3>
                  <div className="bg-[#47A082] w-[90%] h-8 rounded-md"></div>
                </div>
                <div className="w-[100%] bg-indigo-00 flex flex-col mt-4">
                  <h3 className="text-sm text-[#464646] font-medium">
                    Jane Smith
                  </h3>
                  <div className="bg-[#47A082] w-[83%] h-8 rounded-md"></div>
                </div>
                <div className="w-[100%] bg-indigo-00 flex flex-col mt-4 gap-1">
                  <h3 className="text-sm text-[#464646] font-medium">
                    Bob Johnson
                  </h3>
                  <div className="bg-[#DE483B] w-[20%] h-8 rounded-md"></div>
                </div>
                <div className="w-[100%] bg-indigo-00 flex flex-col mt-4">
                  <h3 className="text-sm text-[#464646] font-medium">
                    John Doe
                  </h3>
                  <div className="bg-[#47A082] w-[90%] h-8 rounded-md"></div>
                </div>
              </div>
            </div>
            <MeetingCalendarComp />

            <div className="bg-[#F9FAFB] h-143 mt-2 rounded-lg shadow-md flex flex-col items-start p-4">
              <h2 className="text-lg text-[#111827] font-semibold">
                Pending Approvals
              </h2>
              <Link
                href={"/manager/pending-approvals"}
                className="bg-indigo-00 h-[94%] w-[100%] mt-2 flex flex-col justify-between"
              >
                <div className="bg-[#F9FAFB] h-[23%] rounded-lg border border-1 border-[#C3C3C3] flex">
                  <div className="bg-red-00 h-[100%] w-[55%] rounded-l-lg p-2 flex gap-4">
                    <div className="h-[100%] w-[25%] flex items-center justify-center">
                      <div className="h-17 w-17 bg-gray-400 flex items-center justify-center rounded-full">
                        I
                      </div>
                    </div>
                    <div className="bg-gray-00 h-[100%] w-[75%] flex flex-col justify-center">
                      <h3 className="font-semibold text-lg text-[#111827]">
                        Jasmine
                      </h3>
                      <h5 className="text-md text-[#575757] font-medium">
                        Leave Request
                      </h5>
                      <p className="text-xs text-[#575757] mt-1">
                        Family Event
                      </p>
                    </div>
                  </div>
                  <div className="h-[100%] w-[45%] rounded-r-lg p-2 flex items-center justify-center gap-2">
                    <button className="bg-[#3DB482] p-2 rounded-lg w-30 text-[#F9FAFB] font-semibold cursor-pointer">
                      Approve
                    </button>
                    <button className="bg-[#F66557] text-[#F9FAFB] font-semibold p-2 rounded-lg w-30 cursor-pointer">
                      Reject
                    </button>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] h-[23%] rounded-lg border border-1 border-[#C3C3C3] flex">
                  <div className="bg-red-00 h-[100%] w-[55%] rounded-l-lg p-2 flex gap-4">
                    <div className="h-[100%] w-[25%] flex items-center justify-center">
                      <div className="h-17 w-17 bg-gray-400 flex items-center justify-center rounded-full">
                        I
                      </div>
                    </div>
                    <div className="bg-gray-00 h-[100%] w-[75%] flex flex-col justify-center">
                      <h3 className="font-semibold text-lg text-[#111827]">
                        John
                      </h3>
                      <h5 className="text-md text-[#575757] font-medium">
                        Attendance Regulariz.....
                      </h5>
                      <p className="text-xs text-[#575757] mt-1">
                        Forget to Check-in
                      </p>
                    </div>
                  </div>
                  <div className="h-[100%] w-[45%] rounded-r-lg p-2 flex items-center justify-center gap-2">
                    <button className="bg-[#3DB482] p-2 rounded-lg w-30 text-[#F9FAFB] font-semibold cursor-pointer">
                      Approve
                    </button>
                    <button className="bg-[#F66557] text-[#F9FAFB] font-semibold p-2 rounded-lg w-30 cursor-pointer">
                      Reject
                    </button>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] h-[23%] rounded-lg border border-1 border-[#C3C3C3] flex">
                  <div className="bg-red-00 h-[100%] w-[55%] rounded-l-lg p-2 flex gap-4">
                    <div className="h-[100%] w-[25%] flex items-center justify-center">
                      <div className="h-17 w-17 bg-gray-400 flex items-center justify-center rounded-full">
                        I
                      </div>
                    </div>
                    <div className="bg-gray-00 h-[100%] w-[75%] flex flex-col justify-center">
                      <h3 className="font-semibold text-lg text-[#111827]">
                        Emily
                      </h3>
                      <h5 className="text-md text-[#575757] font-medium">
                        Leave Request
                      </h5>
                      <p className="text-xs text-[#575757] mt-1">
                        Client Meeting
                      </p>
                    </div>
                  </div>
                  <div className="h-[100%] w-[45%] rounded-r-lg p-2 flex items-center justify-center gap-2">
                    <button className="bg-[#3DB482] p-2 rounded-lg w-30 text-[#F9FAFB] font-semibold cursor-pointer">
                      Approve
                    </button>
                    <button className="bg-[#F66557] text-[#F9FAFB] font-semibold p-2 rounded-lg w-30 cursor-pointer">
                      Reject
                    </button>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] h-[23%] rounded-lg border border-1 border-[#C3C3C3] flex">
                  <div className="bg-red-00 h-[100%] w-[55%] rounded-l-lg p-2 flex gap-4">
                    <div className="h-[100%] w-[25%] flex items-center justify-center">
                      <div className="h-17 w-17 bg-gray-400 flex items-center justify-center rounded-full">
                        I
                      </div>
                    </div>
                    <div className="bg-gray-00 h-[100%] w-[75%] flex flex-col justify-center">
                      <h3 className="font-semibold text-lg text-[#111827]">
                        Jasmine
                      </h3>
                      <h5 className="text-md text-[#575757] font-medium">
                        Leave Request
                      </h5>
                      <p className="text-xs text-[#575757] mt-1">
                        Family Event
                      </p>
                    </div>
                  </div>
                  <div className="h-[100%] w-[45%] rounded-r-lg p-2 flex items-center justify-center gap-2">
                    <button className="bg-[#3DB482] p-2 rounded-lg w-30 text-[#F9FAFB] font-semibold cursor-pointer">
                      Approve
                    </button>
                    <button className="bg-[#F66557] text-[#F9FAFB] font-semibold p-2 rounded-lg w-30 cursor-pointer">
                      Reject
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-[#F9FAFB] h-50 shadow-md mt-2 rounded-lg p-5 pt-4">
              <div className="bg-green-00 h-[60%] flex flex-col">
                <h2 className="text-[#111827] font-medium">Financial Raise</h2>
                <div className="bg-yellow-00 h-[60%] flex items-center gap-5">
                  <div className="flex flex-col items-center justify-center gap-1 bg-indigo-00">
                    <CheckCircle size={39} color="#51B677" weight="fill" />
                    <h3 className="text-[#6C6C6C] font-medium text-xs">
                      Approval
                    </h3>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-red-00 h-15 gap-1.5">
                    <WarningCircle size={39} color="#FABD48" weight="fill" />
                    <h3 className="text-[#6C6C6C] font-medium text-xs">
                      Pending
                    </h3>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-red-00 h-15 gap-1.5">
                    <XCircle size={39} color="#DD6468" weight="fill" />
                    <h3 className="text-[#6C6C6C] font-medium text-xs">
                      Rejected
                    </h3>
                  </div>
                </div>
              </div>
              <div className="h-[40%] flex flex-col justify-center gap-1">
                <h3 className="text-[#111827] font-medium text-md">FAQ</h3>
                <input
                  type="text"
                  placeholder="Raise a concern"
                  className="border border-1 border-[#B3B3B3] text-[#6C6C6C] w-[100%] h-[60%] rounded-lg px-2 focus:outline-none text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
