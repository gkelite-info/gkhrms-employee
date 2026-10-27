"use client"

import React, { useState, useMemo } from "react"
import { ReusableTable, TableColumn, ReusableAvatar } from "../../../../../reusableComponents"
import ReusablePagination from "../../../../../reusableComponents/ReusablePagination"
import ReusableDateFilter, { DateFilterStructuredValue } from "../../../../../reusableComponents/ReusableDateFilter"
import { getDefaultDateFilterValue } from "../data/dateFilterUtils"
import { AttendanceRecord, initialAttendanceRecords } from "./attendanceData"

export default function AttendanceLogSection() {
  const [dateFilter, setDateFilter] = useState<DateFilterStructuredValue>(getDefaultDateFilterValue)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const filteredRecords = useMemo(() => {
    if (dateFilter.mode === "date" && dateFilter.selectedDate) {
      return initialAttendanceRecords.filter((r) => r.date === dateFilter.selectedDate)
    }
    if (dateFilter.mode === "month" && dateFilter.selectedMonth !== undefined && dateFilter.selectedYear) {
      const monthStr = String(dateFilter.selectedMonth + 1).padStart(2, "0")
      return initialAttendanceRecords.filter((r) => r.date.endsWith(`/${monthStr}/${dateFilter.selectedYear}`))
    }
    if (dateFilter.mode === "year" && dateFilter.selectedYear) {
      return initialAttendanceRecords.filter((r) => r.date.endsWith(`/${dateFilter.selectedYear}`))
    }
    return initialAttendanceRecords
  }, [dateFilter])

  const totalRecords = filteredRecords.length
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize))
  const paginatedData = filteredRecords.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const columns: TableColumn<AttendanceRecord>[] = [
    {
      key: "sNo",
      header: "S.No",
      accessor: "sNo",
      width: "55px",
      align: "left",
      className: "text-gray-500 font-semibold",
    },
    {
      key: "date",
      header: "Date",
      accessor: "date",
      width: "100px",
      align: "left",
      className: "text-gray-600 font-medium",
    },
    {
      key: "name",
      header: "Name",
      width: "150px",
      align: "left",
      render: (row) => (
        <div className="flex items-center gap-2.5 font-medium text-gray-800">
          <ReusableAvatar
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
            alt={row.name}
            name={row.name}
            size="sm"
            fallbackType="icon"
          />
          <span className="font-semibold text-gray-900 text-xs">{row.name}</span>
        </div>
      ),
    },
    { key: "email", header: "Email", accessor: "email", width: "170px", align: "left", className: "text-gray-500" },
    { key: "employeeId", header: "Employee ID", accessor: "employeeId", width: "100px", align: "left", className: "text-gray-600 font-medium" },
    { key: "department", header: "Department", accessor: "department", width: "110px", align: "left", className: "text-gray-600" },
    { key: "attendancePercent", header: "Attendance %", accessor: "attendancePercent", width: "110px", align: "left", className: "text-gray-700 font-medium" },
    { key: "effectiveHours", header: "Effective Hours", accessor: "effectiveHours", width: "120px", align: "left", className: "text-gray-700" },
    { key: "grossHours", header: "Gross Hours", accessor: "grossHours", width: "110px", align: "left", className: "text-gray-700" },
    {
      key: "checkIn",
      header: "Check-in",
      accessor: "checkIn",
      width: "95px",
      align: "left",
      className: "text-gray-600",
    },
    {
      key: "checkOut",
      header: "Check-out",
      accessor: "checkOut",
      width: "95px",
      align: "left",
      className: "text-gray-600",
    },
    {
      key: "mood",
      header: "Mood",
      accessor: "mood",
      width: "75px",
      align: "center",
      render: (row) => (
        <span className="text-lg select-none inline-block hover:scale-120 transition-transform">
          {row.mood || "🙂"}
        </span>
      ),
    },
  ]

  return (
    <div className="bg-white rounded-2xl p-3 sm:p-5 shadow-sm border border-gray-100 flex flex-col gap-4 w-full max-w-full min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-[#1F2433]">Attendance Log</h2>
          <p className="text-xs text-gray-400 font-medium">
            {dateFilter.label} &bull; {totalRecords} {totalRecords === 1 ? "Record" : "Records"}
          </p>
        </div>

        <ReusableDateFilter
          value={dateFilter}
          onChange={(newVal: DateFilterStructuredValue) => {
            setDateFilter(newVal)
            setCurrentPage(1)
          }}
        />
      </div>

      <ReusableTable
        columns={columns}
        data={paginatedData}
        keyExtractor={(row) => `${row.sNo}-${row.date}`}
        headerBgColor="#F7F6FE"
        headerTextColor="#374151"
        headerRounded="rounded-xl"
        tableClassName="text-xs min-w-[1080px]"
        containerClassName="w-full overflow-x-auto rounded-xl border border-gray-100/60 pb-1"
      />

      <ReusablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        totalItems={totalRecords}
        pageSize={pageSize}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize)
          setCurrentPage(1)
        }}
        showPageSize={true}
        showTotalInfo={true}
      />
    </div>
  )
}
