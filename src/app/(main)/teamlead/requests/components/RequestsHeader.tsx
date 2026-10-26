"use client"

import React from "react"
import { Article } from "phosphor-react"

export default function RequestsHeader() {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center flex-shrink-0">
          <Article size={22} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight truncate">
            Attendance Requests
          </h1>
          <p className="text-xs text-gray-400 font-medium mt-0.5 truncate">
            Review and manage attendance-related requests from your team members.
          </p>
        </div>
      </div>
    </div>
  )
}
