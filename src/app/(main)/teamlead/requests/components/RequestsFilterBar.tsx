"use client"

import { MagnifyingGlass } from "phosphor-react"
import {
  ReusableDropdown,
  ReusableDateFilter,
  DateFilterValue,
} from "@/components/reusableComponents"

interface RequestsFilterBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  requestTypeFilter: string
  onRequestTypeChange: (type: string) => void
  statusFilter: string
  onStatusChange: (status: string) => void
  dateFilter: DateFilterValue
  onDateFilterChange: (val: DateFilterValue) => void
  onResetFilters: () => void
}

export default function RequestsFilterBar({
  searchQuery,
  onSearchChange,
  requestTypeFilter,
  onRequestTypeChange,
  statusFilter,
  onStatusChange,
  dateFilter,
  onDateFilterChange,
  onResetFilters,
}: RequestsFilterBarProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
      <div className="relative flex-1 max-w-md min-w-0">
        <MagnifyingGlass
          size={16}
          weight="bold"
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by employee name, ID, or reason..."
          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B50EC] focus:ring-2 focus:ring-[#5B50EC]/15 transition-all text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        <ReusableDropdown
          value={requestTypeFilter}
          options={["All Types", "Leave", "Work From Home", "Half Day"]}
          onChange={(val) => onRequestTypeChange(String(val))}
          buttonClassName="py-1.5 px-3 text-xs rounded-xl border-gray-200 bg-white"
        />

        <ReusableDropdown
          value={statusFilter}
          options={["All Statuses", "Pending", "Approved", "Rejected"]}
          onChange={(val) => onStatusChange(String(val))}
          buttonClassName="py-1.5 px-3 text-xs rounded-xl border-gray-200 bg-white"
        />

        <ReusableDateFilter
          value={dateFilter}
          onChange={onDateFilterChange}
          modes={["date", "month", "year"]}
          title="Filter Requests"
        />

        <button
          type="button"
          onClick={onResetFilters}
          className="text-xs font-semibold text-gray-500 hover:text-[#5B50EC] transition-colors cursor-pointer whitespace-nowrap px-2 py-1.5"
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
}
