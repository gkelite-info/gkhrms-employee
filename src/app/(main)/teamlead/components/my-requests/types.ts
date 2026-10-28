export type MyRequestType = "Leave" | "Work From Home"
export type MyRequestStatus = "Pending" | "Approved" | "Rejected" | "Cancelled"
export type MyFilterType = "All" | "Leave" | "Work From Home"

export interface ApproverInfo {
  name: string
  role: string
  avatar?: string
}

export interface RequestAttachment {
  name: string
  size: string
  url?: string
}

export interface TimelineStep {
  step: number
  title: string
  date?: string
  status: "completed" | "current" | "pending"
}

export interface MyRequestItem {
  id: string
  requestType: MyRequestType
  leaveType?: string
  dates: string
  duration: string
  requestedOn: string
  requestedOnFull?: string
  approver: ApproverInfo
  status: MyRequestStatus
  reason: string
  remarks?: string
  attachments?: RequestAttachment[]
  timeline?: TimelineStep[]
}
