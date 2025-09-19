import { PencilSimpleLine, Trash } from "phosphor-react"

export const useAutoSendRemindersTableData = () => {
  const column = [
    {
      name: "Reminder",
      width: "45%",
      render: (row) => (
        <span className="w-full overflow-hidden flex  gap-2">
          <input type="checkbox" className="w-4 h-4" />
          {row.reminder}
        </span>
      ),
    },
    {
      name: "Frequency",
      width: "45%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.frequency}
        </span>
      ),
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
