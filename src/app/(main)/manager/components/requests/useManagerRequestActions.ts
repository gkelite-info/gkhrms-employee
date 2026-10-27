import { useState } from "react"
import toast from "react-hot-toast"
import { ManagerRequestItem } from "../../data/managerRequestsData"

export function useManagerRequestActions(
  requests: ManagerRequestItem[],
  setRequests: React.Dispatch<React.SetStateAction<ManagerRequestItem[]>>,
  viewingRequest: ManagerRequestItem | null,
  setViewingRequest: React.Dispatch<React.SetStateAction<ManagerRequestItem | null>>
) {
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean
    type: "approve" | "reject"
    requestId: string
    employeeName: string
  } | null>(null)

  const promptAction = (id: string, type: "approve" | "reject") => {
    const item = requests.find((r) => r.id === id)
    setConfirmDialog({
      isOpen: true,
      type,
      requestId: id,
      employeeName: item?.name || "this employee",
    })
  }

  const executeConfirmAction = () => {
    if (!confirmDialog) return
    const { requestId, type, employeeName } = confirmDialog
    const newStatus = type === "approve" ? "Approved" : "Rejected"

    setRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, status: newStatus } : r))
    )
    if (viewingRequest?.id === requestId) {
      setViewingRequest((prev) => (prev ? { ...prev, status: newStatus } : null))
    }

    if (type === "approve") {
      toast.success(`Request for ${employeeName} approved successfully!`, {
        position: "top-right",
      })
    } else {
      toast.error(`Request for ${employeeName} has been rejected.`, {
        position: "top-right",
      })
    }
    setConfirmDialog(null)
  }

  return {
    confirmDialog,
    setConfirmDialog,
    promptAction,
    executeConfirmAction,
  }
}
