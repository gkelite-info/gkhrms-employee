"use client"
import React from "react"
import AdminAutomationHub from "../../../../../../utils/AdminAutomationHub"
import { useAutoSendRemainders } from "../../../../../../features/admin/hooks/auto-send-reminders.hook"
import DataWrapper from "../../../../../../utils/DataWrapper"
import Table from "../../../../../../utils/Table/Table"
import { useAutoSendRemindersTableData } from "../../../../../../features/admin/data/auto-send-reminders.table.data"

const AutoSendReminders = () => {
  const { column } = useAutoSendRemindersTableData()
  const { autoSendRemainders } = useAutoSendRemainders()

  return (
    <div className="w-full h-full bg-red-200">
      <AdminAutomationHub
        title="Automation Hub-Auto Send Reminders"
        description="Manage Reminder to be Automatically Sent."
        btnLable="Add Reminders"
      >
        <div className="w-full h-full">
          <DataWrapper loading={false} error={null} data={autoSendRemainders}>
            <Table
              columns={column}
              data={autoSendRemainders}
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

export default AutoSendReminders
