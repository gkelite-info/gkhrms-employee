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
      width: "25%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.expiryDate}
        </span>
      ),
    },
    {
      name: "Status",
      width: "15%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.status}
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
