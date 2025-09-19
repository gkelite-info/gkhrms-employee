export const useRetentionAlertTable = () => {
  const column = [
    {
      name: "Data Type",
      width: "30%",
      render: (row) => (
        <span className="w-full overflow-hidden flex  gap-2">
          {row.dataType}
        </span>
      ),
    },
    {
      name: "Retention Period",
      width: "30%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.retentionPeriod}
        </span>
      ),
    },
    {
      name: "Records Nearing Limit",
      width: "40%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.recordsNearingLimit}
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
