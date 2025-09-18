"use client"
import { Files, FileText, Gear } from "phosphor-react"
import React from "react"

const AdminPolicySetup = () => {
  return (
    <div className="w-full p-4 py-5 flex flex-col gap-4 bg-white shadow rounded-lg">
      <h2 className="text-[#111827] font-semibold text-base">Policy Setup</h2>
      <span className="text-xs text-[#464646]">
        Leave types, attendance rules, payroll workflows
      </span>
      <div className="w-full flex gap-2 items-center">
        <span className="w-[30px] h-[30px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
          <FileText size={18} />
        </span>
        <span className="text-xs text-[#464646]">Set Leave Types</span>
      </div>
      <div className="w-full flex gap-2 items-center">
        <span className="w-[30px] h-[30px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
          <Files size={18} />
        </span>
        <span className="text-xs text-[#464646]">Attendance Rules</span>
      </div>{" "}
      <div className="w-full flex gap-2 items-center">
        <span className="w-[30px] h-[30px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
          <Gear size={18} />
        </span>
        <span className="text-xs text-[#464646]">Payroll Workflows</span>
      </div>
    </div>
  )
}

export default AdminPolicySetup
