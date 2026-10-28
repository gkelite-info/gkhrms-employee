"use client"

import { MagnifyingGlass } from "phosphor-react"
import {
  ReusableDropdown,
  ReusableDateFilter,
  DateFilterValue,
} from "@/components/reusableComponents"

interface TLWiseFilterBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedDept: string
  onDeptChange: (dept: string) => void
  departments: string[]
  selectedDate: DateFilterValue
  onDateChange: (date: DateFilterValue) => void
  selectedStatus: string
  onStatusChange: (status: string) => void
  statuses: string[]
  onResetFilters: () => void
}

export default function TLWiseFilterBar({
  searchQuery,
  onSearchChange,
  selectedDept,
  onDeptChange,
  departments,
  selectedDate,
  onDateChange,
  selectedStatus,
  onStatusChange,
  statuses,
  onResetFilters,
}: TLWiseFilterBarProps) {
  return (
    <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 min-w-0">
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1 min-w-0">
        <div className="relative w-full sm:w-auto sm:flex-1 sm:min-w-[180px] sm:max-w-xs">
          <MagnifyingGlass
            size={16}
            weight="bold"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search Team Lead or department..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#5B50EC] focus:ring-1 focus:ring-[#5B50EC] transition-all bg-white"
          />
        </div>

        <ReusableDropdown
          value={selectedDept}
          options={departments.map((d) => ({ label: d, value: d }))}
          onChange={(val) => onDeptChange(String(val))}
          align="left"
          placeholder="All Departments"
          className="w-auto"
          buttonClassName="px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-700 bg-white hover:bg-gray-50/50"
        />

        <ReusableDateFilter
          value={selectedDate}
          onChange={onDateChange}
          modes={["date", "month", "year"]}
          title="Attendance Date"
          className="w-auto"
        />

        <ReusableDropdown
          value={selectedStatus}
          options={statuses.map((s) => ({ label: s, value: s }))}
          onChange={(val) => onStatusChange(String(val))}
          align="left"
          placeholder="All Status"
          className="w-auto"
          buttonClassName="px-3 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-700 bg-white hover:bg-gray-50/50"
        />
      </div>

      <div className="flex items-center justify-end shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-50">
        <button
          type="button"
          onClick={onResetFilters}
          className="text-xs sm:text-sm font-semibold text-[#5B50EC] hover:text-[#4338CA] hover:underline transition-all cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
}
