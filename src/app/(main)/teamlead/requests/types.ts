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
