import React from "react"
import SystemUsageAlert from "./SystemUsageAlert"
import AdminSystemHealth from "./AdminSystemHealth"
import AdminPolicySetup from "./AdminPolicySetup"

const SystemAlrertAndHealth = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2.5">
      <SystemUsageAlert />
      <div className="w-full min-h-[460px] lg:w-1/2 flex flex-col gap-2.5">
        <AdminSystemHealth />
        <AdminPolicySetup />
      </div>
    </div>
  )
}

export default SystemAlrertAndHealth
