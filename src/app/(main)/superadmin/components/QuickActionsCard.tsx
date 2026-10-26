"use client"

import Link from "next/link"
import { useState } from "react"
import { Zap, Building2, Plus, FilePlus2, Megaphone, X } from "lucide-react"

export default function QuickActionsCard() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <>
      <div className="bg-white border border-slate-100/90 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-[#5B50E5]" />
          <h2 className="text-sm font-bold text-slate-800 tracking-tight">
            Quick Actions
          </h2>
        </div>

        {/* 3 Action Buttons */}
        <div className="flex flex-col gap-3">
          {/* Add Company Button - Navigates directly to full screen Add New Company page */}
          <Link
            href="/superadmin/companies/add"
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#5B50E5] hover:bg-[#4E43DB] text-white rounded-xl font-bold text-xs shadow-sm shadow-indigo-200 transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
              <Building2 className="w-4 h-4" />
            </div>
            <span className="text-left flex-1 font-semibold">+ Add Company</span>
          </Link>

          {/* Create Plan Button */}
          <button
            type="button"
            onClick={() => setActiveModal("plan")}
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#EEF0FD] hover:bg-[#E4E7FD] text-[#5B50E5] rounded-xl font-bold text-xs transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#5B50E5]/15 flex items-center justify-center text-[#5B50E5] shrink-0 group-hover:scale-105 transition-transform">
              <FilePlus2 className="w-4 h-4" />
            </div>
            <span className="text-left flex-1 font-semibold">Create Plan</span>
          </button>

          {/* Send Announcement Button */}
          <button
            type="button"
            onClick={() => setActiveModal("announcement")}
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#EEF0FD] hover:bg-[#E4E7FD] text-[#5B50E5] rounded-xl font-bold text-xs transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#5B50E5]/15 flex items-center justify-center text-[#5B50E5] shrink-0 group-hover:scale-105 transition-transform">
              <Megaphone className="w-4 h-4" />
            </div>
            <span className="text-left flex-1 font-semibold">
              Send Announcement
            </span>
          </button>
        </div>
      </div>

      {/* Interactive Modal for Quick Actions (Plan, Announcement) */}
      {activeModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl border border-slate-100 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-800">
                {activeModal === "plan" && "Create Subscription Plan"}
                {activeModal === "announcement" && "Broadcast Announcement"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeModal === "plan" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setActiveModal(null)
                }}
                className="flex flex-col gap-3 text-xs"
              >
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">
                    Plan Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Growth Pro"
                    className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">
                    Monthly Price ($)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="199"
                    className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5]"
                  />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-lg font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg font-semibold bg-[#5B50E5] text-white hover:bg-[#4E43DB]"
                  >
                    Create Plan
                  </button>
                </div>
              </form>
            )}

            {activeModal === "announcement" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setActiveModal(null)
                }}
                className="flex flex-col gap-3 text-xs"
              >
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="System maintenance scheduled"
                    className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-600 block mb-1">
                    Announcement Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Type details for all company admins..."
                    className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5]"
                  />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-lg font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg font-semibold bg-[#5B50E5] text-white hover:bg-[#4E43DB]"
                  >
                    Broadcast
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
