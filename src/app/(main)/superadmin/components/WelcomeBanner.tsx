"use client"

import { Calendar } from "lucide-react"

export default function WelcomeBanner() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Left greeting */}
      <div className="flex items-center gap-3">
        <span className="text-3xl select-none" role="img" aria-label="wave">
          👋
        </span>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
            Welcome back, Super Admin
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Here&apos;s an overview of your HRMS platform activity today.
          </p>
        </div>
      </div>

      {/* Right Date Card */}
      <div className="flex items-center gap-3.5 bg-white border border-slate-100 shadow-sm rounded-2xl px-4 py-2.5 self-start md:self-auto">
        <div className="w-10 h-10 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
          <Calendar className="w-5 h-5 text-[#5B50E5]" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-800">
            Tuesday, 26 Aug 2025
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            Have a productive day!
          </span>
        </div>
      </div>
    </div>
  )
}
