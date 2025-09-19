import { useState } from "react"
import { retentionAlertData } from "../dummy-data/retention-alert.data"

export const useRetentionAlertHook = () => {
  const [retentionAlert, setRetentionAlert] = useState(retentionAlertData)

  return {
    retentionAlert,
  }
}
