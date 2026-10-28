import { TeamMemberExceptionSummary } from "./types"

export const teamMembersExceptions: TeamMemberExceptionSummary[] = [
  {
    id: "EMP-101",
    name: "Rohan Mehta",
    role: "Frontend Developer",
    department: "Technology",
    team: "Team A",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    totalExceptions: 7,
    currentIssue: "Late Check-in",
    records: [
      { id: "RM-01", date: "12 Mar 2025", issueType: "Late Check-in", originalValue: "10:15 AM", correctedValue: "09:30 AM", approvedBy: "Priya Sharma", status: "Approved" },
      { id: "RM-02", date: "03 Mar 2025", issueType: "Missed Check-out", originalValue: "—", correctedValue: "06:00 PM", approvedBy: "Amit Verma", status: "Approved" },
      { id: "RM-03", date: "21 Feb 2025", issueType: "Low Working Hours", originalValue: "6h 15m", correctedValue: "8h 30m", approvedBy: "Neha Kapoor", status: "Approved" },
      { id: "RM-04", date: "10 Feb 2025", issueType: "Early Check-out", originalValue: "03:20 PM", correctedValue: "06:00 PM", approvedBy: "Rahul Singh", status: "Approved" },
      { id: "RM-05", date: "28 Jan 2025", issueType: "Late Check-in", originalValue: "10:05 AM", correctedValue: "09:30 AM", approvedBy: "—", status: "Pending" },
      { id: "RM-06", date: "15 Jan 2025", issueType: "Missed Check-in", originalValue: "—", correctedValue: "09:30 AM", approvedBy: "Priya Sharma", status: "Approved" },
      { id: "RM-07", date: "04 Jan 2025", issueType: "Late Check-in", originalValue: "10:30 AM", correctedValue: "09:30 AM", approvedBy: "Rahul Singh", status: "Approved" },
    ],
  },
  {
    id: "EMP-102",
    name: "Ananya Sharma",
    role: "UI/UX Designer",
    department: "Design",
    team: "Team A",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    totalExceptions: 4,
    currentIssue: null,
    records: [
      { id: "AS-01", date: "05 Mar 2025", issueType: "Early Check-out", originalValue: "04:30 PM", correctedValue: "06:00 PM", approvedBy: "Priya Sharma", status: "Approved" },
      { id: "AS-02", date: "18 Feb 2025", issueType: "Missed Check-out", originalValue: "—", correctedValue: "06:15 PM", approvedBy: "Amit Verma", status: "Approved" },
    ],
  },
  {
    id: "EMP-103",
    name: "Vikram Patel",
    role: "Backend Developer",
    department: "Technology",
    team: "Team A",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    totalExceptions: 5,
    currentIssue: "Missed Check-out",
    records: [
      { id: "VP-01", date: "11 Mar 2025", issueType: "Missed Check-out", originalValue: "—", correctedValue: "06:00 PM", approvedBy: "Amit Verma", status: "Approved" },
      { id: "VP-02", date: "24 Feb 2025", issueType: "Low Working Hours", originalValue: "5h 45m", correctedValue: "8h 15m", approvedBy: "Neha Kapoor", status: "Approved" },
    ],
  },
  {
    id: "EMP-104",
    name: "Kavita Reddy",
    role: "QA Engineer",
    department: "QA",
    team: "Team A",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    totalExceptions: 2,
    currentIssue: null,
    records: [
      { id: "KR-01", date: "02 Mar 2025", issueType: "Late Check-in", originalValue: "10:00 AM", correctedValue: "09:30 AM", approvedBy: "Priya Sharma", status: "Approved" },
    ],
  },
]
