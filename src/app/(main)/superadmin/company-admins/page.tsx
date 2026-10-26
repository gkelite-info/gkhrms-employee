"use client"

import { useState } from "react"
import { UserCheck, Search, ShieldCheck, Mail, MoreVertical } from "lucide-react"

const mockAdmins = [
  {
    id: "adm-1",
    name: "Rohit Mehta",
    email: "rohit@technova.com",
    company: "TechNova Solutions",
    role: "Primary Admin",
    mfa: true,
    lastActive: "20 mins ago",
  },
  {
    id: "adm-2",
    name: "Priya Sharma",
    email: "priya@greenfield.co",
    company: "GreenField Pvt Ltd",
    role: "Primary Admin",
    mfa: true,
    lastActive: "1 hour ago",
  },
  {
    id: "adm-3",
    name: "Amit Verma",
    email: "amit@skylinetech.io",
    company: "Skyline Technologies",
    role: "Super Tenant Admin",
    mfa: true,
    lastActive: "Just now",
  },
  {
    id: "adm-4",
    name: "Sneha Kapoor",
    email: "sneha@nextgen.ai",
    company: "NextGen Innovations",
    role: "Billing & Admin",
    mfa: false,
    lastActive: "2 days ago",
  },
  {
    id: "adm-5",
    name: "Kiran Malhotra",
    email: "kiran@bluewave.org",
    company: "BlueWave Systems",
    role: "Primary Admin",
    mfa: true,
    lastActive: "5 hours ago",
  },
]

export default function CompanyAdminsPage() {
  const [search, setSearch] = useState("")

  const filtered = mockAdmins.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.company.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Company Administrators
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Manage organization admins, account authority, and security policies.
          </p>
        </div>
      </div>

      {/* Admin Table Card */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, company, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5]"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
                <th className="pb-3 font-semibold">ADMINISTRATOR</th>
                <th className="pb-3 font-semibold">COMPANY</th>
                <th className="pb-3 font-semibold">SECURITY (MFA)</th>
                <th className="pb-3 font-semibold">ROLE</th>
                <th className="pb-3 font-semibold">LAST ACTIVE</th>
                <th className="pb-3 font-semibold text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((adm) => (
                <tr
                  key={adm.id}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="py-3.5 flex items-center gap-2.5 font-bold text-slate-800">
                    <div className="w-8 h-8 rounded-full bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] font-bold text-xs">
                      {adm.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span>{adm.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        {adm.email}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 font-semibold text-slate-700">
                    {adm.company}
                  </td>
                  <td className="py-3.5">
                    {adm.mfa ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Enabled
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        Disabled
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 text-slate-600 font-medium">
                    {adm.role}
                  </td>
                  <td className="py-3.5 text-slate-400">{adm.lastActive}</td>
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
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
