"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Building2,
  MapPin,
  User,
  CreditCard,
  Clock,
  Check,
  Image as ImageIcon,
} from "lucide-react"
import SuspendCompanyModal from "../../components/SuspendCompanyModal"

export default function AddCompanyPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    // 1. Company Information
    companyName: "",
    companyCode: "CMP001",
    industry: "",
    companyEmail: "",
    phoneCountryCode: "+91",
    companyPhone: "",
    website: "",
    logoPreview: "",

    // 2. Address
    country: "",
    state: "",
    city: "",
    address: "",

    // 3. Primary Administrator
    adminFirstName: "",
    adminLastName: "",
    adminEmail: "",
    adminPhoneCountryCode: "+91",
    adminPhone: "",
    adminDesignation: "",

    // 4. Subscription Details
    plan: "Professional",
    billingCycle: "Monthly",
    startDate: "2025-08-26",
    expiryDate: "2026-08-26",
    employeeLimit: "250 Employees",
    paymentStatus: "Paid",
    accountStatus: "Active",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [showSuspendModal, setShowSuspendModal] = useState(false)

  const handlePlanChange = (selectedPlan: string) => {
    let limit = "50 Employees"
    if (selectedPlan === "Professional") limit = "250 Employees"
    if (selectedPlan === "Enterprise") limit = "Unlimited Employees"

    setFormData((prev) => ({
      ...prev,
      plan: selectedPlan,
      employeeLimit: limit,
    }))
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setFormData((prev) => ({
        ...prev,
        logoPreview: previewUrl,
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccessToast(true)

      setTimeout(() => {
        router.push("/superadmin/companies")
      }, 1000)
    }, 600)
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 pb-12">
      {/* Page Header */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
          Add New Company
        </h1>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          Register a new company and assign a primary administrator to get started.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* =========================================
            SECTION 1: Company Information
           ========================================= */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
              <Building2 className="w-4 h-4 text-[#5B50E5]" />
            </div>
            <h2 className="text-sm font-bold text-slate-800">
              Company Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                  Company Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                  Company Code <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="CMP001"
                    value={formData.companyCode}
                    onChange={(e) =>
                      setFormData({ ...formData, companyCode: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all pr-8"
                  />
                  <Clock className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer"
                >
                  <option value="">Select industry</option>
                  <option value="Technology & Software">Technology & Software</option>
                  <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                  <option value="Retail & E-commerce">Retail & E-commerce</option>
                  <option value="Education">Education</option>
                  <option value="Consulting & Professional Services">Consulting & Professional Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                  Company Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter company email"
                  value={formData.companyEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, companyEmail: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#5B50E5]/20 focus-within:border-[#5B50E5]">
                  <select
                    value={formData.phoneCountryCode}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phoneCountryCode: e.target.value,
                      })
                    }
                    className="bg-slate-50 text-slate-700 text-xs px-2 py-2.5 border-r border-slate-200 focus:outline-none cursor-pointer font-medium"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                    <option value="+65">+65</option>
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.companyPhone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyPhone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                  Website
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
                />
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col">
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Company Logo
              </label>
              <label className="relative flex-1 min-h-[110px] border-2 border-dashed border-indigo-200 hover:border-[#5B50E5] bg-[#EEF0FD]/40 hover:bg-[#EEF0FD]/80 rounded-2xl flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all group">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
                {formData.logoPreview ? (
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src={formData.logoPreview}
                      alt="Logo preview"
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                    <span className="text-[11px] font-bold text-[#5B50E5]">
                      Change Logo
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="w-8 h-8 rounded-lg bg-white text-[#5B50E5] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-1.5">
                      <ImageIcon className="w-4 h-4 text-[#5B50E5]" />
                    </div>
                    <span className="text-xs font-bold text-[#5B50E5]">
                      Upload Logo
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                      JPG, PNG (Max 2MB)
                    </span>
                  </>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: Address
           ========================================= */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
              <MapPin className="w-4 h-4 text-[#5B50E5]" />
            </div>
            <h2 className="text-sm font-bold text-slate-800">Address</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Country <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer"
              >
                <option value="">Select country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Singapore">Singapore</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                State <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer"
              >
                <option value="">Select state</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                City <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer"
              >
                <option value="">Select city</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="New Delhi">New Delhi</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Austin">Austin</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter complete address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
              />
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 3: Primary Administrator
           ========================================= */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
              <User className="w-4 h-4 text-[#5B50E5]" />
            </div>
            <h2 className="text-sm font-bold text-slate-800">
              Primary Administrator
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                First Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter first name"
                value={formData.adminFirstName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    adminFirstName: e.target.value,
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Last Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter last name"
                value={formData.adminLastName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    adminLastName: e.target.value,
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Enter admin email"
                value={formData.adminEmail}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    adminEmail: e.target.value,
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#5B50E5]/20 focus-within:border-[#5B50E5]">
                <select
                  value={formData.adminPhoneCountryCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      adminPhoneCountryCode: e.target.value,
                    })
                  }
                  className="bg-slate-50 text-slate-700 text-xs px-2 py-2.5 border-r border-slate-200 focus:outline-none cursor-pointer font-medium"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                  <option value="+65">+65</option>
                </select>
                <input
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  value={formData.adminPhone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      adminPhone: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Designation
              </label>
              <input
                type="text"
                placeholder="Enter designation"
                value={formData.adminDesignation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    adminDesignation: e.target.value,
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
              />
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 4: Subscription Details
           ========================================= */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#EEF0FD] flex items-center justify-center text-[#5B50E5] shrink-0">
              <CreditCard className="w-4 h-4 text-[#5B50E5]" />
            </div>
            <h2 className="text-sm font-bold text-slate-800">
              Subscription Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Plan <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.plan}
                onChange={(e) => handlePlanChange(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer"
              >
                <option value="Basic">Basic</option>
                <option value="Professional">Professional</option>
                <option value="Enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Billing Cycle <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.billingCycle}
                onChange={(e) =>
                  setFormData({ ...formData, billingCycle: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer"
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annually">Annually</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Start Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Expiry Date
              </label>
              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) =>
                  setFormData({ ...formData, expiryDate: e.target.value })
                }
                className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end pt-2">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Employee Limit <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={formData.employeeLimit}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium cursor-not-allowed pr-8"
                />
                <Clock className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Payment Status <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.paymentStatus}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    paymentStatus: e.target.value,
                  })
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer font-medium"
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Account Status <span className="text-rose-500">*</span>
              </label>
              <select
                required
                value={formData.accountStatus}
                onChange={(e) => {
                  const val = e.target.value
                  if (val === "Suspended") {
                    setShowSuspendModal(true)
                  } else {
                    setFormData({
                      ...formData,
                      accountStatus: val,
                    })
                  }
                }}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#5B50E5]/20 focus:border-[#5B50E5] transition-all cursor-pointer font-medium"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => router.push("/superadmin/companies")}
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#5B50E5] hover:bg-[#4E43DB] text-white shadow-sm shadow-indigo-200 transition-all cursor-pointer disabled:opacity-70 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <span>Create Company</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Suspend Company Modal */}
      <SuspendCompanyModal
        isOpen={showSuspendModal}
        onClose={() => {
          setShowSuspendModal(false)
          if (formData.accountStatus !== "Suspended") {
            setFormData((prev) => ({ ...prev, accountStatus: "Active" }))
          }
        }}
        company={{
          name: formData.companyName || "TechNova Solutions",
          code: formData.companyCode || "TNV001",
          plan: formData.plan || "Professional",
          status: "Active",
          adminName:
            `${formData.adminFirstName} ${formData.adminLastName}`.trim() ||
            "Rohan Mehta",
          logoLetter: formData.companyName ? formData.companyName.charAt(0) : "T",
        }}
        onConfirm={({ reason, notes, notifyAdmin }) => {
          setFormData((prev) => ({ ...prev, accountStatus: "Suspended" }))
          setShowSuspendModal(false)
        }}
      />

      {showSuccessToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="text-xs font-bold">
            Company &amp; Administrator registered successfully!
          </span>
        </div>
      )}
    </div>
  )
}
