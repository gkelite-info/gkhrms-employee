"use client"

import { useRouter } from "next/navigation"
import EmployeeMeTabs, { MeTabType } from "../components/me/EmployeeMeTabs"
import EmployeeProjectTimeOverview from "../components/me/EmployeeProjectTimeOverview"

export default function EmployeeProjectTimeDirectPage() {
  const router = useRouter()

  const handleSelectTab = (tab: MeTabType) => {
    if (tab === "overview") {
      router.push("/employee/me")
    } else if (tab === "timesheet") {
      router.push("/employee/me/timesheet")
    } else if (tab === "project_time") {
      router.push("/employee/me/project-time")
    } else if (tab === "monthly_performance") {
      router.push("/employee/me?tab=monthly_performance")
    } else if (tab === "expenses_travel") {
      router.push("/employee/me?tab=expenses_travel")
    }
  }

  return (
    <div className="w-full max-w-full flex flex-col p-4 md:p-6 pb-24 gap-5">
      <EmployeeMeTabs activeTab="project_time" onSelectTab={handleSelectTab} />
      <EmployeeProjectTimeOverview />
    </div>
  )
}
