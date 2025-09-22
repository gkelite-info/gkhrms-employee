"use client"
import { label } from "framer-motion/client"
import { useRouter } from "next/navigation"
import path from "path"
import { CaretRight } from "phosphor-react"
import React from "react"

const backupItems = [
  { label: "Recent Backup Status", path: "/admin/backup&restoration" },
  { label: "Archival Schedule", path: "/admin/archival_schedule" },
  { label: "Retention Alert", path: "/admin/retention-alert" },
  { label: "Data Backup Progress", path: "/admin/data-backup-process" },
]

const BackupDateRestore: React.FC = () => {
  const router = useRouter()

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-4 shadow">
      <h2 className="text-[#111827] font-semibold text-sm">
        Backup & Data Retention
      </h2>

      {backupItems.map((item) => (
        <div
          key={item.label}
          onClick={() => router.push(item.path)}
          className="w-full flex justify-between items-center gap-2 cursor-pointer rounded-md"
        >
          <span className="text-xs text-[#464646]">{item.label}</span>
          <CaretRight size={15} className="text-[#111827]" />
        </div>
      ))}
    </div>
  )
}

export default BackupDateRestore
