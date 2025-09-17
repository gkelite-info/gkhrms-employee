"use client"
import React from "react"
import { useAttendanceLeavsUserTableData } from "../Data/AttendanceLeaveUser.data"
import { useAttendaceLeavsHook } from "../Hooks/AttendanceLeaves.hook"
import Table from "../../../Utils/Table/Table"
import DashboardAttendanceTracker from "../../../Utils/DashboardAttendanceTracker"

const AttendanceLeaveCard = () => {
  const { column } = useAttendanceLeavsUserTableData()
  const { attendanceUser } = useAttendaceLeavsHook()

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-[clamp(1rem,2vw,1.5rem)] items-center flex flex-col gap-4">
      <h3 className="text-[#323232] font-semibold text-center">
        Attendance & leave
      </h3>
      <DashboardAttendanceTracker />
      <div className="w-full bg-[#F4F3FF] shadow rounded-md overflow-hidden flex flex-col">
        <span className="text-end px-3 pt-3 text-xs cursor-pointer">
          See All
        </span>
        <Table
          columns={column}
          data={attendanceUser}
          bgColor="#F4F3FF"
          headerTextColor="#000"
          // tableItemBg="#fff"
          // tableItemTextColor="#000"
        />
      </div>
    </div>
  )
}

export default AttendanceLeaveCard
