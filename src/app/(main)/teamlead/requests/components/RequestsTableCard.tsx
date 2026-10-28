"use client"

import {
  ReusableTable,
  TableColumn,
  ReusablePagination,
  DateFilterValue,
} from "@/components/reusableComponents"
import { AttendanceRequestItem } from "../types"
import RequestsFilterBar from "./RequestsFilterBar"

interface RequestsTableCardProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  requestTypeFilter: string
  onRequestTypeChange: (type: string) => void
  statusFilter: string
  onStatusChange: (status: string) => void
  dateFilter: DateFilterValue
  onDateFilterChange: (date: DateFilterValue) => void
  onResetFilters: () => void
  columns: TableColumn<AttendanceRequestItem>[]
  paginatedRequests: AttendanceRequestItem[]
  totalItems: number
  currentPage: number
  totalPages: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export default function RequestsTableCard({
  searchQuery,
  onSearchChange,
  requestTypeFilter,
  onRequestTypeChange,
  statusFilter,
  onStatusChange,
  dateFilter,
  onDateFilterChange,
  onResetFilters,
  columns,
  paginatedRequests,
  totalItems,
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: RequestsTableCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex flex-col gap-4">
      <RequestsFilterBar
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        requestTypeFilter={requestTypeFilter}
        onRequestTypeChange={onRequestTypeChange}
        statusFilter={statusFilter}
        onStatusChange={onStatusChange}
        dateFilter={dateFilter}
        onDateFilterChange={onDateFilterChange}
        onResetFilters={onResetFilters}
      />

      <ReusableTable
        columns={columns}
        data={paginatedRequests}
        keyExtractor={(row) => row.id}
        headerBgColor="#F7F6FE"
        headerTextColor="#374151"
        headerRounded="rounded-xl"
        rowHover={true}
        tableClassName="text-xs min-w-[950px]"
        containerClassName="w-full overflow-x-auto rounded-xl border border-gray-100/60 pb-1"
      />

      <ReusablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageSizeChange={onPageSizeChange}
        pageSizeOptions={[5, 8, 10, 20]}
        showPageSize={true}
        showTotalInfo={true}
        showJumpToPage={true}
        layout="auto"
      />
    </div>
  )
}
