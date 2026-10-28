"use client"

import { ReusableConfirmationModal } from "@/components/reusableComponents"
import RequestDetailModal from "../../../teamlead/requests/components/RequestDetailModal"
import { ManagerRequestItem } from "../../data/managerRequestsData"

interface ManagerRequestModalsProps {
  viewingRequest: ManagerRequestItem | null
  onCloseViewing: () => void
  onApprove: (id: string) => void
  onReject: (id: string) => void
  confirmDialog: {
    isOpen: boolean
    type: "approve" | "reject"
    requestId: string
    employeeName: string
  } | null
  onCloseConfirm: () => void
  onConfirmAction: () => void
}

export default function ManagerRequestModals({
  viewingRequest,
  onCloseViewing,
  onApprove,
  onReject,
  confirmDialog,
  onCloseConfirm,
  onConfirmAction,
}: ManagerRequestModalsProps) {
  return (
    <>
      {viewingRequest && (
        <RequestDetailModal
          request={viewingRequest}
          onClose={onCloseViewing}
          onApprove={onApprove}
          onReject={onReject}
        />
      )}

      {confirmDialog && (
        <ReusableConfirmationModal
          isOpen={confirmDialog.isOpen}
          onClose={onCloseConfirm}
          onConfirm={onConfirmAction}
          type={confirmDialog.type === "approve" ? "success" : "danger"}
          title={
            confirmDialog.type === "approve"
              ? "Approve Attendance Request?"
              : "Reject Attendance Request?"
          }
          description={`Are you sure you want to ${
            confirmDialog.type === "approve" ? "approve" : "reject"
          } the request for ${confirmDialog.employeeName}?`}
          confirmText={confirmDialog.type === "approve" ? "Approve" : "Reject"}
          cancelText="Cancel"
        />
      )}
    </>
  )
}
