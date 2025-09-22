"use client"
import React from "react"
import BackupProcessBar from "./BackupProcessBar"
import BackupProcessTable from "./BackupProcessTable"
import FullPieGrapgh from "../FullPieGraph"
import IconButton from "../../../../utils/IconButton"
import { CloudArrowUp } from "phosphor-react"

const DataBackupProcessMainCard = () => {
  const dailyActiveUser = [
    { value: 40, color: "#7855E0", legend: "Success" },
    { value: 30, color: "#9D82E7", legend: "In Progress" },
    { value: 30, color: "#D6C7FF", legend: "Failed" },
  ]

  return (
    <div className="w-full flex gap-2.5">
      <div className="w-[70%] h-[400px] flex flex-col gap-2.5">
        <BackupProcessBar />
        <BackupProcessTable />
      </div>
      <div className="w-[30%] h-[400px] flex flex-col gap-2.5">
        <div className="w-full h-[87%] bg-white rounded-lg p-3">
          <FullPieGrapgh
            data={dailyActiveUser}
            title="Retention Health"
            variant="donut"
          />
          <div className="w-full py-6 px-9 flex flex-col gap-4">
            <div className="text-xs font-medium text-[#111827] flex justify-between items-center">
              <span>Storage Used</span>
              <span>60%</span>
            </div>
            <div className="text-xs font-medium text-[#111827] flex justify-between items-center">
              <span>Availabe</span>
              <span>30%</span>
            </div>
          </div>
        </div>
        <IconButton
          label="Run Manual Backup"
          className="w-[220px] bg-[#874DE6]"
          Icon={CloudArrowUp}
        />
      </div>
    </div>
  )
}

export default DataBackupProcessMainCard
