"use client"

import Link from "next/link"
import { Building2 } from "lucide-react"

interface CompanyRow {
  name: string
  admin: string
  plan: "Professional" | "Basic" | "Enterprise"
}

const recentCompanies: CompanyRow[] = [
  {
    name: "TechNova Solutions",
    admin: "Rohit Mehta",
    plan: "Professional",
  },
  {
    name: "GreenField Pvt Ltd",
    admin: "Priya Sharma",
    plan: "Basic",
  },
  {
    name: "Skyline Technologies",
    admin: "Amit Verma",
    plan: "Enterprise",
  },
  {
    name: "NextGen Innovations",
    admin: "Sneha Kapoor",
    plan: "Professional",
  },
  {
    name: "BlueWave Systems",
    admin: "Kiran Malhotra",
    plan: "Basic",
  },
]

const planBadgeStyles = {
  Professional: "bg-[#EEF0FD] text-[#5B50E5] border border-indigo-100/60",
  Basic: "bg-blue-50 text-blue-600 border border-blue-100/60",
  Enterprise: "bg-purple-50 text-purple-700 border border-purple-100/60",
}

export default function RecentCompaniesCard() {
  return (
    <div className="bg-white border border-slate-100/90 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#5B50E5]" />
          <h2 className="text-sm font-bold text-slate-800 tracking-tight">
            Recent Companies
          </h2>
        </div>
        <Link
          href="/superadmin/companies"
          className="text-xs font-semibold text-[#5B50E5] hover:text-[#463cb9] hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
              <th className="pb-2.5 font-semibold">COMPANY</th>
              <th className="pb-2.5 font-semibold">ADMIN</th>
              <th className="pb-2.5 font-semibold text-right">PLAN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {recentCompanies.map((comp) => (
              <tr
                key={comp.name}
                className="hover:bg-slate-50/70 transition-colors"
              >
                <td className="py-2.5 font-bold text-slate-800">
                  {comp.name}
                </td>
                <td className="py-2.5 text-slate-500 font-medium">
                  {comp.admin}
                </td>
                <td className="py-2.5 text-right">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                      planBadgeStyles[comp.plan]
                    }`}
                  >
                    {comp.plan}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
