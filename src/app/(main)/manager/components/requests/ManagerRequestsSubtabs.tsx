"use client"


interface ManagerRequestsSubtabsProps {
  currentSubtab: "team-member" | "team-lead"
  onSubtabChange: (subtab: "team-member" | "team-lead") => void
}

export default function ManagerRequestsSubtabs({
  currentSubtab,
  onSubtabChange,
}: ManagerRequestsSubtabsProps) {
  return (
    <div className="flex items-center gap-6 border-b border-gray-200">
      <button
        type="button"
        onClick={() => onSubtabChange("team-member")}
        className={`pb-3 text-xs sm:text-sm transition-all cursor-pointer ${
          currentSubtab === "team-member"
            ? "border-b-2 border-[#5B50EC] text-[#5B50EC] font-bold"
            : "text-gray-500 hover:text-gray-900 font-medium"
        }`}
      >
        Team Member Requests
      </button>
      <button
        type="button"
        onClick={() => onSubtabChange("team-lead")}
        className={`pb-3 text-xs sm:text-sm transition-all cursor-pointer ${
          currentSubtab === "team-lead"
            ? "border-b-2 border-[#5B50EC] text-[#5B50EC] font-bold"
            : "text-gray-500 hover:text-gray-900 font-medium"
        }`}
      >
        Team Lead Requests
      </button>
    </div>
  )
}
