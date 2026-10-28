"use client"

import ReusableAvatar from "../../../../../reusableComponents/ReusableAvatar"

interface ProfileSummaryCardProps {
  name?: string
  employeeId?: string
  photoURL?: string | null
}

export default function ProfileSummaryCard({
  name = "Alexander",
  employeeId = "154356",
  photoURL = null,
}: ProfileSummaryCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md min-h-[110px] h-auto">
      {/* Reusable Avatar Component */}
      <ReusableAvatar
        src={photoURL}
        name={name}
        size={48}
        bgColor="#F1F0FD"
        textColor="#5B50EC"
        borderColor="rgba(91, 80, 236, 0.3)"
        borderWidth={2}
        showBorder={true}
        shape="circle"
        fallbackType="icon"
      />

      <div className="flex flex-col">
        <h3 className="text-base font-bold text-[#1F2433] leading-tight">
          {name}
        </h3>
        <p className="text-xs text-gray-500 font-medium mt-1">
          Employee ID : <span className="text-gray-700">{employeeId}</span>
        </p>
      </div>
    </div>
  )
}
