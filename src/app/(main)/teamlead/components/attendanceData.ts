export interface AttendanceRecord {
  sNo: string
  date: string
  name: string
  status: "online" | "warning" | "offline"
  email: string
  employeeId: string
  department: string
  attendancePercent: string
  effectiveHours: string
  grossHours: string
  checkIn: string
  checkOut: string
  mood?: string
}

const baseRecords: AttendanceRecord[] = [
  { sNo: "01", date: "09/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UI Designer", attendancePercent: "89%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "02", date: "08/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "80%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "🙂" },
  { sNo: "03", date: "07/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "75%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "🙂" },
  { sNo: "04", date: "06/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UI Designer", attendancePercent: "89%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "05", date: "05/09/2025", name: "Stanly", status: "warning", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "80%", effectiveHours: "0h 0min", grossHours: "0h 0min", checkIn: "-", checkOut: "-", mood: "😴" },
  { sNo: "06", date: "04/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "75%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "07", date: "03/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UI Designer", attendancePercent: "89%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "08", date: "02/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "80%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😊" },
  { sNo: "09", date: "01/09/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "75%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "🙂" },
  { sNo: "10", date: "30/08/2025", name: "Stanly", status: "offline", email: "stanly@gmail.com", employeeId: "1234", department: "UI Designer", attendancePercent: "89%", effectiveHours: "0h 0min", grossHours: "0h 0min", checkIn: "-", checkOut: "-", mood: "😴" },
  { sNo: "11", date: "29/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "80%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😐" },
  { sNo: "12", date: "28/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "75%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "13", date: "27/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UI Designer", attendancePercent: "89%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "🙂" },
  { sNo: "14", date: "26/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "80%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "15", date: "25/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "75%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "16", date: "24/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UI Designer", attendancePercent: "89%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "17", date: "23/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "80%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
  { sNo: "18", date: "22/08/2025", name: "Stanly", status: "online", email: "stanly@gmail.com", employeeId: "1234", department: "UX Designer", attendancePercent: "75%", effectiveHours: "6h 0min", grossHours: "8h 0min", checkIn: "9:00 PM", checkOut: "6:00 PM", mood: "😃" },
]

const generateRecords = (): AttendanceRecord[] => {
  const records: AttendanceRecord[] = [...baseRecords]
  const names = [
    { name: "Stanly", email: "stanly@gmail.com", id: "1234", role: "UI Designer" },
    { name: "Alex Rivera", email: "alex.r@gmail.com", id: "1235", role: "UX Designer" },
    { name: "Sarah Chen", email: "sarah.c@gmail.com", id: "1236", role: "Frontend Dev" },
    { name: "Michael Scott", email: "michael.s@gmail.com", id: "1237", role: "Product Manager" },
    { name: "Jessica Taylor", email: "jessica.t@gmail.com", id: "1238", role: "QA Engineer" },
    { name: "David Miller", email: "david.m@gmail.com", id: "1239", role: "Backend Dev" },
    { name: "Emily Watson", email: "emily.w@gmail.com", id: "1240", role: "UI Designer" },
    { name: "Robert Davis", email: "robert.d@gmail.com", id: "1241", role: "DevOps Engineer" },
    { name: "Elena Rostova", email: "elena.r@gmail.com", id: "1242", role: "UX Designer" },
    { name: "Daniel Craig", email: "daniel.c@gmail.com", id: "1243", role: "Frontend Dev" },
  ]

  const moods = ["😃", "🙂", "😊", "😐", "😴"]
  const statuses: ("online" | "warning" | "offline")[] = ["online", "online", "online", "warning", "offline"]
  const percents = ["95%", "90%", "89%", "85%", "80%", "78%", "75%", "70%"]

  let currentTimestamp = new Date("2025-08-21T09:00:00").getTime()

  for (let i = 19; i <= 2500; i++) {
    const person = names[(i - 1) % names.length]
    const status = statuses[i % statuses.length]
    const isOffline = status === "offline"
    const isWarning = status === "warning"

    currentTimestamp -= 12 * 60 * 60 * 1000
    const recordDate = new Date(currentTimestamp)
    const day = String(recordDate.getDate()).padStart(2, "0")
    const month = String(recordDate.getMonth() + 1).padStart(2, "0")
    const year = recordDate.getFullYear()
    const formattedDate = `${day}/${month}/${year}`

    records.push({
      sNo: String(i).padStart(2, "0"),
      date: formattedDate,
      name: person.name,
      status: status,
      email: person.email,
      employeeId: person.id,
      department: person.role,
      attendancePercent: isOffline ? "0%" : isWarning ? "65%" : percents[i % percents.length],
      effectiveHours: isOffline ? "0h 0min" : isWarning ? "4h 15min" : "6h 0min",
      grossHours: isOffline ? "0h 0min" : isWarning ? "5h 0min" : "8h 0min",
      checkIn: isOffline ? "-" : "9:00 PM",
      checkOut: isOffline ? "-" : "6:00 PM",
      mood: isOffline ? "😴" : moods[i % moods.length],
    })
  }

  return records
}

export const initialAttendanceRecords: AttendanceRecord[] = generateRecords()

