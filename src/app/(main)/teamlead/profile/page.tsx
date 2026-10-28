"use client"

import EmployeeProfileView from "../../employee/components/profile/EmployeeProfileView"

export default function TeamLeadProfilePage() {
  return (
    <div className="w-full max-w-full min-w-0 flex flex-col px-4 sm:px-6 md:px-8 py-3.5 sm:py-4">
      <EmployeeProfileView />
    </div>
  )
}
