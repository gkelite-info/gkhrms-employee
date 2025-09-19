"use client"
import React, { useState } from "react"
import { useAttendanceLeavsUserTableData } from "../data/AttendanceLeaveUser.data"
import { useAttendaceLeavsHook } from "../hooks/AttendanceLeaves.hook"
import Table from "../../../utils/Table/Table"
import DashboardAttendanceTracker from "../../../utils/DashboardAttendanceTracker"
import ModalLayout from "../../../Layouts/ModalLayout"
import AttendanceModal from "../modals/AttendanceModal"

const AttendanceLeaveCard = ({ styles = "lg:w-1/2" }) => {
  const { column } = useAttendanceLeavsUserTableData()
  const { attendanceUser } = useAttendaceLeavsHook()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`w-full bg-[#F9FAFB] rounded-lg p-[clamp(1rem,2vw,1.5rem)] items-center flex flex-col gap-4 ${styles}`}
      >
        <h3 className="text-[#323232] font-semibold text-center text-sm">
          Attendance & leave
        </h3>
        <DashboardAttendanceTracker />
        <div className="w-full bg-[#F4F3FF] shadow rounded-md overflow-hidden flex flex-col">
          <span
            onClick={() => setOpen(true)}
            className="text-end px-3 pt-3 text-[#404040] text-xs cursor-pointer"
          >
            See All
          </span>
          <Table
            columns={column}
            data={attendanceUser}
            bgColor="#F4F3FF"
            headerTextColor="#000"
          />
        </div>
      </div>
      {/* display attendance modal */}
      <ModalLayout
        open={open}
        onClose={() => setOpen(false)}
        className="w-[95%] h-[95%]"
      >
        <AttendanceModal />
      </ModalLayout>
    </>
  )
}

export default AttendanceLeaveCard
