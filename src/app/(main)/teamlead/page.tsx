"use client"

import React, { useState } from "react"
import AttendanceTabs, { TabKey } from "./components/AttendanceTabs"
import ProfileSummaryCard from "./components/ProfileSummaryCard"
import AttendanceDonutCard from "./components/AttendanceDonutCard"
import AttendanceRequestsCard from "./components/AttendanceRequestsCard"
import PerformanceDonutCard from "./components/PerformanceDonutCard"
import AttendanceStatsCard from "./components/AttendanceStatsCard"
import TimingsCard from "./components/TimingsCard"
import ActionsCard from "./components/ActionsCard"
import LeaveBalanceSection from "./components/LeaveBalanceSection"
import AttendanceLogSection from "./components/AttendanceLogSection"

export default function TeamLeadAttendancePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("my-attendance")

  return (
    <div className="w-full flex-1 p-3 sm:p-4 md:p-6 pb-16 sm:pb-8 flex flex-col gap-4 sm:gap-5 max-w-[1600px] mx-auto animate-in fade-in duration-200 min-w-0">
      <AttendanceTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProfileSummaryCard name="Alexander" employeeId="154356" />
        <AttendanceDonutCard />
        <AttendanceRequestsCard newApprovalCount={3} pendingCount={2} />
        <PerformanceDonutCard score={95} subtitle="This Month (OCT)" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        <AttendanceStatsCard />
        <TimingsCard />
        <div className="md:col-span-2 lg:col-span-1">
          <ActionsCard />
        </div>
      </div>

      <LeaveBalanceSection />

      <AttendanceLogSection />
    </div>
  )
}
