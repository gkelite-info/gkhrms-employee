"use client"

import React, { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import {
  DateFilterValue,
  ReusableConfirmationModal,
} from "@/components/reusableComponents"
import {
  AttendanceRequestItem,
  getValidStatus,
  getValidType,
} from "../requests/types"
import { initialRequests } from "../requests/data/requestsData"
import RequestsHeader from "../requests/components/RequestsHeader"
import RequestsStatsCards from "../requests/components/RequestsStatsCards"
import RequestsTableCard from "../requests/components/RequestsTableCard"
import RequestDetailModal from "../requests/components/RequestDetailModal"
import { getRequestsColumns } from "../requests/components/requestsColumns"
import { getDefaultDateFilterValue } from "../data/dateFilterUtils"

export default function TeamLeadRequestsSection() {
  const searchParams = useSearchParams()

  const [requests, setRequests] = useState<AttendanceRequestItem[]>(initialRequests)
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get("q") || searchParams.get("search") || "")
  const [requestTypeFilter, setRequestTypeFilter] = useState(() => getValidType(searchParams.get("type")))
  const [statusFilter, setStatusFilter] = useState(() => getValidStatus(searchParams.get("status")))
  const [dateFilter, setDateFilter] = useState<DateFilterValue>(getDefaultDateFilterValue)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(8)
  const [viewingRequest, setViewingRequest] = useState<AttendanceRequestItem | null>(null)
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean
    type: "approve" | "reject"
    requestId: string
    employeeName: string
  } | null>(null)

  useEffect(() => {
    const urlStatus = searchParams.get("status")
    if (urlStatus !== null) {
      setStatusFilter(getValidStatus(urlStatus))
      setCurrentPage(1)
    }
  }, [searchParams])

  const pendingCount = useMemo(() => requests.filter((r) => r.status === "Pending").length, [requests])
  const approvedCount = useMemo(() => requests.filter((r) => r.status === "Approved").length, [requests])
  const rejectedCount = useMemo(() => requests.filter((r) => r.status === "Rejected").length, [requests])

  const promptAction = (id: string, type: "approve" | "reject") => {
    const item = requests.find((r) => r.id === id)
    setConfirmDialog({
      isOpen: true,
      type,
      requestId: id,
      employeeName: item?.name || "this employee",
    })
  }

  const executeConfirmAction = () => {
    if (!confirmDialog) return
    const { requestId, type, employeeName } = confirmDialog
    const newStatus = type === "approve" ? "Approved" : "Rejected"

    setRequests((prev) => prev.map((r) => (r.id === requestId ? { ...r, status: newStatus } : r)))
    if (viewingRequest?.id === requestId) {
      setViewingRequest((prev) => (prev ? { ...prev, status: newStatus } : null))
    }

    if (type === "approve") {
      toast.success(`Request for ${employeeName} approved successfully!`, { position: "top-right" })
    } else {
      toast.error(`Request for ${employeeName} has been rejected.`, { position: "top-right" })
    }
    setConfirmDialog(null)
  }

  const handleResetFilters = () => {
    setSearchQuery("")
    setRequestTypeFilter("All Types")
    setStatusFilter("All Statuses")
    setDateFilter(getDefaultDateFilterValue())
    setCurrentPage(1)
  }

  const filteredRequests = useMemo(() => {
    return requests.filter((item) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const match =
          item.name.toLowerCase().includes(query) ||
          item.employeeId.toLowerCase().includes(query) ||
          item.reason.toLowerCase().includes(query) ||
          item.designation.toLowerCase().includes(query)
        if (!match) return false
      }
      if (requestTypeFilter !== "All Types" && item.requestType !== requestTypeFilter) return false
      if (statusFilter !== "All Statuses" && item.status !== statusFilter) return false
      return true
    })
  }, [requests, searchQuery, requestTypeFilter, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filteredRequests.length / pageSize))
  const paginatedRequests = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredRequests.slice(start, start + pageSize)
  }, [filteredRequests, currentPage, pageSize])

  const columns = useMemo(
    () =>
      getRequestsColumns({
        onApprove: (id) => promptAction(id, "approve"),
        onReject: (id) => promptAction(id, "reject"),
        onView: (row) => setViewingRequest(row),
      }),
    [requests]
  )

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5 min-w-0">
      <Toaster position="top-right" toastOptions={{ duration: 3200 }} />
      <RequestsHeader />

      <RequestsStatsCards
        pendingCount={pendingCount}
        approvedCount={approvedCount}
        rejectedCount={rejectedCount}
        activeStatus={statusFilter}
        onStatusSelect={(status: string) => {
          setStatusFilter(status)
          setCurrentPage(1)
        }}
      />

      <RequestsTableCard
        searchQuery={searchQuery}
        onSearchChange={(q) => { setSearchQuery(q); setCurrentPage(1); }}
        requestTypeFilter={requestTypeFilter}
        onRequestTypeChange={(t) => { setRequestTypeFilter(t); setCurrentPage(1); }}
        statusFilter={statusFilter}
        onStatusChange={(s) => { setStatusFilter(s); setCurrentPage(1); }}
        dateFilter={dateFilter}
        onDateFilterChange={(v) => { setDateFilter(v); setCurrentPage(1); }}
        onResetFilters={handleResetFilters}
        columns={columns}
        paginatedRequests={paginatedRequests}
        totalItems={filteredRequests.length}
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={(newSize) => { setPageSize(newSize); setCurrentPage(1); }}
      />

      {viewingRequest && (
        <RequestDetailModal
          request={viewingRequest}
          onClose={() => setViewingRequest(null)}
          onApprove={(id) => promptAction(id, "approve")}
          onReject={(id) => promptAction(id, "reject")}
        />
      )}

      {confirmDialog && (
        <ReusableConfirmationModal
          isOpen={confirmDialog.isOpen}
          onClose={() => setConfirmDialog(null)}
          onConfirm={executeConfirmAction}
          type={confirmDialog.type === "approve" ? "success" : "danger"}
          title={
            confirmDialog.type === "approve"
              ? "Approve Attendance Request?"
              : "Reject Attendance Request?"
          }
          description={`Are you sure you want to ${
            confirmDialog.type === "approve" ? "approve" : "reject"
          } the request for ${confirmDialog.employeeName}?`}
          confirmText={confirmDialog.type === "approve" ? "Approve" : "Reject"}
          cancelText="Cancel"
        />
      )}
    </div>
  )
}
