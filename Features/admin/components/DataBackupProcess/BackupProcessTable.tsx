"use client"
import React from "react"
import { useBackupProcessTableData } from "../../data/backup-process-table.data"
import { useBackupProcessHook } from "../../hooks/backup-process.hook"
import DataWrapper from "../../../../utils/DataWrapper"
import Table from "../../../../utils/Table/Table"

const BackupProcessTable = () => {
  const { column } = useBackupProcessTableData()
  const { backupProcess } = useBackupProcessHook()
  return (
    <div className="w-full h-[330px] overflow-y-scroll bg-white rounded-lg p-3">
      <DataWrapper loading={false} error={null} data={backupProcess}>
        <Table
          columns={column}
          data={backupProcess}
          bgColor="#EAEAEA"
          headerTextColor="#000"
          tableItemBg="#F9FAFB"
        />
      </DataWrapper>
    </div>
  )
}

export default BackupProcessTable
