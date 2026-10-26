"use client"

import { useState } from "react"
import { Megaphone, Plus, Send, CheckCircle2, Clock } from "lucide-react"

const announcementsList = [
  {
    id: "ann-1",
    title: "Scheduled Maintenance — Database Optimization",
    target: "All Company Admins",
    date: "24 Aug 2025",
    reads: "138 / 142",
    status: "Sent",
  },
  {
    id: "ann-2",
    title: "New Feature Release: AI Mood Tracker & Payroll Automation 2.0",
    target: "Professional & Enterprise Tenants",
    date: "15 Aug 2025",
    reads: "81 / 84",
    status: "Sent",
  },
  {
    id: "ann-3",
    title: "Updated Compliance Guidelines for FY 2025-26",
    target: "All Company Admins",
    date: "01 Aug 2025",
    reads: "140 / 142",
    status: "Sent",
  },
]

export default function AnnouncementsPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Platform Announcements
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Broadcast platform updates, scheduled downtime notices, and compliance alerts.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#5B50E5] hover:bg-[#4E43DB] text-white rounded-xl text-xs font-bold shadow-sm shadow-indigo-200 transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Broadcast</span>
        </button>
      </div>

      {/* Broadcast Feed */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <h2 className="text-sm font-bold text-slate-800">Sent Broadcasts</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
                <th className="pb-3 font-semibold">TITLE</th>
                <th className="pb-3 font-semibold">AUDIENCE</th>
                <th className="pb-3 font-semibold">DATE SENT</th>
                <th className="pb-3 font-semibold">READ RATIO</th>
                <th className="pb-3 font-semibold text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {announcementsList.map((ann) => (
                <tr
                  key={ann.id}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-3.5 font-bold text-slate-800 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <span>{ann.title}</span>
                  </td>
                  <td className="py-3.5 text-slate-600 font-medium">
                    {ann.target}
                  </td>
                  <td className="py-3.5 text-slate-400">{ann.date}</td>
                  <td className="py-3.5 font-bold text-slate-800">
                    {ann.reads}
                  </td>
                  <td className="py-3.5 text-right">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {ann.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
