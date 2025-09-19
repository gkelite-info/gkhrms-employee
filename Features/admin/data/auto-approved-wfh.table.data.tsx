import { PencilSimpleLine, Trash } from "phosphor-react"

export const useAutoApprovedWFHTable = () => {
  const column = [
    {
      name: "Employee Name & ID",
      width: "25%",
      render: (row) => (
        <span className="w-full flex gap-2 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <span className="w-[90%] overflow-hidden flex flex-col">
            <span> {row.name}</span>
            <span>{row.employeeId}</span>
          </span>
        </span>
      ),
    },
    {
      name: "Department",
      width: "25%",
      render: (row) => <span>{row.departments}</span>,
    },
    {
      name: "Manager",
      width: "20%",
      render: (row) => <span>{row.manager}</span>,
    },
    {
      name: "Eligible Days",
      width: "20%",
      render: (row) => <span>{row.eligibleDays}</span>,
    },
    {
      name: "Actions",
      width: "10%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          <PencilSimpleLine className="cursor-pointer" size={20} />
          <Trash className="cursor-pointer" size={20} />
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
