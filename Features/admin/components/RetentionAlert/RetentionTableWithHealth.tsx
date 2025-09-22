import React from "react"
import RetentionAlertTable from "./RetentionAlertTable"
import RetentionAlertHealth from "./RetentionAlertHealth"

const RetentionTableWithHealth = () => {
  return (
    <div className="w-full flex gap-2.5 h-[330px]">
      <RetentionAlertTable />
      <RetentionAlertHealth />
    </div>
  )
}

export default RetentionTableWithHealth
