"use client"

import React, { useState } from "react"
import { ReusableTable, ReusablePagination, TableColumn } from "@/../reusableComponents"
export interface FeedbackRow {
  month: string
  score: string
  feedback: string
  comments: string
}

const feedbackRows: FeedbackRow[] = [
  {
    month: "January 2025",
    score: "4.0/5",
    feedback: "Good start to the year.",
    comments: "Nice progress.",
  },
  {
    month: "February 2025",
    score: "3.8/5",
    feedback: "Creative work",
    comments: "Clear communication.",
  },
  {
    month: "March 2025",
    score: "3.2/5",
    feedback: "Excellent design output.",
    comments: "Focus on consistency.",
  },
  {
    month: "April 2025",
    score: "4.5/5",
    feedback: "Great teamwork.",
    comments: "Try new ideas.",
  },
  {
    month: "May 2025",
    score: "4.6/5",
    feedback: "Wireframes need refining.",
    comments: "Focus on consistency.",
  },
  {
    month: "June 2025",
    score: "4.6/5",
    feedback: "Good start to the year.",
    comments: "Nice progress.",
  },
  {
    month: "July 2025",
    score: "4.8/5",
    feedback: "Creative work",
    comments: "Clear communication.",
  },
  {
    month: "August 2025",
    score: "4.8/5",
    feedback: "Excellent design output.",
    comments: "Focus on consistency.",
  },
  {
    month: "September 2025",
    score: "4.5/5",
    feedback: "Great teamwork.",
    comments: "Try new ideas.",
  },
  {
    month: "October 2025",
    score: "4.5/5",
    feedback: "Wireframes need refining.",
    comments: "Focus on consistency.",
  },
  {
    month: "November 2025",
    score: "3.3/5",
    feedback: "Great teamwork.",
    comments: "Try new ideas.",
  },
  {
    month: "December 2025",
    score: "3.4/5",
    feedback: "Wireframes need refining.",
    comments: "Focus on consistency.",
  },
]

export default function PerformanceFeedbackTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const totalPages = Math.ceil(feedbackRows.length / pageSize)
  const paginatedRows = feedbackRows.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const columns: TableColumn<FeedbackRow>[] = [
    {
      key: "month",
      header: "Month",
      accessor: "month",
      className: "py-3.5 px-5 sm:px-6 font-medium text-gray-800 whitespace-nowrap text-xs sm:text-sm",
      headerClassName: "py-3 px-5 sm:px-6 text-gray-800 text-xs sm:text-sm font-semibold",
    },
    {
      key: "score",
      header: "Performance Score",
      accessor: "score",
      className: "py-3.5 px-5 sm:px-6 font-semibold text-gray-800 whitespace-nowrap text-xs sm:text-sm",
      headerClassName: "py-3 px-5 sm:px-6 text-gray-800 text-xs sm:text-sm font-semibold",
    },
    {
      key: "feedback",
      header: "Manager Feedback",
      accessor: "feedback",
      className: "py-3.5 px-5 sm:px-6 text-gray-700 text-xs sm:text-sm",
      headerClassName: "py-3 px-5 sm:px-6 text-gray-800 text-xs sm:text-sm font-semibold",
    },
    {
      key: "comments",
      header: "Comments",
      accessor: "comments",
      className: "py-3.5 px-5 sm:px-6 text-gray-600 text-xs sm:text-sm",
      headerClassName: "py-3 px-5 sm:px-6 text-gray-800 text-xs sm:text-sm font-semibold",
    },
  ]

  return (
    <div className="w-full bg-white rounded-2xl shadow-xs border border-gray-100 overflow-hidden">
      <ReusableTable<FeedbackRow>
        columns={columns}
        data={paginatedRows}
        headerBgColor="#EAE8E4"
        headerTextColor="#1F2937"
        headerRounded="rounded-none"
        rowHover={true}
        tableClassName="w-full text-left"
      />

      <div className="p-3 sm:p-4 border-t border-gray-100">
        <ReusablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={feedbackRows.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(newSize) => {
            setPageSize(newSize)
            setCurrentPage(1)
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </div>
    </div>
  )
}
