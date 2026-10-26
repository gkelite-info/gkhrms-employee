"use client"

import {
  Building2,
  Users,
  CreditCard,
  Headphones,
  TrendingUp,
  ArrowUp,
} from "lucide-react"

interface KpiItem {
  id: string
  title: string
  value: string
  change: string
  changeLabel: string
  icon: React.ComponentType<{ className?: string }>
  isTrendingUp?: boolean
}

const kpiData: KpiItem[] = [
  {
    id: "total-companies",
    title: "Total Companies",
    value: "142",
    change: "+12%",
    changeLabel: "from last month",
    icon: Building2,
    isTrendingUp: true,
  },
  {
    id: "active-subscriptions",
    title: "Active Subscriptions",
    value: "118",
    change: "+6%",
    changeLabel: "from last month",
    icon: Users,
    isTrendingUp: true,
  },
  {
    id: "monthly-revenue",
    title: "Monthly Revenue",
    value: "$24,560",
    change: "+18%",
    changeLabel: "from last month",
    icon: CreditCard,
    isTrendingUp: true,
  },
  {
    id: "support-tickets",
    title: "Support Tickets",
    value: "12",
    change: "new",
    changeLabel: "this week",
    icon: Headphones,
    isTrendingUp: false,
  },
]

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.id}
            className="bg-white border border-slate-100/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                {item.title}
              </span>
              <div className="w-9 h-9 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
                <Icon className="w-4 h-4 text-[#5B50E5]" />
              </div>
            </div>

            <div className="mt-3">
              <div className="text-2xl font-extrabold text-slate-800 tracking-tight">
                {item.value}
              </div>
              <div className="flex items-center gap-1.5 mt-2 text-xs">
                {item.isTrendingUp ? (
                  <>
                    <TrendingUp className="w-3.5 h-3.5 text-[#5B50E5]" />
                    <span className="font-bold text-[#5B50E5]">
                      {item.change}
                    </span>
                  </>
                ) : (
                  <>
                    <ArrowUp className="w-3.5 h-3.5 text-[#5B50E5]" />
                    <span className="font-bold text-[#5B50E5]">
                      {item.change}
                    </span>
                  </>
                )}
                <span className="text-slate-400 font-medium text-[11px]">
                  {item.changeLabel}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
