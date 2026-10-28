"use client"

import { Sun, House, Eye, Clock, CheckCircle, XCircle } from "phosphor-react"
import { ReusableAvatar } from "@/components/reusableComponents"
import { MyRequestItem } from "./types"

interface MyRequestsTableProps {
  requests: MyRequestItem[]
  onViewRequest: (item: MyRequestItem) => void
}

export default function MyRequestsTable({
  requests,
  onViewRequest,
}: MyRequestsTableProps) {
  if (requests.length === 0) {
    return (
      <div className="w-full py-16 bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center px-4">
        <p className="text-sm font-semibold text-gray-700">No requests found</p>
        <p className="text-xs text-gray-400 mt-1">Try adjusting your filters or search query.</p>
      </div>
    )
  }

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[750px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <th className="py-3.5 px-4 sm:px-5">Request Type</th>
              <th className="py-3.5 px-4">Date(s)</th>
              <th className="py-3.5 px-4">Duration</th>
              <th className="py-3.5 px-4">Requested On</th>
              <th className="py-3.5 px-4">Approver</th>
              <th className="py-3.5 px-4 text-center">Status</th>
              <th className="py-3.5 px-4 text-center">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs">
            {requests.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-3.5 px-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        item.requestType === "Leave"
                          ? "bg-[#FFFBEB] text-[#D97706]"
                          : "bg-[#EEF2FF] text-[#5B50EC]"
                      }`}
                    >
                      {item.requestType === "Leave" ? (
                        <Sun size={18} weight="bold" />
                      ) : (
                        <House size={18} weight="bold" />
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-gray-900 leading-tight">
                        {item.requestType}
                      </span>
                      {item.leaveType && (
                        <span className="text-[11px] text-gray-400 font-medium">
                          {item.leaveType}
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-4 font-semibold text-gray-700 whitespace-nowrap">
                  {item.dates}
                </td>

                <td className="py-3.5 px-4 text-gray-600 font-medium whitespace-nowrap">
                  {item.duration}
                </td>

                <td className="py-3.5 px-4 text-gray-500 font-medium whitespace-nowrap">
                  {item.requestedOn}
                </td>

                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <ReusableAvatar
                      src={item.approver.avatar}
                      name={item.approver.name}
                      size="sm"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-gray-900 leading-tight truncate">
                        {item.approver.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {item.approver.role}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap ${
                      item.status === "Approved"
                        ? "bg-[#ECFDF5] text-[#059669] border border-emerald-200/60"
                        : item.status === "Rejected"
                        ? "bg-[#FEF2F2] text-[#DC2626] border border-red-200/60"
                        : "bg-[#FFFBEB] text-[#D97706] border border-amber-200/60"
                    }`}
                  >
                    {item.status === "Approved" ? (
                      <CheckCircle size={13} weight="bold" />
                    ) : item.status === "Rejected" ? (
                      <XCircle size={13} weight="bold" />
                    ) : (
                      <Clock size={13} weight="bold" />
                    )}
                    <span>{item.status}</span>
                  </span>
                </td>

                <td className="py-3.5 px-4 text-center">
                  <button
                    type="button"
                    onClick={() => onViewRequest(item)}
                    className="w-8 h-8 rounded-full bg-[#F0EFFE] text-[#5B50EC] hover:bg-[#5B50EC] hover:text-white transition-all inline-flex items-center justify-center cursor-pointer shadow-2xs"
                    aria-label={`View details for ${item.id}`}
                  >
                    <Eye size={16} weight="bold" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
