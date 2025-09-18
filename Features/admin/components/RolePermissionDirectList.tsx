import React from "react"
import RolePermission from "./RolePermission"
import AdminDirectLinks from "./AdminDirectLinks"

const RolePermissionDirectList = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2.5">
      <RolePermission />
      <AdminDirectLinks />
    </div>
  )
}

export default RolePermissionDirectList
