import { pendingApprovalDummyData } from "../dummy-data/pending-approved-dummy.data"

export const usePendingApprovedHook = () => {
  const pendingApproved = pendingApprovalDummyData
  return {
    pendingApproved,
  }
}
