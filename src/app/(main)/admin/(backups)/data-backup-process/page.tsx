import React from "react"
import DataBackupProcessMainCard from "../../../../../../features/admin/components/DataBackupProcess/DataBackupProcessMainCard"

const DataBackupProcess = () => {
  return (
    <div className="flex flex-col gap-2.5 p-4 w-full">
      <h2 className="text-sm text-[#323232] font-semibold">
        Data Backup Progress
      </h2>
      <p className="text-xs font-medium text-[#414141]">
        Track Ongoing and past backup activites.
      </p>
      <DataBackupProcessMainCard />
    </div>
  )
}

export default DataBackupProcess
