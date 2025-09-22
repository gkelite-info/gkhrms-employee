import { PencilSimple } from "phosphor-react"

export const useSetLeaveTypeTable = () => {
  const column = [
    {
      name: "Leave Type",
      width: "30%",
      render: (row) => (
        <span className="w-full overflow-hidden flex  gap-2">
          {row.leaveType}
        </span>
      ),
    },
    {
      name: "Applicable TO",
      width: "30%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.applicableTO}
        </span>
      ),
    },
    {
      name: "Max Days/ye..",
      width: "40%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">{row.maxDays}</span>
      ),
    },
    {
      name: "Carry Forward",
      width: "40%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.carryForward}
        </span>
      ),
    },
    {
      name: "Paid/Unpaid",
      width: "40%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.paidUnPain}
        </span>
      ),
    },
    {
      name: "Status",
      width: "40%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">{row.status}</span>
      ),
    },
    {
      name: "Actions",
      width: "10%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          <PencilSimple size={20} className="text-gray-600 cursor-pointer" />
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
