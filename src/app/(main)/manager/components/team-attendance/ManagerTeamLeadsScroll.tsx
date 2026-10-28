"use client"

import { ReusableAvatar } from "@/components/reusableComponents"
import { ManagerTeamLead } from "../../data/managerAttendanceData"

interface ManagerTeamLeadsScrollProps {
  leads: ManagerTeamLead[]
  selectedLeadId: string
  onSelectLead: (leadId: string) => void
}

export default function ManagerTeamLeadsScroll({
  leads,
  selectedLeadId,
  onSelectLead,
}: ManagerTeamLeadsScrollProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900">
          Teams (Team Leads)
        </h2>
        <span className="text-[11px] text-gray-400 mr-1 font-medium hidden sm:inline-block">
          Scroll horizontally to view all team leads
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-3.5 select-none [scrollbar-width:thin] [scrollbar-color:#CBD5E1_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100/70 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
        <div className="flex items-stretch gap-4 min-w-max pb-1">
          {leads.map((lead) => {
            const isSelected = lead.id === selectedLeadId
            const total = lead.membersCount || 1
            const presentPct = (lead.present / total) * 100
            const absentPct = (lead.absent / total) * 100
            const leavePct = (lead.leave / total) * 100
            const wfhPct = (lead.wfh / total) * 100

            return (
              <div
                key={lead.id}
                onClick={() => onSelectLead(lead.id)}
                className={`w-[305px] sm:w-[325px] min-h-[215px] sm:min-h-[225px] shrink-0 p-4.5 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3.5 sm:gap-4 ${
                  isSelected
                    ? "bg-gradient-to-b from-[#F9F8FF] to-white border-2 border-[#5B50EC] shadow-md ring-4 ring-[#5B50EC]/15"
                    : "bg-white border border-gray-100 hover:border-[#5B50EC]/30 hover:shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-2 min-w-0">
                    <ReusableAvatar
                      src={lead.avatar}
                      alt={lead.name}
                      name={lead.name}
                      size={52}
                      fallbackType="icon"
                    />

                    <div className="flex flex-col">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                        {lead.name}
                      </h3>
                      <span className="text-[11px] sm:text-xs text-gray-400 font-medium mt-0.5">
                        {lead.role}
                      </span>
                      <span className="text-[11px] sm:text-xs text-gray-500 font-medium">
                        {lead.membersCount} Members
                      </span>
                    </div>
                  </div>

                  <div className="relative w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        className="stroke-gray-100"
                        strokeWidth="3.2"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        stroke={
                          lead.attendanceRate >= 80
                            ? "#10B981"
                            : lead.attendanceRate >= 70
                            ? "#F59E0B"
                            : "#F43F5E"
                        }
                        strokeWidth="3.2"
                        strokeDasharray="94.2"
                        strokeDashoffset={94.2 - (94.2 * lead.attendanceRate) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xs sm:text-sm font-bold text-gray-900">
                      {lead.attendanceRate}%
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pt-1">
                  <div className="flex h-2 w-full rounded-full overflow-hidden bg-gray-100">
                    {presentPct > 0 && (
                      <div
                        style={{ width: `${presentPct}%` }}
                        className="bg-[#10B981] h-full"
                      />
                    )}
                    {absentPct > 0 && (
                      <div
                        style={{ width: `${absentPct}%` }}
                        className="bg-[#F43F5E] h-full"
                      />
                    )}
                    {leavePct > 0 && (
                      <div
                        style={{ width: `${leavePct}%` }}
                        className="bg-[#F59E0B] h-full"
                      />
                    )}
                    {wfhPct > 0 && (
                      <div
                        style={{ width: `${wfhPct}%` }}
                        className="bg-[#5B50EC] h-full"
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-1 pt-2 border-t border-gray-100 text-center">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-xs font-bold text-gray-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                        {lead.present}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                        Present
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-xs font-bold text-gray-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E] shrink-0" />
                        {lead.absent}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                        Absent
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-xs font-bold text-gray-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                        {lead.leave}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                        Leave
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-xs font-bold text-gray-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B50EC] shrink-0" />
                        {lead.wfh}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                        WFH
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
