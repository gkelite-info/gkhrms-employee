import React from "react"
import UserDetailsCard from "../../../../utils/UserDetailsCard"
import LoginLogoutMoodtracker from "../../../../utils/LoginLogoutMoodtracker"
import AdminUserManager from "../../../../features/admin/components/AdminUserManager"
import SystemAlrertAndHealth from "../../../../features/admin/components/SystemAlrertAndHealth"
import ChangeImpactWorkflowBuilder from "../../../../features/admin/components/ChangeImpactWorkflowBuilder"
import RolePermissionDirectList from "../../../../features/admin/components/RolePermissionDirectList"
import AutomationBackupStore from "../../../../features/admin/components/AutomationBackupStore"

const Admin = () => {
  return (
    <div className="w-full flex flex-col gap-3.5 p-6">
      <UserDetailsCard />
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-2.5">
        <div className="w-full lg:w-1/2">
          <LoginLogoutMoodtracker />
        </div>
        <div className="w-full lg:w-1/2">
          <AdminUserManager />
        </div>
      </div>
      <SystemAlrertAndHealth />
      <ChangeImpactWorkflowBuilder />
      <RolePermissionDirectList />
      <AutomationBackupStore />
    </div>
  )
}

export default Admin
