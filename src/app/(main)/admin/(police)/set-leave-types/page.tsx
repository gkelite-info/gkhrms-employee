"use client"
import { CaretDown } from "phosphor-react"
import React from "react"
import DataWrapper from "../../../../../../utils/DataWrapper"
import Table from "../../../../../../utils/Table/Table"
import { useSetLeaveTypeTable } from "../../../../../../features/admin/data/set-leave-type.table.data"
import { useSetLeaveTypeHook } from "../../../../../../features/admin/hooks/set-leave-type.hook"
import AddNewLeavsTypeModal from "../../../../../../features/admin/modals/AddNewLeavsTypeModal"

const SetLeaveType = () => {
  const { column } = useSetLeaveTypeTable()
  const { leaveType, modalOpen, setModalOpen } = useSetLeaveTypeHook()

  return (
    <>
      <div className="flex flex-col gap-2.5 p-3">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-[#343434]">
              System Health
            </span>
            <span className="text-xs text-[#414141]">
              Real-time status of key system performance metrics
            </span>
          </div>
          <span
            onClick={() => setModalOpen(true)}
            className="w-[200px] h-[40px] rounded-md flex justify-center gap-2 items-center bg-[#874DE6] cursor-pointer"
          >
            <span className="text-sm text-white ">Add New Leave Type</span>
            <CaretDown color="#fff" size={22} />
          </span>
        </div>
        <div className="w-full h-[430px] bg-white rounded-lg p-3">
          <div className="w-full h-full overflow-y-scroll">
            <DataWrapper loading={false} error={null} data={leaveType}>
              <Table
                columns={column}
                data={leaveType}
                bgColor="#EAEAEA"
                headerTextColor="#000"
                tableItemBg="#F9FAFB"
                // showBorder={true}
              />
            </DataWrapper>
          </div>
        </div>
      </div>
      <AddNewLeavsTypeModal open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

export default SetLeaveType
