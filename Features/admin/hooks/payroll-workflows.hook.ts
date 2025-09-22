import { useState } from "react"
import { payrollDummyData } from "../dummy-data/payroll-workflow-dummy.data"

export const usePayrollWorkflowsHook = () => {
  const payroleWorkFlows = payrollDummyData
  const [modalOpen, setModalOpen] = useState(false)

  return {
    payroleWorkFlows,
    modalOpen,
    setModalOpen,
  }
}
