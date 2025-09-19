import React from "react"
import { ProgressBar } from "../AdminSystemHealth"

const BackupProcessBar = () => {
  return (
    <div className="w-full h-[95px] flex py-3 flex-col gap-3 bg-white rounded-lg p-3">
      <div className="w-full flex justify-between items-center">
        <span className="text-xs font-semibold text-[#111827]">
          Employee payroll DB Backup
        </span>
        <span className="text-xs font-semibold text-[#111827]">00:12:34</span>
      </div>
      <ProgressBar
        value={30}
        color="bg-gradient-to-r from-[#D0CEF7] to-[#9891F7]"
      />
      <div className="w-full flex justify-between items-center">
        <span className="text-xs font-medium text-[#111827]">
          65% on Completed
        </span>
        <span className="text-xs font-medium text-[#111827]">
          Speed: 2.5 GB/min
        </span>
      </div>
    </div>
  )
}

export default BackupProcessBar
