"use client"
import React from "react"
import IconButton from "../../../../../../utils/IconButton"
import { useAttendanceRulesHook } from "../../../../../../features/admin/hooks/attendance-rule.hook"
import DataWrapper from "../../../../../../utils/DataWrapper"
import Table from "../../../../../../utils/Table/Table"
import { useAttendanceRulesTableData } from "../../../../../../features/admin/data/attendance-rules.table.data"
import AttendanceRulesModal from "../../../../../../features/admin/modals/AttendanceRulesModal"

const AttendanceRules = () => {
  const { attendanceRules, modalOpen, setModalOpen } = useAttendanceRulesHook()
  const { column } = useAttendanceRulesTableData()
  return (
    <>
      <div className="flex flex-col gap-2.5 p-3">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-[#343434]">
              Attendance Rules
            </span>
            <span className="text-xs text-[#414141]">
              Real-time status of key system performance metrics
            </span>
          </div>
          <IconButton
            onClick={() => setModalOpen(true)}
            label="Add Rule"
            className="w-[120px] bg-[#272372]"
          />
        </div>
        <div className="w-full h-[430px] bg-white rounded-lg p-3">
          <div className="w-full h-full overflow-y-scroll">
            <DataWrapper loading={false} error={null} data={attendanceRules}>
              <Table
                columns={column}
                data={attendanceRules}
                bgColor="#EAEAEA"
                headerTextColor="#000"
                tableItemBg="#F9FAFB"
                // showBorder={true}
              />
            </DataWrapper>
          </div>
        </div>
      </div>
      <AttendanceRulesModal open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

export default AttendanceRules
