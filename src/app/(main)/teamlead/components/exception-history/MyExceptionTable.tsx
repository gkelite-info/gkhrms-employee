"use client"

import { Eye } from "phosphor-react"
import { MyExceptionItem } from "./types"

interface MyExceptionTableProps {
  records: MyExceptionItem[]
  onSelectRecord: (record: MyExceptionItem) => void
}

export default function MyExceptionTable({
  records,
  onSelectRecord,
}: MyExceptionTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-2xs custom-scrollbar">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-700 tracking-wider">
            <th className="py-3.5 px-4 whitespace-nowrap">DATE</th>
            <th className="py-3.5 px-4 whitespace-nowrap">ISSUE TYPE</th>
            <th className="py-3.5 px-4 whitespace-nowrap">REQUESTED CORRECTION</th>
            <th className="py-3.5 px-4 whitespace-nowrap">REVIEWED BY</th>
            <th className="py-3.5 px-4 text-center whitespace-nowrap">ACTION</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {records.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-8 text-center text-xs text-gray-400">
                No exception records match your search criteria.
              </td>
            </tr>
          ) : (
            records.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-3.5 px-4 font-medium text-gray-900 whitespace-nowrap">{item.date}</td>
                <td className="py-3.5 px-4 font-semibold text-gray-800 whitespace-nowrap">{item.issueType}</td>
                <td className="py-3.5 px-4 font-medium text-gray-600 whitespace-nowrap">{item.requestedCorrection}</td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-gray-900 leading-tight">{item.reviewedBy.name}</span>
                    <span className="text-[10px] text-gray-400 font-medium">{item.reviewedBy.role}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => onSelectRecord(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-[#5B50EC] hover:bg-[#EEF2FF] hover:border-[#5B50EC] transition-all cursor-pointer shadow-2xs"
                  >
                    <Eye size={14} weight="bold" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
