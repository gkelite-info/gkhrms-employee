import { useState } from "react"
import { backupProcessDummyData } from "../dummy-data/backup-process.data"

export const useBackupProcessHook = () => {
  const [backupProcess, setBackupProcess] = useState(backupProcessDummyData)

  return {
    backupProcess,
  }
}
