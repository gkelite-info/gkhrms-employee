"use client"

import { ArrowLeft, ClockCounterClockwise } from "phosphor-react"

interface ExceptionHistoryHeaderProps {
  title?: string
  subtitle?: string
  onBack?: () => void
}

export default function ExceptionHistoryHeader({
  title = "Exception Details",
  subtitle = "Track your previous attendance regularization requests.",
  onBack,
}: ExceptionHistoryHeaderProps) {
  return (
    <div className="flex flex-col gap-3 w-full min-w-0">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:text-[#5B50EC] hover:border-[#5B50EC] hover:bg-[#F9F8FE] shadow-2xs transition-all cursor-pointer w-fit group"
        >
          <div className="w-5 h-5 rounded-lg bg-gray-100 group-hover:bg-[#EEF2FF] text-gray-500 group-hover:text-[#5B50EC] flex items-center justify-center transition-colors">
            <ArrowLeft size={12} weight="bold" />
          </div>
          <span>Back to Team Members</span>
        </button>
      )}

      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex items-center justify-between gap-4 min-w-0">
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
            <ClockCounterClockwise size={24} weight="bold" />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
