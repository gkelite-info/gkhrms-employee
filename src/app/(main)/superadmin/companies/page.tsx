"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import {
  Building,
  Building2,
  Download,
  Plus,
  Search,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  ShieldAlert,
  Users,
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Ban,
  X,
  Loader2,
} from "lucide-react"
import { initialCompaniesData, CompanyRecord } from "./companiesData"
import SuspendCompanyModal from "../components/SuspendCompanyModal"
import AddCompanyModal from "../components/AddCompanyModal"

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<CompanyRecord[]>(initialCompaniesData)
  const [searchTerm, setSearchTerm] = useState("")
  const [planFilter, setPlanFilter] = useState("All Plans")
  const [statusFilter, setStatusFilter] = useState("All Status")
  const [paymentFilter, setPaymentFilter] = useState("All Payment Status")
  const [currentPage, setCurrentPage] = useState(1)

  // 3-dots Action Menu dropdown state
  const [openActionMenuId, setOpenActionMenuId] = useState<string | null>(null)
  const actionMenuRef = useRef<HTMLDivElement | null>(null)

  // Modal states for Edit, Delete, and Suspend
  const [editingCompany, setEditingCompany] = useState<CompanyRecord | null>(null)
  const [deletingCompany, setDeletingCompany] = useState<CompanyRecord | null>(null)
  const [suspendingCompany, setSuspendingCompany] = useState<CompanyRecord | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // Handle Export companies data to Excel (.xlsx)
  const handleExportToExcel = async () => {
    try {
      setIsExporting(true)
      showToast("Generating Excel file...")

      const XLSX = await import("xlsx")

      const dataToExport = filteredCompanies.length > 0 ? filteredCompanies : companies

      const formattedData = dataToExport.map((comp, index) => ({
        "S.No": index + 1,
        "Company Name": comp.name,
        "Company Code": comp.code || `CMP-${comp.id.replace("comp-", "")}`,
        "Domain": comp.domain,
        "Industry": comp.industry || "Information Technology",
        "Company Email": comp.email || `contact@${comp.domain}`,
        "Company Phone": comp.phone || "+91 98765 43210",
        "Office Address": comp.address || "Corporate Office, Hyderabad",
        "Primary Admin": comp.adminName,
        "Admin Email": comp.adminEmail,
        "Admin Phone": comp.adminPhone || comp.phone || "+91 98765 43210",
        "Admin Role": comp.adminRole || "Company Admin",
        "Subscription Plan": comp.plan,
        "Total Employees": comp.employees,
        "Active Admins": comp.activeAdmins ?? 1,
        "Billing Cycle": comp.billingCycle || "Yearly",
        "Start Date": comp.startDate || "01 Jan 2024",
        "Renewal Date": comp.renewalDate,
        "Payment Status": comp.paymentStatus,
        "Account Status": comp.accountStatus,
        "Created On": comp.createdOn || "15 Jan 2024",
      }))

      // Create sheet from formatted records
      const worksheet = XLSX.utils.json_to_sheet(formattedData)

      // Set explicit readable column widths for Excel
      worksheet["!cols"] = [
        { wch: 6 },  // S.No
        { wch: 26 }, // Company Name
        { wch: 15 }, // Company Code
        { wch: 22 }, // Domain
        { wch: 24 }, // Industry
        { wch: 26 }, // Company Email
        { wch: 18 }, // Company Phone
        { wch: 35 }, // Office Address
        { wch: 20 }, // Primary Admin
        { wch: 26 }, // Admin Email
        { wch: 18 }, // Admin Phone
        { wch: 16 }, // Admin Role
        { wch: 18 }, // Subscription Plan
        { wch: 16 }, // Total Employees
        { wch: 14 }, // Active Admins
        { wch: 14 }, // Billing Cycle
        { wch: 14 }, // Start Date
        { wch: 14 }, // Renewal Date
        { wch: 16 }, // Payment Status
        { wch: 16 }, // Account Status
        { wch: 14 }, // Created On
      ]

      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, "Companies")

      const today = new Date().toISOString().slice(0, 10)
      XLSX.writeFile(workbook, `GK_HRMS_Companies_${today}.xlsx`)

      showToast(`Exported ${formattedData.length} companies to Excel successfully!`)
    } catch (error) {
      console.error("Export error:", error)
      showToast("Export failed. Please try again.")
    } finally {
      setIsExporting(false)
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(e.target as Node)
      ) {
        setOpenActionMenuId(null)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  const filteredCompanies = companies.filter((comp) => {
    const matchesSearch =
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.adminName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.adminEmail.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPlan =
      planFilter === "All Plans" || comp.plan === planFilter

    const matchesStatus =
      statusFilter === "All Status" || comp.accountStatus === statusFilter

    const matchesPayment =
      paymentFilter === "All Payment Status" || comp.paymentStatus === paymentFilter

    return matchesSearch && matchesPlan && matchesStatus && matchesPayment
  })

  // Handle company deletion
  const handleDeleteConfirm = () => {
    if (!deletingCompany) return
    setCompanies((prev) => prev.filter((c) => c.id !== deletingCompany.id))
    showToast(`Company "${deletingCompany.name}" deleted successfully`)
    setDeletingCompany(null)
  }

  // Handle edit save
  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingCompany) return
    setCompanies((prev) =>
      prev.map((c) => (c.id === editingCompany.id ? editingCompany : c))
    )
    showToast(`Company "${editingCompany.name}" updated successfully`)
    setEditingCompany(null)
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6 pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-8 z-50 bg-[#1E293B] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================
          TOP BANNER: Header + Export + Add Company
         ========================================= */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
            <Building className="w-5 h-5 text-[#5B50E5]" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
              Companies
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Manage all registered companies and monitor their account status.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          {/* Export Button */}
          <button
            type="button"
            disabled={isExporting}
            onClick={handleExportToExcel}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <Loader2 className="w-4 h-4 text-slate-500 animate-spin" />
            ) : (
              <Download className="w-4 h-4 text-slate-500" />
            )}
            <span>{isExporting ? "Exporting..." : "Export"}</span>
          </button>

          {/* Add Company Button - Navigates to Add New Company */}
          <Link
            href="/superadmin/companies/add"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#5B50E5] hover:bg-[#4E43DB] text-white rounded-xl text-xs font-bold shadow-sm shadow-indigo-200 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Company</span>
          </Link>
        </div>
      </div>

      {/* =========================================
          ROW 2: 4 KPI Metrics Cards
         ========================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Companies */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
            <Building className="w-5 h-5 text-[#5B50E5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              TOTAL COMPANIES
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">142</span>
              <span className="px-2 py-0.5 rounded-full bg-[#DDE4FD] text-[#5B50E5] text-[11px] font-bold flex items-center">
                ↑+12%
              </span>
            </div>
          </div>
        </div>

        {/* Active Companies */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
            <Users className="w-5 h-5 text-[#5B50E5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              ACTIVE COMPANIES
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">118</span>
              <span className="px-2 py-0.5 rounded-full bg-[#DDE4FD] text-[#5B50E5] text-[11px] font-bold flex items-center">
                ↑+8%
              </span>
            </div>
          </div>
        </div>

        {/* Expiring Soon */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
            <Clock className="w-5 h-5 text-[#5B50E5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              EXPIRING SOON
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">12</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FEE4E2] text-[#D92D20] text-[11px] font-bold flex items-center">
                ↑+3%
              </span>
            </div>
          </div>
        </div>

        {/* Suspended Accounts */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#FEE4E2] flex items-center justify-center text-[#D92D20] shrink-0">
            <ShieldAlert className="w-5 h-5 text-[#D92D20]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              SUSPENDED ACCOUNTS
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">6</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FEE4E2] text-[#D92D20] text-[11px] font-bold flex items-center">
                ↑+2%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          ROW 3: Search, Filters & Companies Table
         ========================================= */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
        {/* Search Bar & Filter Row */}
        <div className="flex flex-col gap-4">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search companies by name or admin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200/90 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* All Plans */}
            <div className="relative">
              <select
                value={planFilter}
                onChange={(e) => setPlanFilter(e.target.value)}
                className="appearance-none px-3.5 py-2 pr-8 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:border-[#5B50E5] cursor-pointer"
              >
                <option value="All Plans">All Plans</option>
                <option value="Professional">Professional</option>
                <option value="Basic">Basic</option>
                <option value="Enterprise">Enterprise</option>
                <option value="Trial">Trial</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
            </div>

            {/* All Status */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none px-3.5 py-2 pr-8 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:border-[#5B50E5] cursor-pointer"
              >
                <option value="All Status">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
            </div>

            {/* All Payment Status */}
            <div className="relative">
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className="appearance-none px-3.5 py-2 pr-8 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:border-[#5B50E5] cursor-pointer"
              >
                <option value="All Payment Status">All Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
            </div>

            {/* Date Added Button */}
            <button
              type="button"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-600 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Date Added</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 tracking-wider">
                <th className="pb-3.5 font-bold uppercase">COMPANY NAME</th>
                <th className="pb-3.5 font-bold uppercase">COMPANY ADMIN</th>
                <th className="pb-3.5 font-bold uppercase">PLAN</th>
                <th className="pb-3.5 font-bold uppercase">EMPLOYEES</th>
                <th className="pb-3.5 font-bold uppercase">RENEWAL DATE</th>
                <th className="pb-3.5 font-bold uppercase">PAYMENT STATUS</th>
                <th className="pb-3.5 font-bold uppercase text-right pr-2">
                  ACCOUNT STATUS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCompanies.map((comp) => {
                const isMenuOpen = openActionMenuId === comp.id

                // Account status dot color mapping
                const dotColor =
                  comp.accountStatus === "Active"
                    ? "bg-[#5B50E5]"
                    : comp.accountStatus === "Pending"
                    ? "bg-amber-400"
                    : "bg-rose-500"

                return (
                  <tr
                    key={comp.id}
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    {/* Company Name & Domain */}
                    <td className="py-4">
                      <Link
                        href={`/superadmin/companies/${comp.id}`}
                        className="flex items-center gap-3 group/item cursor-pointer"
                      >
                        <div
                          className={`w-9 h-9 rounded-xl ${comp.logoBg} flex items-center justify-center shrink-0 font-bold text-[#5B50E5] text-xs`}
                        >
                          {comp.logoLetter || comp.name.charAt(0)}
                        </div>
                        <div className="flex flex-col leading-snug">
                          <span className="font-bold text-slate-800 text-xs group-hover/item:text-[#5B50E5] transition-colors">
                            {comp.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-normal">
                            {comp.domain}
                          </span>
                        </div>
                      </Link>
                    </td>

                    {/* Company Admin */}
                    <td className="py-4">
                      <div className="flex flex-col leading-snug">
                        <span className="font-semibold text-slate-700 text-xs">
                          {comp.adminName}
                        </span>
                        <span className="text-[11px] text-slate-400 font-normal">
                          {comp.adminEmail}
                        </span>
                      </div>
                    </td>

                    {/* Plan */}
                    <td className="py-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                          comp.plan === "Enterprise"
                            ? "bg-purple-50 text-purple-700 border border-purple-100"
                            : comp.plan === "Professional"
                            ? "bg-[#EEF0FD] text-[#5B50E5] border border-indigo-100/60"
                            : comp.plan === "Trial"
                            ? "bg-slate-100 text-slate-600 border border-slate-200"
                            : "bg-blue-50 text-blue-600 border border-blue-100/60"
                        }`}
                      >
                        {comp.plan}
                      </span>
                    </td>

                    {/* Employees */}
                    <td className="py-4 font-semibold text-slate-700">
                      {comp.employees}
                    </td>

                    {/* Renewal Date + Badge */}
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-700 font-medium">
                          {comp.renewalDate}
                        </span>
                        {comp.daysLeftBadge && (
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              comp.daysLeftBadge.color === "rose"
                                ? "bg-rose-50 text-rose-600 border border-rose-100"
                                : "bg-[#EEF0FD] text-[#5B50E5] border border-indigo-100"
                            }`}
                          >
                            {comp.daysLeftBadge.text}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Payment Status */}
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          comp.paymentStatus === "Paid"
                            ? "bg-[#EEF0FD] text-[#5B50E5] border border-indigo-100/60"
                            : comp.paymentStatus === "Pending"
                            ? "bg-indigo-50/70 text-indigo-500 border border-indigo-100/60"
                            : "bg-rose-50 text-rose-600 border border-rose-100"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            comp.paymentStatus === "Paid"
                              ? "bg-[#5B50E5]"
                              : comp.paymentStatus === "Pending"
                              ? "bg-indigo-400"
                              : "bg-rose-500"
                          }`}
                        />
                        {comp.paymentStatus}
                      </span>
                    </td>

                    {/* ==================================================
                        ACCOUNT STATUS: Dot Status + 3 Dots Action Dropdown
                        (View, Edit, Delete) -> View opens Image 2
                       ================================================== */}
                    <td className="py-4 text-right pr-2">
                      <div className="relative inline-flex items-center gap-2.5">
                        {/* Status Dot with Tooltip */}
                        <span
                          title={`Account Status: ${comp.accountStatus}`}
                          className={`w-2 h-2 rounded-full ${dotColor} cursor-help transition-transform hover:scale-125`}
                        />

                        {/* 3 Dots Trigger Button */}
                        <button
                          type="button"
                          aria-label={`Actions for ${comp.name}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenActionMenuId(isMenuOpen ? null : comp.id)
                          }}
                          className={`p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer ${
                            isMenuOpen
                              ? "bg-slate-100 text-slate-800"
                              : "group-hover:opacity-100 opacity-80"
                          }`}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {/* Action Menu Dropdown */}
                        {isMenuOpen && (
                          <div
                            ref={actionMenuRef}
                            className="absolute right-0 top-full mt-1.5 z-50 bg-white border border-slate-100 rounded-xl shadow-xl py-1.5 w-36 text-left animate-in fade-in zoom-in-95 duration-100"
                          >
                            {/* 1. VIEW ACTION (Navigates to Image 2) */}
                            <Link
                              href={`/superadmin/companies/${comp.id}`}
                              onClick={() => setOpenActionMenuId(null)}
                              className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#5B50E5] hover:bg-[#EEF0FD]/60 transition-colors cursor-pointer group/link"
                            >
                              <Eye className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-[#5B50E5]" />
                              <span>View</span>
                            </Link>

                            {/* 2. EDIT ACTION */}
                            <button
                              type="button"
                              onClick={() => {
                                setEditingCompany(comp)
                                setOpenActionMenuId(null)
                              }}
                              className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#5B50E5] hover:bg-[#EEF0FD]/60 transition-colors text-left cursor-pointer group/edit"
                            >
                              <Pencil className="w-3.5 h-3.5 text-slate-400 group-hover/edit:text-[#5B50E5]" />
                              <span>Edit</span>
                            </button>

                            {/* 3. SUSPEND / REACTIVATE ACTION */}
                            <button
                              type="button"
                              onClick={() => {
                                setOpenActionMenuId(null)
                                if (comp.accountStatus === "Suspended") {
                                  setCompanies((prev) =>
                                    prev.map((c) =>
                                      c.id === comp.id
                                        ? { ...c, accountStatus: "Active" }
                                        : c
                                    )
                                  )
                                  showToast(`Reactivated ${comp.name} account`)
                                } else {
                                  setSuspendingCompany(comp)
                                }
                              }}
                              className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors text-left cursor-pointer"
                            >
                              <Ban className="w-3.5 h-3.5 text-rose-500" />
                              <span>
                                {comp.accountStatus === "Suspended"
                                  ? "Reactivate"
                                  : "Suspend"}
                              </span>
                            </button>

                            {/* 4. DELETE ACTION */}
                            <button
                              type="button"
                              onClick={() => {
                                setDeletingCompany(comp)
                                setOpenActionMenuId(null)
                              }}
                              className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors text-left border-t border-slate-100 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* =========================================
            TABLE FOOTER: Pagination
         ========================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
          <span className="text-slate-400 font-medium">
            Showing 1 to {filteredCompanies.length} of {companies.length} companies
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className="w-8 h-8 rounded-lg bg-[#5B50E5] text-white font-bold flex items-center justify-center shadow-xs cursor-pointer"
            >
              1
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-600 font-medium flex items-center justify-center transition-colors cursor-pointer"
            >
              2
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-600 font-medium flex items-center justify-center transition-colors cursor-pointer"
            >
              3
            </button>

            <span className="px-1 text-slate-400 font-bold">...</span>

            <button
              type="button"
              className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          MODAL: Add / Edit Company Full Modal
         ========================================= */}
      {editingCompany && (
        <AddCompanyModal
          isOpen={!!editingCompany}
          onClose={() => setEditingCompany(null)}
          title="Edit Company"
          subtitle="Update company information, administrator, and subscription details."
          initialData={{
            companyName: editingCompany.name,
            companyCode: editingCompany.code ?? "TNV001",
            industry: editingCompany.industry ?? "Information Technology",
            companyEmail: editingCompany.email ?? editingCompany.domain,
            companyPhone: (editingCompany.phone ?? "+91 98765 43210").replace(/^\+91\s*/, ""),
            phoneCountryCode: "+91",
            website: editingCompany.website ?? `www.${editingCompany.domain}`,
            address: editingCompany.address ?? "Hitech City, Hyderabad, Telangana, India",
            country: "India",
            state: "Telangana",
            city: "Hyderabad",
            adminFirstName: editingCompany.adminName.split(" ")[0] || "Rohan",
            adminLastName: editingCompany.adminName.split(" ").slice(1).join(" ") || "Mehta",
            adminEmail: editingCompany.adminEmail,
            adminPhone: (editingCompany.adminPhone ?? "+91 98765 43210").replace(/^\+91\s*/, ""),
            adminPhoneCountryCode: "+91",
            adminDesignation: editingCompany.adminRole ?? "Company Administrator",
            plan: editingCompany.plan,
            billingCycle: editingCompany.billingCycle ?? "Yearly",
            startDate: editingCompany.startDate ?? "2025-09-01",
            expiryDate: editingCompany.subscriptionRenewalDate ?? "2026-08-26",
            employeeLimit: `${editingCompany.employeeLimit ?? 250} Employees`,
            paymentStatus: editingCompany.paymentStatus,
            accountStatus: editingCompany.accountStatus,
          }}
          onSuccess={(updatedData) => {
            setCompanies((prev) =>
              prev.map((c) =>
                c.id === editingCompany.id
                  ? {
                      ...c,
                      name: updatedData.companyName || c.name,
                      plan: updatedData.plan || c.plan,
                      accountStatus: updatedData.accountStatus || c.accountStatus,
                      paymentStatus: updatedData.paymentStatus || c.paymentStatus,
                    }
                  : c
              )
            )
            setEditingCompany(null)
            showToast(`Company "${updatedData.companyName || editingCompany.name}" updated successfully!`)
          }}
        />
      )}

      {/* =========================================
          MODAL: Delete Company Confirmation
         ========================================= */}
      {deletingCompany && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-sm w-full p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-800">
              Delete Company?
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Are you sure you want to delete{" "}
              <strong className="text-slate-800">{deletingCompany.name}</strong>?
              This action cannot be undone and will remove all associated admin
              accounts and records.
            </p>

            <div className="flex items-center justify-end gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setDeletingCompany(null)}
                className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-xs shadow-rose-200 cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* =========================================
          MODAL: Suspend Company Modal
         ========================================= */}
      {suspendingCompany && (
        <SuspendCompanyModal
          isOpen={!!suspendingCompany}
          onClose={() => setSuspendingCompany(null)}
          company={{
            name: suspendingCompany.name,
            code: suspendingCompany.code ?? "TNV001",
            plan: suspendingCompany.plan,
            status: suspendingCompany.accountStatus,
            adminName: suspendingCompany.adminName,
            logoLetter: suspendingCompany.logoLetter,
          }}
          onConfirm={({ reason, notes, notifyAdmin }) => {
            setCompanies((prev) =>
              prev.map((c) =>
                c.id === suspendingCompany.id
                  ? { ...c, accountStatus: "Suspended" }
                  : c
              )
            )
            setSuspendingCompany(null)
            showToast(
              `Company "${suspendingCompany.name}" suspended successfully`
            )
          }}
        />
      )}
    </div>
  )
}
