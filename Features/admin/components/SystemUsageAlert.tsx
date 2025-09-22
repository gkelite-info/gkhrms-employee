'use client';
import React from "react"
import FullPieGraph from "./FullPieGraph"
import { useRouter } from "next/navigation"

const SystemUsageAlert = () => {

  const router = useRouter();

  const dailyActiveUser = [
    { value: 40, color: "#9D82E7", legend: "Daily Active User" },
    { value: 30, color: "#7855E0", legend: "Monthly Active User" },
  ]

  const mostUser = [
    { value: 60, color: "#D295F8", legend: "Payroll" },
    { value: 30, color: "#220733", legend: "Search" },
    { value: 30, color: "#4f3354", legend: "Leaves" },
  ]

  const licenseUtilization = [
    { value: 60, color: "#D295F8", legend: "Active" },
    { value: 30, color: "#220733", legend: "Inactive" },
  ]

  return (
    <div className="w-full h-[460px] lg:w-1/2 bg-white rounded-lg p-4">
      <h2 className="text-[#111827] font-semibold text-sm">
        System Usage Alert
      </h2>
      <div className="w-full flex flex-wrap gap-2 justify-center items-center">
        <FullPieGraph
          data={dailyActiveUser}
          title="Daily Active Users"
          variant="full"
          onClick={() => router.push('/admin/system_usage_alert')}
        />
        <FullPieGraph
          data={mostUser}
          title="Most Used Modules"
          variant="donut"
        />
        <FullPieGraph
          data={licenseUtilization}
          title="license utilization"
          variant="full"
          onClick={() => router.push('/admin/license_utilization')}
        />
      </div>
    </div>
  )
}

export default SystemUsageAlert
