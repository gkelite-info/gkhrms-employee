"use client"

import { useState } from "react"
import { CreditCard, Download, Search, CheckCircle2, XCircle } from "lucide-react"

const paymentTransactions = [
  {
    id: "INV-2025-001",
    company: "TechNova Solutions",
    amount: "$299.00",
    plan: "Professional",
    method: "Visa •••• 4242",
    date: "26 Aug 2025",
    status: "Paid",
  },
  {
    id: "INV-2025-002",
    company: "GreenField Pvt Ltd",
    amount: "$99.00",
    plan: "Basic",
    method: "Mastercard •••• 8819",
    date: "24 Aug 2025",
    status: "Paid",
  },
  {
    id: "INV-2025-003",
    company: "Skyline Technologies",
    amount: "$499.00",
    plan: "Enterprise",
    method: "ACH Wire Transfer",
    date: "22 Aug 2025",
    status: "Paid",
  },
  {
    id: "INV-2025-004",
    company: "NextGen Innovations",
    amount: "$299.00",
    plan: "Professional",
    method: "Visa •••• 1042",
    date: "20 Aug 2025",
    status: "Failed",
  },
  {
    id: "INV-2025-005",
    company: "Maple HR Solutions",
    amount: "$299.00",
    plan: "Professional",
    method: "Amex •••• 3001",
    date: "18 Aug 2025",
    status: "Paid",
  },
  {
    id: "INV-2025-006",
    company: "Vision Corp",
    amount: "$499.00",
    plan: "Enterprise",
    method: "Visa •••• 9921",
    date: "15 Aug 2025",
    status: "Paid",
  },
]

export default function PaymentsPage() {
  const [filter, setFilter] = useState("all")

  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Billing & Invoices
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Monitor client billing histories, automated recurring charges, and payout statuses.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer self-start sm:self-auto"
        >
          <Download className="w-4 h-4 text-slate-500" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            Total Revenue (Aug)
          </span>
          <p className="text-xl font-extrabold text-slate-800 mt-1">$24,560</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            Successful Charges
          </span>
          <p className="text-xl font-extrabold text-emerald-600 mt-1">116</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            Failed Transactions
          </span>
          <p className="text-xl font-extrabold text-rose-500 mt-1">2</p>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-slate-400">
            Average Order Value
          </span>
          <p className="text-xl font-extrabold text-indigo-600 mt-1">$208</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">
            Recent Invoices & Transactions
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                filter === "all"
                  ? "bg-[#5B50E5] text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter("Paid")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                filter === "Paid"
                  ? "bg-[#5B50E5] text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Paid
            </button>
            <button
              type="button"
              onClick={() => setFilter("Failed")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                filter === "Failed"
                  ? "bg-[#5B50E5] text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Failed
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
                <th className="pb-3 font-semibold">INVOICE</th>
                <th className="pb-3 font-semibold">COMPANY</th>
                <th className="pb-3 font-semibold">AMOUNT</th>
                <th className="pb-3 font-semibold">PAYMENT METHOD</th>
                <th className="pb-3 font-semibold">DATE</th>
                <th className="pb-3 font-semibold text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paymentTransactions
                .filter((t) => filter === "all" || t.status === filter)
                .map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    <td className="py-3.5 font-bold text-slate-700">{tx.id}</td>
                    <td className="py-3.5 font-bold text-slate-900">
                      {tx.company}
                    </td>
                    <td className="py-3.5 font-extrabold text-slate-900">
                      {tx.amount}
                    </td>
                    <td className="py-3.5 text-slate-500 font-medium">
                      {tx.method}
                    </td>
                    <td className="py-3.5 text-slate-400">{tx.date}</td>
                    <td className="py-3.5 text-right">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          tx.status === "Paid"
                            ? "bg-[#EEF0FD] text-[#5B50E5] border border-indigo-100"
                            : "bg-rose-50 text-rose-600 border border-rose-100"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            tx.status === "Paid" ? "bg-[#5B50E5]" : "bg-rose-600"
                          }`}
                        />
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
