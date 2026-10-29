"use client"

import { useState, useMemo } from "react"
import {
  FileText,
  CheckCircle,
  Plus,
  CaretDown,
  X,
} from "phosphor-react"
import { ReusablePagination } from "@/../reusableComponents"

export interface Certificate {
  id: number
  title: string
  issuedBy: string
  date: string
  category: string
  verified: boolean
}

const initialCertificates: Certificate[] = [
  {
    id: 1,
    title: "Advanced UI Design",
    issuedBy: "Coursera",
    date: "12 Sep 2025",
    category: "Design",
    verified: true,
  },
  {
    id: 2,
    title: "UX Research",
    issuedBy: "Coursera",
    date: "12 Sep 2024",
    category: "Research",
    verified: true,
  },
  {
    id: 3,
    title: "Figma Fundamentals",
    issuedBy: "Udemy",
    date: "12 Sep 2025",
    category: "Design",
    verified: true,
  },
  {
    id: 4,
    title: "UI/UX Design Specialization",
    issuedBy: "Coursera",
    date: "12 Sep 2025",
    category: "Design",
    verified: true,
  },
  {
    id: 5,
    title: "Figma Fundamentals",
    issuedBy: "Coursera",
    date: "12 Sep 2024",
    category: "Design",
    verified: true,
  },
  {
    id: 6,
    title: "Product Design Essentials",
    issuedBy: "Udemy",
    date: "12 Sep 2025",
    category: "Product",
    verified: true,
  },
]

export default function SkillsBuildingView() {
  const [certificates, setCertificates] = useState<Certificate[]>(
    initialCertificates
  )

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedIssuer, setSelectedIssuer] = useState("All")
  const [openDropdown, setOpenDropdown] = useState<"category" | "issuer" | null>(
    null
  )

  // Add Certificate Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newIssuer, setNewIssuer] = useState("Coursera")
  const [newDate, setNewDate] = useState("12 Sep 2025")
  const [newCategory, setNewCategory] = useState("Design")

  // Notification feedback
  const [actionNotice, setActionNotice] = useState<string | null>(null)

  const showNotice = (text: string) => {
    setActionNotice(text)
    setTimeout(() => setActionNotice(null), 2500)
  }

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim()) return

    const newCert: Certificate = {
      id: Date.now(),
      title: newTitle.trim(),
      issuedBy: newIssuer,
      date: newDate,
      category: newCategory,
      verified: true,
    }

    setCertificates((prev) => [newCert, ...prev])
    setNewTitle("")
    setIsAddModalOpen(false)
    showNotice(`Added certificate "${newCert.title}"`)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)

  // Filtered Certificates
  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchCategory =
        selectedCategory === "All" || cert.category === selectedCategory
      const matchIssuer =
        selectedIssuer === "All" || cert.issuedBy === selectedIssuer
      return matchCategory && matchIssuer
    })
  }, [certificates, selectedCategory, selectedIssuer])

  const totalPages = Math.ceil(filteredCertificates.length / pageSize)
  const paginatedCertificates = useMemo(() => {
    return filteredCertificates.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    )
  }, [filteredCertificates, currentPage, pageSize])

  return (
    <div
      className="flex flex-col gap-4 sm:gap-5 w-full select-none"
      onClick={() => {
        if (openDropdown) setOpenDropdown(null)
      }}
    >
      {/* 1. Top Filter and Action Bar: 3 Items with equal width & equal distance */}
      <div
        className="w-full bg-white rounded-xl p-2.5 sm:p-3 shadow-xs border border-gray-100 relative z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full">
          {/* Filter 1: Category (1st equal third) */}
          <div className="relative w-full">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((prev) =>
                  prev === "category" ? null : "category"
                )
              }
              className="w-full bg-white border border-gray-200 hover:border-purple-300 rounded-lg px-4 py-2 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-700 transition-colors cursor-pointer"
            >
              <span>Category</span>
              <div className="flex items-center gap-1.5 text-gray-800">
                <span>{selectedCategory}</span>
                <CaretDown
                  size={14}
                  weight="bold"
                  className={`text-gray-500 transition-transform ${
                    openDropdown === "category" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openDropdown === "category" && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-30">
                {["All", "Design", "Research", "Product"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-4 py-2 text-xs sm:text-sm cursor-pointer transition-colors ${
                      selectedCategory === cat
                        ? "bg-purple-50 text-[#8571EE] font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter 2: Issued By (2nd equal third) */}
          <div className="relative w-full">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((prev) =>
                  prev === "issuer" ? null : "issuer"
                )
              }
              className="w-full bg-white border border-gray-200 hover:border-purple-300 rounded-lg px-4 py-2 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-700 transition-colors cursor-pointer"
            >
              <span>
                {selectedIssuer === "All" ? "Issued By" : `By: ${selectedIssuer}`}
              </span>
              <CaretDown
                size={14}
                weight="bold"
                className={`text-gray-500 transition-transform ${
                  openDropdown === "issuer" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "issuer" && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-30">
                {["All", "Coursera", "Udemy"].map((issuer) => (
                  <button
                    key={issuer}
                    type="button"
                    onClick={() => {
                      setSelectedIssuer(issuer)
                      setOpenDropdown(null)
                    }}
                    className={`w-full text-left px-4 py-2 text-xs sm:text-sm cursor-pointer transition-colors ${
                      selectedIssuer === issuer
                        ? "bg-purple-50 text-[#8571EE] font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {issuer}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action 3: Add New Certificate (3rd equal third) */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="w-full bg-white border border-gray-200 hover:border-[#8571EE] hover:text-[#8571EE] rounded-lg px-4 py-2 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-700 transition-colors cursor-pointer shadow-2xs"
            >
              <span>Add New Certificate</span>
              <Plus size={15} weight="bold" className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Notice Toast */}
      {actionNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white text-xs px-4 py-2 rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
          {actionNotice}
        </div>
      )}

      {/* 2. Certificate Cards Grid (3 Columns, NO share or download icons) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
        {paginatedCertificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-100 flex flex-col items-center justify-between text-center relative hover:shadow-md transition-all duration-200 group"
          >
            {/* Center Circular Document Icon */}
            <div className="mt-2 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#8571EE] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
                <FileText size={26} weight="fill" className="text-white" />
              </div>
            </div>

            {/* Certificate Details */}
            <div className="flex flex-col items-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug max-w-[240px]">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Issued by : {cert.issuedBy}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Date : {cert.date}
              </p>
            </div>

            {/* Verification Badge */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800">
              <CheckCircle
                size={18}
                weight="fill"
                className="text-[#22C55E] shrink-0"
              />
              <span>Verified</span>
            </div>
          </div>
        ))}
      </div>

      {filteredCertificates.length > 0 && (
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-100 mt-2">
          <ReusablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredCertificates.length}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={(newSize) => {
              setPageSize(newSize)
              setCurrentPage(1)
            }}
            pageSizeOptions={[3, 6, 9, 12]}
          />
        </div>
      )}

      {filteredCertificates.length === 0 && (
        <div className="w-full bg-white rounded-2xl p-12 text-center text-gray-400 text-sm border border-gray-100 shadow-xs">
          No certificates found matching the selected filters.
        </div>
      )}

      {/* 3. Add New Certificate Modal */}
      {isAddModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md overflow-hidden transform animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-base font-bold text-gray-900">
                Add New Certificate
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddCertificate} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Certificate Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Advanced UI Design"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#8571EE] focus:ring-1 focus:ring-[#8571EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Issued By
                </label>
                <select
                  value={newIssuer}
                  onChange={(e) => setNewIssuer(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#8571EE] bg-white"
                >
                  <option value="Coursera">Coursera</option>
                  <option value="Udemy">Udemy</option>
                  <option value="LinkedIn Learning">LinkedIn Learning</option>
                  <option value="Google">Google</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Completion Date
                  </label>
                  <input
                    type="text"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#8571EE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#8571EE] bg-white"
                  >
                    <option value="Design">Design</option>
                    <option value="Research">Research</option>
                    <option value="Product">Product</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold bg-[#8571EE] text-white rounded-xl hover:bg-[#725ee0] transition-colors shadow-xs cursor-pointer"
                >
                  Save Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
