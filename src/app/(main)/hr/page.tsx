"use client"

import EmployeeCountCard from "../../../../Features/Hr/Components/EmployeeCountCard"
import TrainingExpiringDocMainCard from "../../../../Features/Hr/Components/TrainingExpiringDocMainCard"
import UserDetailsCard from "../../../../utils/UserDetailsCard"
import AttendancePayrolMainCard from "../../../../Features/Hr/Components/AttendancePayrolMainCard"
import DashboardGraphsContainer from "../../../../Features/Hr/Components/DashboardGraphsContainer"

const HrDashboard = () => {
  return (
    <div className="w-full flex-1 p-3 sm:p-4 md:p-6 pb-16 sm:pb-8 flex flex-col gap-4 max-w-[1600px] mx-auto min-w-0 overflow-x-hidden">
      <UserDetailsCard />
      <EmployeeCountCard />
      <DashboardGraphsContainer />
      <AttendancePayrolMainCard />
      <TrainingExpiringDocMainCard />
    </div>
  )
}

export default HrDashboard
