import { useState } from "react"
import { autoApprovedWFHUser } from "../dummy-data/auto-approved-wfh-user.data"

export const useAutoApprovedWfhHook = () => {
  const [autoApprivedUsers, setAutoApprovedUsers] =
    useState(autoApprovedWFHUser)

  return {
    autoApprivedUsers,
  }
}
