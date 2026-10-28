"use client"

import { UsersThree, Check } from "phosphor-react"
import { MyRequestItem } from "./types"

interface ApprovalTimelineCardProps {
  request: MyRequestItem
}

export default function ApprovalTimelineCard({
  request,
}: ApprovalTimelineCardProps) {
  const isApproved = request.status === "Approved"
  const isRejected = request.status === "Rejected"

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFE] border border-blue-50/80 flex flex-col gap-3.5 sm:gap-4 w-full min-w-0">
      <div className="flex items-start gap-2.5">
        <UsersThree size={18} weight="regular" className="text-gray-700 shrink-0 mt-0.5" />
        <div className="flex flex-col min-w-0">
          <span className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
            Approval Timeline
          </span>
          <span className="text-[11px] text-gray-400 font-medium mt-0.5">
            Track the progress of your request.
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:hidden w-full pt-1 min-w-0">
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#5B50EC] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Check size={16} weight="bold" />
            </div>
            <div className="w-0.5 h-9 bg-[#5B50EC]" />
          </div>
          <div className="flex flex-col pt-1 min-w-0">
            <span className="text-xs font-bold text-gray-900 leading-tight">
              Request Submitted
            </span>
            <span className="text-[11px] text-gray-400 font-medium mt-0.5 leading-tight">
              {request.requestedOnFull || request.requestedOn}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center shrink-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 ${
                isApproved
                  ? "bg-[#5B50EC] text-white border-[#5B50EC]"
                  : isRejected
                  ? "bg-[#FEF2F2] text-[#DC2626] border-red-300"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              {isApproved ? <Check size={16} weight="bold" /> : "2"}
            </div>
            <div className="w-0.5 h-9 border-l-2 border-dashed border-gray-300" />
          </div>
          <div className="flex flex-col pt-1 min-w-0">
            <span className="text-xs font-bold text-gray-900 leading-tight">
              Manager Review
            </span>
            <span
              className={`text-[11px] font-medium mt-0.5 leading-tight ${
                isApproved
                  ? "text-emerald-600 font-semibold"
                  : isRejected
                  ? "text-red-600 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {isApproved ? "Approved" : isRejected ? "Rejected" : "Pending"}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center shrink-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 ${
                isApproved
                  ? "bg-[#5B50EC] text-white border-[#5B50EC]"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {isApproved ? <Check size={16} weight="bold" /> : "3"}
            </div>
          </div>
          <div className="flex flex-col pt-1 min-w-0">
            <span className="text-xs font-bold text-gray-900 leading-tight">
              HR Manager Approval
            </span>
            <span
              className={`text-[11px] font-medium mt-0.5 leading-tight ${
                isApproved ? "text-emerald-600 font-semibold" : "text-gray-400"
              }`}
            >
              {isApproved ? "Approved" : "Pending"}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex flex-col w-full pt-1 min-w-0">
        <div className="flex items-center w-full min-w-0">
          <div className="w-8 h-8 rounded-full bg-[#5B50EC] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Check size={16} weight="bold" />
          </div>

          <div className="flex-1 h-0.5 bg-[#5B50EC]" />

          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 ${
              isApproved
                ? "bg-[#5B50EC] text-white border-[#5B50EC]"
                : isRejected
                ? "bg-[#FEF2F2] text-[#DC2626] border-red-300"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            {isApproved ? <Check size={16} weight="bold" /> : "2"}
          </div>

          <div className="flex-1 border-t-2 border-dashed border-gray-300" />

          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 ${
              isApproved
                ? "bg-[#5B50EC] text-white border-[#5B50EC]"
                : "bg-white text-gray-400 border-gray-300"
            }`}
          >
            {isApproved ? <Check size={16} weight="bold" /> : "3"}
          </div>
        </div>

        <div className="flex items-start justify-between w-full mt-2.5 min-w-0">
          <div className="flex flex-col items-start text-left w-36 min-w-0">
            <span className="text-xs font-bold text-gray-900 leading-tight">
              Request Submitted
            </span>
            <span className="text-[10px] text-gray-400 font-medium mt-0.5 leading-tight">
              {request.requestedOnFull || request.requestedOn}
            </span>
          </div>

          <div className="flex flex-col items-center text-center w-36 min-w-0">
            <span className="text-xs font-bold text-gray-900 leading-tight">
              Manager Review
            </span>
            <span
              className={`text-[10px] font-medium mt-0.5 leading-tight ${
                isApproved
                  ? "text-emerald-600 font-semibold"
                  : isRejected
                  ? "text-red-600 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {isApproved ? "Approved" : isRejected ? "Rejected" : "Pending"}
            </span>
          </div>

          <div className="flex flex-col items-end text-right w-36 min-w-0">
            <span className="text-xs font-bold text-gray-900 leading-tight">
              HR Manager Approval
            </span>
            <span
              className={`text-[10px] font-medium mt-0.5 leading-tight ${
                isApproved ? "text-emerald-600 font-semibold" : "text-gray-400"
              }`}
            >
              {isApproved ? "Approved" : "Pending"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
