"use client"

import { NotePencil } from "phosphor-react"

export default function MyRequestsHeader() {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center justify-between gap-4 min-w-0 transition-all">
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
          <NotePencil size={24} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight break-words">
            My Requests
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5 break-words">
            Track all attendance requests you have submitted.
          </p>
        </div>
      </div>
    </div>
  )
}
