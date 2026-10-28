"use client"

import { ChartBar } from "phosphor-react"
import { ReusableAvatar, ReusablePagination } from "@/components/reusableComponents"
import { ManagerTeamLead } from "../../data/managerAttendanceData"

interface TLWiseOverviewTableProps {
  leads: ManagerTeamLead[]
  totalItems: number
  currentPage: number
  totalPages: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export default function TLWiseOverviewTable({
  leads,
  totalItems,
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: TLWiseOverviewTableProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-xs flex flex-col gap-5 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
          <div className="w-10 h-10 rounded-2xl bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
            <ChartBar size={22} weight="regular" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2 w-full">
              <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                Attendance Overview
              </h2>
              <span className="sm:hidden px-2.5 py-1 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 bg-white shrink-0">
                Attendance %
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium mt-1 break-words">
              Compare attendance across Team Leads
            </p>
          </div>
        </div>

        <div className="hidden sm:block px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 bg-white shrink-0">
          Attendance %
        </div>
      </div>

      <div className="flex flex-col divide-y divide-gray-50 max-h-[300px] sm:max-h-[340px] overflow-y-auto custom-scrollbar pr-1">
        {leads.map((tl, index) => {
          const globalIndex = (currentPage - 1) * pageSize + index + 1

          return (
            <div key={tl.id} className="py-3 sm:py-3.5 first:pt-0 last:pb-0">
              <div className="flex sm:hidden flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <span className="text-xs font-bold text-gray-400 w-4 text-center shrink-0">
                      {globalIndex}
                    </span>
                    <ReusableAvatar
                      src={tl.avatar}
                      alt={tl.name}
                      name={tl.name}
                      size="sm"
                      fallbackType="icon"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-xs font-bold text-gray-900 leading-snug break-words">
                        {tl.name}
                      </span>
                      <span className="text-[11px] text-gray-400 break-words">
                        {tl.department || tl.role}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-gray-900 shrink-0">
                    {tl.attendanceRate}%
                  </span>
                </div>

                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${tl.attendanceRate}%` }}
                    className="h-full bg-[#5B50EC] rounded-full transition-all duration-300"
                  />
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-4 md:gap-6 min-w-0">
                <span className="text-xs sm:text-sm font-bold text-gray-400 w-4 sm:w-6 text-center shrink-0">
                  {globalIndex}
                </span>

                <div className="flex items-center gap-3 w-40 md:w-52 shrink-0 min-w-0">
                  <ReusableAvatar
                    src={tl.avatar}
                    alt={tl.name}
                    name={tl.name}
                    size="md"
                    fallbackType="icon"
                  />
                  <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {tl.name}
                  </span>
                </div>

                <span className="text-xs text-gray-400 font-medium w-32 md:w-40 shrink-0 truncate">
                  {tl.department || tl.role}
                </span>

                <div className="flex-1 min-w-[120px] flex items-center">
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${tl.attendanceRate}%` }}
                      className="h-full bg-[#5B50EC] rounded-full transition-all duration-300"
                    />
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-bold text-gray-900 w-12 text-right shrink-0">
                  {tl.attendanceRate}%
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <ReusablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        pageSizeOptions={[4, 8, 12]}
        showPageSize={true}
        showTotalInfo={true}
        showJumpToPage={true}
        className="pt-2 border-t border-gray-100"
      />
    </div>
  )
}
