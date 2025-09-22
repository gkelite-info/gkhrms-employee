import { PencilSimple } from "phosphor-react"

export const usePayrollWorkflowsTableData = () => {
  const column = [
    {
      name: "Workflow Name",
      width: "20%",
      render: (row) => (
        <span className="w-full overflow-hidden flex  gap-2">
          {row.workflowName}
        </span>
      ),
    },
    {
      name: "payroll Cycle",
      width: "20%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.payrollCycle}
        </span>
      ),
    },
    {
      name: "Approval Steps",
      width: "30%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.approvedStatus}
        </span>
      ),
    },
    {
      name: "Auto-Processing",
      width: "15%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.autoProcessing}
        </span>
      ),
    },
    {
      name: "Status",
      width: "10%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">{row.status}</span>
      ),
    },
    {
      name: "Action",
      width: "5%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center cursor-pointer">
          <PencilSimple size={20} />
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
