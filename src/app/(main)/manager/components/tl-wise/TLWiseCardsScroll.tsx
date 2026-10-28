"use client"

import { ManagerTeamLead } from "../../data/managerAttendanceData"
import TLWiseLeadCard from "./TLWiseLeadCard"

interface TLWiseCardsScrollProps {
  leads: ManagerTeamLead[]
  selectedLeadId: string | null
  onSelectLead: (leadId: string) => void
}

export default function TLWiseCardsScroll({
  leads,
  selectedLeadId,
  onSelectLead,
}: TLWiseCardsScrollProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base font-bold text-gray-900">
          Team Leads Attendance
        </h2>
        <span className="text-[11px] text-gray-400 font-medium hidden sm:inline-block">
          Scroll horizontally to view all team leads
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-4 select-none [scrollbar-width:thin] [scrollbar-color:#CBD5E1_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100/70 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
        <div className="flex items-stretch gap-4 min-w-max pb-1">
          {leads.map((lead) => (
            <TLWiseLeadCard
              key={lead.id}
              lead={lead}
              isSelected={lead.id === selectedLeadId}
              onSelect={() => onSelectLead(lead.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
