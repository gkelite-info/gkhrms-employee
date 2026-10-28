"use client"

import { TableColumn, ReusableAvatar } from "@/components/reusableComponents"
import { TeamMemberAttendance } from "../data/teamAttendanceData"

interface GetTeamAttendanceColumnsProps {
  onView: (id: string) => void
}

export function getTeamAttendanceColumns({
  onView,
}: GetTeamAttendanceColumnsProps): TableColumn<TeamMemberAttendance>[] {
  return [
    {
      header: "TEAM MEMBER",
      accessor: "name",
      className: "min-w-[190px]",
      render: (row) => (
        <div className="flex items-center gap-3">
          <ReusableAvatar
            src={row.avatar}
            name={row.name}
            size={36}
            fallbackType="icon"
            bgColor="#EEF2FF"
            textColor="#5B50EC"
            className="flex-shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-gray-900 text-xs truncate">
              {row.name}
            </span>
            <span className="text-[11px] text-gray-400 font-medium truncate">
              {row.employeeId} • {row.designation}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: "STATUS",
      accessor: "status",
      render: (row) => {
        if (row.status === "Present") {
          return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8FAF4] text-[#10B981] whitespace-nowrap select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Present
            </span>
          )
        }
        if (row.status === "Late") {
          return (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF8EC] text-[#F59E0B] whitespace-nowrap select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              Late
            </span>
          )
        }
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF1F2] text-[#F43F5E] whitespace-nowrap select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E]" />
            Absent
          </span>
        )
      },
    },
    {
      header: "CHECK IN",
      accessor: "checkIn",
      className: "text-gray-700 font-medium whitespace-nowrap",
    },
    {
      header: "CHECK OUT",
      accessor: "checkOut",
      className: "text-gray-700 font-medium whitespace-nowrap",
    },
    {
      header: "WORKING HOURS",
      accessor: "workingHours",
      className: "font-semibold text-gray-900 whitespace-nowrap",
    },
    {
      header: "SHIFT",
      accessor: "shift",
      className: "text-gray-500 whitespace-nowrap",
    },
    {
      header: "ACTION",
      align: "center",
      render: (row) => (
        <button
          type="button"
          onClick={() => onView(row.id)}
          className="px-4 py-1.5 rounded-xl border border-[#C5C1FF] text-[#5B50EC] hover:bg-[#EEF2FF] hover:border-[#5B50EC] text-xs font-bold transition-all duration-150 cursor-pointer shadow-2xs active:scale-97 select-none"
        >
          View
        </button>
      ),
    },
  ]
}
