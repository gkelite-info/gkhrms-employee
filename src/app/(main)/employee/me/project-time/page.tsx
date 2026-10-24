"use client"

import React from "react"
import { useRouter } from "next/navigation"
import EmployeeMeTabs, { MeTabType } from "../../components/me/EmployeeMeTabs"
import EmployeeProjectTimeOverview from "../../components/me/EmployeeProjectTimeOverview"

export default function EmployeeProjectTimePage() {
  const router = useRouter()

  const handleSelectTab = (tab: MeTabType) => {
    if (tab === "overview") {
      router.push("/employee/me")
    } else if (tab === "timesheet") {
      router.push("/employee/me/timesheet")
    } else if (tab === "project_time") {
      router.push("/employee/me/project-time")
    } else if (tab === "monthly_performance") {
      router.push("/employee/me/monthly-performance")
    } else if (tab === "expenses_travel") {
      router.push("/employee/me/expenses")
    }
  }

  return (
    <div className="w-full max-w-full min-w-0 flex flex-col p-3 sm:p-4 md:p-6 pb-20 sm:pb-24 gap-4 sm:gap-5">
      {/* Top Tab Bar with Project Time Overview Active */}
      <EmployeeMeTabs activeTab="project_time" onSelectTab={handleSelectTab} />

      {/* Projects Time Overview View (Image-2) */}
      <EmployeeProjectTimeOverview />
    </div>
  )
}
