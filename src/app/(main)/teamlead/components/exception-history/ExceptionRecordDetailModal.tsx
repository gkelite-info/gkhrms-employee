"use client"

import { X, CalendarBlank, Clock, User } from "phosphor-react"

interface ExceptionRecordDetailModalProps {
  isOpen: boolean
  onClose: () => void
  record: {
    date: string
    issueType: string
    originalValue: string
    correctedValue: string
    reviewerOrApprover: string
    reviewerRole?: string
    status: string
    reason?: string
    employeeName?: string
  } | null
}

export default function ExceptionRecordDetailModal({
  isOpen,
  onClose,
  record,
}: ExceptionRecordDetailModalProps) {
  if (!isOpen || !record) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[85vh] sm:max-h-[90vh] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="bg-white px-5 sm:px-6 py-4 border-b border-gray-100 flex items-start justify-between shrink-0">
          <div className="flex flex-col min-w-0 pr-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
              Exception Regularization Details
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-0.5 truncate">
              {record.employeeName
                ? `Reviewing request for ${record.employeeName}`
                : "View details of this attendance regularization."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 flex flex-col gap-3 sm:gap-3.5 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
                <CalendarBlank size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Date</span>
                <span className="text-xs font-bold text-gray-900 break-words">{record.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
                <Clock size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Issue Type</span>
                <span className="text-xs font-bold text-gray-900 break-words">{record.issueType}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0">
                <CalendarBlank size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Original Value</span>
                <span className="text-xs font-bold text-gray-800 break-words">{record.originalValue}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0">
                <CalendarBlank size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Corrected Value</span>
                <span className="text-xs font-bold text-emerald-700 break-words">{record.correctedValue}</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0 mt-0.5">
              <User size={16} weight="bold" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-gray-400 font-semibold">Reviewed / Approved By</span>
              <span className="text-xs font-bold text-gray-900 break-words">
                {record.reviewerOrApprover} {record.reviewerRole ? `(${record.reviewerRole})` : ""}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100/70 min-w-0">
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
              Reason & Resolution Notes
            </span>
            <div className="max-h-36 overflow-y-auto custom-scrollbar pr-1">
              <p className="text-xs text-gray-700 leading-relaxed break-words whitespace-pre-wrap">
                {record.reason || "Biometric discrepancy regularized following verified shift logs."}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 sm:px-6 py-3.5 border-t border-gray-100 flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#5B50EC] text-white text-xs font-semibold hover:bg-[#4d42e0] transition-all cursor-pointer shadow-2xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
