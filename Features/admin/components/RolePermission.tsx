"use client"
import React, { useState } from "react"

type Role = "Admin" | "Manager" | "Employee" | "Contractor"
type Action = "View" | "Edit" | "Delete"

const roles: Role[] = ["Admin", "Manager", "Employee", "Contractor"]
const actions: Action[] = ["View", "Edit", "Delete"]

const RolePermission: React.FC = () => {
  const [selectedActions, setSelectedActions] = useState<Record<Role, Action>>(
    roles.reduce((acc, role) => {
      acc[role] = "View"
      return acc
    }, {} as Record<Role, Action>)
  )

  const handleChange = (role: Role, value: Action) => {
    setSelectedActions((prev) => ({ ...prev, [role]: value }))
  }

  return (
    <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-2 shadow">
      <h2 className="text-[#111827] font-semibold text-sm">
        Role & Permission Matrix
      </h2>

      {roles.map((role) => (
        <div key={role} className="w-full flex justify-between items-center">
          <span className="text-xs text-[#464646]">{role}</span>
          <select
            className="border border-gray-300 rounded-md p-1 text-sm outline-none text-[#111827]"
            value={selectedActions[role]}
            onChange={(e) => handleChange(role, e.target.value as Action)}
          >
            {actions.map((action) => (
              <option
                className="text-xs text-[#111827]"
                key={action}
                value={action}
              >
                {action}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

export default RolePermission
