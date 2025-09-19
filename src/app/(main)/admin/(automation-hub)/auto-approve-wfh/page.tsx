"use client"
import React from "react"
import AdminAutomationHub from "../../../../../../utils/AdminAutomationHub"
import { useAutoApprovedWFHTable } from "../../../../../../features/admin/data/auto-approved-wfh.table.data"
import { useAutoApprovedWfhHook } from "../../../../../../features/admin/hooks/authApprovedWFH.hoo"
import DataWrapper from "../../../../../../utils/DataWrapper"
import Table from "../../../../../../utils/Table/Table"
const AutoApprovedWFH = () => {
  const { column } = useAutoApprovedWFHTable()
  const { autoApprivedUsers } = useAutoApprovedWfhHook()

  return (
    <div className="w-full h-full bg-red-200">
      <AdminAutomationHub
        title="Automation Hub-Approve WFH (up to 2 days)"
        description="Manage Employees who can automatically get work-from-home approvals"
      >
        <div className="w-full h-full">
          <DataWrapper loading={false} error={null} data={autoApprivedUsers}>
            <Table
              columns={column}
              data={autoApprivedUsers}
              bgColor="#F9FAFB"
              headerTextColor="#000"
              tableItemBg="#F9FAFB"
              showBorder={true}
            />
          </DataWrapper>
        </div>
      </AdminAutomationHub>
    </div>
  )
}

export default AutoApprovedWFH
