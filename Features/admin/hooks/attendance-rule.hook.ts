import { useState } from "react"
import { attendanceRulesDummyData } from "../dummy-data/attendance-rules-dummy.data"

export const useAttendanceRulesHook = () => {
  const attendanceRules = attendanceRulesDummyData
  const [modalOpen, setModalOpen] = useState(false)

  return {
    attendanceRules,
    modalOpen,
    setModalOpen,
  }
}
