"use client"

import {
  X,
  CalendarBlank,
  Clock,
  Briefcase,
  MapPin,
  EnvelopeSimple,
  Phone,
  Timer,
  Coffee,
} from "phosphor-react"
import { ReusableAvatar } from "@/components/reusableComponents"
import { HrAttendanceRecord } from "../data/hrAttendanceData"

interface HrEmployeeAttendanceModalProps {
  isOpen: boolean
  onClose: () => void
  record: HrAttendanceRecord | null
}

export default function HrEmployeeAttendanceModal({
  isOpen,
  onClose,
  record,
}: HrEmployeeAttendanceModalProps) {
  if (!isOpen || !record) return null

  const getStatusBadge = (status: HrAttendanceRecord["status"]) => {
    switch (status) {
      case "Present":
        return {
          bg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
          dot: "bg-emerald-500",
        }
      case "Late":
        return {
          bg: "bg-amber-50 text-amber-700 border-amber-200/60",
          dot: "bg-amber-500",
        }
      case "Absent":
        return {
          bg: "bg-rose-50 text-rose-700 border-rose-200/60",
          dot: "bg-rose-500",
        }
      case "On Leave":
        return {
          bg: "bg-amber-50 text-amber-700 border-amber-200/60",
          dot: "bg-amber-500",
        }
      case "Work From Home":
        return {
          bg: "bg-[#EEF2FF] text-[#5B50EC] border-[#DDD9FD]",
          dot: "bg-[#5B50EC]",
        }
      default:
        return {
          bg: "bg-gray-50 text-gray-700 border-gray-200",
          dot: "bg-gray-400",
        }
    }
  }

  const badge = getStatusBadge(record.status)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[85vh] sm:max-h-[90vh] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="bg-white px-5 sm:px-6 py-4 border-b border-gray-100 flex items-start justify-between shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-3">
            <ReusableAvatar
              src={record.avatar}
              alt={record.name}
              name={record.name}
              size="md"
              fallbackType="icon"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight truncate">
                  {record.name}
                </h2>
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${badge.bg}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                  {record.status}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium mt-0.5 truncate">
                {record.employeeId} • {record.department} • {record.role}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-6 py-4 flex flex-col gap-3.5 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
                <CalendarBlank size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Date</span>
                <span className="text-xs font-bold text-gray-900 break-words">
                  {record.date || "26 Aug 2025"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
                <Briefcase size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Designation</span>
                <span className="text-xs font-bold text-gray-900 truncate">
                  {record.designation || record.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Clock size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Check-in Time</span>
                <span className="text-xs font-bold text-gray-900">
                  {record.checkIn}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <Clock size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Check-out Time</span>
                <span className="text-xs font-bold text-gray-900">
                  {record.checkOut}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#5B50EC] flex items-center justify-center shrink-0">
                <Timer size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Working Hours</span>
                <span className="text-xs font-bold text-gray-900">
                  {record.workingHours}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Coffee size={16} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-gray-400 font-semibold">Break Duration</span>
                <span className="text-xs font-bold text-gray-900">
                  {record.breakDuration || "45 mins"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gray-50/80 flex flex-col gap-2">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
              Work & Location Information
            </span>
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <MapPin size={15} weight="bold" className="text-[#5B50EC] shrink-0" />
              <span className="truncate">{record.location || "Bangalore Headquarters"}</span>
            </div>
            {record.email && (
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <EnvelopeSimple size={15} weight="bold" className="text-[#5B50EC] shrink-0" />
                <span className="truncate">{record.email}</span>
              </div>
            )}
            {record.phone && (
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Phone size={15} weight="bold" className="text-[#5B50EC] shrink-0" />
                <span className="truncate">{record.phone}</span>
              </div>
            )}
          </div>
        </div>

        <div className="px-5 sm:px-6 py-3.5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

