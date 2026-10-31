import { Suspense } from "react"
import TeamLeadAttendanceFormContainer from "../../teamlead/components/attendance-forms/TeamLeadAttendanceFormContainer"

export default function ManagerApplyLeavePage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[400px] flex items-center justify-center text-xs text-gray-400">
          Loading...
        </div>
      }
    >
      <TeamLeadAttendanceFormContainer initialFormType="leave" />
    </Suspense>
  )
}

