"use client"

import { ReusableAvatar } from "@/components/reusableComponents"

interface MemberProfileBannerProps {
  member: {
    avatar?: string
    name: string
    designation: string
    employeeId: string
    department: string
  }
}

export default function MemberProfileBanner({ member }: MemberProfileBannerProps) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center text-center sm:text-left gap-4">
        <div className="w-20 h-20 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
          <ReusableAvatar
            src={member.avatar}
            name={member.name}
            size={64}
            fallbackType="icon"
            bgColor="#EEF2FF"
            textColor="#5B50EC"
            className="ring-4 ring-[#EEF2FF] sm:ring-0 shadow-xs sm:shadow-none"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-lg sm:text-base md:text-lg font-bold text-gray-900 leading-tight">
            {member.name}
          </h2>
          <p className="text-xs text-gray-400 font-medium mt-1 sm:mt-0.5">
            {member.designation}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8 text-center sm:text-left w-full md:w-auto">
        <div>
          <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
            Employee ID
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-900 mt-1 sm:mt-0.5 block truncate">
            {member.employeeId}
          </span>
        </div>

        <div>
          <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
            Department
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-900 mt-1 sm:mt-0.5 block truncate">
            {member.department}
          </span>
        </div>

        <div>
          <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
            Designation
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-900 mt-1 sm:mt-0.5 block truncate">
            {member.designation}
          </span>
        </div>
      </div>
    </div>
  )
}
