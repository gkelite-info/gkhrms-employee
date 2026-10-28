export type ExceptionSubTab = "me" | "team"

export interface MyExceptionItem {
  id: string
  date: string
  issueType: string
  requestedCorrection: string
  originalValue: string
  correctedValue: string
  reviewedBy: {
    name: string
    role: string
    avatar?: string
  }
  status: "Approved" | "Pending" | "Rejected"
  reason: string
}

export interface EmployeeExceptionRecord {
  id: string
  date: string
  issueType: string
  originalValue: string
  correctedValue: string
  approvedBy: string
  status: "Approved" | "Pending" | "Rejected"
  reason?: string
}

export interface TeamMemberExceptionSummary {
  id: string
  name: string
  role: string
  department: string
  team: string
  avatar: string
  totalExceptions: number
  currentIssue: string | null
  records: EmployeeExceptionRecord[]
}
