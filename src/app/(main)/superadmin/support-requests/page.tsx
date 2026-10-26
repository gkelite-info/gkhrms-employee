"use client"

import { useState } from "react"
import { Headphones, AlertCircle, Clock, CheckCircle } from "lucide-react"

const tickets = [
  {
    id: "TICK-8021",
    subject: "Payroll tax deduction calculation discrepancy",
    company: "TechNova Solutions",
    requester: "Rohit Mehta",
    priority: "High",
    status: "In Progress",
    updated: "25 mins ago",
  },
  {
    id: "TICK-8020",
    subject: "Biometric attendance sync delay in Bangalore office",
    company: "Skyline Technologies",
    requester: "Amit Verma",
    priority: "Urgent",
    status: "Open",
    updated: "1 hour ago",
  },
  {
    id: "TICK-8019",
    subject: "Request custom leave policy configuration for contractors",
    company: "GreenField Pvt Ltd",
    requester: "Priya Sharma",
    priority: "Medium",
    status: "Resolved",
    updated: "Yesterday",
  },
  {
    id: "TICK-8018",
    subject: "SSO SAML certificate rotation assistance",
    company: "Vision Corp",
    requester: "Elena Gilbert",
    priority: "Medium",
    status: "In Progress",
    updated: "2 days ago",
  },
]

export default function SupportRequestsPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Tenant Support Requests
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Track and resolve helpdesk inquiries, bug reports, and escalation tickets across all tenants.
          </p>
        </div>
      </div>

      {/* Ticket Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            Open Tickets
          </span>
          <p className="text-xl font-extrabold text-slate-800 mt-1">12</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            Urgent Priority
          </span>
          <p className="text-xl font-extrabold text-rose-500 mt-1">2</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            In Progress
          </span>
          <p className="text-xl font-extrabold text-[#5B50E5] mt-1">6</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            Resolved (7d)
          </span>
          <p className="text-xl font-extrabold text-emerald-600 mt-1">28</p>
        </div>
      </div>

      {/* Ticket List */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
                <th className="pb-3 font-semibold">TICKET ID</th>
                <th className="pb-3 font-semibold">SUBJECT</th>
                <th className="pb-3 font-semibold">COMPANY</th>
                <th className="pb-3 font-semibold">PRIORITY</th>
                <th className="pb-3 font-semibold">STATUS</th>
                <th className="pb-3 font-semibold text-right">LAST UPDATED</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {tickets.map((t) => (
                <tr
                  key={t.id}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-3.5 font-bold text-indigo-600">{t.id}</td>
                  <td className="py-3.5 font-bold text-slate-800">
                    {t.subject}
                  </td>
                  <td className="py-3.5 text-slate-600 font-medium">
                    {t.company}
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                        t.priority === "Urgent"
                          ? "bg-rose-50 text-rose-600"
                          : t.priority === "High"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {t.priority}
                    </span>
                  </td>
                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        t.status === "Open"
                          ? "bg-rose-50 text-rose-600"
                          : t.status === "In Progress"
                          ? "bg-[#EEF0FD] text-[#5B50E5]"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          t.status === "Open"
                            ? "bg-rose-500"
                            : t.status === "In Progress"
                            ? "bg-[#5B50E5]"
                            : "bg-emerald-500"
                        }`}
                      />
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-slate-400 text-right">
                    {t.updated}
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
