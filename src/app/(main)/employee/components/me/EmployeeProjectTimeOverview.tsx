"use client"

import React, { useState } from "react"
import { MagnifyingGlass } from "phosphor-react"

export default function EmployeeProjectTimeOverview() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="w-full max-w-full flex flex-col gap-4 sm:gap-6">
      {/* 1. Header Purple Badge (Image-2) */}
      <div className="w-fit bg-[#C5C1FF] text-[#1F2937] font-bold text-base sm:text-lg md:text-xl px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-sm">
        Projects Time Overview
      </div>

      {/* 2. Search & Date Filter Row (Image-2) */}
      <div className="w-full flex flex-wrap items-center gap-2.5 sm:gap-3">
        {/* Search Input Box */}
        <div className="flex items-center justify-between bg-[#EAE8E4] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl flex-1 min-w-[180px] sm:min-w-[240px] border border-transparent focus-within:border-[#7D73E3] transition-colors">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="bg-transparent text-xs sm:text-sm text-[#1F2937] placeholder-gray-500 font-medium focus:outline-none w-full"
          />
          <MagnifyingGlass size={17} weight="bold" className="text-gray-700 ml-2 flex-shrink-0 cursor-pointer" />
        </div>

        {/* Start Date Pill */}
        <div className="bg-[#EAE8E4] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#1F2937] select-none whitespace-nowrap">
          Start Date : <span className="font-semibold text-gray-700">18 Aug 2025</span>
        </div>

        {/* End Date Pill */}
        <div className="bg-[#EAE8E4] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#1F2937] select-none whitespace-nowrap">
          End Date : <span className="font-semibold text-gray-700">18 Aug 2025</span>
        </div>
      </div>

      {/* 3. 4 Project Summary Cards (Responsive 1-col mobile, 2-col tablet, 4-col desktop) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: GKElite Project: HRMS */}
        <div className="bg-[#EAE8E4] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-center min-h-[140px] sm:min-h-[170px] shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] leading-tight">GKElite</h3>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 sm:mt-3">Project : HRMS</p>
        </div>

        {/* Card 2: Total Duration 6,657 Hours */}
        <div className="bg-[#EAE8E4] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[170px] shadow-sm">
          <span className="text-xs font-bold text-gray-700">Total Duration</span>
          <div className="flex items-baseline justify-center gap-1.5 mt-2 sm:mt-3">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2937] tracking-tight">6,657</span>
            <span className="text-xs font-semibold text-gray-600">Hours</span>
          </div>
        </div>

        {/* Card 3: Billable Hours 3000 Hours, 50,000 Pay */}
        <div className="bg-[#EAE8E4] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[170px] shadow-sm">
          <span className="text-xs font-bold text-gray-700 text-center block">Billable Hours</span>
          <div className="flex flex-col gap-1 my-1.5 sm:my-2">
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-[#1F2937]">3000</span>
              <span className="text-xs font-semibold text-gray-600">Hours</span>
            </div>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-[#1F2937]">50,000</span>
              <span className="text-xs font-semibold text-gray-600">Pay</span>
            </div>
          </div>
          {/* Progress bar with purple to pink gradient */}
          <div className="h-2.5 sm:h-3 w-full bg-[#D6D4D0] rounded-full overflow-hidden mt-1">
            <div className="h-full rounded-full bg-gradient-to-r from-[#6357E8] to-[#E056FD] w-[65%]" />
          </div>
        </div>

        {/* Card 4: Non Billable Hours 1000 Hours, 30,000 Pay */}
        <div className="bg-[#EAE8E4] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[170px] shadow-sm">
          <span className="text-xs font-bold text-gray-700 text-center block">Non Billable Hours</span>
          <div className="flex flex-col gap-1 my-1.5 sm:my-2">
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-[#1F2937]">1000</span>
              <span className="text-xs font-semibold text-gray-600">Hours</span>
            </div>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-[#1F2937]">30,000</span>
              <span className="text-xs font-semibold text-gray-600">Pay</span>
            </div>
          </div>
          {/* Progress bar with purple to pink gradient */}
          <div className="h-2.5 sm:h-3 w-full bg-[#D6D4D0] rounded-full overflow-hidden mt-1">
            <div className="h-full rounded-full bg-gradient-to-r from-[#6357E8] to-[#E056FD] w-[55%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
