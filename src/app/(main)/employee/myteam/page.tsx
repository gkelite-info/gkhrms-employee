"use client"

import StatusCards from "./components/StatusCards"
import TeamTreeChart from "./components/TeamTreeChart"
import TeamCalendar from "./components/TeamCalendar"

export default function MyTeamPage() {
  return (
    <div className="w-full min-h-full px-4 pt-4 md:px-6 md:pt-6 pb-4 md:pb-5 flex flex-col gap-5 md:gap-6 select-none">
      {/* 1. Status Summary Cards (6 Metric Cards) */}
      <StatusCards />

      {/* 2. Team Hierarchy Tree Card */}
      <TeamTreeChart />

      {/* 3. Team Calendar Section */}
      <TeamCalendar />

      {/* Small subtle bottom clearance */}
      <div className="w-full h-4 shrink-0" aria-hidden="true" />
    </div>
  )
}
