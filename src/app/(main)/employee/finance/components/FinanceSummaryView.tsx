import React from "react"
import IndiaFlag from "./IndiaFlag"

export interface FinanceSummaryViewProps {
  onViewPayslip: () => void
}

interface DetailRowProps {
  label: string
  value: React.ReactNode
  labelWidthClass?: string
}

function DetailRow({
  label,
  value,
  labelWidthClass = "w-[170px] sm:w-[210px]",
}: DetailRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline text-xs sm:text-sm gap-0.5 sm:gap-0">
      <span className={`${labelWidthClass} shrink-0 font-semibold text-slate-800`}>
        {label} :
      </span>
      <span className="text-slate-500 font-normal break-words flex-1 sm:pl-2">
        {value}
      </span>
    </div>
  )
}

export default function FinanceSummaryView({
  onViewPayslip,
}: FinanceSummaryViewProps) {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5">
      <div className="w-full bg-white rounded-xl shadow-xs p-4 sm:p-5 md:p-6 border border-slate-100/80">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-start sm:items-center justify-between gap-4 lg:gap-6">
          <div className="shrink-0">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Payroll Summary
            </h2>
          </div>

          <div className="flex flex-col shrink-0">
            <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
              Last processed cycle
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900 mt-1 whitespace-nowrap">
              JUl 2025 (26 Jun–25Jul)
            </span>
          </div>

          <div className="flex flex-col shrink-0">
            <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
              Working Days
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900 mt-1 whitespace-nowrap">
              30
            </span>
          </div>

          <div className="flex flex-col shrink-0">
            <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
              Loss of Day
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900 mt-1 whitespace-nowrap">
              0
            </span>
          </div>

          <div className="flex flex-col shrink-0">
            <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
              Payslip
            </span>
            <button
              type="button"
              onClick={onViewPayslip}
              className="text-xs sm:text-sm md:text-base font-semibold text-[#5B50EC] underline hover:text-[#4338CA] transition-colors cursor-pointer text-left mt-1 whitespace-nowrap"
            >
              View Payslip
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="w-full bg-white rounded-xl shadow-xs p-4 sm:p-5 md:p-6 border border-slate-100/80 flex flex-col gap-3 sm:gap-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Payment Information
            </h3>
            <div className="border-b border-slate-100 -mt-1 mb-1" />

            <DetailRow
              label="Salary Payment Mode"
              value="Bank Transfer"
              labelWidthClass="w-[180px] sm:w-[210px]"
            />

            <h4 className="text-sm sm:text-base font-bold text-slate-900 pt-3">
              Bank Information
            </h4>

            <div className="flex flex-col gap-2.5 sm:gap-3">
              <DetailRow
                label="Bank Name"
                value="Bank of aroda"
                labelWidthClass="w-[180px] sm:w-[210px]"
              />
              <DetailRow
                label="Account Number"
                value="2345678906789"
                labelWidthClass="w-[180px] sm:w-[210px]"
              />
              <DetailRow
                label="IFSC Code"
                value="234567890"
                labelWidthClass="w-[180px] sm:w-[210px]"
              />
              <DetailRow
                label="Name on the Account"
                value="Alexander"
                labelWidthClass="w-[180px] sm:w-[210px]"
              />
              <DetailRow
                label="Branch"
                value="N/A"
                labelWidthClass="w-[180px] sm:w-[210px]"
              />
            </div>
          </div>

          <div className="w-full bg-white rounded-xl shadow-xs p-4 sm:p-5 md:p-6 border border-slate-100/80 flex flex-col gap-3 sm:gap-3.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Statutory Information
            </h3>
            <div className="border-b border-slate-100 -mt-1 mb-1" />

            <h4 className="text-sm sm:text-base font-bold text-slate-900 pt-1">
              PF Account Information
            </h4>

            <div className="flex flex-col gap-2.5 sm:gap-3">
              <DetailRow
                label="PF Status"
                value="Enabled"
                labelWidthClass="w-[190px] sm:w-[220px]"
              />
              <DetailRow
                label="PF Number"
                value="DFG3456789045678"
                labelWidthClass="w-[190px] sm:w-[220px]"
              />
              <DetailRow
                label="Universal Account Number"
                value="1234567890567"
                labelWidthClass="w-[190px] sm:w-[220px]"
              />
              <DetailRow
                label="PF Join Date"
                value="21 Jan 2025"
                labelWidthClass="w-[190px] sm:w-[220px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-xl shadow-xs p-4 sm:p-5 md:p-6 border border-slate-100/80 flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Identity Information
            </h3>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              Photo ID
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:gap-3.5">
            <div className="flex items-center gap-2">
              <IndiaFlag className="w-4 h-3 sm:w-5 sm:h-3.5" />
              <span className="text-xs sm:text-sm font-medium text-slate-900">
                Aadhar Card
              </span>
              <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#4CAF50] text-white">
                Verified
              </span>
            </div>
            <div className="border-b border-slate-100 -mt-1 mb-1" />

            <div className="flex flex-col gap-2.5 sm:gap-3">
              <DetailRow
                label="Aadhar Number"
                value="49087579678"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Date of Birth"
                value="19 Feb 2003"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Address"
                value="Flat 502, Sun..."
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Enrollment Number"
                value="49087579678"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Name"
                value="Alexander"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Gender"
                value="Female"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-3.5 pt-2">
            <div className="flex items-center gap-2">
              <IndiaFlag className="w-4 h-3 sm:w-5 sm:h-3.5" />
              <span className="text-xs sm:text-sm font-medium text-slate-900">
                Pan Card
              </span>
              <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#4CAF50] text-white">
                Verified
              </span>
            </div>
            <div className="border-b border-slate-100 -mt-1 mb-1" />

            <div className="flex flex-col gap-2.5 sm:gap-3">
              <DetailRow
                label="Permanent Account Number"
                value="XXXXXXXX9678"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Date Of Birth"
                value="19 Feb 2003"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Name"
                value="Alexander"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
              <DetailRow
                label="Father's Name"
                value="Jones"
                labelWidthClass="w-[200px] sm:w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
