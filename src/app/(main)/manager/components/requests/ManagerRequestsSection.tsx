"use client"

import React, { useState, useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Toaster } from "react-hot-toast"
import { DateFilterValue } from "@/components/reusableComponents"
import {
  INITIAL_MANAGER_REQUESTS,
  ManagerRequestItem,
} from "../../data/managerRequestsData"
import ManagerRequestsSubtabs from "./ManagerRequestsSubtabs"
import ManagerRequestsStatsCards from "./ManagerRequestsStatsCards"
import ManagerRequestsFilterBar from "./ManagerRequestsFilterBar"
import ManagerRequestsList from "./ManagerRequestsList"
import ManagerRequestModals from "./ManagerRequestModals"
import { useManagerRequestActions } from "./useManagerRequestActions"

export default function ManagerRequestsSection() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentSubtab =
    searchParams.get("subtab") === "team-lead" ? "team-lead" : "team-member"

  const [requests, setRequests] = useState<ManagerRequestItem[]>(INITIAL_MANAGER_REQUESTS)
  const [searchQuery, setSearchQuery] = useState("")
  const [requestTypeFilter, setRequestTypeFilter] = useState("All Types")
  const [statusFilter, setStatusFilter] = useState("All Requests")
  const [dateFilter, setDateFilter] = useState<DateFilterValue>(new Date(2025, 7, 24))
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [viewingRequest, setViewingRequest] = useState<ManagerRequestItem | null>(null)

  const { confirmDialog, setConfirmDialog, promptAction, executeConfirmAction } =
    useManagerRequestActions(requests, setRequests, viewingRequest, setViewingRequest)

  const handleSubtabChange = (subtab: "team-member" | "team-lead") => {
    router.push(`/manager?tab=requests&subtab=${subtab}`)
    setCurrentPage(1)
  }

  const subtabRequests = useMemo(() => {
    return requests.filter((r) => r.subtab === currentSubtab)
  }, [requests, currentSubtab])

  const pendingCount = useMemo(
    () => subtabRequests.filter((r) => r.status === "Pending").length,
    [subtabRequests]
  )
  const approvedCount = useMemo(
    () => subtabRequests.filter((r) => r.status === "Approved").length,
    [subtabRequests]
  )
  const rejectedCount = useMemo(
    () => subtabRequests.filter((r) => r.status === "Rejected").length,
    [subtabRequests]
  )
  const leaveCount = useMemo(
    () => subtabRequests.filter((r) => r.requestType === "Leave").length,
    [subtabRequests]
  )
  const wfhCount = useMemo(
    () => subtabRequests.filter((r) => r.requestType === "Work From Home").length,
    [subtabRequests]
  )

  const filteredRequests = useMemo(() => {
    return subtabRequests.filter((item) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const match =
          item.name.toLowerCase().includes(query) ||
          item.employeeId.toLowerCase().includes(query) ||
          item.reason.toLowerCase().includes(query) ||
          item.designation.toLowerCase().includes(query)
        if (!match) return false
      }
      if (requestTypeFilter !== "All Types" && item.requestType !== requestTypeFilter) {
        return false
      }
      if (statusFilter !== "All Statuses" && statusFilter !== "All Requests") {
        if (statusFilter === "Pending" || statusFilter === "Approved" || statusFilter === "Rejected") {
          if (item.status !== statusFilter) return false
        } else if (statusFilter === "Leave" || statusFilter === "Work From Home") {
          if (item.requestType !== statusFilter) return false
        }
      }
      return true
    })
  }, [subtabRequests, searchQuery, requestTypeFilter, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filteredRequests.length / pageSize))
  const paginatedRequests = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredRequests.slice(start, start + pageSize)
  }, [filteredRequests, currentPage, pageSize])

  const handleResetFilters = () => {
    setSearchQuery("")
    setRequestTypeFilter("All Types")
    setStatusFilter("All Requests")
    setDateFilter(new Date(2025, 7, 24))
    setCurrentPage(1)
  }

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5 min-w-0">
      <Toaster position="top-right" toastOptions={{ duration: 3200 }} />

      <ManagerRequestsSubtabs
        currentSubtab={currentSubtab}
        onSubtabChange={handleSubtabChange}
      />

      <ManagerRequestsStatsCards
        pendingCount={pendingCount}
        approvedCount={approvedCount}
        rejectedCount={rejectedCount}
        leaveCount={leaveCount}
        wfhCount={wfhCount}
      />

      <ManagerRequestsFilterBar
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q)
          setCurrentPage(1)
        }}
        requestTypeFilter={requestTypeFilter}
        onRequestTypeChange={(t) => {
          setRequestTypeFilter(t)
          setCurrentPage(1)
        }}
        statusFilter={statusFilter}
        onStatusChange={(s) => {
          setStatusFilter(s)
          setCurrentPage(1)
        }}
        dateFilter={dateFilter}
        onDateChange={(d) => {
          setDateFilter(d)
          setCurrentPage(1)
        }}
        onResetFilters={handleResetFilters}
      />

      <ManagerRequestsList
        currentSubtab={currentSubtab}
        paginatedRequests={paginatedRequests}
        totalItems={filteredRequests.length}
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={(sz) => {
          setPageSize(sz)
          setCurrentPage(1)
        }}
        onView={setViewingRequest}
        onApprove={(id) => promptAction(id, "approve")}
        onReject={(id) => promptAction(id, "reject")}
      />

      <ManagerRequestModals
        viewingRequest={viewingRequest}
        onCloseViewing={() => setViewingRequest(null)}
        onApprove={(id) => promptAction(id, "approve")}
        onReject={(id) => promptAction(id, "reject")}
        confirmDialog={confirmDialog}
        onCloseConfirm={() => setConfirmDialog(null)}
        onConfirmAction={executeConfirmAction}
      />
    </div>
  )
}
