"use client"

import React from "react"
import {
  CalendarBlank,
  CalendarCheck,
  Clock,
  ChatCircleText,
  Coffee,
  FolderNotch,
} from "phosphor-react"
import { AttendanceRequestItem } from "../types"

interface RequestDetailContentProps {
  request: AttendanceRequestItem
}

export default function RequestDetailContent({
  request,
}: RequestDetailContentProps) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="border-b border-gray-100 flex gap-4">
        <button
          type="button"
          className="text-[#5B50EC] font-bold border-b-2 border-[#5B50EC] pb-1.5 text-xs cursor-default"
        >
          Details
        </button>
      </div>

      <div className="flex flex-col gap-2.5 text-xs">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-gray-400 font-medium shrink-0">
            <FolderNotch size={14} weight="bold" />
            Request Type
          </span>
          <span className="font-bold text-gray-800 text-right break-words">
            {request.requestType}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-gray-400 font-medium shrink-0">
            <Coffee size={14} weight="bold" />
            Leave Type
          </span>
          <span className="font-bold text-gray-800 text-right break-words">Casual Leave</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-gray-400 font-medium shrink-0">
            <CalendarBlank size={14} weight="bold" />
            Dates
          </span>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-800 text-right break-words">
              {request.date}
            </span>
            <span className="text-[10px] font-bold text-[#5B50EC]">
              (1 Day)
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-gray-400 font-medium shrink-0">
            <Clock size={14} weight="bold" />
            Duration
          </span>
          <span className="font-bold text-gray-800 text-right break-words">
            {request.requestedTime}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 pt-0.5">
          <span className="flex items-center gap-1.5 text-gray-400 font-medium">
            <ChatCircleText size={14} weight="bold" />
            Reason
          </span>
          <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-700 font-medium leading-relaxed whitespace-pre-wrap break-words max-h-44 overflow-y-auto">
            {request.reason}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-gray-400 font-medium shrink-0">
            <CalendarCheck size={14} weight="bold" />
            Requested On
          </span>
          <span className="font-semibold text-gray-800 text-right break-words">
            {request.date}, 10:30 AM
          </span>
        </div>
      </div>

      <div className="bg-[#F0F7FF] rounded-2xl p-3 border border-[#DCEBFE] flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
          <CalendarBlank size={14} weight="bold" className="text-[#5B50EC]" />
          <span>Leave Balance</span>
        </div>
        <div className="grid grid-cols-3 divide-x divide-blue-200/60 text-center">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-gray-500">Total</span>
            <span className="text-sm font-bold text-gray-900 mt-0.5">12</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-gray-500">Used</span>
            <span className="text-sm font-bold text-gray-900 mt-0.5">6</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-gray-500">Available</span>
            <span className="text-sm font-bold text-[#5B50EC] mt-0.5">6</span>
          </div>
        </div>
      </div>
    </div>
  )
}
