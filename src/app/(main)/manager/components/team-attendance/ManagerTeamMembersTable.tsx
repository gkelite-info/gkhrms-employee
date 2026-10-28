"use client"

import React, { useMemo } from "react"
import { useRouter } from "next/navigation"
import { MagnifyingGlass } from "phosphor-react"
import {
  ReusableTable,
  ReusablePagination,
  ReusableDateFilter,
  ReusableDropdown,
  DateFilterValue,
} from "@/components/reusableComponents"
import { ManagerTeamLead, ManagerTeamMember } from "../../data/managerAttendanceData"
import { getManagerTeamColumns } from "./managerTeamColumns"

interface ManagerTeamMembersTableProps {
  selectedLead: ManagerTeamLead
  members: ManagerTeamMember[]
  totalItems: number
  searchQuery: string
  onSearchChange: (query: string) => void
  statusFilter: string
  onStatusChange: (status: string) => void
  shiftFilter: string
  onShiftChange: (shift: string) => void
  dateFilter: DateFilterValue
  onDateChange: (date: DateFilterValue) => void
  onResetFilters: () => void
  currentPage: number
  totalPages: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export default function ManagerTeamMembersTable({
  selectedLead,
  members,
  totalItems,
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  shiftFilter,
  onShiftChange,
  dateFilter,
  onDateChange,
  onResetFilters,
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: ManagerTeamMembersTableProps) {
  const router = useRouter()

  const statusOptions = ["All", "Present", "Work From Home", "Absent", "On Leave"]
  const shiftOptions = ["All Shifts", "General", "Morning", "Night"]

  const columns = useMemo(() => getManagerTeamColumns(router), [router])

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex flex-col gap-4">
      <h2 className="text-sm font-bold text-gray-900">
        Team Members – {selectedLead.name} ({selectedLead.membersCount})
      </h2>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 min-w-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1 min-w-0">
          <div className="relative w-full sm:w-auto sm:flex-1 sm:min-w-[180px] sm:max-w-xs">
            <MagnifyingGlass
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search employee name, ID..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#5B50EC] focus:ring-1 focus:ring-[#5B50EC] transition-all bg-white"
            />
          </div>

          <ReusableDropdown
            value={statusFilter}
            options={statusOptions.map((s) => ({ label: `Status: ${s}`, value: s }))}
            onChange={(val) => onStatusChange(String(val))}
            align="left"
            placeholder="Status"
            className="w-auto"
            buttonClassName="px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-700 bg-white hover:bg-gray-50/50"
          />

          <ReusableDropdown
            value={shiftFilter}
            options={shiftOptions.map((sh) => ({ label: `Shift: ${sh}`, value: sh }))}
            onChange={(val) => onShiftChange(String(val))}
            align="left"
            placeholder="Shift"
            className="w-auto"
            buttonClassName="px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-700 bg-white hover:bg-gray-50/50"
          />

          <ReusableDateFilter
            value={dateFilter}
            onChange={onDateChange}
            modes={["date", "month", "year"]}
            title="Filter Date"
            className="w-auto"
          />
        </div>

        <button
          type="button"
          onClick={onResetFilters}
          className="text-xs sm:text-sm font-semibold text-[#5B50EC] hover:text-[#4338CA] hover:underline transition-all cursor-pointer self-end sm:self-auto"
        >
          Reset Filters
        </button>
      </div>

      <ReusableTable
        columns={columns}
        data={members}
        keyExtractor={(row) => row.id}
        headerBgColor="#F7F6FE"
        headerTextColor="#374151"
        headerRounded="rounded-xl"
        rowHover={true}
        emptyMessage="No team members found for this selection."
      />

      <ReusablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        pageSizeOptions={[5, 8, 10, 20]}
        showPageSize={true}
        showTotalInfo={true}
        showJumpToPage={true}
        className="pt-2 border-t border-gray-100"
      />
    </div>
  )
}
