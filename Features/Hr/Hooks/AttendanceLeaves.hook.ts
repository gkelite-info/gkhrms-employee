import { useEffect, useState } from "react"

const dummyAttendaceData = [
  {
    id: 1,
    name: "Stanly",
    email: "stanly@",
    department: "UI Designer",
    attendancePer: "98%",
    moodImage: "/images/happy.png",
    employeeId: "j8shs",
    checkIn: "09:20 AM",
    checkOut: "07:30 PM",
  },
  {
    id: 2,
    name: "John",
    email: "john@",
    department: "UX Designer",
    attendancePer: "80%",
    moodImage: "/images/sad.png",
    employeeId: "j8shs",
    checkIn: "11:20 AM",
    checkOut: "06:30 PM",
  },
  {
    id: 3,
    name: "Emma",
    email: "emma@",
    department: "Full Stack",
    attendancePer: "75%",
    moodImage: "/images/cool.png",
    employeeId: "j8shs",
    checkIn: "10:20 AM",
    checkOut: "05:30 PM",
  },
]

export const useAttendaceLeavsHook = () => {
  const [attendanceUser, setAttendanceUser] = useState(dummyAttendaceData)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [debSearch, setDebSearch] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebSearch(search)
    }, 300)

    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    if (debSearch.trim() === "") {
      setAttendanceUser(dummyAttendaceData)
    } else {
      setAttendanceUser(
        dummyAttendaceData.filter((user) => {
          const query = debSearch.toLowerCase()

          return (
            String(user.name).toLowerCase().includes(query) ||
            String(user.email).toLowerCase().includes(query) ||
            String(user.department).toLowerCase().includes(query) ||
            String(user.attendancePer).toLowerCase().includes(query) ||
            String(user.employeeId).toLowerCase().includes(query) ||
            String(user.checkIn).toLowerCase().includes(query) ||
            String(user.checkOut).toLowerCase().includes(query)
          )
        })
      )
    }
  }, [debSearch])

  return {
    attendanceUser,
    search,
    setSearch,
    loading,
  }
}
