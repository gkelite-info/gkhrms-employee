export const useBackupProcessTableData = () => {
  const column = [
    {
      name: "Job Name",
      width: "25%",
      render: (row) => (
        <span className="w-full overflow-hidden flex  gap-2">
          {row.jobName}
        </span>
      ),
    },
    {
      name: "Type",
      width: "20%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.type}
        </span>
      ),
    },
    {
      name: "Status",
      width: "15%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.status}
        </span>
      ),
    },
    {
      name: "Size",
      width: "10%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">{row.size}</span>
      ),
    },
    {
      name: "Completed On",
      width: "30%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.completedOn}
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
