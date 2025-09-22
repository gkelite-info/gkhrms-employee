import React from "react"
import AuthSelect from "../../../../../utils/AuthSelect"
import { usePendingApprovedHook } from "../../../../../features/manager/hooks/pending-approved.hook"
import { useManagerPendingApprovedTable } from "../../../../../features/manager/data/pending-approved-table.data"
import DataWrapper from "../../../../../utils/DataWrapper"
import Table from "../../../../../utils/Table/Table"

const PendingApprovals = () => {
  const { pendingApproved } = usePendingApprovedHook()
  const { column } = useManagerPendingApprovedTable()
  return (
    <div className="w-full flex flex-col gap-2 p-4">
      <span className="text-sm font-semibold text-[#323232]">
        Pending Approvals{" "}
      </span>
      <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-3">
        <div className="w-full flex justify-between items-center gap-4">
          <div className="w-[250px]">
            <AuthSelect
              label="By Request Type"
              options={[
                { value: "manager", label: "Manager" },
                { value: "hr", label: "HR" },
                { value: "finance", label: "Finance" },
              ]}
            />
          </div>
          <div className="w-[250px]">
            <AuthSelect
              label="By Department"
              options={[
                { value: "manager", label: "Manager" },
                { value: "hr", label: "HR" },
                { value: "finance", label: "Finance" },
              ]}
            />
          </div>
          <div className="w-[250px]">
            <AuthSelect
              label="By Status"
              options={[
                { value: "manager", label: "Manager" },
                { value: "hr", label: "HR" },
                { value: "finance", label: "Finance" },
              ]}
            />
          </div>
        </div>
        <div className="w-full h-[430px]">
          <div className="w-full h-full overflow-y-scroll">
            <DataWrapper loading={false} error={null} data={pendingApproved}>
              <Table
                columns={column}
                data={pendingApproved}
                bgColor="#EAEAEA"
                headerTextColor="#000"
                tableItemBg="#F9FAFB"
                // showBorder={true}
              />
            </DataWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingApprovals
