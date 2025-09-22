import React from "react"
import BackupProgressCardMain from "../../../../../../features/admin/components/Backupprogress/BackupProgressCardMain"
import BackupProgressTableGraphMain from "../../../../../../features/admin/components/Backupprogress/BackupProgressTableGraphMain"

const BackupProgras = () => {
  return (
    <div className="flex flex-col gap-2.5 p-4 w-full">
      <h2 className="text-sm text-[#323232] font-semibold">
        Data Backup Progress
      </h2>
      <p className="text-xs font-medium text-[#414141]">
        Track Ongoing and past backup activites.
      </p>
      <BackupProgressCardMain />
      <BackupProgressTableGraphMain />
    </div>
  )
}

export default BackupProgras
