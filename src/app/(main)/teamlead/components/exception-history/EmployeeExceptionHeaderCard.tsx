"use client"

import { Clock, CheckCircle, WarningCircle, FileText } from "phosphor-react"
import { ReusableAvatar } from "@/components/reusableComponents"
import { TeamMemberExceptionSummary } from "./types"

interface EmployeeExceptionHeaderCardProps {
  member: TeamMemberExceptionSummary
}

export default function EmployeeExceptionHeaderCard({
  member,
}: EmployeeExceptionHeaderCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 min-w-0 transition-all">
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        <ReusableAvatar
          src={member.avatar}
          name={member.name}
          size="lg"
          shape="circle"
          fallbackType="initials"
          showBorder={true}
          borderColor="#E0E7FF"
        />
        <div className="flex flex-col min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
              {member.name}
            </h2>
            <span className="px-2 py-0.5 rounded-md bg-gray-100 text-[11px] font-semibold text-gray-600 font-mono">
              {member.id}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#5B50EC] text-[11px] font-bold">
              {member.role}
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            {member.department} &bull; {member.team}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F8F7FF] border border-[#DDD8FE] text-[#5B50EC]">
          <FileText size={16} weight="bold" />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-semibold leading-none">Total Logs</span>
            <span className="text-xs font-bold leading-tight mt-0.5">
              {member.totalExceptions} Records
            </span>
          </div>
        </div>

        {member.currentIssue ? (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700">
            <Clock size={16} weight="bold" />
            <div className="flex flex-col">
              <span className="text-[10px] text-purple-500 font-semibold leading-none">Current Issue</span>
              <span className="text-xs font-bold leading-tight mt-0.5">
                {member.currentIssue}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
            <CheckCircle size={16} weight="bold" />
            <div className="flex flex-col">
              <span className="text-[10px] text-emerald-500 font-semibold leading-none">Status</span>
              <span className="text-xs font-bold leading-tight mt-0.5">No Active Issue</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

