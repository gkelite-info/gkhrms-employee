"use client"

import { X, User, Trash, FileText } from "phosphor-react"
import { MyRequestItem } from "./types"
import ApprovalTimelineCard from "./ApprovalTimelineCard"

interface MyRequestDetailModalProps {
  request: MyRequestItem | null
  onClose: () => void
  onCancelRequest: (request: MyRequestItem) => void
}

export default function MyRequestDetailModal({
  request,
  onClose,
  onCancelRequest,
}: MyRequestDetailModalProps) {
  if (!request) return null

  const isPending = request.status === "Pending"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl w-full max-w-xl max-h-[90vh] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="sticky top-0 z-20 bg-white px-5 sm:px-6 py-4 border-b border-gray-100 flex items-start justify-between shrink-0">
          <div className="flex flex-col min-w-0">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
              My Request Details
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-0.5">
              View the details and current status of your request.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 pb-12 flex flex-col gap-4 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5 w-full">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0 text-xs font-bold">
                RT
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Request Type</span>
                <span className="text-xs font-bold text-gray-900 break-words leading-tight">{request.requestType}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0 text-xs font-bold">
                LT
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Leave Type</span>
                <span className="text-xs font-bold text-gray-900 break-words leading-tight">
                  {request.leaveType || "Work From Home"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0 text-xs font-bold">
                DT
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Dates</span>
                <span className="text-xs font-bold text-gray-900 break-words leading-tight">{request.dates}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0 text-xs font-bold">
                DR
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Duration</span>
                <span className="text-xs font-bold text-gray-900 break-words leading-tight">{request.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0 text-xs font-bold">
                RO
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Requested On</span>
                <span className="text-xs font-bold text-gray-900 break-words leading-tight">
                  {request.requestedOnFull || request.requestedOn}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0 text-xs font-bold">
                ST
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Current Status</span>
                <span className="text-xs font-bold text-amber-600 break-words leading-tight">{request.status}</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80">
            <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0 mt-0.5">
              <User size={16} weight="bold" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-gray-400 font-semibold">Approver</span>
              <span className="text-xs font-bold text-gray-900 break-words">
                {request.approver.name} ({request.approver.role})
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-xl bg-gray-50/80">
            <span className="text-[10px] text-gray-400 font-semibold">Reason</span>
            <p className="text-xs text-gray-700 leading-relaxed break-words">{request.reason}</p>
          </div>

          <div className="flex flex-col gap-1 p-3 rounded-xl bg-gray-50/80">
            <span className="text-[10px] text-gray-400 font-semibold">Remarks</span>
            <p className="text-xs text-gray-500 italic break-words">{request.remarks || "No remarks yet."}</p>
          </div>

          {request.attachments && request.attachments.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold text-gray-700">Attachments</span>
              <div className="flex flex-col gap-2">
                {request.attachments.map((att) => (
                  <div
                    key={att.name}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-gray-50/80 hover:bg-gray-100/60 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
                        <FileText size={16} weight="bold" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-semibold text-gray-900 truncate">
                          {att.name}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {att.size}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => window.open("#", "_blank")}
                      className="text-xs font-semibold text-[#5B50EC] hover:underline px-2 py-1 cursor-pointer shrink-0"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ApprovalTimelineCard request={request} />
        </div>

        <div className="sticky bottom-0 z-20 bg-white px-5 sm:px-6 py-3.5 border-t border-gray-100 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
          >
            Back
          </button>
          {isPending && (
            <button
              type="button"
              onClick={() => onCancelRequest(request)}
              className="px-4 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            >
              <Trash size={15} weight="bold" />
              <span>Cancel Request</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
