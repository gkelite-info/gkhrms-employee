export const useImageImpactTableData = () => {
  const column = [
    {
      name: "Change Title",
      width: "35%",
      render: (row) => (
        <span className="w-full overflow-hidden flex  gap-2">
          {row.changeTitle}
        </span>
      ),
    },
    {
      name: "Impacted Dept.",
      width: "35%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.impactedDept}
        </span>
      ),
    },
    {
      name: "Type",
      width: "15%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.type}
        </span>
      ),
    },
    {
      name: "Effective Date",
      width: "25%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.effectiveDate}
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
