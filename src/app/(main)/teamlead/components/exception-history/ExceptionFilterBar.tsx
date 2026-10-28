"use client"

import toast from "react-hot-toast"
import { MagnifyingGlass, X } from "phosphor-react"
import {
  ReusableDropdown,
  ReusableDateFilter,
} from "@/components/reusableComponents"

interface ExceptionFilterBarProps {
  searchQuery: string
  onSearchChange: (q: string) => void
  searchPlaceholder?: string
  issueFilter: string
  onIssueFilterChange: (issue: string) => void
  issueTypeOptions: string[]
  fromDate: Date | null
  onFromDateChange: (date: Date | null) => void
  toDate: Date | null
  onToDateChange: (date: Date | null) => void
}

export default function ExceptionFilterBar({
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Search...",
  issueFilter,
  onIssueFilterChange,
  issueTypeOptions,
  fromDate,
  onFromDateChange,
  toDate,
  onToDateChange,
}: ExceptionFilterBarProps) {
  const handleFromDateSelect = (val: any) => {
    let selected: Date | null = null
    if (val instanceof Date) selected = val
    else if (val && typeof val === "object" && val.startDate) selected = new Date(val.startDate)
    if (!selected || isNaN(selected.getTime())) return

    if (toDate && selected.getTime() > toDate.getTime()) {
      toast.error("From Date cannot be after To Date.", { position: "top-right" })
      onToDateChange(selected)
    }
    onFromDateChange(selected)
  }

  const handleToDateSelect = (val: any) => {
    let selected: Date | null = null
    if (val instanceof Date) selected = val
    else if (val && typeof val === "object" && val.startDate) selected = new Date(val.startDate)
    if (!selected || isNaN(selected.getTime())) return

    if (fromDate && selected.getTime() < fromDate.getTime()) {
      toast.error("To Date cannot be before From Date.", { position: "top-right" })
      return
    }
    onToDateChange(selected)
  }

  const handleClearDates = () => {
    onFromDateChange(null)
    onToDateChange(null)
  }

  const fromFilterVal = fromDate || ({ label: "From Date", mode: "date" } as any)
  const toFilterVal = toDate || ({ label: "To Date", mode: "date" } as any)

  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 w-full min-w-0">
      <div className="flex flex-col gap-1 flex-1 max-w-md w-full">
        <span className="text-[11px] font-bold text-gray-700">Search</span>
        <div className="relative w-full">
          <MagnifyingGlass
            size={16}
            weight="bold"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full h-10 pl-10 pr-3.5 rounded-xl border border-gray-200 bg-white text-xs text-gray-700 placeholder:text-gray-400 hover:border-[#5B50EC] focus:border-[#5B50EC] outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-end gap-2.5 sm:gap-3 w-full lg:w-auto min-w-0">
        <div className="flex flex-col gap-1 w-full sm:w-auto min-w-[140px]">
          <span className="text-[11px] font-bold text-gray-700">Issue Type</span>
          <ReusableDropdown
            value={issueFilter}
            options={issueTypeOptions}
            onChange={(val) => onIssueFilterChange(String(val))}
            placeholder="All"
            align="full"
            className="w-full sm:w-auto"
            buttonClassName="w-full sm:w-40 h-10 px-3.5 rounded-xl border-gray-200 text-xs"
          />
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-row items-end gap-2 sm:gap-3 w-full sm:w-auto min-w-0">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[11px] font-bold text-gray-700">From Date</span>
            <ReusableDateFilter
              value={fromFilterVal}
              onChange={handleFromDateSelect}
              modes={["date", "month", "year"]}
              title="Select From Date"
              className="w-full sm:w-auto [&>button]:h-10 [&>button]:px-3.5 [&>button]:w-full"
            />
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[11px] font-bold text-gray-700">To Date</span>
            <ReusableDateFilter
              value={toFilterVal}
              onChange={handleToDateSelect}
              modes={["date", "month", "year"]}
              title="Select To Date"
              className="w-full sm:w-auto [&>button]:h-10 [&>button]:px-3.5 [&>button]:w-full"
            />
          </div>
        </div>

        {(fromDate || toDate) && (
          <button
            type="button"
            onClick={handleClearDates}
            className="h-10 px-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50/50 flex items-center gap-1.5 transition-all cursor-pointer shrink-0 self-end"
            title="Clear date range"
          >
            <X size={14} weight="bold" />
            <span className="text-xs">Clear</span>
          </button>
        )}
      </div>
    </div>
  )
}
