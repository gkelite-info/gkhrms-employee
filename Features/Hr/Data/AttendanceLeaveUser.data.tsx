export const useAttendanceLeavsUserTableData = ({
  isDisplayMood = false,
} = {}) => {
  const column = [
    {
      name: "S.No",
      width: isDisplayMood ? "7%" : "10%",
      render: (row) => <span>{row.id}</span>,
    },
    {
      name: "Name",
      width: isDisplayMood ? "15%" : "20%",
      render: (row) => <span>{row.name}</span>,
    },
    {
      name: "Email",
      width: "20%",
      render: (row) => <span>{row.email}</span>,
    },
    {
      name: "Department",
      width: isDisplayMood ? "22%" : "30%",
      render: (row) => <span>{row.department}</span>,
    },
    {
      name: "Attendance",
      width: isDisplayMood ? "15%" : "20%",
      render: (row) => <span>{row.attendancePer}</span>,
    },
    ...(isDisplayMood
      ? [
          {
            name: "Mood",
            width: "11%",
            render: (row) => (
              <span className="w-full flex flex-col gap-0.5 overflow-y-hidden">
                {row.moodImage && (
                  <img className="w-4 h-4" src={row.moodImage} alt="" />
                )}
              </span>
            ),
          },
        ]
      : []),
  ]

  return {
    column,
  }
}
