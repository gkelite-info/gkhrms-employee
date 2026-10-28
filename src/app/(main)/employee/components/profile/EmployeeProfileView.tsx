"use client"

import {  useRef, useState, useEffect, Suspense  } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import { CaretRight, CheckCircle, Plus } from "phosphor-react"

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const docCategoryFromSlug = (slug: string): string => {
  const s = slug.toLowerCase().trim()
  if (s.includes("identity") && (s.includes("proof") || !s.includes("employ"))) return "Identity Proof"
  if (s.includes("address")) return "Address Proof"
  if (s.includes("education")) return "Educational Certificates"
  if (s.includes("experience") || s.includes("work")) return "Work Experience Documents"
  if (s.includes("form") || (s.includes("identity") && s.includes("employ"))) return "Identity & Employment Forms"
  if (s.includes("background") || s.includes("verification")) return "Background Verification Documents"
  if (s.includes("legal") || s.includes("compliance")) return "Legal & Compliance Documents"
  if (s.includes("optional")) return "Other Optional Documents"
  return "Identity Proof"
}

const assetSubTabFromSlug = (slug: string): string => {
  const s = slug.toLowerCase().trim()
  if (s.includes("request")) return "Assest Requests"
  if (s.includes("damage") || s.includes("charge")) return "Assest Damage Charges"
  return "Assigned Assests"
}

const mainTabFromSlug = (slug: string): "Profile" | "Documents" | "Assets" => {
  const s = slug.toLowerCase().trim()
  if (s.includes("doc")) return "Documents"
  if (s.includes("asset")) return "Assets"
  return "Profile"
}

function EmployeeProfileContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const rawTab = searchParams?.get("tab") || ""
  const rawSubTab =
    searchParams?.get("subtab") ||
    searchParams?.get("category") ||
    searchParams?.get("doc") ||
    searchParams?.get("section") ||
    ""

  const initialTab = rawTab
    ? mainTabFromSlug(rawTab)
    : rawSubTab
    ? rawSubTab.includes("assign") || rawSubTab.includes("request") || rawSubTab.includes("damage")
      ? "Assets"
      : "Documents"
    : "Profile"

  const initialDocCategory = rawSubTab ? docCategoryFromSlug(rawSubTab) : "Identity Proof"
  const initialAssetSubTab = rawSubTab ? assetSubTabFromSlug(rawSubTab) : "Assigned Assests"

  const [activeTab, setActiveTab] = useState<"Profile" | "Documents" | "Assets">(initialTab)
  const [documentCategory, setDocumentCategory] = useState(initialDocCategory)
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({})
  const [assetSubTab, setAssetSubTab] = useState(initialAssetSubTab)

  // Sync state when URL search parameters change
  useEffect(() => {
    const t = searchParams?.get("tab") || ""
    const s =
      searchParams?.get("subtab") ||
      searchParams?.get("category") ||
      searchParams?.get("doc") ||
      searchParams?.get("section") ||
      ""

    if (t) {
      const resolvedTab = mainTabFromSlug(t)
      setActiveTab(resolvedTab)
      if (resolvedTab === "Documents" && s) {
        setDocumentCategory(docCategoryFromSlug(s))
      } else if (resolvedTab === "Assets" && s) {
        setAssetSubTab(assetSubTabFromSlug(s))
      }
    } else if (s) {
      if (s.includes("assign") || s.includes("request") || s.includes("damage")) {
        setActiveTab("Assets")
        setAssetSubTab(assetSubTabFromSlug(s))
      } else {
        setActiveTab("Documents")
        setDocumentCategory(docCategoryFromSlug(s))
      }
    }
  }, [searchParams])

  // Sync on popstate (browser back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href)
        const t = url.searchParams.get("tab") || ""
        const s =
          url.searchParams.get("subtab") ||
          url.searchParams.get("category") ||
          url.searchParams.get("doc") ||
          url.searchParams.get("section") ||
          ""

        if (t) {
          const resolvedTab = mainTabFromSlug(t)
          setActiveTab(resolvedTab)
          if (resolvedTab === "Documents" && s) {
            setDocumentCategory(docCategoryFromSlug(s))
          } else if (resolvedTab === "Assets" && s) {
            setAssetSubTab(assetSubTabFromSlug(s))
          }
        } else if (s) {
          if (s.includes("assign") || s.includes("request") || s.includes("damage")) {
            setActiveTab("Assets")
            setAssetSubTab(assetSubTabFromSlug(s))
          } else {
            setActiveTab("Documents")
            setDocumentCategory(docCategoryFromSlug(s))
          }
        } else {
          setActiveTab("Profile")
        }
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Handlers that update both local state and URL search params
  const handleMainTabChange = (newTab: "Profile" | "Documents" | "Assets") => {
    setActiveTab(newTab)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.set("tab", newTab.toLowerCase())
      if (newTab === "Documents") {
        url.searchParams.set("subtab", toSlug(documentCategory))
      } else if (newTab === "Assets") {
        url.searchParams.set("subtab", toSlug(assetSubTab))
      } else {
        url.searchParams.delete("subtab")
      }
      window.history.pushState(null, "", url.toString())
      try {
        router.push(url.pathname + url.search, { scroll: false })
      } catch {
        // Fallback
      }
    }
  }

  const handleDocumentCategoryChange = (cat: string) => {
    setDocumentCategory(cat)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.set("tab", "documents")
      url.searchParams.set("subtab", toSlug(cat))
      window.history.pushState(null, "", url.toString())
      try {
        router.push(url.pathname + url.search, { scroll: false })
      } catch {
        // Fallback
      }
    }
  }

  const handleAssetSubTabChange = (sub: string) => {
    setAssetSubTab(sub)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.set("tab", "assets")
      url.searchParams.set("subtab", toSlug(sub))
      window.history.pushState(null, "", url.toString())
      try {
        router.push(url.pathname + url.search, { scroll: false })
      } catch {
        // Fallback
      }
    }
  }

  const handleFileUpload = (docLabel: string, file: File) => {
    setUploadedFiles((prev) => ({ ...prev, [docLabel]: file.name }))
  }

  const assetTabs = [
    "Assigned Assests",
    "Assest Requests",
    "Assest Damage Charges",
  ]

  const documentTabs = [
    "Identity Proof",
    "Address Proof",
    "Educational Certificates",
    "Work Experience Documents",
    "Identity & Employment Forms",
    "Background Verification Documents",
    "Legal & Compliance Documents",
    "Other Optional Documents",
  ]

  const documentsByCategory: Record<string, string[]> = {
    "Identity Proof": [
      "Passport",
      "Aadhaar Card",
      "Driving License",
      "PAN Card",
      "Voter ID",
    ],
    "Address Proof": [
      "Utility Bills",
      "Rent Agreement",
    ],
    "Educational Certificates": [
      "10th / SSC Certificate",
      "12th / Intermediate Certificate",
      "Degree Certificate",
      "Post Graduation Certificate",
    ],
    "Work Experience Documents": [
      "Relieving Letter",
      "Experience Certificates",
      "Offer letters /Appointment Letter",
      "Reference Letters",
    ],
    "Identity & Employment Forms": [
      "Resume / CV",
      "Passport - Sized photographs",
      "Bank Account Details",
    ],
    "Background Verification Documents": [
      "Police Clearance Certificate",
    ],
    "Legal & Compliance Documents": [
      "Employment Contract / Offer Acceptance",
      "Non-Disclosure Agreement",
      "Medical Certificate",
    ],
    "Other Optional Documents": [
      "Proof of Address of Nominee",
      "Passport / Visa (for international relocation)",
    ],
  }

  return (
    <div className="w-full max-w-full flex flex-col gap-4 pb-16 select-none">
      {/* 1. TOP ROW: Profile Card (Left) & Shift/Timeline Card (Right) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Alexander Profile Card */}
        <div className="lg:col-span-5 bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex items-center gap-4">
          <img
            src="/images/alexander.png"
            alt="Alexander"
            className="w-28 h-28 object-cover rounded-xl shadow-xs border border-gray-100 flex-shrink-0"
          />
          <div className="flex flex-col gap-1 min-w-0">
            <h2 className="text-xl font-bold text-[#1E293B] leading-tight">
              Alexander
            </h2>
            <div className="flex flex-col text-xs text-gray-700 font-medium space-y-0.5 mt-0.5">
              <p>
                <span className="font-semibold text-gray-800">Designation :</span> UIUX Designer
              </p>
              <p>
                <span className="font-semibold text-gray-800">Employee ID :</span> 154356
              </p>
              <p className="truncate">
                <span className="font-semibold text-gray-800">Mail ID :</span> alexander@gmail.com
              </p>
              <p>
                <span className="font-semibold text-gray-800">Mobile Number :</span> 909890978
              </p>
              <p>
                <span className="font-semibold text-gray-800">Join Date :</span> 23-09-2023
              </p>
            </div>
          </div>
        </div>

        {/* Right: Location & Timeline Card */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-xs border border-gray-100 flex flex-col justify-between overflow-hidden">
          {/* Top Info Bar */}
          <div className="w-full border-b border-gray-100 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-700 font-medium bg-[#FAF9FD]/60">
            <p>
              <span className="font-semibold text-gray-800">Location :</span> Hyderabad
            </p>
            <p>
              <span className="font-semibold text-gray-800">Shift Type :</span> work from office
            </p>
            <p>
              <span className="font-semibold text-gray-800">Shift Time :</span> 10:00 AM – 7:00 AM
            </p>
          </div>

          {/* Timeline Section */}
          <div className="p-3.5 flex flex-col justify-between flex-1">
            <h3 className="text-sm font-bold text-[#1E293B] text-center mb-1">
              Timeline
            </h3>

            {/* Year Badge and Horizontal Milestone Line */}
            <div className="w-full flex items-center gap-3 px-2 mt-1">
              <span className="bg-[#BCB7F7] text-[#1E293B] text-[11px] font-bold px-2 py-0.5 rounded shadow-xs flex-shrink-0">
                2025
              </span>

              {/* Milestones Track */}
              <div className="flex-1 relative flex items-center justify-between">
                {/* Connecting track line */}
                <div className="absolute top-2 left-6 right-6 h-[2px] bg-gray-300 z-0" />

                {/* Milestone 1: Joined GKelite */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#CBD5E1] border border-gray-300 ring-4 ring-white shadow-xs" />
                  <p className="text-[11px] font-semibold text-gray-800 mt-1 text-center">
                    Joined GKelite
                  </p>
                  <p className="text-[9px] text-gray-500 text-center">
                    23 Jan 2025
                  </p>
                </div>

                {/* Milestone 2: Probation Completed */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#CBD5E1] border border-gray-300 ring-4 ring-white shadow-xs" />
                  <p className="text-[11px] font-semibold text-gray-800 mt-1 text-center">
                    Probation Completed
                  </p>
                  <p className="text-[9px] text-gray-500 text-center">
                    22 Aug 2025
                  </p>
                </div>

                {/* Milestone 3: Active */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#94A3B8] ring-4 ring-white shadow-xs" />
                  <p className="text-[11px] font-semibold text-gray-800 mt-1 text-center">
                    Active
                  </p>
                  <p className="text-[9px] text-gray-500 text-center">
                    23 Jun 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TABS BAR: Profile, Documents, Assets (Clean tabs without prototype wire) */}
      <div className="w-full flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => handleMainTabChange("Profile")}
          style={{ cursor: "pointer" }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer shadow-xs ${
            activeTab === "Profile"
              ? "bg-[#8570EE] text-white shadow-md shadow-indigo-100"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Profile
        </button>

        <button
          type="button"
          onClick={() => handleMainTabChange("Documents")}
          style={{ cursor: "pointer" }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer shadow-xs ${
            activeTab === "Documents"
              ? "bg-[#8570EE] text-white shadow-md shadow-indigo-100"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Documents
        </button>

        <button
          type="button"
          onClick={() => handleMainTabChange("Assets")}
          style={{ cursor: "pointer" }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer shadow-xs ${
            activeTab === "Assets"
              ? "bg-[#8570EE] text-white shadow-md shadow-indigo-100"
              : "bg-[#B3B3B3] text-white hover:bg-gray-400"
          }`}
        >
          Assets
        </button>
      </div>

      {/* 3. PROFILE TAB CONTENT: 2 COLUMNS MATCHING EXACT SCREENSHOT */}
      {activeTab === "Profile" && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* ================= LEFT COLUMN (col-span-5) ================= */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* 1. About Me & Professional Summary */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B]">
                About Me
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                &ldquo;I&apos;m a creative designer who loves transforming complex ideas into simple, beautiful interfaces.
                My focus is on delivering user-centric solutions that feel effortless and look polished.&rdquo;
              </p>

              <h3 className="text-sm font-bold text-[#1E293B] mt-4">
                Professional Summary
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Creative and detail-oriented designer with a passion for crafting intuitive, user-focused experiences. Skilled in UI/UX, visual storytelling, and transforming complex ideas into clean, impactful designs.
              </p>
            </div>

            {/* 2. What I Love & Strengths & Passions */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B]">
                What I Love
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                &ldquo;I love experimenting with colours, typography and layouts to create memorable experiences.
                Outside work I enjoy sketching, travelling and finding design inspiration in everyday life.&rdquo;
              </p>

              <h3 className="text-sm font-bold text-[#1E293B] mt-4">
                Strengths
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                &ldquo;Strong at communication, team leadership and stakeholder management.
                Skilled in HR analytics, process improvement and creating engaging experiences.&rdquo;
              </p>

              <h3 className="text-sm font-bold text-[#1E293B] mt-4">
                Passions
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Passionate about accessible design and creating seamless user experiences.
              </p>
            </div>

            {/* 3. Primary Details & Contact Details */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B] mb-2.5">
                Primary Details
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <div>
                  <span className="font-semibold text-gray-800">First Name :</span>{" "}
                  <span className="text-gray-600">Alexander</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Last Name :</span>{" "}
                  <span className="text-gray-600">Jane</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Gender :</span>{" "}
                  <span className="text-gray-600">Male</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">DOB :</span>{" "}
                  <span className="text-gray-600">04 Nov 2003</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Marital Status :</span>{" "}
                  <span className="text-gray-600">Single</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Blood Group :</span>{" "}
                  <span className="text-gray-600">O+ (O Positive)</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Physically Handicapped :</span>{" "}
                  <span className="text-gray-600">Yes</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Nationality :</span>{" "}
                  <span className="text-gray-600">India</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-[#1E293B] mt-4 mb-2">
                Contact Details
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <div className="truncate">
                  <span className="font-semibold text-gray-800">Personal Email</span>
                  <p className="text-gray-600 truncate mt-0.5">Alexander@gmail.com</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Residence Name</span>
                  <p className="text-gray-600 mt-0.5">9038509782</p>
                </div>
              </div>
            </div>

            {/* 4. Family Details */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B] mb-2.5">
                Family Details
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <div>
                  <span className="font-semibold text-gray-800">Spouse Name :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Spouse DOB :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Child Name :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Child Gender :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Child DOB :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Child 2 Name :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Child 2 Gender :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Child 2 DOB :</span>{" "}
                  <span className="text-gray-500 italic">Not Set</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (col-span-7) ================= */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* 1. Education & Experience */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B] mb-2">
                Education
              </h3>
              <div className="flex flex-col space-y-1 text-xs">
                <p>
                  <span className="font-semibold text-gray-800">Branch / Specialization :</span>{" "}
                  <span className="text-gray-700">B.Sc – Multimedia & Web Design (UI/UX Specialization)</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Year of completion :</span>{" "}
                  <span className="text-gray-700">21 Aug 2025</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-800">CGPA :</span>{" "}
                  <span className="text-gray-700">9.8</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-800">University / College :</span>{" "}
                  <span className="text-gray-700">Creative Multi Media</span>
                </p>
              </div>

              <h3 className="text-sm font-bold text-[#1E293B] mt-4 mb-1.5">
                Experience
              </h3>
              <div className="flex flex-col text-xs">
                <p className="font-semibold text-gray-800">
                  UI/UX Designer – GKElite Info
                </p>
                <p className="text-gray-500 mt-0.5">
                  July 2022 – Present | Hyderabad
                </p>
              </div>
            </div>

            {/* 2. Addresses */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B] mb-2.5">
                Addresses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Current Address
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Flat 502, Sunrise Apartments<br />
                    MG Road, Andheri West<br />
                    Mumbai, Maharashtra – 400058<br />
                    India
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Permanent Address
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Flat 502, Sunrise Apartments<br />
                    MG Road, Andheri West<br />
                    Mumbai, Maharashtra – 400058<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Parental Insurance Details */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B] mb-2.5">
                Parental Insurance Details
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <h4 className="font-semibold text-gray-800">Willing To OPT</h4>
                  <p className="text-gray-600 mt-0.5">No</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Father&apos;s Name</h4>
                  <p className="text-gray-600 mt-0.5">Jonas</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Father&apos;s DOB</h4>
                  <p className="text-gray-600 mt-0.5">21 Aug 1967</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Father&apos;s Age</h4>
                  <p className="text-gray-600 mt-0.5">62</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mother&apos;s Name</h4>
                  <p className="text-gray-600 mt-0.5">45</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mother&apos;s DOB</h4>
                  <p className="text-gray-600 mt-0.5">13 Feb 1993</p>
                </div>
              </div>
            </div>

            {/* 4. Relations */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B] mb-2.5">
                Relations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Father */}
                <div className="flex flex-col space-y-1">
                  <h4 className="font-semibold text-gray-800 text-[13px] mb-0.5">
                    Father
                  </h4>
                  <p>
                    <span className="font-semibold text-gray-700">Name :</span> Jonas
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Mobile :</span> 9087579678
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Profession :</span> Business
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Date of Birth :</span> 09 Aug 1989
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Gender :</span> Male
                  </p>
                </div>

                {/* Sibling */}
                <div className="flex flex-col space-y-1">
                  <h4 className="font-semibold text-gray-800 text-[13px] mb-0.5">
                    Sibling
                  </h4>
                  <p>
                    <span className="font-semibold text-gray-700">Name :</span> Jack
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Mobile :</span> 9087579678
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Profession :</span> Business
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Date of Birth :</span> 09 Aug 1992
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Gender :</span> Male
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Identity Information */}
            <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-4 flex flex-col">
              <h3 className="text-sm font-bold text-[#1E293B] mb-2">
                Identity Information
              </h3>
              <p className="text-xs font-semibold text-gray-700 mb-2">
                Photo ID
              </p>

              {/* Aadhaar Card */}
              <div className="border border-gray-100 rounded-lg p-3 bg-gray-50/50 mb-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/80">
                  <div className="flex items-center gap-2">
                    <span className="text-sm" role="img" aria-label="India flag">🇮🇳</span>
                    <span className="text-xs font-bold text-[#1E293B]">Aadhaar Card</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle size={10} weight="fill" /> Verified
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500 hover:text-gray-700 flex items-center gap-0.5 cursor-pointer">
                    2 Files <CaretRight size={10} weight="bold" />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs mt-2.5">
                  <div className="col-span-2">
                    <span className="font-semibold text-gray-800">Aadhaar Number :</span>{" "}
                    <span className="text-gray-700">49087579678</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Date of Birth :</span>{" "}
                    <span className="text-gray-700">19 Feb 2003</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Name :</span>{" "}
                    <span className="text-gray-700">Alexander</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Address :</span>{" "}
                    <span className="text-gray-700">Flat 502, Sun...</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Gender :</span>{" "}
                    <span className="text-gray-700">Female</span>
                  </div>
                </div>
              </div>

              {/* Pan Card */}
              <div className="border border-gray-100 rounded-lg p-3 bg-gray-50/50">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/80">
                  <div className="flex items-center gap-2">
                    <span className="text-sm" role="img" aria-label="India flag">🇮🇳</span>
                    <span className="text-xs font-bold text-[#1E293B]">Pan Card</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle size={10} weight="fill" /> Verified
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500 hover:text-gray-700 flex items-center gap-0.5 cursor-pointer">
                    2 Files <CaretRight size={10} weight="bold" />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs mt-2.5">
                  <div>
                    <span className="font-semibold text-gray-800">Permanent Account Number :</span>{" "}
                    <span className="text-gray-700">XXXXXX5879</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Name :</span>{" "}
                    <span className="text-gray-700">Alexander</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Date of Birth :</span>{" "}
                    <span className="text-gray-700">19 Feb 2003</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Father&apos;s Name :</span>{" "}
                    <span className="text-gray-700">Jonas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. DOCUMENTS TAB CONTENT (Matches Image-2) */}
      {activeTab === "Documents" && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Left Category Sub-Tabs (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {documentTabs.map((tab) => {
              const isSelected = documentCategory === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleDocumentCategoryChange(tab)}
                  style={{ cursor: "pointer" }}
                  className={`w-full py-3 px-3.5 rounded-lg text-xs sm:text-[13px] font-medium text-center transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#C5C1FF] text-[#1E293B] font-semibold shadow-xs"
                      : "bg-[#EAEAEA] text-[#323232] hover:bg-[#DFDFDF]"
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* Right Upload Cards Area (col-span-9) */}
          <div className="lg:col-span-9 flex flex-col items-center gap-4">
            {/* If Identity Proof (matching Image-2 layout with 3 on top row, 2 centered on second row) */}
            {documentCategory === "Identity Proof" ? (
              <div className="w-full flex flex-col gap-4">
                {/* Row 1: 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                  {["Passport", "Aadhaar Card", "Driving License"].map((title) => (
                    <DocumentUploadCard
                      key={title}
                      title={title}
                      fileName={uploadedFiles[title]}
                      onFileSelect={(file) => handleFileUpload(title, file)}
                    />
                  ))}
                </div>

                {/* Row 2: 2 cards centered */}
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  {["PAN Card", "Voter ID"].map((title) => (
                    <div key={title} className="w-full sm:w-[calc(33.333%-11px)]">
                      <DocumentUploadCard
                        title={title}
                        fileName={uploadedFiles[title]}
                        onFileSelect={(file) => handleFileUpload(title, file)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : documentCategory === "Educational Certificates" ? (
              /* Educational Certificates 4-column layout matching screenshot */
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Row 1: 4 Cards */}
                {[
                  "10th Certificate",
                  "12th Certificate",
                  "Degree Certificate",
                  "Highest Qualification",
                ].map((title) => (
                  <DocumentUploadCard
                    key={title}
                    title={title}
                    fileName={uploadedFiles[title]}
                    onFileSelect={(file) => handleFileUpload(title, file)}
                  />
                ))}

                {/* Row 2: 3 Cards (Marks Sheets) + Empty cell in Col 4 */}
                {[1, 2, 3].map((num) => {
                  const key = `Marks Sheets ${num}`
                  return (
                    <DocumentUploadCard
                      key={key}
                      title="Marks Sheets"
                      fileName={uploadedFiles[key]}
                      onFileSelect={(file) => handleFileUpload(key, file)}
                    />
                  )
                })}
                <div className="hidden lg:block" />

                {/* Row 3: 3 Cards (Professional Certificate with subnote) + Add More in Col 4 */}
                {[1, 2, 3].map((num) => {
                  const key = `Professional Certificate ${num}`
                  return (
                    <DocumentUploadCard
                      key={key}
                      title="Professional Certificate"
                      subNote="If you have any"
                      fileName={uploadedFiles[key]}
                      onFileSelect={(file) => handleFileUpload(key, file)}
                    />
                  )
                })}

                {/* Column 4: Add More Card */}
                <div className="flex items-center justify-center w-full">
                  <div
                    onClick={() => {
                      const input = document.createElement("input")
                      input.type = "file"
                      input.accept = "application/pdf"
                      input.onchange = (e: any) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          handleFileUpload("Additional Certificate", file)
                        }
                      }
                      input.click()
                    }}
                    style={{ cursor: "pointer" }}
                    className="bg-white rounded-xl shadow-xs border border-gray-100 px-5 py-3.5 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-[#8570EE]/40 transition-all cursor-pointer group select-none min-w-[90px]"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#EDE9FE] text-[#7D73E3] flex items-center justify-center group-hover:bg-[#8570EE] group-hover:text-white transition-colors shadow-xs">
                      <Plus size={16} weight="bold" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#1E293B] mt-1.5">
                      Add More
                    </span>
                  </div>
                </div>
              </div>
            ) : documentCategory === "Work Experience Documents" ? (
              /* Work Experience Documents layout matching screenshot (3 on row 1, 1 in col 2 on row 2) */
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Row 1: 3 cards */}
                {[
                  "Relieving Letter",
                  "Experience Certificates",
                  "Offer letters /Appointment Letter",
                ].map((title) => (
                  <DocumentUploadCard
                    key={title}
                    title={title}
                    fileName={uploadedFiles[title]}
                    onFileSelect={(file) => handleFileUpload(title, file)}
                  />
                ))}

                {/* Row 2: Empty slot in col 1, Reference Letters in col 2, Empty slot in col 3 */}
                <div className="hidden sm:block" />
                <DocumentUploadCard
                  title="Reference Letters"
                  fileName={uploadedFiles["Reference Letters"]}
                  onFileSelect={(file) => handleFileUpload("Reference Letters", file)}
                />
                <div className="hidden sm:block" />
              </div>
            ) : (
              /* For other categories: responsive 3-column grid */
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {(documentsByCategory[documentCategory] || []).map((title) => (
                  <DocumentUploadCard
                    key={title}
                    title={title}
                    fileName={uploadedFiles[title]}
                    onFileSelect={(file) => handleFileUpload(title, file)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. ASSETS TAB CONTENT (Matches Screenshot) */}
      {activeTab === "Assets" && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Left Sub-Sidebar Tabs (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {assetTabs.map((tab) => {
              const isSelected = assetSubTab === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleAssetSubTabChange(tab)}
                  style={{ cursor: "pointer" }}
                  className={`w-full py-3 px-3.5 rounded-lg text-xs sm:text-[13px] font-medium text-center transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#C5C1FF] text-[#1E293B] font-semibold shadow-xs"
                      : "bg-[#EAEAEA] text-[#323232] hover:bg-[#DFDFDF]"
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* Right Content Area: Tables (col-span-9) */}
          <div className="lg:col-span-9 w-full">
            {/* 1. Assigned Assets Table (Exact Match to Screenshot) */}
            {assetSubTab === "Assigned Assests" && (
              <div className="w-full bg-white rounded-xl shadow-xs overflow-hidden border border-gray-100">
                <div className="overflow-x-auto scrollbar-hide">
                  <table className="w-full border-collapse text-left min-w-[860px]">
                    <thead>
                      <tr className="bg-[#EAE8E4] text-[#1E293B]">
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Assest Type</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Asset</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Assest Category</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Assigned on</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Acknowledgement Status</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Latest Condition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {/* Row 1: Laptop */}
                      <tr className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          Laptop
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="font-normal text-xs text-[#1E293B] whitespace-nowrap">Lattitude 5420</span>
                            <span className="text-[11px] text-gray-500 mt-0.5 whitespace-nowrap">TL532</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          Hardware
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          18 Jul 2025
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          Acknowledged
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          Good
                        </td>
                      </tr>

                      {/* Row 2: USB-C To Multi Converter */}
                      <tr className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          USB-C To Multi Converter
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="font-normal text-xs text-[#1E293B] whitespace-nowrap">USB-C To Multi Converter</span>
                            <span className="text-[11px] text-gray-500 mt-0.5 whitespace-nowrap">THUB0</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          Hardware
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          16 Feb 2025
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          Acknowledged
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          Good
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 2. Asset Requests Table */}
            {assetSubTab === "Assest Requests" && (
              <div className="w-full bg-white rounded-xl shadow-xs overflow-hidden border border-gray-100">
                <div className="overflow-x-auto scrollbar-hide">
                  <table className="w-full border-collapse text-left min-w-[850px]">
                    <thead>
                      <tr className="bg-[#EAE8E4] text-[#1E293B]">
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Request ID</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Assest Type</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Asset Requested</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Requested On</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Priority</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Status</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Approved by</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Expected Allocation</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">REQ001</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Laptop</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Dell XPS 13</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">30 Sep 2025</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-100 text-red-700 whitespace-nowrap">High</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 whitespace-nowrap">Pending</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Manager A</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">05 Oct 2025</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Urgent requirement</td>
                      </tr>
                      <tr className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">REQ002</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Chair</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Ergonomic Chair</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">28 Sep 2025</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700 whitespace-nowrap">Medium</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 whitespace-nowrap">Approved</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Manager B</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">02 Oct 2025</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. Asset Damage Charges Table */}
            {assetSubTab === "Assest Damage Charges" && (
              <div className="w-full bg-white rounded-xl shadow-xs overflow-hidden border border-gray-100">
                <div className="overflow-x-auto scrollbar-hide">
                  <table className="w-full border-collapse text-left min-w-[850px]">
                    <thead>
                      <tr className="bg-[#EAE8E4] text-[#1E293B]">
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Assest Type</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Asset Name/code</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Damage Description</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Reported on</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Estimated Charges</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Status</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Payment Mode</th>
                        <th className="py-3.5 px-4 text-xs font-semibold whitespace-nowrap">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Laptop</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Dell XPS 13 - A1001</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Screen Crack</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">28 Sep 2025</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">25,500/-</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-700 whitespace-nowrap">Pending</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Cash</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Needs urgent repair</td>
                      </tr>
                      <tr className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Chair</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Ergo Chair - C2001</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Broken Wheel</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">27 Sep 2025</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">1,550/-</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 whitespace-nowrap">Approved</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Company Account</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">-</td>
                      </tr>
                      <tr className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Monitor</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Samsung 24&quot; - M3002</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Dead Pixels</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">25 Sep 2025</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">3,000/-</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700 whitespace-nowrap">Paid</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Online Transfer</td>
                        <td className="py-3.5 px-4 text-xs font-normal text-gray-700 whitespace-nowrap">Replaced</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function DocumentUploadCard({
  title,
  subNote,
  fileName,
  onFileSelect,
}: {
  title: string
  subNote?: string
  fileName?: string
  onFileSelect: (file: File) => void
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      style={{ cursor: "pointer" }}
      className="bg-white rounded-2xl shadow-xs border border-gray-100 p-5 sm:p-6 flex flex-col items-center justify-between text-center min-h-[145px] hover:shadow-md hover:border-[#8570EE]/40 transition-all cursor-pointer group select-none"
    >
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) onFileSelect(file)
        }}
        className="hidden"
      />

      {/* Circular Plus Button in soft lavender */}
      <div className="w-10 h-10 rounded-full bg-[#EDE9FE] text-[#7D73E3] flex items-center justify-center group-hover:bg-[#8570EE] group-hover:text-white transition-colors shadow-xs">
        <Plus size={20} weight="bold" />
      </div>

      {/* Document Title */}
      <h4 className="text-sm font-semibold text-[#1E293B] mt-3 leading-snug">
        {title}
      </h4>

      {/* Note / uploaded state */}
      {fileName ? (
        <p className="text-[11px] text-emerald-600 font-semibold mt-1 truncate max-w-[170px] flex items-center gap-1">
          <CheckCircle size={12} weight="fill" /> {fileName}
        </p>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-[11px] text-gray-400 mt-1">
            ( Must be in PDF Formate )
          </p>
          {subNote && (
            <p className="text-[10px] text-gray-500 mt-0.5">
              {subNote}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default function EmployeeProfileView() {
  return (
    <Suspense fallback={null}>
      <EmployeeProfileContent />
    </Suspense>
  )
}
