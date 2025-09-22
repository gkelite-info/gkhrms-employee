export const useManagerPendingApprovedTable = () => {
  const column = [
    {
      name: "Employee Name",
      width: "25%",
      render: (row) => (
        <span className="w-full flex gap-2 items-center">
          <span className="w-[35px] h-[35px] bg-lime-200 rounded-full"></span>
          <span> {row?.employeeName}</span>
        </span>
      ),
    },
    {
      name: "Request Type",
      width: "25%",
      render: (row) => <span>{row.requestType}</span>,
    },
    {
      name: "Reason/Note",
      width: "20%",
      render: (row) => <span>{row.reason}</span>,
    },
    {
      name: "Date(s) Applied",
      width: "20%",
      render: (row) => <span>{row.dates}</span>,
    },
    {
      name: "Submitted On",
      width: "20%",
      render: (row) => <span>{row.submittionOn}</span>,
    },
    {
      name: "Actions",
      width: "10%",
      render: (row) => (
        <span className="w-full h-[40px] rounded-md bg-[#3DB482] text-white text-xs flex justify-center items-center">
          Approved
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
