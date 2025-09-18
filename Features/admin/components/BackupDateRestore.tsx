"use client"
import { CaretRight } from "phosphor-react"
import React from "react"

const backupItems = [
  "Recent Backup Status",
  "Archival Schedule",
  "Retention Alert",
  "Data Backup Progress",
]

const BackupDateRestore: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-4 shadow">
      <h2 className="text-[#111827] font-semibold text-base">
        Backup & Data Retention
      </h2>

      {backupItems.map((item) => (
        <div
          key={item}
          className="w-full flex justify-between items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-md"
        >
          <span className="text-xs text-[#464646]">{item}</span>
          <CaretRight size={15} />
        </div>
      ))}
    </div>
  )
}

export default BackupDateRestore
