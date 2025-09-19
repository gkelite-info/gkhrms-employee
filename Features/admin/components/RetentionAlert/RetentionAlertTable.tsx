"use client"
import React from "react"
import { useRetentionAlertTable } from "../../data/retention-alert-table.data"
import { useRetentionAlertHook } from "../../hooks/retention-alert.hook"
import DataWrapper from "../../../../utils/DataWrapper"
import Table from "../../../../utils/Table/Table"

const RetentionAlertTable = () => {
  const { column } = useRetentionAlertTable()
  const { retentionAlert } = useRetentionAlertHook()
  return (
    <div className="w-[60%] h-full bg-white rounded-lg p-3 ">
      <div className="w-full h-full overflow-y-scroll">
        <DataWrapper loading={false} error={null} data={retentionAlert}>
          <Table
            columns={column}
            data={retentionAlert}
            bgColor="#EAEAEA"
            headerTextColor="#000"
            tableItemBg="#F9FAFB"
          />
        </DataWrapper>
      </div>
    </div>
  )
}

export default RetentionAlertTable
