"use client"

import {  useState  } from "react";
import { ArrowLeft, ArrowUp, CaretDown, Star } from "phosphor-react"
import ReusableTable from "@/components/reusableComponents/ReusableTable"

interface PerformanceRow {
  month: string
  score: string
  feedback: string
  comments: string
}

const performanceTableData: PerformanceRow[] = [
  { month: "January 2025", score: "4.0/5", feedback: "Good start to the year.", comments: "Nice progress." },
  { month: "February 2025", score: "3.8/5", feedback: "Creative work", comments: "Clear communication." },
  { month: "March 2025", score: "3.2/5", feedback: "Excellent design output.", comments: "Focus on consistency." },
  { month: "April 2025", score: "4.5/5", feedback: "Great teamwork.", comments: "Try new ideas." },
  { month: "May 2025", score: "4.6/5", feedback: "Wireframes need refining.", comments: "Focus on consistency." },
  { month: "June 2025", score: "4.6/5", feedback: "Good start to the year.", comments: "Nice progress." },
  { month: "July 2025", score: "4.8/5", feedback: "Creative work", comments: "Clear communication." },
  { month: "August 2025", score: "4.8/5", feedback: "Excellent design output.", comments: "Focus on consistency." },
  { month: "September 2025", score: "4.5/5", feedback: "Great teamwork.", comments: "Try new ideas." },
  { month: "October 2025", score: "4.5/5", feedback: "Wireframes need refining.", comments: "Focus on consistency." },
  { month: "November 2025", score: "3.3/5", feedback: "Great teamwork.", comments: "Try new ideas." },
  { month: "December 2025", score: "3.4/5", feedback: "Wireframes need refining.", comments: "Focus on consistency." },
]

const skills = [
  { name: "Design Quality", percent: 90 },
  { name: "Creativity", percent: 80 },
  { name: "Timeliness", percent: 70 },
  { name: "Collaboration", percent: 85 },
]

export default function EmployeePerformanceDetail({
  onBack,
}: {
  onBack?: () => void
}) {
  const [selectedFilter, setSelectedFilter] = useState("Month")

  const chartPoints = [
    { month: "Jan", score: 2.0, x: 50, y: 140 },
    { month: "Feb", score: 2.8, x: 115, y: 108 },
    { month: "Mar", score: 2.3, x: 180, y: 128 },
    { month: "Apr", score: 3.3, x: 245, y: 88 },
    { month: "May", score: 3.3, x: 310, y: 88 },
    { month: "Jun", score: 3.5, x: 375, y: 80 },
    { month: "Jul", score: 3.4, x: 440, y: 84 },
    { month: "Aug", score: 2.8, x: 505, y: 108 },
    { month: "Sep", score: 3.5, x: 570, y: 80 },
    { month: "Oct", score: 3.9, x: 635, y: 64 },
    { month: "Nov", score: 4.5, x: 700, y: 40 },
    { month: "Dec", score: 4.6, x: 765, y: 36 },
  ]

  const pathD = chartPoints.reduce((acc, curr, i) => {
    return i === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`
  }, "")

  const areaD = `${pathD} L 765 180 L 50 180 Z`

  return (
    <div className="w-full max-w-full flex flex-col gap-4 sm:gap-5">
      {/* Optional Back Button */}
      {onBack && (
        <div className="flex items-center justify-start pb-1">
          <button
            type="button"
            onClick={onBack}
            style={{ cursor: "pointer" }}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7065E6] bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-sm border border-gray-100 hover:bg-[#F3F2FD] hover:shadow transition-all duration-200 cursor-pointer focus:outline-none select-none"
          >
            <ArrowLeft size={16} weight="bold" className="text-[#7065E6]" />
            <span>Back to Overview</span>
          </button>
        </div>
      )}

      {/* 1. Top 3 Summary Cards (1-col on mobile, 3-col on tablet/desktop) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {/* Overall Rating */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
          <h4 className="text-xs font-semibold text-gray-500">Overall Rating</h4>
          <div className="flex items-center gap-2 mt-2">
            <Star size={22} weight="fill" className="text-[#F59E0B]" />
            <span className="text-2xl sm:text-3xl font-bold text-[#1F2937]">4.2 / 5</span>
          </div>
        </div>

        {/* Best Month */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
          <h4 className="text-xs font-semibold text-gray-500">Best Month</h4>
          <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mt-1">June 2025</h3>
          <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-gray-600">
            <Star size={13} weight="fill" className="text-[#F59E0B]" />
            <span>4.8 / 5</span>
          </div>
        </div>

        {/* Need Improvement */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
          <h4 className="text-xs font-semibold text-gray-500">Need Improvement</h4>
          <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mt-1">March 2025</h3>
          <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-gray-600">
            <Star size={13} weight="fill" className="text-[#F59E0B]" />
            <span>3.5 / 5</span>
          </div>
        </div>
      </div>

      {/* 2. Performance Score by Month (Chart Card) */}
      <div className="w-full max-w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-xs sm:text-sm font-bold text-[#1F2937]">Performance Score by Month</h3>
            <div className="flex items-center text-xs text-emerald-600 font-bold ml-1">
              <ArrowUp size={14} weight="bold" />
              <span>10%</span>
            </div>
            <span className="text-[11px] sm:text-xs text-gray-400 font-normal">Compared to last month</span>
          </div>

          <div className="relative self-start sm:self-auto">
            <button
              type="button"
              className="bg-[#C5C1FF] text-[#1F2937] px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-[#b8b3fd] transition-colors focus:outline-none"
            >
              <span>{selectedFilter}</span>
              <CaretDown size={12} weight="bold" />
            </button>
          </div>
        </div>

        {/* SVG Line Chart (Horizontal scroll on very small screens) */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="min-w-[550px] sm:min-w-[650px] relative">
            <svg viewBox="0 0 800 200" className="w-full h-44 sm:h-48 select-none">
              <defs>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7D73E3" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#7D73E3" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Horizontal Guidelines */}
              <line x1="40" y1="20" x2="780" y2="20" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="40" y1="60" x2="780" y2="60" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="40" y1="100" x2="780" y2="100" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="40" y1="140" x2="780" y2="140" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="40" y1="180" x2="780" y2="180" stroke="#F3F4F6" strokeWidth="1" />

              {/* Y-axis Labels */}
              <text x="20" y="24" fill="#9CA3AF" fontSize="11" fontWeight="500">5</text>
              <text x="20" y="64" fill="#9CA3AF" fontSize="11" fontWeight="500">4</text>
              <text x="20" y="104" fill="#9CA3AF" fontSize="11" fontWeight="500">3</text>
              <text x="20" y="144" fill="#9CA3AF" fontSize="11" fontWeight="500">2</text>
              <text x="20" y="184" fill="#9CA3AF" fontSize="11" fontWeight="500">1</text>

              {/* Area Gradient under curve */}
              <path d={areaD} fill="url(#purpleGradient)" />

              {/* The Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#7D73E3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {chartPoints.map((pt, idx) => (
                <circle
                  key={idx}
                  cx={pt.x}
                  cy={pt.y}
                  r="3.5"
                  fill="#1F2937"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
              ))}
            </svg>

            {/* X-axis Month Labels */}
            <div className="flex justify-between pl-10 pr-4 text-[10px] sm:text-xs font-medium text-gray-500 mt-1">
              {chartPoints.map((pt, idx) => (
                <span key={idx} className="w-10 text-center">{pt.month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Performance Score Table (Using ReusableTable with Ash / Yeash Header) */}
      <div className="w-full max-w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 md:p-6 overflow-hidden">
        <ReusableTable
          columns={[
            {
              header: "Month",
              accessor: "month",
              className: "text-gray-700 font-medium py-3 px-3 sm:px-4 whitespace-nowrap",
              headerClassName: "py-2.5 px-3 sm:px-4",
            },
            {
              header: "Performance Score",
              accessor: "score",
              className: "font-semibold text-gray-900 py-3 px-3 sm:px-4 whitespace-nowrap",
              headerClassName: "py-2.5 px-3 sm:px-4",
            },
            {
              header: "Manager Feedback",
              accessor: "feedback",
              className: "text-gray-700 py-3 px-3 sm:px-4",
              headerClassName: "py-2.5 px-3 sm:px-4",
            },
            {
              header: "Comments",
              accessor: "comments",
              className: "text-gray-700 py-3 px-3 sm:px-4",
              headerClassName: "py-2.5 px-3 sm:px-4",
            },
          ]}
          data={performanceTableData}
          headerBgColor="#EAE8E4"
          headerTextColor="#1F2937"
          headerRounded="rounded-xl"
        />
      </div>

      {/* 4. Bottom 2 Cards (Skill Breakdown & Achievements) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Skill Breakdown */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
          <h3 className="text-xs sm:text-sm font-bold text-[#1F2937] mb-3">Skill Breakdown</h3>
          <div className="flex flex-col gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-medium text-gray-700 mb-1">{skill.name}</span>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 sm:h-3 flex-1 bg-[#EAEAEA] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#C4B5FD] transition-all duration-700"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 w-8 text-right">
                    {skill.percent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 flex flex-col justify-start">
          <h3 className="text-xs sm:text-sm font-bold text-[#1F2937] mb-3 sm:mb-4">Achievements & Recognition</h3>
          <div className="flex flex-col gap-3 mt-1">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
              <Star size={18} weight="fill" className="text-[#F59E0B] flex-shrink-0" />
              <span>Star of the Month</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
              <Star size={18} weight="fill" className="text-[#F59E0B] flex-shrink-0" />
              <span>Special Appreciation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
