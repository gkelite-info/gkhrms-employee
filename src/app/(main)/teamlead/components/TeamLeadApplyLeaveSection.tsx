"use client"

import TeamLeadAttendanceFormContainer from "./attendance-forms/TeamLeadAttendanceFormContainer"
import { FormTabType } from "./attendance-forms/types"

interface TeamLeadApplyLeaveSectionProps {
  initialFormType?: FormTabType
}

export default function TeamLeadApplyLeaveSection({
  initialFormType = "leave",
}: TeamLeadApplyLeaveSectionProps) {
  return (
    <TeamLeadAttendanceFormContainer initialFormType={initialFormType} />
  )
}
