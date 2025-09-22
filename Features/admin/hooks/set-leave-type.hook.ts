import { useState } from "react"
import { setLeavsTypeDummyDats } from "../dummy-data/set-leaves-type-dummy.data"

export const useSetLeaveTypeHook = () => {
  const leaveType = setLeavsTypeDummyDats

  const [modalOpen, setModalOpen] = useState(false)

  return {
    leaveType,
    modalOpen,
    setModalOpen,
  }
}
