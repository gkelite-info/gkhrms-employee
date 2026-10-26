"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import EmployeeMeTabs, { MeTabType } from "../components/me/EmployeeMeTabs"
import EmployeeMetricsRow from "../components/me/EmployeeMetricsRow"
import EmployeeOperationsRow from "../components/me/EmployeeOperationsRow"
import EmployeeLeaveBalance from "../components/me/EmployeeLeaveBalance"
import EmployeeAttendanceLogTable from "../components/me/EmployeeAttendanceLogTable"
import EmployeePerformanceDetail from "../components/me/EmployeePerformanceDetail"
import EmployeeTimesheetView from "../components/me/EmployeeTimesheetView"
import EmployeeProjectTimeOverview from "../components/me/EmployeeProjectTimeOverview"
import EmployeeExpensesView from "../components/me/EmployeeExpensesView"
import EmployeeTicketsView from "../components/tickets/EmployeeTicketsView"

export default function EmployeeMe() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<MeTabType>("overview")

  useEffect(() => {
    const syncTabFromUrl = () => {
      if (typeof window === "undefined") return
      const params = new URLSearchParams(window.location.search)
      const tabParam = (params.get("tab") || params.get("view") || "").toLowerCase()
      const subtabParam = params.get("subtab")
      if (subtabParam) {
        setActiveTab("expenses_travel")
      } else if (tabParam === "timesheet") {
        setActiveTab("timesheet")
      } else if (tabParam === "performance" || tabParam === "monthly_performance" || tabParam === "monthly-performance") {
        setActiveTab("monthly_performance")
      } else if (tabParam === "project_time" || tabParam === "project_overview" || tabParam === "project-time") {
        setActiveTab("project_time")
      } else if (tabParam === "expenses" || tabParam === "expenses_travel" || tabParam === "expenses-travel") {
        setActiveTab("expenses_travel")
      } else if (tabParam === "tickets") {
        setActiveTab("tickets" as any)
      } else if (tabParam === "overview") {
        setActiveTab("overview")
      }
    }

    syncTabFromUrl()
    window.addEventListener("popstate", syncTabFromUrl)
    return () => window.removeEventListener("popstate", syncTabFromUrl)
  }, [])

  const handleSelectTab = (tab: MeTabType) => {
    setActiveTab(tab)
    if (tab === "timesheet") {
      router.push("/employee/me/timesheet")
    } else if (tab === "overview") {
      router.push("/employee/me")
    } else if (tab === "project_time") {
      router.push("/employee/me/project-time")
    } else if (tab === "monthly_performance") {
      router.push("/employee/me/monthly-performance")
    } else if (tab === "expenses_travel") {
      router.push("/employee/me/expenses")
    }
  }

  const handleSelectPerformance = () => {
    setActiveTab("monthly_performance")
    router.push("/employee/me/monthly-performance")
  }

  const handleBackToOverview = () => {
    setActiveTab("overview")
    router.push("/employee/me")
  }

  return (
    <div className="w-full max-w-full min-w-0 flex flex-col px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6 pb-4 md:pb-6 gap-4 sm:gap-5">
      {/* Top Tab Bar (Matching Image-2 and Image-3) */}
      <EmployeeMeTabs activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Tab Content */}
      {activeTab === "timesheet" && (
        /* Timesheet Screen (Image-3) */
        <EmployeeTimesheetView />
      )}

      {activeTab === "project_time" && (
        /* Project Time Overview Screen (Image-2) */
        <EmployeeProjectTimeOverview />
      )}

      {activeTab === "monthly_performance" && (
        /* Monthly Performance Detail Screen (Matches user screenshot) */
        <EmployeePerformanceDetail />
      )}

      {activeTab === "expenses_travel" && (
        /* Expenses & Travel Screen (Matches user screenshot) */
        <EmployeeExpensesView onAddMore={() => router.push("/employee/me/tickets")} />
      )}

      {(activeTab as string) === "tickets" && (
        /* Open Tickets & ClosedTickets Screen (Image-2) */
        <EmployeeTicketsView onBack={() => handleSelectTab("expenses_travel")} />
      )}

      {activeTab === "overview" && (
        /* Overview Screen (Image-2 from previous turn) */
        <>
          {/* 1. Top 4 Metric Cards (Alexander, Attendance 95%, Attendance Requests, Performance 95%) */}
          <EmployeeMetricsRow
            onSelectPerformance={handleSelectPerformance}
          />

          {/* 2. 3 Operations Cards (Attendance Stats, Clickable Timings card, Actions with live digital clock & Remote Check-Out) */}
          <EmployeeOperationsRow
            onSelectTimings={() => handleSelectTab("timesheet")}
          />

          {/* 3. Leave Balance (5 gradient progress capsules: Sick, Paid, Holidays, Unpaid, Vacation) */}
          <EmployeeLeaveBalance />

          {/* 4. Attendance Log Section (30 DAYS, JUN, MAY, etc., and 12-column table with 18 records & mood smileys) */}
          <EmployeeAttendanceLogTable />
        </>
      )}

      {/* Bottom clearance spacer so content never touches the bottom of the viewport when scrolled */}
      <div className="w-full h-4 shrink-0" aria-hidden="true" />
    </div>
  )
}