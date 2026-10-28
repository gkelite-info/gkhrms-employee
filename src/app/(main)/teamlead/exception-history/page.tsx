import { Suspense } from "react"
import TeamLeadExceptionHistorySection from "../components/exception-history/TeamLeadExceptionHistorySection"

export default function TeamLeadExceptionHistoryPage() {
  return (
    <div className="w-full flex-1 p-3 sm:p-4 md:p-6 pb-16 sm:pb-8 flex flex-col gap-4 sm:gap-5 max-w-[1600px] mx-auto animate-in fade-in duration-200 min-w-0">
      <Suspense
        fallback={
          <div className="w-full min-h-[400px] flex items-center justify-center text-xs text-gray-400">
            Loading...
          </div>
        }
      >
        <TeamLeadExceptionHistorySection />
      </Suspense>
    </div>
  )
}
