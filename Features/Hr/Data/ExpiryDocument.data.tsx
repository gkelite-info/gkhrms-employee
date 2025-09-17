export const useExpiryDocsTableData = () => {
  const column = [
    {
      name: "Employee",
      width: "25%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.name}
        </span>
      ),
    },
    {
      name: "Document Type",
      width: "35%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.docsType}
        </span>
      ),
    },
    {
      name: "Expiry Date",
      width: "20%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.expiryDate}
        </span>
      ),
    },
    {
      name: "Status",
      width: "20%",
      render: (row) => (
        <span className="w-full flex  gap-1 overflow-y-hidden items-center">
          <span
            style={{
              backgroundColor:
                row.status === "Due Soon"
                  ? "#FAD659"
                  : row.status === "Expired"
                  ? "#EF4A5F"
                  : "#58D792",
            }}
            className="w-[10px] h-[10px] rounded-full"
          ></span>
          {row.status}
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
