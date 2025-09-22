export const useAttendanceRulesTableData = () => {
  const column = [
    {
      name: "Rule Name",
      width: "20%",
      render: (row) => (
        <span className="w-full overflow-hidden flex  gap-2">
          {row.roleName}
        </span>
      ),
    },
    {
      name: "Shift Timing",
      width: "20%",
      render: (row) => (
        <span className="w-full overflow-hidden flex flex-col gap-0.5">
          {row.shiftTimming}
        </span>
      ),
    },
    {
      name: "Grace Period",
      width: "10%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.gracePeriod}
        </span>
      ),
    },
    {
      name: "Overtime Policy",
      width: "20%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.overtimePolicy}
        </span>
      ),
    },
    {
      name: "Early Logout",
      width: "20%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">
          {row.earlyLogout}
        </span>
      ),
    },
    {
      name: "Status",
      width: "10%",
      render: (row) => (
        <span className="w-full flex gap-1.5 items-center">{row.status}</span>
      ),
    },
  ]

  return {
    column,
  }
}
