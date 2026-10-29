"use client"

import React, { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import EngageTreeChart from "./components/EngageTreeChart"
import EngageChatPanel from "./components/EngageChatPanel"
import EngageMeetingsView from "./components/EngageMeetingsView"

function EngageContent() {
  const searchParams = useSearchParams()
  const tab = searchParams?.get("tab")?.toLowerCase()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    const mainEl = document.querySelector("main")
    if (mainEl) {
      mainEl.scrollTop = 0
    }
  }, [tab])

  if (tab === "meetings") {
    return <EngageMeetingsView />
  }

  return (
    <div className="w-full min-h-[calc(100vh-80px)] xl:h-[calc(100vh-80px)] flex-1 min-h-0 px-4 pt-3 sm:pt-4 md:px-6 md:pt-4 pb-4 flex flex-col xl:flex-row gap-3.5 sm:gap-4 items-stretch select-none overflow-y-auto xl:overflow-hidden">
      <div className="flex-1 min-w-0 w-full flex flex-col gap-3 h-full min-h-0">
        <EngageTreeChart />
      </div>

      <div className="w-full xl:w-[280px] 2xl:w-[290px] shrink-0 flex flex-col h-[520px] xl:h-full min-h-0">
        <EngageChatPanel />
      </div>
    </div>
  )
}

export default function EmployeeEngagePage() {
  return (
    <Suspense fallback={<div className="w-full h-40 animate-pulse bg-white/40 rounded-2xl m-4" />}>
      <EngageContent />
    </Suspense>
  )
}

