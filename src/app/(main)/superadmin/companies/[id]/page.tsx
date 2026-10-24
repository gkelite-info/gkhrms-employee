"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import {
  Building2,
  Users,
  UserCheck,
  Headphones,
  ShieldCheck,
  Crown,
  Clock,
  Plus,
  Pencil,
  AlertCircle,
  CreditCard,
  ChevronLeft,
  CheckCircle2,
  X,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react"
import { getCompanyById, CompanyRecord } from "../companiesData"
import SuspendCompanyModal from "../../components/SuspendCompanyModal"
import AddCompanyModal from "../../components/AddCompanyModal"

export default function CompanyDetailPage() {
  const router = useRouter()
  const params = useParams()
  const companyId = typeof params?.id === "string" ? params.id : "comp-1"
  const company: CompanyRecord = getCompanyById(companyId)

  // Active Tab state
  const [activeTab, setActiveTab] = useState<
    "Overview" | "Subscription" | "Admins" | "Activity"
  >("Overview")

  // Modals state
  const [showAddAdminModal, setShowAddAdminModal] = useState(false)
  const [showEditCompanyModal, setShowEditCompanyModal] = useState(false)
  const [showSuspendModal, setShowSuspendModal] = useState(false)
  const [accountStatus, setAccountStatus] = useState<"Active" | "Pending" | "Suspended">(
    company.accountStatus
  )

  // Add Admin form state
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Company Admin",
  })
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3000)
  }

  const handleToggleSuspend = () => {
    const nextStatus = accountStatus === "Suspended" ? "Active" : "Suspended"
    setAccountStatus(nextStatus)
    setShowSuspendModal(false)
    showToast(
      `Company account ${
        nextStatus === "Suspended" ? "suspended" : "reactivated"
      } successfully`
    )
  }

  const handleAddAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAdmin.name || !newAdmin.email) return
    setShowAddAdminModal(false)
    setNewAdmin({ name: "", email: "", phone: "", role: "Company Admin" })
    showToast(`Admin ${newAdmin.name} added successfully!`)
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

      {/* Back Link Breadcrumb */}
      <div className="flex items-center gap-2">
        <Link
          href="/superadmin/companies"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#5B50E5] transition-colors cursor-pointer group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Companies</span>
        </Link>
      </div>

      {/* ==============================================================
          1. TOP COMPANY HEADER CARD WITH TABS (Matches Image 2 exactly)
         ============================================================== */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          {/* Company Brand & Info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#5B50E5] flex items-center justify-center text-white text-2xl font-black shadow-md shadow-indigo-100 shrink-0">
              {company.logoLetter || company.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                {company.name}
              </h1>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                View company profile, subscription, admins, and account activity.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* + Add Admin Button */}
            <button
              type="button"
              onClick={() => setShowAddAdminModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#5B50E5] hover:bg-[#4E43DB] text-white rounded-xl text-xs font-bold shadow-sm shadow-indigo-200 transition-all cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>+ Add Admin</span>
            </button>

            {/* Edit Company Button */}
            <button
              type="button"
              onClick={() => setShowEditCompanyModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5 text-[#5B50E5]" />
              <span>Edit Company</span>
            </button>

            {/* Suspend Account Button */}
            <button
              type="button"
              onClick={() => setShowSuspendModal(true)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                accountStatus === "Suspended"
                  ? "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200"
                  : "bg-rose-50/70 hover:bg-rose-100 text-rose-600 border-rose-200/80"
              }`}
            >
              <AlertCircle className="w-4 h-4 text-rose-500" />
              <span>
                {accountStatus === "Suspended"
                  ? "Reactivate Account"
                  : "Suspend Account"}
              </span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center gap-2 border-t border-slate-100/80 pt-4">
          {(["Overview", "Subscription", "Admins", "Activity"] as const).map(
            (tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-7 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#3B38B2] text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              )
            }
          )}
        </div>
      </div>

      {/* ==============================================================
          2. FOUR KPI METRIC CARDS (Matches Image 2 exactly)
         ============================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* TOTAL EMPLOYEES */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
            <Users className="w-5 h-5 text-[#5B50E5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              TOTAL EMPLOYEES
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">
                {company.employees}
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3 inline" /> +12%
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              from last month
            </span>
          </div>
        </div>

        {/* DEPARTMENTS */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center text-blue-500 shrink-0">
            <Building2 className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              DEPARTMENTS
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">
                {company.departments ?? 12}
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3 inline" /> +1
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              from last month
            </span>
          </div>
        </div>

        {/* ACTIVE ADMINS */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50/80 flex items-center justify-center text-[#5B50E5] shrink-0">
            <UserCheck className="w-5 h-5 text-[#5B50E5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              ACTIVE ADMINS
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">
                {company.activeAdmins ?? 3}
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3 inline" /> +0
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              from last month
            </span>
          </div>
        </div>

        {/* SUPPORT TICKETS */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
            <Headphones className="w-5 h-5 text-sky-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              SUPPORT TICKETS
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-800">
                {company.supportTickets ?? 2}
              </span>
              <span className="text-xs font-bold text-rose-500 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3 inline" /> +1
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              from last month
            </span>
          </div>
        </div>
      </div>

      {/* ==============================================================
          3. MAIN 2-COLUMN SECTION (Matches Image 2 layout)
         ============================================================== */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* -------------------------------------------
              CARD 1: Company Information (Top Left)
             ------------------------------------------- */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
                  <Building2 className="w-4 h-4 text-[#5B50E5]" />
                </div>
                <h3 className="font-bold text-sm text-slate-800">
                  Company Information
                </h3>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  accountStatus === "Active"
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    : accountStatus === "Suspended"
                    ? "bg-rose-50 text-rose-600 border border-rose-100"
                    : "bg-amber-50 text-amber-600 border border-amber-100"
                }`}
              >
                {accountStatus}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-5">
              {/* Left Logo Box */}
              <div className="w-20 h-20 rounded-2xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] text-3xl font-extrabold shrink-0 shadow-xs">
                {company.logoLetter || "T"}
              </div>

              {/* Right Key-Value List */}
              <div className="flex-1 w-full space-y-2 text-xs">
                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Company Name</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <span className="font-bold text-slate-800">{company.name}</span>
                </div>

                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Company Code</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <span className="font-bold text-slate-800 font-mono">
                    {company.code ?? "TNV001"}
                  </span>
                </div>

                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Industry</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <span className="text-slate-700 font-medium">
                    {company.industry ?? "Information Technology"}
                  </span>
                </div>

                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Company Email</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <a
                    href={`mailto:${company.email ?? "info@technova.com"}`}
                    className="text-[#5B50E5] hover:underline font-medium"
                  >
                    {company.email ?? "info@technova.com"}
                  </a>
                </div>

                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Phone Number</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <span className="text-slate-700 font-medium">
                    {company.phone ?? "+91 98765 43210"}
                  </span>
                </div>

                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Website</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <a
                    href={`https://${company.website ?? "www.technova.com"}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#5B50E5] hover:underline font-medium"
                  >
                    {company.website ?? "www.technova.com"}
                  </a>
                </div>

                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Address</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <span className="text-slate-700 font-medium">
                    {company.address ?? "Hitech City, Hyderabad, Telangana, India"}
                  </span>
                </div>

                <div className="flex items-baseline">
                  <span className="w-32 text-slate-400 font-medium">Created On</span>
                  <span className="text-slate-400 mr-2">:</span>
                  <span className="text-slate-700 font-medium">
                    {company.createdOn ?? "15 Jan 2024"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------
              CARD 2: Primary Admin (Top Right)
             ------------------------------------------- */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
                  <ShieldCheck className="w-4 h-4 text-[#5B50E5]" />
                </div>
                <h3 className="font-bold text-sm text-slate-800">
                  Primary Admin
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("Admins")}
                className="px-3 py-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                View Admins
              </button>
            </div>

            {/* Admin Avatar & Badge */}
            <div className="flex flex-col items-center justify-center pt-2 pb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-indigo-50 shadow-sm">
                  <Image
                    src={company.adminAvatar || "/images/admin_rohan.jpg"}
                    alt={company.adminName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Active online green dot */}
                <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white absolute bottom-0 right-0.5" />
              </div>

              <h4 className="text-base font-bold text-slate-800 mt-2">
                {company.adminName}
              </h4>
              <span className="mt-1 px-2.5 py-0.5 bg-sky-50 text-sky-600 border border-sky-100 rounded-md text-[11px] font-semibold">
                {company.adminRole ?? "Company Admin"}
              </span>
            </div>

            {/* Admin Key-Value Details */}
            <div className="w-full space-y-2 text-xs pt-2 border-t border-slate-100/70">
              <div className="flex items-baseline">
                <span className="w-24 text-slate-400 font-medium">Email</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="text-slate-700 font-medium">
                  {company.adminEmail}
                </span>
              </div>

              <div className="flex items-baseline">
                <span className="w-24 text-slate-400 font-medium">Phone</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="text-slate-700 font-medium">
                  {company.adminPhone ?? "+91 98765 43210"}
                </span>
              </div>

              <div className="flex items-baseline">
                <span className="w-24 text-slate-400 font-medium">Last Login</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="text-slate-700 font-medium">
                  {company.adminLastLogin ?? "Today, 10:24 AM"}
                </span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------
              CARD 3: Subscription Overview (Bottom Left)
             ------------------------------------------- */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
                  <Crown className="w-4 h-4 text-[#5B50E5]" />
                </div>
                <h3 className="font-bold text-sm text-slate-800">
                  Subscription Overview
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("Subscription")}
                className="px-3.5 py-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                Manage Subscription
              </button>
            </div>

            {/* Key-Value Details */}
            <div className="w-full space-y-2.5 text-xs pt-4">
              <div className="flex items-center">
                <span className="w-36 text-slate-400 font-medium">Current Plan</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#EEF0FD] text-[#5B50E5] border border-indigo-100/50">
                  {company.plan}
                </span>
              </div>

              <div className="flex items-baseline">
                <span className="w-36 text-slate-400 font-medium">Billing Cycle</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="font-bold text-slate-800">
                  {company.billingCycle ?? "Yearly"}
                </span>
              </div>

              <div className="flex items-baseline">
                <span className="w-36 text-slate-400 font-medium">Start Date</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="font-medium text-slate-700">
                  {company.startDate ?? "01 Sep 2025"}
                </span>
              </div>

              <div className="flex items-baseline">
                <span className="w-36 text-slate-400 font-medium">Renewal Date</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="font-medium text-slate-700">
                  {company.subscriptionRenewalDate ?? "26 Aug 2026"}
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-36 text-slate-400 font-medium">Payment Status</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                  {company.paymentStatus}
                </span>
              </div>

              <div className="flex items-baseline">
                <span className="w-36 text-slate-400 font-medium">Employee Limit</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="font-bold text-slate-800">
                  {company.employeeLimit ?? 250}
                </span>
              </div>

              <div className="flex items-baseline">
                <span className="w-36 text-slate-400 font-medium">Used Seats</span>
                <span className="text-slate-400 mr-2">:</span>
                <span className="font-bold text-slate-800">
                  {company.usedSeats ?? 245} / {company.employeeLimit ?? 250}
                </span>
              </div>
            </div>

            {/* Seat Utilization Bar */}
            <div className="pt-4 border-t border-slate-100 mt-4">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-400 font-medium">Seat Utilization</span>
                <span className="font-bold text-[#5B50E5]">
                  {company.seatUtilization ?? 98}% used
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#5B50E5] rounded-full transition-all duration-500"
                  style={{ width: `${company.seatUtilization ?? 98}%` }}
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------
              CARD 4: Recent Activity (Bottom Right)
             ------------------------------------------- */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
                  <Clock className="w-4 h-4 text-[#5B50E5]" />
                </div>
                <h3 className="font-bold text-sm text-slate-800">
                  Recent Activity
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("Activity")}
                className="text-[#5B50E5] hover:underline text-xs font-semibold cursor-pointer"
              >
                View All
              </button>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 pt-4 space-y-5 before:absolute before:left-3.5 before:top-6 before:bottom-3 before:w-0.5 before:bg-slate-100">
              {/* Event 1: Subscription renewed */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col ml-3">
                  <h5 className="font-bold text-slate-800 text-xs">
                    Subscription renewed
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Plan renewed for another year
                  </p>
                </div>
                <div className="text-right text-[10px] text-slate-400 font-medium shrink-0 leading-tight">
                  <div>26 Aug 2025</div>
                  <div>10:24 AM</div>
                </div>
              </div>

              {/* Event 2: New admin added */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5B50E5] shadow-xs">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col ml-3">
                  <h5 className="font-bold text-slate-800 text-xs">
                    New admin added
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Priya Sharma was added as an admin
                  </p>
                </div>
                <div className="text-right text-[10px] text-slate-400 font-medium shrink-0 leading-tight">
                  <div>20 Aug 2025</div>
                  <div>02:15 PM</div>
                </div>
              </div>

              {/* Event 3: Employee limit updated to 250 */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-xs">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col ml-3">
                  <h5 className="font-bold text-slate-800 text-xs">
                    Employee limit updated to 250
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Plan limit increased from 200 to 250
                  </p>
                </div>
                <div className="text-right text-[10px] text-slate-400 font-medium shrink-0 leading-tight">
                  <div>14 Aug 2025</div>
                  <div>11:30 AM</div>
                </div>
              </div>

              {/* Event 4: Company profile updated */}
              <div className="relative flex items-start justify-between gap-4">
                <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 shadow-xs">
                  <Pencil className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col ml-3">
                  <h5 className="font-bold text-slate-800 text-xs">
                    Company profile updated
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Company information was updated
                  </p>
                </div>
                <div className="text-right text-[10px] text-slate-400 font-medium shrink-0 leading-tight">
                  <div>01 Aug 2025</div>
                  <div>04:20 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 2: Subscription Details
         ============================================================== */}
      {activeTab === "Subscription" && (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-800">
                Subscription & Billing Details
              </h3>
              <p className="text-xs text-slate-400">
                Manage billing cycle, invoices, and employee seat limits.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF0FD] text-[#5B50E5]">
              Active: {company.plan} Plan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                Plan Fee
              </span>
              <p className="text-xl font-bold text-slate-800 mt-1">₹49,999 / year</p>
              <span className="text-[11px] text-slate-500">Billed annually</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                Allocated Seats
              </span>
              <p className="text-xl font-bold text-slate-800 mt-1">
                {company.usedSeats} / {company.employeeLimit}
              </p>
              <span className="text-[11px] text-emerald-600 font-medium">
                5 seats remaining
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                Next Billing Date
              </span>
              <p className="text-xl font-bold text-slate-800 mt-1">
                {company.subscriptionRenewalDate}
              </p>
              <span className="text-[11px] text-[#5B50E5] font-medium">
                Auto-renewal enabled
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 3: Company Admins
         ============================================================== */}
      {activeTab === "Admins" && (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-800">
                Company Administrators
              </h3>
              <p className="text-xs text-slate-400">
                Authorized administrators who manage this company account.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAddAdminModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#5B50E5] hover:bg-[#4E43DB] text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Admin</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 tracking-wider">
                  <th className="pb-3 uppercase">NAME</th>
                  <th className="pb-3 uppercase">ROLE</th>
                  <th className="pb-3 uppercase">EMAIL</th>
                  <th className="pb-3 uppercase">PHONE</th>
                  <th className="pb-3 uppercase">LAST LOGIN</th>
                  <th className="pb-3 uppercase text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3.5 font-bold text-slate-800 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                      <Image
                        src={company.adminAvatar || "/images/admin_rohan.jpg"}
                        alt={company.adminName}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span>{company.adminName}</span>
                  </td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-600 text-[10px] font-bold">
                      Primary Admin
                    </span>
                  </td>
                  <td className="py-3.5 text-slate-600">{company.adminEmail}</td>
                  <td className="py-3.5 text-slate-600">
                    {company.adminPhone ?? "+91 98765 43210"}
                  </td>
                  <td className="py-3.5 text-slate-500">Today, 10:24 AM</td>
                  <td className="py-3.5 text-right">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="py-3.5 font-bold text-slate-800 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#E2E0FA] flex items-center justify-center font-bold text-[#5B50E5] text-xs">
                      PS
                    </div>
                    <span>Priya Sharma</span>
                  </td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold">
                      HR Admin
                    </span>
                  </td>
                  <td className="py-3.5 text-slate-600">priya.s@technova.com</td>
                  <td className="py-3.5 text-slate-600">+91 98450 11223</td>
                  <td className="py-3.5 text-slate-500">Yesterday, 04:30 PM</td>
                  <td className="py-3.5 text-right">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ==============================================================
          TAB 4: Activity Log
         ============================================================== */}
      {activeTab === "Activity" && (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
          <div>
            <h3 className="font-bold text-base text-slate-800">
              Company Audit & Activity Logs
            </h3>
            <p className="text-xs text-slate-400">
              Detailed tracking of all account, billing, and membership events.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {(company.recentActivity ?? []).map((act) => (
              <div
                key={act.id}
                className="p-4 rounded-xl border border-slate-100 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5]">
                    <Clock className="w-4 h-4 text-[#5B50E5]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-800">
                      {act.title}
                    </h5>
                    <p className="text-[11px] text-slate-400">{act.description}</p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {act.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==============================================================
          MODAL: + Add Admin
         ============================================================== */}
      {showAddAdminModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">
                Add Company Administrator
              </h3>
              <button
                type="button"
                onClick={() => setShowAddAdminModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddAdminSubmit} className="space-y-4 mt-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={newAdmin.name}
                  onChange={(e) =>
                    setNewAdmin({ ...newAdmin, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#5B50E5]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ramesh@technova.com"
                  value={newAdmin.email}
                  onChange={(e) =>
                    setNewAdmin({ ...newAdmin, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#5B50E5]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 00000"
                  value={newAdmin.phone}
                  onChange={(e) =>
                    setNewAdmin({ ...newAdmin, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#5B50E5]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddAdminModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#5B50E5] hover:bg-[#4E43DB] text-white rounded-xl text-xs font-bold shadow-sm shadow-indigo-200 cursor-pointer"
                >
                  Save Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==============================================================
          MODAL: Suspend Company Modal (Matches screenshot)
         ============================================================== */}
      <SuspendCompanyModal
        isOpen={showSuspendModal}
        onClose={() => setShowSuspendModal(false)}
        company={{
          name: company.name,
          code: company.code ?? "TNV001",
          plan: company.plan,
          status: accountStatus,
          adminName: company.adminName,
          logoLetter: company.logoLetter,
        }}
        onConfirm={({ reason, notes, notifyAdmin }) => {
          setAccountStatus("Suspended")
          setShowSuspendModal(false)
          showToast(
            `Company account suspended: ${reason || "Account suspended"}`
          )
        }}
      />

      {/* ==============================================================
          MODAL: Add / Edit Company Full Modal
         ============================================================== */}
      <AddCompanyModal
        isOpen={showEditCompanyModal}
        onClose={() => setShowEditCompanyModal(false)}
        title="Edit Company"
        subtitle="Update company information, administrator, and subscription details."
        initialData={{
          companyName: company.name,
          companyCode: company.code ?? "TNV001",
          industry: company.industry ?? "Information Technology",
          companyEmail: company.email ?? "info@technova.com",
          companyPhone: (company.phone ?? "+91 98765 43210").replace(/^\+91\s*/, ""),
          phoneCountryCode: "+91",
          website: company.website ?? "www.technova.com",
          address: company.address ?? "Hitech City, Hyderabad, Telangana, India",
          country: "India",
          state: "Telangana",
          city: "Hyderabad",
          adminFirstName: company.adminName.split(" ")[0] || "Rohan",
          adminLastName: company.adminName.split(" ").slice(1).join(" ") || "Mehta",
          adminEmail: company.adminEmail,
          adminPhone: (company.adminPhone ?? "+91 98765 43210").replace(/^\+91\s*/, ""),
          adminPhoneCountryCode: "+91",
          adminDesignation: company.adminRole ?? "Company Administrator",
          plan: company.plan,
          billingCycle: company.billingCycle ?? "Yearly",
          startDate: company.startDate ?? "2025-09-01",
          expiryDate: company.subscriptionRenewalDate ?? "2026-08-26",
          employeeLimit: `${company.employeeLimit ?? 250} Employees`,
          paymentStatus: company.paymentStatus,
          accountStatus: accountStatus,
        }}
        onSuccess={(updatedData) => {
          showToast(`Company "${updatedData.companyName || company.name}" updated successfully!`)
        }}
      />
    </div>
  )
}
