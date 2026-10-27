"use client"

import React from "react"
import { Users } from "phosphor-react"
import { ReusableAvatar } from "@/components/reusableComponents"
import { ManagerTeamLead } from "../../data/managerAttendanceData"

interface TLWiseLeadCardProps {
  lead: ManagerTeamLead
  isSelected: boolean
  onSelect: () => void
}

export default function TLWiseLeadCard({
  lead,
  isSelected,
  onSelect,
}: TLWiseLeadCardProps) {
  const total = lead.membersCount || 1
  const presentPct = (lead.present / total) * 100
  const absentPct = (lead.absent / total) * 100
  const leavePct = (lead.leave / total) * 100
  const wfhPct = (lead.wfh / total) * 100

  const renderSparkline = (trend: number[] = [80, 82, 85, 84, 88, 90, 92]) => {
    const width = 240
    const height = 40
    const min = Math.min(...trend) - 5
    const max = Math.max(...trend) + 5
    const range = max - min || 1

    const points = trend.map((val, idx) => {
      const x = (idx / (trend.length - 1)) * (width - 16) + 8
      const y = height - ((val - min) / range) * (height - 16) - 8
      return { x, y }
    })

    const pathData = points.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`
    }, "")

    return (
      <svg
        className="w-full h-10 overflow-visible"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke="#5B50EC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="2.8"
            className="fill-[#5B50EC] stroke-white"
            strokeWidth="1.5"
          />
        ))}
      </svg>
    )
  }

  return (
    <div
      onClick={onSelect}
      className={`w-[290px] sm:w-[310px] min-h-[295px] shrink-0 p-4.5 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3.5 bg-white border ${
        isSelected
          ? "border-[#5B50EC] shadow-md ring-4 ring-[#5B50EC]/15"
          : "border-gray-100 hover:border-[#5B50EC]/30 hover:shadow-xs"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <ReusableAvatar
            src={lead.avatar}
            alt={lead.name}
            name={lead.name}
            size={48}
            fallbackType="icon"
          />
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm font-bold text-gray-900 leading-snug break-words">
              {lead.name}
            </h3>
            <span className="text-xs text-gray-400 font-medium break-words">
              {lead.department || lead.role}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-400 font-medium mt-0.5">
              <Users size={13} weight="regular" className="text-gray-400 shrink-0" />
              <span>{lead.membersCount} Members</span>
            </div>
          </div>
        </div>

        <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
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
              stroke="#5B50EC"
              strokeWidth="3.2"
              strokeDasharray="94.2"
              strokeDashoffset={94.2 - (94.2 * lead.attendanceRate) / 100}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-xs font-bold text-gray-900">
            {lead.attendanceRate}%
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 pt-1">
        <div className="flex h-2 w-full rounded-full overflow-hidden bg-gray-100">
          {presentPct > 0 && (
            <div style={{ width: `${presentPct}%` }} className="bg-[#10B981] h-full" />
          )}
          {absentPct > 0 && (
            <div style={{ width: `${absentPct}%` }} className="bg-[#F43F5E] h-full" />
          )}
          {leavePct > 0 && (
            <div style={{ width: `${leavePct}%` }} className="bg-[#F59E0B] h-full" />
          )}
          {wfhPct > 0 && (
            <div style={{ width: `${wfhPct}%` }} className="bg-[#5B50EC] h-full" />
          )}
        </div>

        <div className="grid grid-cols-4 gap-1 text-center pt-1">
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
              Present
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
              {lead.present}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E] shrink-0" />
              Absent
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
              {lead.absent}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
              Leave
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
              {lead.leave}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B50EC] shrink-0" />
              WFH
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
              {lead.wfh}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 pt-2 border-t border-gray-100">
        <span className="text-[11px] text-gray-400 font-medium">
          7-day Attendance Trend
        </span>
        <div className="w-full h-10 flex items-center justify-center">
          {renderSparkline(lead.weeklyTrend)}
        </div>
      </div>
    </div>
  )
}
