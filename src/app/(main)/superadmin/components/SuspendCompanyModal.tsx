"use client"

import { useState } from "react"
import { AlertTriangle, X, ChevronDown, Info, Ban } from "lucide-react"

export interface SuspendCompanyModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (data: {
    reason: string
    notes: string
    notifyAdmin: boolean
  }) => void
  company?: {
    name: string
    code?: string
    plan?: string
    status?: string
    adminName?: string
    logoLetter?: string
  }
}

export default function SuspendCompanyModal({
  isOpen,
  onClose,
  onConfirm,
  company = {
    name: "TechNova Solutions",
    code: "TNV001",
    plan: "Professional",
    status: "Active",
    adminName: "Rohan Mehta",
    logoLetter: "T",
  },
}: SuspendCompanyModalProps) {
  const [reason, setReason] = useState("")
  const [notes, setNotes] = useState("")
  const [notifyAdmin, setNotifyAdmin] = useState(true)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm({ reason, notes, notifyAdmin })
    onClose()
  }

  const companyInitial =
    company.logoLetter || company.name?.charAt(0) || "T"
  const companyCode = company.code || "TNV001"
  const companyPlan = company.plan || "Professional"
  const companyStatus = company.status || "Active"
  const adminName = company.adminName || "Rohan Mehta"

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-100 max-w-md w-full p-4 sm:p-5 shadow-2xl relative my-auto max-h-[calc(100vh-1.5rem)] overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3.5 top-3.5 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-2.5 pr-6">
          <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
              Suspend Company Account?
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Suspending this company will temporarily restrict access for all
              users. You can reactivate it later from the company details page.
            </p>
          </div>
        </div>

        {/* Company Summary Card Preview */}
        <div className="rounded-xl border border-slate-100 bg-[#FBFBFE] p-2.5 my-2 flex flex-col gap-2">
          {/* Company Name & Avatar */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#EEF0FD] flex items-center justify-center font-bold text-[#5B50E5] text-xs shrink-0">
              {companyInitial}
            </div>
            <span className="font-bold text-xs text-slate-800">
              {company.name}
            </span>
          </div>

          {/* 3 Columns: Code, Current Plan, Status */}
          <div className="grid grid-cols-3 gap-2 pt-1.5 border-t border-slate-100 text-left">
            <div>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">
                Company Code
              </span>
              <span className="text-[11px] font-bold text-slate-800 mt-0.5 block">
                {companyCode}
              </span>
            </div>

            <div>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">
                Current Plan
              </span>
              <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-[#EEF0FD] text-[#5B50E5] font-bold text-[9px]">
                {companyPlan}
              </span>
            </div>

            <div>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">
                Status
              </span>
              <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 font-bold text-[9px]">
                {companyStatus}
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* Reason for suspension */}
          <div>
            <label className="text-[11px] font-semibold text-slate-700 block mb-1">
              Reason for suspension
            </label>
            <div className="relative">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                className="w-full appearance-none px-3 py-1.5 pr-8 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/15 focus:border-[#5B50E5] transition-all cursor-pointer"
              >
                <option value="">Select a reason</option>
                <option value="Non-payment / Overdue invoice">
                  Non-payment / Overdue invoice
                </option>
                <option value="Terms of Service violation">
                  Terms of Service violation
                </option>
                <option value="Requested by company admin">
                  Requested by company admin
                </option>
                <option value="Security or suspicious activity concern">
                  Security or suspicious activity concern
                </option>
                <option value="Under legal or compliance investigation">
                  Under legal or compliance investigation
                </option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          {/* Additional notes (optional) */}
          <div>
            <label className="text-[11px] font-semibold text-slate-700 block mb-1">
              Additional notes <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <textarea
              rows={2}
              maxLength={500}
              placeholder="Add any additional notes or context..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/15 focus:border-[#5B50E5] transition-all resize-none h-12"
            />
            <div className="text-[9px] text-slate-400 text-right mt-0.5">
              {notes.length}/500
            </div>
          </div>

          {/* Checkbox: Notify company admin by email */}
          <label className="flex items-start gap-2 cursor-pointer select-none py-0.5">
            <input
              type="checkbox"
              checked={notifyAdmin}
              onChange={(e) => setNotifyAdmin(e.target.checked)}
              className="mt-0.5 w-3.5 h-3.5 rounded text-[#5B50E5] accent-[#5B50E5] focus:ring-[#5B50E5] cursor-pointer shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-800">
                Notify company admin by email
              </span>
              <span className="text-[10px] text-slate-400 leading-tight">
                An email notification will be sent to the primary admin ({adminName}).
              </span>
            </div>
          </label>

          {/* Info callout */}
          <div className="bg-[#EEF0FD]/80 border border-indigo-100/70 rounded-lg p-2 flex items-center gap-2 text-[#5B50E5]">
            <Info className="w-3.5 h-3.5 text-[#5B50E5] shrink-0" />
            <span className="text-[10px] font-medium leading-tight">
              This action can be reversed by reactivating the company account.
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 mt-0.5">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg text-xs font-bold shadow-sm shadow-rose-200 transition-all cursor-pointer"
            >
              <Ban className="w-3.5 h-3.5 text-white" />
              <span>Suspend Company</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
