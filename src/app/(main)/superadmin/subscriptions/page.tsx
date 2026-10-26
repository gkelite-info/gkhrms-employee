"use client"

import { Crown, Check, ArrowUpRight, Zap, ShieldCheck } from "lucide-react"

const plans = [
  {
    name: "Basic Plan",
    price: "$99",
    billing: "per month / organization",
    companiesCount: 58,
    features: [
      "Up to 50 employees",
      "Standard HR & Payroll module",
      "Attendance & Leave tracking",
      "Email support",
    ],
    popular: false,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Professional Plan",
    price: "$299",
    billing: "per month / organization",
    companiesCount: 52,
    features: [
      "Up to 250 employees",
      "Complete HR, Payroll & Finance",
      "Advanced mood & engage tracker",
      "Document generation & workflows",
      "Priority 24/7 support",
    ],
    popular: true,
    color: "from-[#5B50E5] to-[#7B72F4]",
  },
  {
    name: "Enterprise Plan",
    price: "$499",
    billing: "per month / organization",
    companiesCount: 32,
    features: [
      "Unlimited employees",
      "Custom policy workflows",
      "Dedicated account manager",
      "Audit security & custom logs",
      "SSO & Custom domain",
    ],
    popular: false,
    color: "from-purple-600 to-indigo-800",
  },
]

export default function SubscriptionsPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Subscription Plans & Tiers
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Overview of tiered pricing models, active tier distribution, and renewals.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#5B50E5] hover:bg-[#4E43DB] text-white rounded-xl text-xs font-bold shadow-sm shadow-indigo-200 transition-all cursor-pointer self-start sm:self-auto"
        >
          <Zap className="w-4 h-4" />
          <span>Create New Tier</span>
        </button>
      </div>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative bg-white border rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${
              p.popular
                ? "border-[#5B50E5] ring-2 ring-[#5B50E5]/15"
                : "border-slate-100"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-6 px-3 py-0.5 bg-[#5B50E5] text-white text-[10px] font-bold rounded-full shadow-sm">
                Most Popular
              </span>
            )}

            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-800">{p.name}</h2>
                <span className="px-2.5 py-0.5 bg-[#EEF0FD] text-[#5B50E5] text-xs font-bold rounded-full">
                  {p.companiesCount} active
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">
                  {p.price}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {p.billing}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-slate-600">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className={`w-full mt-8 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                p.popular
                  ? "bg-[#5B50E5] hover:bg-[#4E43DB] text-white shadow-sm shadow-indigo-100"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              Configure Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
