import { useState } from "react"

const dummyAttendaceData = [
  {
    id: 1,
    name: "Stanly",
    email: "stanly@",
    department: "UI Designer",
    attendancePer: "98%",
  },
  {
    id: 2,
    name: "John",
    email: "john@",
    department: "UX Designer",
    attendancePer: "80%",
  },
  {
    id: 3,
    name: "Emma",
    email: "emma@",
    department: "Full Stack",
    attendancePer: "75%",
  },
  {
    id: 4,
    name: "Stanly",
    email: "stanly@",
    department: "UI Designer",
    attendancePer: "98%",
  },
  {
    id: 5,
    name: "John",
    email: "john@",
    department: "UX Designer",
    attendancePer: "80%",
  },
  {
    id: 6,
    name: "Emma",
    email: "emma@",
    department: "Full Stack",
    attendancePer: "75%",
  },
]

export const useAttendaceLeavsHook = () => {
  const [attendanceUser, setAttendanceUser] = useState(dummyAttendaceData)

  return {
    attendanceUser,
  }
}
