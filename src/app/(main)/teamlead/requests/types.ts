export type RequestType = "Leave" | "Work From Home" | "Half Day"
export type RequestStatus = "Pending" | "Approved" | "Rejected"

export interface AttendanceRequestItem {
  id: string
  employeeId: string
  name: string
  designation: string
  department: string
  avatar?: string
  requestType: RequestType
  date: string
  requestedTime: string
  reason: string
  status: RequestStatus
}

export const getValidStatus = (val: string | null): string => {
  if (!val) return "All Statuses"
  const normalized = val.trim().toLowerCase()
  if (normalized === "pending") return "Pending"
  if (normalized === "approved") return "Approved"
  if (normalized === "rejected") return "Rejected"
  return "All Statuses"
}

export const getValidType = (val: string | null): string => {
  if (!val) return "All Types"
  const normalized = val.trim().toLowerCase()
  if (normalized === "leave") return "Leave"
  if (normalized === "work from home" || normalized === "wfh") return "Work From Home"
  if (normalized === "half day") return "Half Day"
  return "All Types"
}
