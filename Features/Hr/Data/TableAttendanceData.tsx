export const useTableAttendaceData = () => {
  const column = [
    {
      name: "S.No",
      width: "7%",
      render: (row) => <span>{row.id}</span>,
    },
    {
      name: "Name",
      width: "14%",
      render: (row) => <span>{row.name}</span>,
    },
    {
      name: "Email",
      width: "14%",
      render: (row) => <span>{row.email}</span>,
    },
    {
      name: "Employee ID",
      width: "10%",
      render: (row) => <span>{row.employeeId}</span>,
    },
    {
      name: "Department",
      width: "20%",
      render: (row) => <span>{row.department}</span>,
    },
    {
      name: "Attendance",
      width: "15%",
      render: (row) => <span>{row.attendancePer}</span>,
    },
    {
      name: "Check-In",
      width: "10%",
      render: (row) => <span>{row.checkIn}</span>,
    },
    {
      name: "Check-Out",
      width: "10%",
      render: (row) => <span>{row.checkOut}</span>,
    },

    {
      name: "Mood",
      width: "10%",
      render: (row) => (
        <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
          {row.moodImage && (
            <img className="w-4 h-4" src={row.moodImage} alt="" />
          )}
        </span>
      ),
    },
  ]

  return {
    column,
  }
}
