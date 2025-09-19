import { useState } from "react"
import { autoSendRemindersData } from "../dummy-data/auto-send-reminders.data"

export const useAutoSendRemainders = () => {
  const [autoSendRemainders, setAutoSendRemainders] = useState(
    autoSendRemindersData
  )

  return {
    autoSendRemainders,
  }
}
