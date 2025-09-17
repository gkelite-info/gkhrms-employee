export const useAttendanceLeavsUserTableData = () => {
  const column = [
    {
      name: "S.No",
      width: "10%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.id}
        </span>
      ),
    },
    {
      name: "Name",
      width: "20%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.name}
        </span>
      ),
    },
    {
      name: "Email",
      width: "20%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.email}
        </span>
      ),
    },
    {
      name: "Department",
      width: "25%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.department}
        </span>
      ),
    },
    {
      name: "Attendance",
      width: "15%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.attendancePer}
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
