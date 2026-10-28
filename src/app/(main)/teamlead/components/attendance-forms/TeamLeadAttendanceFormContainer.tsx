"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Toaster } from "react-hot-toast"
import { FormTabType } from "./types"
import AttendanceBanner from "./AttendanceBanner"
import AttendanceFormTabs from "./AttendanceFormTabs"
import ApplyLeaveFormCard from "./ApplyLeaveFormCard"
import CurrentLeaveBalanceCard from "./CurrentLeaveBalanceCard"
import RequestWfhFormCard from "./RequestWfhFormCard"
import WfhGuidelinesCard from "./WfhGuidelinesCard"

interface TeamLeadAttendanceFormContainerProps {
  initialFormType?: FormTabType
}

export default function TeamLeadAttendanceFormContainer({
  initialFormType = "leave",
}: TeamLeadAttendanceFormContainerProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlType = searchParams.get("type")

  const [activeTab, setActiveTab] = useState<FormTabType>(() => {
    if (urlType === "wfh" || initialFormType === "wfh") return "wfh"
    return "leave"
  })

  useEffect(() => {
    if (urlType === "wfh") {
      setActiveTab("wfh")
    } else if (urlType === "leave") {
      setActiveTab("leave")
    }
  }, [urlType])

  const handleTabChange = (tab: FormTabType) => {
    setActiveTab(tab)
    router.replace(`/teamlead/apply-leave?type=${tab}`, { scroll: false })
  }

  return (
    <div className="w-full flex-1 p-3 sm:p-4 md:p-6 pb-16 sm:pb-8 flex flex-col gap-4 sm:gap-5 max-w-[1600px] mx-auto animate-in fade-in duration-200 min-w-0">
      <Toaster position="top-right" />

      <AttendanceBanner onBack={() => router.push("/teamlead")} />

      <AttendanceFormTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {activeTab === "leave" ? (
          <>
            <div className="lg:col-span-2">
              <ApplyLeaveFormCard />
            </div>
            <div className="lg:col-span-1">
              <CurrentLeaveBalanceCard />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-2">
              <RequestWfhFormCard />
            </div>
            <div className="lg:col-span-1">
              <WfhGuidelinesCard />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
