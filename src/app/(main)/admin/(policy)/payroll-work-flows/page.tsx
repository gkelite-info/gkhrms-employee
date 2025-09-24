"use client"
import React from "react"
import IconButton from "../../../../../../utils/IconButton"
import { usePayrollWorkflowsHook } from "../../../../../../features/admin/hooks/payroll-workflows.hook"
import { usePayrollWorkflowsTableData } from "../../../../../../features/admin/data/payroll-workflows.table.data"
import DataWrapper from "../../../../../../utils/DataWrapper"
import Table from "../../../../../../utils/Table/Table"
import PayrollWorkflowsModal from "../../../../../../features/admin/modals/PayrollWorkflowsModal"

const PayrollworkFlow = () => {
  const { payroleWorkFlows, modalOpen, setModalOpen } =
    usePayrollWorkflowsHook()

  const { column } = usePayrollWorkflowsTableData()
  return (
    <>
      <div className="flex flex-col gap-2.5 p-3">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-[#343434]">
              Payroll Workflows Table
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
            <DataWrapper loading={false} error={null} data={payroleWorkFlows}>
              <Table
                columns={column}
                data={payroleWorkFlows}
                bgColor="#EAEAEA"
                headerTextColor="#000"
                tableItemBg="#F9FAFB"
                // showBorder={true}
              />
            </DataWrapper>
          </div>
        </div>
      </div>
      <PayrollWorkflowsModal open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

export default PayrollworkFlow
