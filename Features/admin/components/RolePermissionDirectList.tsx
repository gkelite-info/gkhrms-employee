"use client"
import React from "react"
import RolePermission from "./RolePermission"
import AdminDirectLinks from "./AdminDirectLinks"
import AutomationBackupStore from "./AutomationBackupStore"
import MeetingCalendarComp from "../../../utils/meetingCalendar"

const RolePermissionDirectList = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2.5">
      <div className="w-1/2 flex flex-col gap-2.5">
        <RolePermission />
        <AutomationBackupStore />
      </div>

      <div className="w-1/2">
        <MeetingCalendarComp style="mt-0 h-98" />
      </div>
    </div>
  )
}

export default RolePermissionDirectList
