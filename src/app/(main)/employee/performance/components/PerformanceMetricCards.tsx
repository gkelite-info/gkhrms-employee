"use client"

import { Star } from "phosphor-react"

export default function PerformanceMetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-4 w-full">
      {/* 1. Overall Rating Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-200 min-h-[115px]">
        <span className="text-xs sm:text-sm font-semibold text-gray-700">
          Overall Rating
        </span>
        <div className="flex items-center gap-2 mt-2">
          <Star
            size={22}
            weight="fill"
            className="text-[#EAB308] shrink-0"
          />
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            4.2 / 5
          </span>
        </div>
      </div>

      {/* 2. Best Month Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-200 min-h-[115px]">
        <span className="text-xs sm:text-sm font-semibold text-gray-700">
          Best Month
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-1">
          June 2025
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <Star
            size={14}
            weight="fill"
            className="text-[#EAB308] shrink-0"
          />
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            4.8 / 5
          </span>
        </div>
      </div>

      {/* 3. Need Improvement Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-200 min-h-[115px]">
        <span className="text-xs sm:text-sm font-semibold text-gray-700">
          Need Improvement
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-1">
          March 2025
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <Star
            size={14}
            weight="fill"
            className="text-[#EAB308] shrink-0"
          />
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            3.5 / 5
          </span>
        </div>
      </div>
    </div>
  )
}
