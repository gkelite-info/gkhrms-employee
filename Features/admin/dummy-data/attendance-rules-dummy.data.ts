export const attendanceRulesDummyData = [
  {
    roleName: "General Shift",
    shiftTimming: "9:00 AM - 6:00 PM",
    gracePeriod: "15 mins",
    overtimePolicy: "After 8 hrs",
    earlyLogout: "Deduct Half Day",
    status: "Active",
  },
  {
    roleName: "Night Shift",
    shiftTimming: "9:00 AM - 6:00 PM",
    gracePeriod: "10 mins",
    overtimePolicy: "After 9 hrs",
    earlyLogout: "Warning Only",
    status: "Active",
  },
  {
    roleName: "Part-Time Shift",
    shiftTimming: "9:00 AM - 6:00 PM",
    gracePeriod: "5 mins",
    overtimePolicy: "No",
    earlyLogout: "Deduct Salary",
    status: "Active",
  },
]
