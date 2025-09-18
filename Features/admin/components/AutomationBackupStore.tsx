import React from "react"
import AutomationHub from "./AutomationHub"
import BackupDateRestore from "./BackupDateRestore"

const AutomationBackupStore = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2.5">
      <AutomationHub />
      <BackupDateRestore />
    </div>
  )
}

export default AutomationBackupStore
