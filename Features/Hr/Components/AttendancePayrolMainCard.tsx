import React from "react"
import AttendanceLeaveCard from "./AttendanceLeaveCard"
import PayroleDashboardCard from "./PayroleDashboardCard"

const AttendancePayrolMainCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <AttendanceLeaveCard />
      <PayroleDashboardCard />
    </div>
  )
}

export default AttendancePayrolMainCard
