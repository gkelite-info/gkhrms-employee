"use client"

import {  useState, useMemo  } from "react";
import { DateFilterValue } from "@/components/reusableComponents"
import { MANAGER_TEAM_LEADS } from "../data/managerAttendanceData"
import TLWiseStatsCards from "./tl-wise/TLWiseStatsCards"
import TLWiseFilterBar from "./tl-wise/TLWiseFilterBar"
import TLWiseCardsScroll from "./tl-wise/TLWiseCardsScroll"
import TLWiseOverviewTable from "./tl-wise/TLWiseOverviewTable"

export default function ManagerTLWiseAttendanceSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDept, setSelectedDept] = useState("All Departments")
  const [selectedStatus, setSelectedStatus] = useState("All Status")
  const [selectedDate, setSelectedDate] = useState<DateFilterValue>(new Date(2025, 7, 26))
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)

  const departments = useMemo(() => {
    const depts = Array.from(
      new Set(
        MANAGER_TEAM_LEADS.map((tl) => tl.department).filter(Boolean) as string[]
      )
    )
    return ["All Departments", ...depts]
  }, [])

  const statuses = ["All Status", "Present", "On Leave", "Work From Home", "Absent"]

  const filteredLeads = useMemo(() => {
    return MANAGER_TEAM_LEADS.filter((tl) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        tl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tl.department && tl.department.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesDept =
        selectedDept === "All Departments" || tl.department === selectedDept

      const matchesStatus =
        selectedStatus === "All Status" || tl.status === selectedStatus

      return matchesSearch && matchesDept && matchesStatus
    })
  }, [searchQuery, selectedDept, selectedStatus])

  const totalLeadsCount = MANAGER_TEAM_LEADS.length
  const presentLeadsCount = MANAGER_TEAM_LEADS.filter((tl) => tl.status === "Present").length
  const leaveLeadsCount = MANAGER_TEAM_LEADS.filter((tl) => tl.status === "On Leave").length
  const wfhLeadsCount = MANAGER_TEAM_LEADS.filter((tl) => tl.status === "Work From Home").length

  const sortedByRate = useMemo(() => {
    return [...filteredLeads].sort((a, b) => b.attendanceRate - a.attendanceRate)
  }, [filteredLeads])

  const totalPages = Math.ceil(sortedByRate.length / pageSize) || 1

  const paginatedOverviewLeads = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return sortedByRate.slice(start, start + pageSize)
  }, [sortedByRate, currentPage, pageSize])

  const handleResetFilters = () => {
    setSearchQuery("")
    setSelectedDept("All Departments")
    setSelectedStatus("All Status")
    setSelectedDate(new Date(2025, 7, 26))
    setCurrentPage(1)
  }

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5 min-w-0">
      <TLWiseStatsCards
        totalLeadsCount={totalLeadsCount}
        presentLeadsCount={presentLeadsCount}
        leaveLeadsCount={leaveLeadsCount}
        wfhLeadsCount={wfhLeadsCount}
      />

      <TLWiseFilterBar
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q)
          setCurrentPage(1)
        }}
        selectedDept={selectedDept}
        onDeptChange={(d) => {
          setSelectedDept(d)
          setCurrentPage(1)
        }}
        departments={departments}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        selectedStatus={selectedStatus}
        onStatusChange={(s) => {
          setSelectedStatus(s)
          setCurrentPage(1)
        }}
        statuses={statuses}
        onResetFilters={handleResetFilters}
      />

      <TLWiseCardsScroll
        leads={filteredLeads}
        selectedLeadId={selectedLeadId}
        onSelectLead={setSelectedLeadId}
      />

      <TLWiseOverviewTable
        leads={paginatedOverviewLeads}
        totalItems={sortedByRate.length}
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={(size) => {
          setPageSize(size)
          setCurrentPage(1)
        }}
      />
    </div>
  )
}
