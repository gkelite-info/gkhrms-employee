"use client"

import { useState, useMemo } from "react"
import { MagnifyingGlass, Clock, ArrowRight } from "phosphor-react"
import {
  ReusablePagination,
  ReusableAvatar,
  ReusableDropdown,
} from "@/components/reusableComponents"
import { TeamMemberExceptionSummary } from "./types"
import { teamMembersExceptions } from "./exceptionHistoryData"

interface TeamMembersExceptionSectionProps {
  onSelectMember: (memberId: string) => void
}

const departmentOptions = ["All Departments", "Technology", "Design", "QA"]

export default function TeamMembersExceptionSection({
  onSelectMember,
}: TeamMembersExceptionSectionProps) {
  const [members] = useState<TeamMemberExceptionSummary[]>(teamMembersExceptions)
  const [searchQuery, setSearchQuery] = useState("")
  const [deptFilter, setDeptFilter] = useState("All Departments")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const filtered = useMemo(() => {
    return members.filter((m) => {
      if (deptFilter !== "All Departments" && m.department !== deptFilter) return false
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = m.name.toLowerCase().includes(q)
        const matchRole = m.role.toLowerCase().includes(q)
        const matchDept = m.department.toLowerCase().includes(q)
        if (!matchName && !matchRole && !matchDept) return false
      }
      return true
    })
  }, [members, deptFilter, searchQuery])

  const totalItems = filtered.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, currentPage, pageSize])

  return (
    <div className="flex flex-col gap-4 w-full min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full min-w-0">
        <div className="relative max-w-md w-full">
          <MagnifyingGlass
            size={16}
            weight="bold"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            placeholder="Search by team member name or role..."
            className="w-full h-10 pl-10 pr-3.5 rounded-xl border border-gray-200 bg-white text-xs text-gray-700 placeholder:text-gray-400 hover:border-[#5B50EC] focus:border-[#5B50EC] outline-none transition-all"
          />
        </div>

        <div className="w-full sm:w-auto min-w-[150px]">
          <ReusableDropdown
            value={deptFilter}
            options={departmentOptions}
            onChange={(val) => {
              setDeptFilter(String(val))
              setCurrentPage(1)
            }}
            placeholder="All Departments"
            align="full"
            className="w-full sm:w-auto"
            buttonClassName="w-full sm:w-44 h-10 px-3.5 rounded-xl border-gray-200 text-xs"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-2xs custom-scrollbar">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-700 tracking-wider">
              <th className="py-3.5 px-4 whitespace-nowrap">TEAM MEMBER</th>
              <th className="py-3.5 px-4 whitespace-nowrap">ROLE</th>
              <th className="py-3.5 px-4 whitespace-nowrap">DEPARTMENT</th>
              <th className="py-3.5 px-4 text-center whitespace-nowrap">TOTAL EXCEPTIONS</th>
              <th className="py-3.5 px-4 whitespace-nowrap">CURRENT STATUS</th>
              <th className="py-3.5 px-4 text-center whitespace-nowrap">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-xs text-gray-400">
                  No team members found matching your search.
                </td>
              </tr>
            ) : (
              paginated.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-3 min-w-0">
                      <ReusableAvatar
                        name={item.name}
                        src={item.avatar}
                        size="sm"
                        shape="circle"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-gray-900 leading-tight">{item.name}</span>
                        <span className="text-[10px] text-gray-400 font-medium">{item.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-gray-700 whitespace-nowrap">{item.role}</td>
                  <td className="py-3.5 px-4 font-medium text-gray-500 whitespace-nowrap">
                    {item.department} | {item.team}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#EEF2FF] text-[#5B50EC]">
                      {item.totalExceptions} Records
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {item.currentIssue ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                        <Clock size={12} weight="bold" />
                        <span>{item.currentIssue}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-gray-50 text-gray-500">
                        No active issues
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => onSelectMember(item.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#5B50EC] text-white hover:bg-[#4d42e0] text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                    >
                      <span>View History</span>
                      <ArrowRight size={13} weight="bold" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <ReusablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageSizeChange={(size) => {
          setPageSize(size)
          setCurrentPage(1)
        }}
        pageSizeOptions={[5, 10, 15]}
        showPageSize={true}
        showTotalInfo={true}
        showJumpToPage={true}
        layout="auto"
      />
    </div>
  )
}
