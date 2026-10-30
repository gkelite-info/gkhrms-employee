"use client"

import { useRouter } from "next/navigation"
import EmployeeMeTabs, { MeTabType } from "../components/me/EmployeeMeTabs"
import EmployeeTimesheetView from "../components/me/EmployeeTimesheetView"

export default function EmployeeTimesheetDirectPage() {
  const router = useRouter()

  const handleSelectTab = (tab: MeTabType) => {
    if (tab === "overview") {
      router.push("/employee/me")
    } else if (tab === "timesheet") {
      router.push("/employee/me/timesheet")
    } else if (tab === "project_time") {
      router.push("/employee/me/project-time")
    }
  }

  return (
    <div className="w-full max-w-full flex flex-col p-4 md:p-6 pb-24 gap-5">
      <EmployeeMeTabs activeTab="timesheet" onSelectTab={handleSelectTab} />
      <EmployeeTimesheetView />
    </div>
  )
}
