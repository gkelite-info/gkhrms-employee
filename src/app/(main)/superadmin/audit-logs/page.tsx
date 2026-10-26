"use client"

import { useState } from "react"
import { FileText, Search, Shield, Filter, AlertTriangle } from "lucide-react"

const auditLogs = [
  {
    id: "LOG-9941",
    action: "New Tenant Created",
    actor: "Eleanor Vance (Super Admin)",
    tenant: "TechNova Solutions",
    ip: "192.168.1.104",
    time: "2 hours ago",
    status: "Success",
  },
  {
    id: "LOG-9940",
    action: "Subscription Tier Upgraded (Basic -> Pro)",
    actor: "System Automation",
    tenant: "Vision Corp",
    ip: "10.0.4.12",
    time: "5 hours ago",
    status: "Success",
  },
  {
    id: "LOG-9939",
    action: "Failed Login Attempt (Tenant Admin)",
    actor: "Unknown (alex@unknown.io)",
    tenant: "GreenField Pvt Ltd",
    ip: "185.220.101.5",
    time: "8 hours ago",
    status: "Warning",
  },
  {
    id: "LOG-9938",
    action: "Tenant Master Policy Reset",
    actor: "Amit Verma (Admin)",
    tenant: "Skyline Technologies",
    ip: "115.112.44.18",
    time: "1 day ago",
    status: "Success",
  },
  {
    id: "LOG-9937",
    action: "Broadcast Message Sent",
    actor: "Eleanor Vance (Super Admin)",
    tenant: "All Tenants",
    ip: "192.168.1.104",
    time: "2 days ago",
    status: "Success",
  },
]

export default function AuditLogsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = auditLogs.filter(
    (log) =>
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.tenant.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Platform Audit & Security Logs
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Immutable log trail of administrative actions, authentication security, and tenant modifications.
          </p>
        </div>
      </div>

      {/* Logs Table Card */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by action, actor, or tenant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5]"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
                <th className="pb-3 font-semibold">EVENT ACTION</th>
                <th className="pb-3 font-semibold">ACTOR</th>
                <th className="pb-3 font-semibold">TENANT</th>
                <th className="pb-3 font-semibold">IP ADDRESS</th>
                <th className="pb-3 font-semibold">TIME</th>
                <th className="pb-3 font-semibold text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-3.5 font-bold text-slate-800 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>{log.action}</span>
                  </td>
                  <td className="py-3.5 text-slate-600 font-medium">
                    {log.actor}
                  </td>
                  <td className="py-3.5 font-semibold text-slate-800">
                    {log.tenant}
                  </td>
                  <td className="py-3.5 text-slate-400 font-mono text-[11px]">
                    {log.ip}
                  </td>
                  <td className="py-3.5 text-slate-400">{log.time}</td>
                  <td className="py-3.5 text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        log.status === "Success"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {log.status === "Success" ? "● Success" : "▲ Warning"}
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
