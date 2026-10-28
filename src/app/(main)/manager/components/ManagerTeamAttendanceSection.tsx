"use client"

import {  useState, useMemo  } from "react";
import { DateFilterValue } from "@/components/reusableComponents"
import {
  MANAGER_TEAM_LEADS,
  MANAGER_TEAM_MEMBERS,
} from "../data/managerAttendanceData"
import { getDefaultDateFilterValue } from "../../teamlead/data/dateFilterUtils"
import ManagerAttendanceStatsGrid from "./team-attendance/ManagerAttendanceStatsGrid"
import ManagerTeamLeadsScroll from "./team-attendance/ManagerTeamLeadsScroll"
import ManagerTeamMembersTable from "./team-attendance/ManagerTeamMembersTable"

export default function ManagerTeamAttendanceSection() {
  const [selectedLeadId, setSelectedLeadId] = useState<string>("TL-001")
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [shiftFilter, setShiftFilter] = useState("All Shifts")
  const [dateFilter, setDateFilter] = useState<DateFilterValue>(getDefaultDateFilterValue)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(8)

  const selectedLead = useMemo(() => {
    return (
      MANAGER_TEAM_LEADS.find((tl) => tl.id === selectedLeadId) ||
      MANAGER_TEAM_LEADS[0]
    )
  }, [selectedLeadId])

  const totalMembersCount = useMemo(
    () => MANAGER_TEAM_LEADS.reduce((acc, tl) => acc + tl.membersCount, 0),
    []
  )
  const totalPresent = useMemo(
    () => MANAGER_TEAM_LEADS.reduce((acc, tl) => acc + tl.present, 0),
    []
  )
  const totalAbsent = useMemo(
    () => MANAGER_TEAM_LEADS.reduce((acc, tl) => acc + tl.absent, 0),
    []
  )
  const totalLeave = useMemo(
    () => MANAGER_TEAM_LEADS.reduce((acc, tl) => acc + tl.leave, 0),
    []
  )
  const totalWfh = useMemo(
    () => MANAGER_TEAM_LEADS.reduce((acc, tl) => acc + tl.wfh, 0),
    []
  )

  const presentPercentage = Math.round((totalPresent / totalMembersCount) * 100)
  const absentPercentage = Math.round((totalAbsent / totalMembersCount) * 100)
  const leavePercentage = Math.round((totalLeave / totalMembersCount) * 100)
  const wfhPercentage = Math.round((totalWfh / totalMembersCount) * 100)

  const teamMembers = useMemo(() => {
    const list = MANAGER_TEAM_MEMBERS.filter(
      (m) => m.teamLeadId === selectedLeadId
    )
    return list.length > 0 ? list : MANAGER_TEAM_MEMBERS
  }, [selectedLeadId])

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((item) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const match =
          item.name.toLowerCase().includes(query) ||
          item.employeeId.toLowerCase().includes(query) ||
          item.designation.toLowerCase().includes(query)
        if (!match) return false
      }
      if (statusFilter !== "All" && item.status !== statusFilter) {
        return false
      }
      if (
        shiftFilter !== "All Shifts" &&
        !item.shift.toLowerCase().includes(shiftFilter.toLowerCase())
      ) {
        return false
      }
      return true
    })
  }, [teamMembers, searchQuery, statusFilter, shiftFilter])

  const totalPages = Math.max(1, Math.ceil(filteredMembers.length / pageSize))
  const paginatedMembers = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredMembers.slice(start, start + pageSize)
  }, [filteredMembers, currentPage, pageSize])

  const handleResetFilters = () => {
    setSearchQuery("")
    setStatusFilter("All")
    setShiftFilter("All Shifts")
    setDateFilter(getDefaultDateFilterValue())
    setCurrentPage(1)
  }

  return (
    <div className="w-full flex flex-col gap-5 sm:gap-6 min-w-0">
      <ManagerAttendanceStatsGrid
        totalMembersCount={totalMembersCount}
        totalPresent={totalPresent}
        totalAbsent={totalAbsent}
        totalLeave={totalLeave}
        totalWfh={totalWfh}
        presentPercentage={presentPercentage}
        absentPercentage={absentPercentage}
        leavePercentage={leavePercentage}
        wfhPercentage={wfhPercentage}
      />

      <ManagerTeamLeadsScroll
        leads={MANAGER_TEAM_LEADS}
        selectedLeadId={selectedLeadId}
        onSelectLead={(id) => {
          setSelectedLeadId(id)
          setCurrentPage(1)
        }}
      />

      <ManagerTeamMembersTable
        selectedLead={selectedLead}
        members={paginatedMembers}
        totalItems={filteredMembers.length}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q)
          setCurrentPage(1)
        }}
        statusFilter={statusFilter}
        onStatusChange={(s) => {
          setStatusFilter(s)
          setCurrentPage(1)
        }}
        shiftFilter={shiftFilter}
        onShiftChange={(sh) => {
          setShiftFilter(sh)
          setCurrentPage(1)
        }}
        dateFilter={dateFilter}
        onDateChange={(df) => {
          setDateFilter(df)
          setCurrentPage(1)
        }}
        onResetFilters={handleResetFilters}
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
