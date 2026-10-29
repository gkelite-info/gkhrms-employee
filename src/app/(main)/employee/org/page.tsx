"use client"

import {  useState, useMemo, useEffect, Suspense  } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import {
  CaretDown,
  Funnel,
  MagnifyingGlass,
  TreeStructure,
  GitFork,
  Briefcase,
  FileText,
  EnvelopeSimple,
  MapPin,
  Buildings,
  CheckCircle,
  User,
  ArrowRight,
} from "phosphor-react"
import OrgTree from "./components/OrgTree"
import { ReusablePagination } from "@/../reusableComponents"

interface EmployeeRecord {
  id: number
  name: string
  role: string
  department: string
  location: string
  email: string
  avatar: string
  businessUnit: string
  costCenter: string
  legalEntity: string
}

const initialEmployees: EmployeeRecord[] = [
  {
    id: 1,
    name: "Arjun Mehra",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "arjunMehra@gmail.com",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 2,
    name: "Nehareddy",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "nehareddy@gmail.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 3,
    name: "Vikram Naidu",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "vikramnaidu@gmail.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 4,
    name: "Arjun Mehra",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "arjunMehra@gmail.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 5,
    name: "Sanju Mehra",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "arjunMehra@gmail.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 6,
    name: "Jasmine Mehra",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "nehareddy@gmail.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 7,
    name: "Arjun Mehra",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "vikramnaidu@gmail.com",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 8,
    name: "Shalini Mehra",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "arjunMehra@gmail.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 9,
    name: "Kanak",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "arjunMehra@gmail.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 10,
    name: "Charmi",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "nehareddy@gmail.com",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 11,
    name: "Arjun Mehra",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "vikramnaidu@gmail.com",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
  {
    id: 12,
    name: "Sujith",
    role: "Senior Software Delevoper",
    department: "Data & Analytics",
    location: "Hyderabad",
    email: "arjunMehra@gmail.com",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&auto=format&fit=crop&q=80",
    businessUnit: "Product & Tech",
    costCenter: "CC-102 (Analytics)",
    legalEntity: "GK Elite Tech Pvt Ltd",
  },
]

const businessUnits = [
  "Business Unit",
  "Product & Tech",
  "Operations",
  "Sales & Marketing",
  "Corporate Services",
]

const departments = [
  "Department",
  "Data & Analytics",
  "Software Engineering",
  "Product Design",
  "Human Resources",
  "Finance & Legal",
]

const locations = [
  "Location",
  "Hyderabad",
  "Bangalore",
  "Mumbai",
  "Pune",
  "Remote",
]

const costCenters = [
  "Cost Center",
  "CC-101 (Tech)",
  "CC-102 (Analytics)",
  "CC-103 (Ops)",
  "CC-104 (HR)",
]

const legalEntries = [
  "Legal Entry",
  "GK Elite Tech Pvt Ltd",
  "GK Solutions LLC",
  "GK Global Services Ltd",
]

interface JobOpening {
  id: number
  title: string
  department: string
  experience: string
  positions: string
  location: string
}

const jobOpeningsList: JobOpening[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    department: "Design",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineer",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
  {
    id: 3,
    title: "Marketing Manager",
    department: "Design",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Data Science",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
  {
    id: 5,
    title: "Backend Developer",
    department: "Engineer",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
  {
    id: 6,
    title: "Marketing Manager",
    department: "Design",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
  {
    id: 7,
    title: "Data Scientist",
    department: "Data Science",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
  {
    id: 8,
    title: "Marketing Manager",
    department: "Design",
    experience: "2-4 Years",
    positions: "4 Positions",
    location: "Hyderabad",
  },
]

const hiringDepartments = [
  "Department",
  "Design",
  "Engineer",
  "Data Science",
]

const hiringExperiences = [
  "Experience",
  "0-2 Years",
  "2-4 Years",
  "4-6 Years",
  "6+ Years",
]

const hiringLocations = [
  "Location",
  "Hyderabad",
  "Bangalore",
  "Pune",
  "Remote",
]

function OrgPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const parseTabFromQuery = (tabParam: string | null): "Employees" | "Org Terms and conditions" | "Hiring" => {
    const t = (tabParam || "").toLowerCase()
    if (t === "terms" || t === "terms-and-conditions" || t === "org-terms" || t === "conditions") {
      return "Org Terms and conditions"
    }
    if (t === "hiring" || t === "jobs" || t === "careers") {
      return "Hiring"
    }
    return "Employees"
  }

  const parseSubTabFromQuery = (
    subTabParam: string | null
  ): "Organization Tree" | "Employee Directory" => {
    const s = (subTabParam || "").toLowerCase()
    if (s === "directory" || s === "employee-directory" || s === "employees") {
      return "Employee Directory"
    }
    return "Organization Tree"
  }

  const parseHiringSubTabFromQuery = (
    subTabParam: string | null
  ): "referrals" | "applications" => {
    const s = (subTabParam || "").toLowerCase()
    if (s === "applications" || s === "my-applications") {
      return "applications"
    }
    return "referrals"
  }

  const [activeMainTab, setActiveMainTab] = useState<
    "Employees" | "Org Terms and conditions" | "Hiring"
  >(() => parseTabFromQuery(searchParams?.get("tab")))

  const [activeSubTab, setActiveSubTab] = useState<
    "Organization Tree" | "Employee Directory"
  >(() => parseSubTabFromQuery(searchParams?.get("subtab")))

  const [hiringSubTab, setHiringSubTab] = useState<"referrals" | "applications">(
    () => parseHiringSubTabFromQuery(searchParams?.get("subtab"))
  )

  // Synchronize state when URL search params change (e.g. browser Back / Forward)
  useEffect(() => {
    const tabParam = searchParams?.get("tab")
    const subTabParam = searchParams?.get("subtab")

    setActiveMainTab(parseTabFromQuery(tabParam))
    if (tabParam === "hiring") {
      setHiringSubTab(parseHiringSubTabFromQuery(subTabParam))
    } else {
      setActiveSubTab(parseSubTabFromQuery(subTabParam))
    }
  }, [searchParams])

  // Update query params in the URL
  const updateQueryParams = (tab: string, subtab?: string) => {
    if (typeof window === "undefined") return
    const url = new URL(window.location.href)
    url.searchParams.set("tab", tab)
    if (subtab) {
      url.searchParams.set("subtab", subtab)
    } else {
      url.searchParams.delete("subtab")
    }
    window.history.pushState(null, "", url.toString())
    try {
      router.push(url.pathname + url.search, { scroll: false })
    } catch {}
  }

  const handleMainTabChange = (
    tab: "Employees" | "Org Terms and conditions" | "Hiring"
  ) => {
    setActiveMainTab(tab)
    if (tab === "Employees") {
      const sub = activeSubTab === "Employee Directory" ? "directory" : "tree"
      updateQueryParams("employees", sub)
    } else if (tab === "Org Terms and conditions") {
      updateQueryParams("terms")
    } else if (tab === "Hiring") {
      updateQueryParams("hiring", hiringSubTab)
    }
  }

  const handleSubTabChange = (
    sub: "Organization Tree" | "Employee Directory"
  ) => {
    setActiveSubTab(sub)
    const subParam = sub === "Employee Directory" ? "directory" : "tree"
    updateQueryParams("employees", subParam)
  }

  const handleHiringSubTabChange = (sub: "referrals" | "applications") => {
    setHiringSubTab(sub)
    updateQueryParams("hiring", sub)
  }

  // Filter States
  const [selectedBusinessUnit, setSelectedBusinessUnit] =
    useState("Business Unit")
  const [selectedDepartment, setSelectedDepartment] = useState("Department")
  const [selectedLocation, setSelectedLocation] = useState("Location")
  const [selectedCostCenter, setSelectedCostCenter] = useState("Cost Center")
  const [selectedLegalEntry, setSelectedLegalEntry] = useState("Legal Entry")
  const [searchQuery, setSearchQuery] = useState("")

  // Dropdown open states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Hiring Tab States
  const [hiringDept, setHiringDept] = useState("Department")
  const [hiringExp, setHiringExp] = useState("Experience")
  const [hiringLoc, setHiringLoc] = useState("Location")
  const [hiringDropdownOpen, setHiringDropdownOpen] = useState<string | null>(null)

  // Referral Modal States
  const [referModalOpen, setReferModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null)
  const [candidateName, setCandidateName] = useState("")
  const [candidateEmail, setCandidateEmail] = useState("")
  const [candidatePhone, setCandidatePhone] = useState("")
  const [submittedReferrals, setSubmittedReferrals] = useState<{
    id: number
    candidateName: string
    jobTitle: string
    date: string
    status: string
  }[]>([])

  // Filtered Job Openings
  const filteredJobs = useMemo(() => {
    return jobOpeningsList.filter((job) => {
      const matchDept = hiringDept === "Department" || job.department === hiringDept
      const matchExp = hiringExp === "Experience" || job.experience === hiringExp
      const matchLoc = hiringLoc === "Location" || job.location === hiringLoc
      return matchDept && matchExp && matchLoc
    })
  }, [hiringDept, hiringExp, hiringLoc])

  // Toggle Dropdown
  const handleDropdownClick = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name))
  }

  // Reset Filters
  const [directoryPage, setDirectoryPage] = useState(1)
  const [directoryPageSize, setDirectoryPageSize] = useState(8)

  const handleResetFilters = () => {
    setSelectedBusinessUnit("Business Unit")
    setSelectedDepartment("Department")
    setSelectedLocation("Location")
    setSelectedCostCenter("Cost Center")
    setSelectedLegalEntry("Legal Entry")
    setSearchQuery("")
    setOpenDropdown(null)
    setDirectoryPage(1)
  }

  // Filtered Employees
  const filteredEmployees = useMemo(() => {
    return initialEmployees.filter((emp) => {
      const matchSearch =
        searchQuery === "" ||
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchQuery.toLowerCase())

      const matchUnit =
        selectedBusinessUnit === "Business Unit" ||
        emp.businessUnit === selectedBusinessUnit

      const matchDept =
        selectedDepartment === "Department" ||
        emp.department === selectedDepartment

      const matchLocation =
        selectedLocation === "Location" || emp.location === selectedLocation

      const matchCostCenter =
        selectedCostCenter === "Cost Center" ||
        emp.costCenter === selectedCostCenter

      const matchLegal =
        selectedLegalEntry === "Legal Entry" ||
        emp.legalEntity === selectedLegalEntry

      return (
        matchSearch &&
        matchUnit &&
        matchDept &&
        matchLocation &&
        matchCostCenter &&
        matchLegal
      )
    })
  }, [
    searchQuery,
    selectedBusinessUnit,
    selectedDepartment,
    selectedLocation,
    selectedCostCenter,
    selectedLegalEntry,
  ])

  const totalDirectoryPages = Math.ceil(filteredEmployees.length / directoryPageSize)
  const paginatedEmployees = useMemo(() => {
    return filteredEmployees.slice(
      (directoryPage - 1) * directoryPageSize,
      directoryPage * directoryPageSize
    )
  }, [filteredEmployees, directoryPage, directoryPageSize])

  return (
    <div
      className="w-full min-h-full px-4 pt-4 md:px-6 md:pt-6 pb-4 md:pb-6 flex flex-col gap-4 select-none"
      onClick={() => {
        if (openDropdown) setOpenDropdown(null)
      }}
    >
      {/* 1. Main Navigation Tabs (Employees | Org Terms and conditions | Hiring) */}
      <div className="w-full bg-white rounded-xl p-2.5 flex items-center gap-3 shadow-xs border border-gray-100">
        <button
          onClick={() => handleMainTabChange("Employees")}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm text-center transition-all cursor-pointer ${
            activeMainTab === "Employees"
              ? "bg-[#8571EE] text-white shadow-sm"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Employees
        </button>
        <button
          onClick={() => handleMainTabChange("Org Terms and conditions")}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm text-center transition-all cursor-pointer ${
            activeMainTab === "Org Terms and conditions"
              ? "bg-[#8571EE] text-white shadow-sm"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Org Terms and conditions
        </button>
        <button
          onClick={() => handleMainTabChange("Hiring")}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm text-center transition-all cursor-pointer ${
            activeMainTab === "Hiring"
              ? "bg-[#8571EE] text-white shadow-sm"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Hiring
        </button>
      </div>

      {/* 2. Content for 'Employees' Tab */}
      {activeMainTab === "Employees" && (
        <div className="flex flex-col gap-4">
          {/* Sub Navigation (Organization Tree | Employee Directory) */}
          <div className="w-full flex items-center">
            <div className="bg-white p-1 rounded-xl inline-flex gap-2 shadow-xs border border-gray-100">
              <button
                onClick={() => handleSubTabChange("Organization Tree")}
                className={`py-2 px-6 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeSubTab === "Organization Tree"
                    ? "bg-[#C5C1FF] text-[#1E1D32] shadow-xs"
                    : "bg-white text-[#374151] hover:bg-gray-50"
                }`}
              >
                Organization Tree
              </button>
              <button
                onClick={() => handleSubTabChange("Employee Directory")}
                className={`py-2 px-6 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeSubTab === "Employee Directory"
                    ? "bg-[#C5C1FF] text-[#1E1D32] shadow-xs"
                    : "bg-white text-[#374151] hover:bg-gray-50"
                }`}
              >
                Employee Directory
              </button>
            </div>
          </div>

          {/* Sub-view: Employee Directory */}
          {activeSubTab === "Employee Directory" && (
            <>
              {/* Dropdown Filters Bar */}
              <div
                className="w-full bg-white rounded-xl p-2.5 flex flex-wrap lg:flex-nowrap items-center gap-3 shadow-xs border border-gray-100 relative z-20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 1. Business Unit Dropdown */}
                <div className="relative flex-1 min-w-[140px]">
                  <button
                    type="button"
                    onClick={() => handleDropdownClick("businessUnit")}
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                  >
                    <span className="truncate">{selectedBusinessUnit}</span>
                    <CaretDown
                      size={14}
                      weight="bold"
                      className={`text-gray-500 transition-transform ${
                        openDropdown === "businessUnit" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "businessUnit" && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30 max-h-48 overflow-y-auto">
                      {businessUnits.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedBusinessUnit(item)
                            setOpenDropdown(null)
                          }}
                          className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                            selectedBusinessUnit === item
                              ? "bg-purple-50 text-[#8571EE] font-semibold"
                              : "text-[#374151]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Department Dropdown */}
                <div className="relative flex-1 min-w-[140px]">
                  <button
                    type="button"
                    onClick={() => handleDropdownClick("department")}
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                  >
                    <span className="truncate">{selectedDepartment}</span>
                    <CaretDown
                      size={14}
                      weight="bold"
                      className={`text-gray-500 transition-transform ${
                        openDropdown === "department" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "department" && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30 max-h-48 overflow-y-auto">
                      {departments.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedDepartment(item)
                            setOpenDropdown(null)
                          }}
                          className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                            selectedDepartment === item
                              ? "bg-purple-50 text-[#8571EE] font-semibold"
                              : "text-[#374151]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. Location Dropdown */}
                <div className="relative flex-1 min-w-[140px]">
                  <button
                    type="button"
                    onClick={() => handleDropdownClick("location")}
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                  >
                    <span className="truncate">{selectedLocation}</span>
                    <CaretDown
                      size={14}
                      weight="bold"
                      className={`text-gray-500 transition-transform ${
                        openDropdown === "location" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "location" && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30 max-h-48 overflow-y-auto">
                      {locations.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedLocation(item)
                            setOpenDropdown(null)
                          }}
                          className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                            selectedLocation === item
                              ? "bg-purple-50 text-[#8571EE] font-semibold"
                              : "text-[#374151]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. Cost Center Dropdown */}
                <div className="relative flex-1 min-w-[140px]">
                  <button
                    type="button"
                    onClick={() => handleDropdownClick("costCenter")}
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                  >
                    <span className="truncate">{selectedCostCenter}</span>
                    <CaretDown
                      size={14}
                      weight="bold"
                      className={`text-gray-500 transition-transform ${
                        openDropdown === "costCenter" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "costCenter" && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30 max-h-48 overflow-y-auto">
                      {costCenters.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedCostCenter(item)
                            setOpenDropdown(null)
                          }}
                          className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                            selectedCostCenter === item
                              ? "bg-purple-50 text-[#8571EE] font-semibold"
                              : "text-[#374151]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 5. Legal Entry Dropdown */}
                <div className="relative flex-1 min-w-[140px]">
                  <button
                    type="button"
                    onClick={() => handleDropdownClick("legalEntry")}
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                  >
                    <span className="truncate">{selectedLegalEntry}</span>
                    <CaretDown
                      size={14}
                      weight="bold"
                      className={`text-gray-500 transition-transform ${
                        openDropdown === "legalEntry" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "legalEntry" && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30 max-h-48 overflow-y-auto">
                      {legalEntries.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedLegalEntry(item)
                            setOpenDropdown(null)
                          }}
                          className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                            selectedLegalEntry === item
                              ? "bg-purple-50 text-[#8571EE] font-semibold"
                              : "text-[#374151]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Filter Icon Button */}
                <button
                  type="button"
                  onClick={handleResetFilters}
                  title="Reset all filters"
                  className="p-2 text-[#374151] hover:text-[#8571EE] hover:bg-purple-50 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <Funnel size={18} weight="bold" />
                </button>
              </div>

              {/* 4-Column Responsive Grid of Employee Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {paginatedEmployees.map((emp) => (
                  <div
                    key={emp.id}
                    className="bg-white rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center border border-gray-100"
                  >
                    {/* Round Avatar */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow-xs bg-purple-50 shrink-0">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/images/alexander.png"
                        }}
                      />
                    </div>

                    {/* Name & Title */}
                    <h3 className="font-bold text-sm text-[#1E293B] mb-0.5 text-center">
                      {emp.name}
                    </h3>
                    <p className="text-[11px] text-[#64748B] font-medium mb-3 text-center">
                      {emp.role}
                    </p>

                    {/* Employee Details (Department, Location, Email) */}
                    <div className="w-full text-left space-y-2 text-xs pt-2 pb-2 border-t border-gray-100">
                      <div className="flex items-center text-[11px]">
                        <span className="font-semibold text-[#1F2937] shrink-0">
                          Department :&nbsp;
                        </span>
                        <span className="text-[#64748B] truncate">
                          {emp.department}
                        </span>
                      </div>
                      <div className="flex items-center text-[11px]">
                        <span className="font-semibold text-[#1F2937] shrink-0">
                          Location :&nbsp;
                        </span>
                        <span className="text-[#64748B] truncate">
                          {emp.location}
                        </span>
                      </div>
                      <div className="flex items-center text-[11px]">
                        <span className="font-semibold text-[#1F2937] shrink-0">
                          Email :&nbsp;
                        </span>
                        <span className="text-[#64748B] truncate">
                          {emp.email}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredEmployees.length > 0 && (
                <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 mt-2">
                  <ReusablePagination
                    currentPage={directoryPage}
                    totalPages={totalDirectoryPages}
                    totalItems={filteredEmployees.length}
                    pageSize={directoryPageSize}
                    onPageChange={setDirectoryPage}
                    onPageSizeChange={(newSize) => {
                      setDirectoryPageSize(newSize)
                      setDirectoryPage(1)
                    }}
                    pageSizeOptions={[4, 8, 12, 16]}
                  />
                </div>
              )}

              {filteredEmployees.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center shadow-xs border border-gray-100 flex flex-col items-center gap-3">
                  <User size={36} className="text-gray-400" />
                  <p className="text-sm font-semibold text-gray-700">
                    No employees found matching the selected filters.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-[#8571EE] font-semibold hover:underline cursor-pointer"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </>
          )}

          {/* Sub-view: Organization Tree */}
          {activeSubTab === "Organization Tree" && <OrgTree />}
        </div>
      )}

      {/* 3. Content for 'Org Terms and conditions' Tab */}
      {activeMainTab === "Org Terms and conditions" && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs border border-gray-100 flex flex-col gap-5">
          <h3 className="font-extrabold text-sm sm:text-base text-[#1E293B] text-center tracking-wide uppercase">
            TERMS AND CONDITIONS
          </h3>

          <div className="flex flex-col gap-3.5 text-[11px] sm:text-xs text-[#4B5563] leading-relaxed">
            {[
              "You shall abide by all the terms and conditions of service as shall be applicable from time to time.",
              "You will be on probation initially up to three year (90 working days); however, your probation period can be extended at the management discretion. You will continue to be on probation until such time till you receive the letter of confirmation.",
              "During the probation or after confirmation, the services may be terminated by either party giving thirty days' notice in writing or by giving thirty days salary in lieu of notice. Such notice shall not be deemed necessary in the case of termination of services on the grounds of poor performance, refusal to get relocated to any upcountry location as per the organization requirement, willful neglect or breach of trust, or any other serious derelictions of duty, which are prejudicial to the interest of the Company. In case of resignation, the Company reserves the right to relieve you any time during the notice period without payment of any compensation for the remaining notice period.",
              "Full and final payment of dues and other formalities would be completed within 45 days after your last working date.",
              "In case of a resignation without notice, recovery will be done for the shortfall in notice period. On the contrary amount for notice period shall be recovered from the dues (if any) payable to you. In case there are no dues payable to you then an independent recovery proceeding shall be initiated against you at your cost. Relieving letter will be issued only thereafter.",
              "In case you do not report to office without prior permission from your reporting manager for 3 consecutive days you will be tagged as absconding from services. If you are declared absconding, the shortfall of notice period will be recovered from the dues payable to you.",
              "In case of buyback, you agree that the decision to buy back the notice period is entirely at the discretion of the company and you do not have any obligation for the company to do so.",
              "The information relating to education qualification, past employment record - salary drawn, nature of job, period of employment, reason for change of job, notice period served, company property returned etc., submitted by the staff members at the time of joining is subject to verification. In case it is found that the information is incorrect, the services of the said staff would be terminated without assigning any reasons thereto. The concerned staff would not be eligible for any payment or experience certificate from the company for the period of employment with the company.",
              "In case of Force Majeure like floods, fire, natural calamity, pandemic situation, and imposition of any restrictions at place of work by the government, the Company shall be at liberty to modify all/any terms and conditions of appointment contained herein and you shall not claim any relief from the Company on the basis of the terms and conditions which are put in abeyance.",
              "You are bound on the termination of your appointment, however terminated, to return to the Company any property/intellectual property of the Company in your possession, including manuals, reports, technical documentation, software and hardware and correspondence etc. In case of failure to return the aforesaid items despite notice from the Company to that effect, you shall be liable for the offences under the Indian Penal Code, 1860. In case of any damage to the said items, necessary charges will be recovered from you. In case any mechanical item is found to be non-functional when received from you the actual cost of the said item shall be recovered from you.",
              "The office hours are subject to change at the management's discretion. We attach considerable significance to the strict adherence of these timings and to regular attendance.",
              "Sandwich Leaves request must be submitted in advance and approved by the HR Department prior 2 weeks.",
              "Though you have been engaged for a specific position and location your services can also be transferred to any concern within the group/associate Companies across India.",
              "In the event you are sent abroad/overseas on training and / or project work, you will be required to sign a bond for service with the Company for a reasonable period to a maximum of one year to the effect that you shall not leave the Company within 1 year after return to India.",
              "You shall always inform the Company about your permanent address and latest mailing address. Company shall be guided by the last address on record for correspondence.",
              "You will not associate yourself directly or indirectly with any activity/assignment, whether for remuneration or not, which will be, according to the Company, in conflict, directly or indirectly, with the interest of the Company's business while in employment and at least for a period of two years after you cease to be an employee.",
              "You shall be liable to legal action, during or after your work tenure with GK Elite Info, in case you are found to spread negative news about the Group or act in manner which tends to tarnish the brand image of the Group.",
              "You are not entitled to avail paid leaves during the notice period. As we do not have a leave encashment policy the un-availed paid leaves will get lapsed at the end of your service with the company.",
              "You shall maintain confidentiality of Information concerning the organization, administration, operation, business, finance, or methods (including any secret process or trade secret), its customers or clients which would come to your knowledge during the course of execution of your duties and responsibilities and shall not divulge any information of the company by any mode of communication to any other person or organization during the course of employment with us or thereafter. This clause is perpetual in nature and survives even after you seize to be an employee of the Organization.",
              "You shall not indulge in any malpractices such as false commitments, giving of false information about the products and services which may create dissatisfaction amongst our customers or create a bad image about our organization. Even if giving false commitments/information results in sales, still you shall be liable for necessary actions including penalty of Rs. One Lakh or more/-.",
              "In case of consistent non-performance, you shall be entitled for a pay proportionate to the performance.",
              "In case of any dispute from either side the jurisdiction will be limited to Hyderabad jurisdiction.",
              "You shall always update the Company about your change of address, mobile numbers and about any other important information.",
              "Please submit copy of your photo, address, and signature identification proof viz., Pan Card, Passport, Aadhar Card, along with the name & address of your guardian who should be contacted in case of emergency. The signature put on this acceptance letter should match with the identification proof submitted and the same signature shall be treated as official signature on company's record for all official communication with or on behalf of the company.",
              "Please sign the duplicate copy of the Terms & Conditions and return it to us as a token of your acceptance of the terms and conditions.",
            ].map((term, index) => (
              <p key={index} className="text-justify sm:text-left">
                <span className="font-semibold text-[#1E293B]">{index + 1}. </span>
                {term}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* 4. Content for 'Hiring' Tab */}
      {activeMainTab === "Hiring" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Left Column: Filters + Job Cards List */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-3">
            {/* Filters Bar: Department | Experience | Location */}
            <div
              className="w-full bg-white rounded-xl p-2.5 flex items-center gap-3 shadow-xs border border-gray-100 relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Department Dropdown */}
              <div className="relative flex-1 min-w-[120px]">
                <button
                  type="button"
                  onClick={() =>
                    setHiringDropdownOpen(
                      hiringDropdownOpen === "dept" ? null : "dept"
                    )
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                >
                  <span className="truncate">{hiringDept}</span>
                  <CaretDown
                    size={14}
                    weight="bold"
                    className={`text-gray-500 transition-transform ${
                      hiringDropdownOpen === "dept" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {hiringDropdownOpen === "dept" && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30">
                    {hiringDepartments.map((dept) => (
                      <div
                        key={dept}
                        onClick={() => {
                          setHiringDept(dept)
                          setHiringDropdownOpen(null)
                        }}
                        className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                          hiringDept === dept
                            ? "bg-purple-50 text-[#8571EE] font-semibold"
                            : "text-[#374151]"
                        }`}
                      >
                        {dept}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience Dropdown */}
              <div className="relative flex-1 min-w-[120px]">
                <button
                  type="button"
                  onClick={() =>
                    setHiringDropdownOpen(
                      hiringDropdownOpen === "exp" ? null : "exp"
                    )
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                >
                  <span className="truncate">{hiringExp}</span>
                  <CaretDown
                    size={14}
                    weight="bold"
                    className={`text-gray-500 transition-transform ${
                      hiringDropdownOpen === "exp" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {hiringDropdownOpen === "exp" && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30">
                    {hiringExperiences.map((exp) => (
                      <div
                        key={exp}
                        onClick={() => {
                          setHiringExp(exp)
                          setHiringDropdownOpen(null)
                        }}
                        className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                          hiringExp === exp
                            ? "bg-purple-50 text-[#8571EE] font-semibold"
                            : "text-[#374151]"
                        }`}
                      >
                        {exp}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Location Dropdown */}
              <div className="relative flex-1 min-w-[120px]">
                <button
                  type="button"
                  onClick={() =>
                    setHiringDropdownOpen(
                      hiringDropdownOpen === "loc" ? null : "loc"
                    )
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs font-medium text-[#1F2937] bg-white hover:border-[#8571EE] transition-colors cursor-pointer"
                >
                  <span className="truncate">{hiringLoc}</span>
                  <CaretDown
                    size={14}
                    weight="bold"
                    className={`text-gray-500 transition-transform ${
                      hiringDropdownOpen === "loc" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {hiringDropdownOpen === "loc" && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-30">
                    {hiringLocations.map((loc) => (
                      <div
                        key={loc}
                        onClick={() => {
                          setHiringLoc(loc)
                          setHiringDropdownOpen(null)
                        }}
                        className={`px-3 py-1.5 text-xs cursor-pointer hover:bg-purple-50 hover:text-[#8571EE] ${
                          hiringLoc === loc
                            ? "bg-purple-50 text-[#8571EE] font-semibold"
                            : "text-[#374151]"
                        }`}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* List of Job Opening Cards */}
            <div className="flex flex-col gap-2.5">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl p-4 shadow-xs border border-gray-100 flex items-center justify-between hover:shadow-sm transition-shadow"
                >
                  <div>
                    <h4 className="font-bold text-sm text-[#1E293B]">
                      {job.title}
                    </h4>
                    <div className="flex items-center gap-5 text-xs text-[#64748B] mt-1 font-medium">
                      <span>{job.department}</span>
                      <span>{job.experience}</span>
                      <span>{job.positions}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedJob(job)
                      setReferModalOpen(true)
                    }}
                    className="bg-[#8571EE] hover:bg-[#725EE8] text-white text-xs font-semibold px-7 py-2 rounded-lg cursor-pointer transition-colors shadow-xs"
                  >
                    Refer
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2 Cards (My Referrals/Applications + Reward Card) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4">
            {/* Card 1: My Referrals / My Applications */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col items-center min-h-[350px]">
              {/* Internal Tabs */}
              <div className="w-full flex items-center justify-around border-b border-gray-200">
                <button
                  onClick={() => handleHiringSubTabChange("referrals")}
                  className={`pb-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer relative ${
                    hiringSubTab === "referrals"
                      ? "text-[#1E293B] border-b-2 border-[#8571EE] -mb-[1px]"
                      : "text-[#64748B] hover:text-[#1E293B]"
                  }`}
                >
                  My Referrals
                </button>
                <button
                  onClick={() => handleHiringSubTabChange("applications")}
                  className={`pb-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer relative ${
                    hiringSubTab === "applications"
                      ? "text-[#1E293B] border-b-2 border-[#8571EE] -mb-[1px]"
                      : "text-[#64748B] hover:text-[#1E293B]"
                  }`}
                >
                  My Applications
                </button>
              </div>

              {/* Sub-tab content */}
              {hiringSubTab === "referrals" ? (
                submittedReferrals.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                    {/* SVG Illustration: Document with magnifying glass and ? */}
                    <div className="w-24 h-28 relative flex items-center justify-center mb-3">
                      <svg
                        viewBox="0 0 120 130"
                        className="w-22 h-26"
                        fill="none"
                      >
                        <rect
                          x="20"
                          y="10"
                          width="70"
                          height="95"
                          rx="8"
                          fill="#F8FAFC"
                          stroke="#CBD5E1"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M70 10 L90 30"
                          stroke="#CBD5E1"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M70 10 L70 30 L90 30 Z"
                          fill="#E2E8F0"
                          stroke="#CBD5E1"
                          strokeWidth="1"
                        />
                        <line
                          x1="32"
                          y1="36"
                          x2="62"
                          y2="36"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <line
                          x1="32"
                          y1="48"
                          x2="78"
                          y2="48"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <line
                          x1="32"
                          y1="60"
                          x2="78"
                          y2="60"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <line
                          x1="32"
                          y1="72"
                          x2="52"
                          y2="72"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <line
                          x1="32"
                          y1="84"
                          x2="65"
                          y2="84"
                          stroke="#E2E8F0"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="65"
                          cy="74"
                          r="20"
                          fill="white"
                          stroke="#94A3B8"
                          strokeWidth="3"
                        />
                        <line
                          x1="80"
                          y1="89"
                          x2="96"
                          y2="105"
                          stroke="#94A3B8"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                        <text
                          x="65"
                          y="82"
                          textAnchor="middle"
                          fontSize="22"
                          fontWeight="bold"
                          fill="#64748B"
                          fontFamily="sans-serif"
                        >
                          ?
                        </text>
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-[#1E293B]">
                      You haven&apos;t referred anyone yet
                    </p>
                    <p className="text-[10px] text-[#94A3B8] mt-1 font-medium">
                      Start Referring and earn rewards!
                    </p>
                  </div>
                ) : (
                  <div className="w-full mt-4 flex flex-col gap-2.5 max-h-[260px] overflow-y-auto">
                    {submittedReferrals.map((ref) => (
                      <div
                        key={ref.id}
                        className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 flex items-center justify-between"
                      >
                        <div>
                          <h5 className="font-bold text-xs text-[#1E293B]">
                            {ref.candidateName}
                          </h5>
                          <p className="text-[10px] text-gray-500">
                            {ref.jobTitle} • {ref.date}
                          </p>
                        </div>
                        <span className="text-[10px] font-semibold text-[#8571EE] bg-white px-2 py-0.5 rounded-full border border-purple-200">
                          {ref.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                  <p className="text-xs font-semibold text-[#1E293B]">
                    No internal applications submitted yet
                  </p>
                  <p className="text-[10px] text-[#94A3B8] mt-1 font-medium">
                    Apply directly to open positions for internal transfer.
                  </p>
                </div>
              )}
            </div>

            {/* Card 2: Refer a friend and earn */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col justify-center">
              <h3 className="font-bold text-lg text-[#1E293B]">
                Refer a friend and earn
              </h3>
              <div className="flex items-baseline gap-2 my-2">
                <span className="text-3xl font-black text-[#8571EE]">
                  ₹ 5,000
                </span>
                <span className="text-base font-semibold text-[#1E293B]">
                  upon
                </span>
              </div>
              <p className="font-bold text-lg text-[#1E293B]">
                Successful hire!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Referral Modal */}
      {referModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-[#1E293B]">
                  Refer Candidate
                </h3>
                <p className="text-xs text-gray-500">
                  Position:{" "}
                  <span className="font-semibold text-[#8571EE]">
                    {selectedJob?.title}
                  </span>{" "}
                  ({selectedJob?.department})
                </p>
              </div>
              <button
                onClick={() => setReferModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3 text-xs">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  Candidate Full Name *
                </label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#8571EE]"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  Candidate Email *
                </label>
                <input
                  type="email"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  placeholder="e.g. rahul.sharma@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#8571EE]"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#8571EE]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setReferModalOpen(false)}
                className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!candidateName.trim() || !candidateEmail.trim()) {
                    alert("Please fill in candidate name and email")
                    return
                  }
                  setSubmittedReferrals((prev) => [
                    ...prev,
                    {
                      id: Date.now(),
                      candidateName,
                      jobTitle: selectedJob?.title || "Role",
                      date: "Today",
                      status: "Under Review",
                    },
                  ])
                  setCandidateName("")
                  setCandidateEmail("")
                  setCandidatePhone("")
                  setReferModalOpen(false)
                  setHiringSubTab("referrals")
                }}
                className="px-5 py-2 bg-[#8571EE] hover:bg-[#725EE8] text-white rounded-lg text-xs font-semibold shadow-xs cursor-pointer"
              >
                Submit Referral
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom clearance spacer so content never touches the bottom of the viewport when scrolled */}
      <div className="w-full h-4 shrink-0" aria-hidden="true" />
    </div>
  )
}

export default function OrgPage() {
  return (
    <Suspense fallback={null}>
      <OrgPageContent />
    </Suspense>
  )
}
