"use client"

import dynamic from "next/dynamic"
import WelcomeBanner from "./components/WelcomeBanner"
import KpiCards from "./components/KpiCards"
import RecentCompaniesCard from "./components/RecentCompaniesCard"
import ExpiringSoonCard from "./components/ExpiringSoonCard"
import QuickActionsCard from "./components/QuickActionsCard"
import RecentPaymentsCard from "./components/RecentPaymentsCard"
import PlatformActivityCard from "./components/PlatformActivityCard"

const CompanyGrowthChart = dynamic(
  () => import("./components/CompanyGrowthChart"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm h-80 flex items-center justify-center">
        <span className="text-xs text-slate-400 font-medium animate-pulse">
          Loading growth chart...
        </span>
      </div>
    ),
  }
)

const SubscriptionDistributionChart = dynamic(
  () => import("./components/SubscriptionDistributionChart"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm h-80 flex items-center justify-center">
        <span className="text-xs text-slate-400 font-medium animate-pulse">
          Loading distribution chart...
        </span>
      </div>
    ),
  }
)

export default function SuperAdminDashboardPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6 pb-12">
      {/* Row 1: Welcome Header & Date Card */}
      <WelcomeBanner />

      {/* Row 2: 4 Key Performance Metrics Cards */}
      <KpiCards />

      {/* Row 3: Company Growth Chart & Subscription Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <CompanyGrowthChart />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <SubscriptionDistributionChart />
        </div>
      </div>

      {/* Row 4: Recent Companies, Expiring Soon, Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 flex flex-col">
          <RecentCompaniesCard />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <ExpiringSoonCard />
        </div>
        <div className="lg:col-span-3 flex flex-col md:col-span-2 lg:col-auto">
          <QuickActionsCard />
        </div>
      </div>

      {/* Row 5: Recent Payments & Platform Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <RecentPaymentsCard />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <PlatformActivityCard />
        </div>
      </div>
    </div>
  )
}
