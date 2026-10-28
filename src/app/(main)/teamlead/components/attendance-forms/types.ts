import type { ElementType } from "react"

export type FormTabType = "leave" | "wfh"
export type DayOption = "full" | "half"

export interface LeaveBalanceItem {
  id: string
  label: string
  used: number
  total: number
  icon: ElementType
  iconBg: string
  iconColor: string
}

export interface WfhGuidelineItem {
  id: string
  title: string
  description: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
}

export interface UploadedFileItem {
  id: string
  file: File
  name: string
  size: number
  formattedSize: string
}
