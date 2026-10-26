"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Clock } from "phosphor-react"
import { ReusableTable, TableColumn } from "../../../../../reusableComponents"
import ReusablePagination from "../../../../../reusableComponents/ReusablePagination"

interface LeaveRequestItem {
  id: string
  employeeName: string
  type: string
  from: string
  to: string
  days: number
  status: "Pending" | "Approved" | "Rejected"
  reason: string
}

const mockRequests: LeaveRequestItem[] = [
  { id: "REQ-101", employeeName: "Stanly", type: "Sick Leave", from: "12/09/2025", to: "13/09/2025", days: 2, status: "Pending", reason: "Medical checkup" },
  { id: "REQ-102", employeeName: "Alex Turner", type: "Casual Leave", from: "15/09/2025", to: "16/09/2025", days: 2, status: "Pending", reason: "Family event" },
  { id: "REQ-103", employeeName: "Sarah Connor", type: "Paid Leave", from: "20/09/2025", to: "22/09/2025", days: 3, status: "Pending", reason: "Vacation trip" },
  { id: "REQ-104", employeeName: "David Miller", type: "Sick Leave", from: "01/09/2025", to: "02/09/2025", days: 2, status: "Approved", reason: "Flu recovery" },
]

export default function TeamLeadRequestsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5
  const totalPages = Math.ceil(mockRequests.length / pageSize)

  const columns: TableColumn<LeaveRequestItem>[] = [
    { header: "Request ID", accessor: "id", width: "100px", className: "font-semibold text-[#5B50EC]" },
    { header: "Employee", accessor: "employeeName", width: "140px", className: "font-medium text-gray-800" },
    { header: "Leave Type", accessor: "type", width: "120px" },
    { header: "Duration", render: (r) => `${r.from} - ${r.to} (${r.days}d)` },
    { header: "Reason", accessor: "reason" },
    {
      header: "Status",
      render: (r) => (
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
            r.status === "Approved"
              ? "bg-emerald-50 text-emerald-600"
              : r.status === "Pending"
              ? "bg-amber-50 text-amber-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {r.status === "Approved" && <CheckCircle size={12} weight="fill" />}
          {r.status === "Pending" && <Clock size={12} weight="fill" />}
          {r.status === "Rejected" && <XCircle size={12} weight="fill" />}
          {r.status}
        </span>
      ),
    },
    {
      header: "Actions",
      align: "center",
      render: () => (
        <div className="flex items-center justify-center gap-2">
          <button type="button" className="px-2.5 py-1 rounded-lg bg-[#5B50EC] text-white text-xs font-semibold hover:bg-[#4d42e0]">
            Approve
          </button>
          <button type="button" className="px-2.5 py-1 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-50">
            Reject
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full flex-1 p-4 md:p-6 flex flex-col gap-5 max-w-[1600px] mx-auto animate-in fade-in duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/teamlead" className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-[#5B50EC] transition-colors">
            <ArrowLeft size={16} weight="bold" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-[#1F2433]">Team Attendance Requests</h1>
            <p className="text-xs text-gray-400">Review and approve team leave requests</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
        <ReusableTable columns={columns} data={mockRequests} headerBgColor="#F7F6FE" headerTextColor="#374151" headerRounded="rounded-xl" />
        <ReusablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} totalItems={mockRequests.length} pageSize={pageSize} showPageSize={false} />
      </div>
    </div>
  )
}
