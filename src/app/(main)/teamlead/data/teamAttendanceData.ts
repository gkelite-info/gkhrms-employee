export interface TeamMemberAttendance {
  id: string
  name: string
  employeeId: string
  avatar?: string
  designation: string
  department: string
  status: "Present" | "Late" | "On Leave"
  checkIn: string
  checkOut: string
  workingHours: string
  shift: string
  attendancePercentage: number
  presentDays: number
  leaveDays: number
  lateDays: number
  monthlyTrends: {
    month: string
    year: number
    percentage: number
    isActive?: boolean
  }[]
  history: {
    id: string
    date: string
    status: "Present" | "Late" | "On Leave"
    checkIn: string
    checkOut: string
    effectiveHours: string
    grossHours: string
  }[]
}

export type MemberDailyAttendance = TeamMemberAttendance["history"][number]

export const TEAM_MEMBERS_DATA: TeamMemberAttendance[] = [
  {
    id: "EMP001",
    employeeId: "EMP001",
    name: "Rajiv Sharma",
    designation: "UI Designer",
    department: "Design",
    status: "Present",
    checkIn: "09:05 AM",
    checkOut: "06:12 PM",
    workingHours: "9h 07m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 95,
    presentDays: 22,
    leaveDays: 2,
    lateDays: 3,
    monthlyTrends: [
      { month: "Jan", year: 2025, percentage: 90 },
      { month: "Feb", year: 2025, percentage: 93 },
      { month: "Mar", year: 2025, percentage: 92 },
      { month: "Apr", year: 2025, percentage: 96 },
      { month: "May", year: 2025, percentage: 88 },
      { month: "Jun", year: 2025, percentage: 100 },
      { month: "Jul", year: 2025, percentage: 94 },
      { month: "Aug", year: 2025, percentage: 95, isActive: true },
      { month: "Sep", year: 2025, percentage: 91 },
      { month: "Oct", year: 2025, percentage: 97 },
      { month: "Nov", year: 2025, percentage: 93 },
      { month: "Dec", year: 2025, percentage: 96 },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:05 AM", checkOut: "06:12 PM", effectiveHours: "9h 07m", grossHours: "9h 07m" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:12 AM", checkOut: "06:01 PM", effectiveHours: "8h 49m", grossHours: "8h 49m" },
      { id: "h3", date: "20/08/2025", status: "Late", checkIn: "09:38 AM", checkOut: "06:10 PM", effectiveHours: "8h 32m", grossHours: "8h 32m" },
      { id: "h4", date: "19/08/2025", status: "On Leave", checkIn: "–", checkOut: "–", effectiveHours: "–", grossHours: "–" },
      { id: "h5", date: "18/08/2025", status: "Present", checkIn: "09:08 AM", checkOut: "05:55 PM", effectiveHours: "8h 47m", grossHours: "8h 47m" },
      { id: "h6", date: "15/08/2025", status: "Present", checkIn: "09:15 AM", checkOut: "06:05 PM", effectiveHours: "8h 50m", grossHours: "8h 50m" },
      { id: "h7", date: "14/08/2025", status: "Present", checkIn: "09:01 AM", checkOut: "06:00 PM", effectiveHours: "8h 59m", grossHours: "8h 59m" },
      { id: "h8", date: "13/08/2025", status: "Present", checkIn: "09:07 AM", checkOut: "06:02 PM", effectiveHours: "8h 55m", grossHours: "8h 55m" },
      { id: "h9", date: "12/08/2025", status: "Late", checkIn: "09:35 AM", checkOut: "06:15 PM", effectiveHours: "8h 40m", grossHours: "8h 40m" },
      { id: "h10", date: "11/08/2025", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM", effectiveHours: "9h 00m", grossHours: "9h 00m" },
      { id: "h11", date: "08/08/2025", status: "Present", checkIn: "09:10 AM", checkOut: "06:05 PM", effectiveHours: "8h 55m", grossHours: "8h 55m" },
      { id: "h12", date: "07/08/2025", status: "Present", checkIn: "09:04 AM", checkOut: "06:01 PM", effectiveHours: "8h 57m", grossHours: "8h 57m" },
    ],
  },
  {
    id: "EMP002",
    employeeId: "EMP002",
    name: "Aisha Patel",
    designation: "Frontend Developer",
    department: "Engineering",
    status: "Present",
    checkIn: "09:12 AM",
    checkOut: "06:01 PM",
    workingHours: "8h 49m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 96,
    presentDays: 23,
    leaveDays: 1,
    lateDays: 2,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 95 },
      { month: "Apr", year: 2025, percentage: 92 },
      { month: "May", year: 2025, percentage: 90 },
      { month: "Jun", year: 2025, percentage: 98 },
      { month: "Jul", year: 2025, percentage: 96 },
      { month: "Aug", year: 2025, percentage: 96, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:12 AM", checkOut: "06:01 PM", effectiveHours: "8h 49m", grossHours: "8h 49m" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:05 AM", checkOut: "06:00 PM", effectiveHours: "8h 55m", grossHours: "8h 55m" },
      { id: "h3", date: "20/08/2025", status: "Present", checkIn: "09:15 AM", checkOut: "06:15 PM", effectiveHours: "9h 00m", grossHours: "9h 00m" },
      { id: "h4", date: "19/08/2025", status: "Present", checkIn: "09:08 AM", checkOut: "06:02 PM", effectiveHours: "8h 54m", grossHours: "8h 54m" },
      { id: "h5", date: "18/08/2025", status: "Present", checkIn: "09:04 AM", checkOut: "05:58 PM", effectiveHours: "8h 54m", grossHours: "8h 54m" },
    ],
  },
  {
    id: "EMP003",
    employeeId: "EMP003",
    name: "Vikram Kapoor",
    designation: "Backend Developer",
    department: "Engineering",
    status: "Late",
    checkIn: "09:38 AM",
    checkOut: "–",
    workingHours: "5h 42m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 89,
    presentDays: 20,
    leaveDays: 3,
    lateDays: 5,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 88 },
      { month: "Apr", year: 2025, percentage: 90 },
      { month: "May", year: 2025, percentage: 85 },
      { month: "Jun", year: 2025, percentage: 92 },
      { month: "Jul", year: 2025, percentage: 87 },
      { month: "Aug", year: 2025, percentage: 89, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Late", checkIn: "09:38 AM", checkOut: "–", effectiveHours: "5h 42m", grossHours: "5h 42m" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:10 AM", checkOut: "06:10 PM", effectiveHours: "9h 00m", grossHours: "9h 00m" },
      { id: "h3", date: "20/08/2025", status: "Late", checkIn: "09:40 AM", checkOut: "06:15 PM", effectiveHours: "8h 35m", grossHours: "8h 35m" },
      { id: "h4", date: "19/08/2025", status: "Present", checkIn: "09:05 AM", checkOut: "06:05 PM", effectiveHours: "9h 00m", grossHours: "9h 00m" },
    ],
  },
  {
    id: "EMP004",
    employeeId: "EMP004",
    name: "Sneha Nair",
    designation: "QA Engineer",
    department: "Quality Assurance",
    status: "On Leave",
    checkIn: "–",
    checkOut: "–",
    workingHours: "–",
    shift: "9 AM – 6 PM",
    attendancePercentage: 92,
    presentDays: 21,
    leaveDays: 4,
    lateDays: 1,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 94 },
      { month: "Apr", year: 2025, percentage: 91 },
      { month: "May", year: 2025, percentage: 95 },
      { month: "Jun", year: 2025, percentage: 90 },
      { month: "Jul", year: 2025, percentage: 93 },
      { month: "Aug", year: 2025, percentage: 92, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "On Leave", checkIn: "–", checkOut: "–", effectiveHours: "–", grossHours: "–" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:02 AM", checkOut: "06:04 PM", effectiveHours: "9h 02m", grossHours: "9h 02m" },
      { id: "h3", date: "20/08/2025", status: "Present", checkIn: "09:08 AM", checkOut: "06:00 PM", effectiveHours: "8h 52m", grossHours: "8h 52m" },
    ],
  },
  {
    id: "EMP005",
    employeeId: "EMP005",
    name: "Arjun Rao",
    designation: "DevOps Engineer",
    department: "Infrastructure",
    status: "Present",
    checkIn: "09:08 AM",
    checkOut: "05:55 PM",
    workingHours: "8h 47m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 98,
    presentDays: 24,
    leaveDays: 1,
    lateDays: 0,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 98 },
      { month: "Apr", year: 2025, percentage: 97 },
      { month: "May", year: 2025, percentage: 96 },
      { month: "Jun", year: 2025, percentage: 99 },
      { month: "Jul", year: 2025, percentage: 97 },
      { month: "Aug", year: 2025, percentage: 98, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:08 AM", checkOut: "05:55 PM", effectiveHours: "8h 47m", grossHours: "8h 47m" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM", effectiveHours: "9h 00m", grossHours: "9h 00m" },
      { id: "h3", date: "20/08/2025", status: "Present", checkIn: "09:06 AM", checkOut: "06:02 PM", effectiveHours: "8h 56m", grossHours: "8h 56m" },
    ],
  },
  {
    id: "EMP006",
    employeeId: "EMP006",
    name: "Priya Khanna",
    designation: "Product Analyst",
    department: "Product",
    status: "On Leave",
    checkIn: "–",
    checkOut: "–",
    workingHours: "–",
    shift: "9 AM – 6 PM",
    attendancePercentage: 91,
    presentDays: 20,
    leaveDays: 3,
    lateDays: 2,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 90 },
      { month: "Apr", year: 2025, percentage: 93 },
      { month: "May", year: 2025, percentage: 89 },
      { month: "Jun", year: 2025, percentage: 95 },
      { month: "Jul", year: 2025, percentage: 91 },
      { month: "Aug", year: 2025, percentage: 91, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "On Leave", checkIn: "–", checkOut: "–", effectiveHours: "–", grossHours: "–" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:11 AM", checkOut: "06:05 PM", effectiveHours: "8h 54m", grossHours: "8h 54m" },
    ],
  },
  {
    id: "EMP007",
    employeeId: "EMP007",
    name: "Daniel Mathews",
    designation: "Business Analyst",
    department: "Operations",
    status: "Present",
    checkIn: "09:15 AM",
    checkOut: "06:04 PM",
    workingHours: "8h 49m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 94,
    presentDays: 22,
    leaveDays: 2,
    lateDays: 2,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 91 },
      { month: "Apr", year: 2025, percentage: 93 },
      { month: "May", year: 2025, percentage: 94 },
      { month: "Jun", year: 2025, percentage: 96 },
      { month: "Jul", year: 2025, percentage: 93 },
      { month: "Aug", year: 2025, percentage: 94, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:15 AM", checkOut: "06:04 PM", effectiveHours: "8h 49m", grossHours: "8h 49m" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:04 AM", checkOut: "06:01 PM", effectiveHours: "8h 57m", grossHours: "8h 57m" },
    ],
  },
  {
    id: "EMP008",
    employeeId: "EMP008",
    name: "Irfan Khan",
    designation: "Support Engineer",
    department: "Support",
    status: "Late",
    checkIn: "09:42 AM",
    checkOut: "–",
    workingHours: "5h 18m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 88,
    presentDays: 19,
    leaveDays: 3,
    lateDays: 4,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 85 },
      { month: "Apr", year: 2025, percentage: 89 },
      { month: "May", year: 2025, percentage: 86 },
      { month: "Jun", year: 2025, percentage: 90 },
      { month: "Jul", year: 2025, percentage: 88 },
      { month: "Aug", year: 2025, percentage: 88, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Late", checkIn: "09:42 AM", checkOut: "–", effectiveHours: "5h 18m", grossHours: "5h 18m" },
      { id: "h2", date: "21/08/2025", status: "Present", checkIn: "09:05 AM", checkOut: "06:00 PM", effectiveHours: "8h 55m", grossHours: "8h 55m" },
    ],
  },
  {
    id: "EMP009",
    employeeId: "EMP009",
    name: "Kavita Menon",
    designation: "Full Stack Developer",
    department: "Engineering",
    status: "Present",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    workingHours: "9h 00m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 97,
    presentDays: 23,
    leaveDays: 1,
    lateDays: 1,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 95 },
      { month: "Apr", year: 2025, percentage: 96 },
      { month: "May", year: 2025, percentage: 94 },
      { month: "Jun", year: 2025, percentage: 97 },
      { month: "Jul", year: 2025, percentage: 98 },
      { month: "Aug", year: 2025, percentage: 97, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM", effectiveHours: "9h 00m", grossHours: "9h 00m" },
    ],
  },
  {
    id: "EMP010",
    employeeId: "EMP010",
    name: "Rohan Verma",
    designation: "UI/UX Designer",
    department: "Design",
    status: "Present",
    checkIn: "09:10 AM",
    checkOut: "06:15 PM",
    workingHours: "9h 05m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 95,
    presentDays: 22,
    leaveDays: 2,
    lateDays: 2,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 92 },
      { month: "Apr", year: 2025, percentage: 94 },
      { month: "May", year: 2025, percentage: 90 },
      { month: "Jun", year: 2025, percentage: 96 },
      { month: "Jul", year: 2025, percentage: 94 },
      { month: "Aug", year: 2025, percentage: 95, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:10 AM", checkOut: "06:15 PM", effectiveHours: "9h 05m", grossHours: "9h 05m" },
    ],
  },
  {
    id: "EMP011",
    employeeId: "EMP011",
    name: "Meera Iyer",
    designation: "Data Analyst",
    department: "Analytics",
    status: "Present",
    checkIn: "09:02 AM",
    checkOut: "06:03 PM",
    workingHours: "9h 01m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 96,
    presentDays: 23,
    leaveDays: 1,
    lateDays: 1,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 94 },
      { month: "Apr", year: 2025, percentage: 95 },
      { month: "May", year: 2025, percentage: 93 },
      { month: "Jun", year: 2025, percentage: 98 },
      { month: "Jul", year: 2025, percentage: 95 },
      { month: "Aug", year: 2025, percentage: 96, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:02 AM", checkOut: "06:03 PM", effectiveHours: "9h 01m", grossHours: "9h 01m" },
    ],
  },
  {
    id: "EMP012",
    employeeId: "EMP012",
    name: "Siddharth Joshi",
    designation: "Mobile Developer",
    department: "Engineering",
    status: "Present",
    checkIn: "09:14 AM",
    checkOut: "06:11 PM",
    workingHours: "8h 57m",
    shift: "9 AM – 6 PM",
    attendancePercentage: 93,
    presentDays: 21,
    leaveDays: 2,
    lateDays: 3,
    monthlyTrends: [
      { month: "Mar", year: 2025, percentage: 90 },
      { month: "Apr", year: 2025, percentage: 92 },
      { month: "May", year: 2025, percentage: 91 },
      { month: "Jun", year: 2025, percentage: 94 },
      { month: "Jul", year: 2025, percentage: 92 },
      { month: "Aug", year: 2025, percentage: 93, isActive: true },
    ],
    history: [
      { id: "h1", date: "22/08/2025", status: "Present", checkIn: "09:14 AM", checkOut: "06:11 PM", effectiveHours: "8h 57m", grossHours: "8h 57m" },
    ],
  },
]

export const mockTeamMembers = TEAM_MEMBERS_DATA

export function getMemberById(id: string): TeamMemberAttendance | undefined {
  return TEAM_MEMBERS_DATA.find((m) => m.id === id || m.employeeId === id)
}
