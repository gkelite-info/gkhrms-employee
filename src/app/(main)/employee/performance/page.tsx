"use client"

import {  useState, useEffect, Suspense  } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import PerformanceMetricCards from "./components/PerformanceMetricCards"
import PerformanceScoreChart from "./components/PerformanceScoreChart"
import TopEmployeesChart from "./components/TopEmployeesChart"
import PerformanceFeedbackTable from "./components/PerformanceFeedbackTable"
import SkillsAndAchievements from "./components/SkillsAndAchievements"
import DepartmentPerformanceView from "./components/DepartmentPerformanceView"
import SkillsBuildingView from "./components/SkillsBuildingView"

type TabType = "Performance" | "Department" | "Skills Building"

function PerformancePageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const parseTabFromQuery = (tabParam: string | null): TabType => {
    const t = (tabParam || "").toLowerCase()
    if (t === "department" || t === "dept") {
      return "Department"
    }
    if (t === "skills" || t === "skills-building" || t === "skillsbuilding") {
      return "Skills Building"
    }
    return "Performance"
  }

  const [activeTab, setActiveTab] = useState<TabType>(() =>
    parseTabFromQuery(searchParams?.get("tab"))
  )

  // Sync state if URL search params change (e.g., browser Back / Forward)
  useEffect(() => {
    const tabParam = searchParams?.get("tab")
    setActiveTab(parseTabFromQuery(tabParam))
  }, [searchParams])

  // Update query params in URL
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)

    if (typeof window === "undefined") return
    const url = new URL(window.location.href)

    if (tab === "Performance") {
      url.searchParams.set("tab", "performance")
    } else if (tab === "Department") {
      url.searchParams.set("tab", "department")
    } else if (tab === "Skills Building") {
      url.searchParams.set("tab", "skills")
    }

    window.history.pushState(null, "", url.toString())
    try {
      router.push(url.pathname + url.search, { scroll: false })
    } catch {}
  }

  return (
    <div className="w-full min-h-full px-4 pt-4 md:px-6 md:pt-6 pb-4 md:pb-5 flex flex-col gap-4 sm:gap-5 select-none">
      {/* 1. Main Navigation Tabs (Performance | Department | Skills Building) */}
      <div className="w-full bg-white rounded-xl p-2.5 flex items-center gap-3 shadow-xs border border-gray-100">
        <button
          type="button"
          onClick={() => handleTabChange("Performance")}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-xs sm:text-sm text-center transition-all cursor-pointer ${
            activeTab === "Performance"
              ? "bg-[#8571EE] text-white shadow-xs"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Performance
        </button>
        <button
          type="button"
          onClick={() => handleTabChange("Department")}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-xs sm:text-sm text-center transition-all cursor-pointer ${
            activeTab === "Department"
              ? "bg-[#8571EE] text-white shadow-xs"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Department
        </button>
        <button
          type="button"
          onClick={() => handleTabChange("Skills Building")}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-xs sm:text-sm text-center transition-all cursor-pointer ${
            activeTab === "Skills Building"
              ? "bg-[#8571EE] text-white shadow-xs"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Skills Building
        </button>
      </div>

      {/* 2. Content when "Performance" is selected */}
      {activeTab === "Performance" && (
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Row 1: 3 Rating Metric Cards */}
          <PerformanceMetricCards />

          {/* Row 2: Charts Row (Performance Score by Month + Top 3 Employees) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
            <div className="lg:col-span-8">
              <PerformanceScoreChart />
            </div>
            <div className="lg:col-span-4">
              <TopEmployeesChart />
            </div>
          </div>

          {/* Row 3: Performance Feedback Table using ReusableTable */}
          <PerformanceFeedbackTable />

          {/* Row 4: Skill Breakdown & Achievements */}
          <SkillsAndAchievements />
        </div>
      )}

      {/* 3. Content when "Department" is selected (Department Objectives with ReusableTable) */}
      {activeTab === "Department" && <DepartmentPerformanceView />}

      {/* 4. Content when "Skills Building" is selected (Skills Courses with ReusableTable) */}
      {activeTab === "Skills Building" && <SkillsBuildingView />}

      {/* Small subtle bottom clearance */}
      <div className="w-full h-4 shrink-0" aria-hidden="true" />
    </div>
  )
}

export default function EmployeePerformancePage() {
  return (
    <Suspense fallback={null}>
      <PerformancePageContent />
    </Suspense>
  )
}
