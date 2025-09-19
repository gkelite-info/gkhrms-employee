import React from "react"
import RetentionAlertCard from "../../../../../../features/admin/components/RetentionAlert/RetentionAlertCard"
import RetentionTableWithHealth from "../../../../../../features/admin/components/RetentionAlert/RetentionTableWithHealth"

const RetentionAlert = () => {
  return (
    <div className="flex flex-col gap-2.5 p-4 w-full">
      <h2 className="text-sm text-[#323232] font-semibold">
        Archival Schedule
      </h2>
      <p className="text-xs font-medium text-[#414141]">
        Monitor and manage employee data based on retention policies.
      </p>
      <RetentionAlertCard />
      <RetentionTableWithHealth />
    </div>
  )
}

export default RetentionAlert
