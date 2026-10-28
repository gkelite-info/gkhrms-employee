import { Suspense } from "react"
import TeamLeadApplyLeaveSection from "../components/TeamLeadApplyLeaveSection"

export default function TeamLeadApplyLeavePage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[400px] flex items-center justify-center text-xs text-gray-400">
          Loading...
        </div>
      }
    >
      <TeamLeadApplyLeaveSection />
    </Suspense>
  )
}
