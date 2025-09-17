"use client"
import React from "react"
import { Bank, ClockAfternoon, FileText } from "phosphor-react"

// Dashboard item type
type DashboardItemProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
  circleBgColor?: string
}

const PayroleDashboardCard: React.FC = () => {
  const dashboardItems: DashboardItemProps[] = [
    {
      icon: <FileText size={20} color="#fff" />,
      title: "Salary File Generated",
      subtitle: "Completed on June 25, 2025",
      circleBgColor: "#51B677",
    },
    {
      icon: <ClockAfternoon size={20} color="#fff" />,
      title: "Approvals Pending",
      subtitle: "3 departments pending approval",
      circleBgColor: "#3B82F6",
    },
    {
      icon: <Bank size={20} color="#fff" />,
      title: "Disbursement",
      subtitle: "Scheduled for June 30, 2025",
      circleBgColor: "#D1D5DB",
    },
  ]

  const complianceItems = [
    { label: "PF", color: "#5EC38A" },
    { label: "ESI", color: "#FBD56B" },
    { label: "TDS", color: "#F67062" },
  ]

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-[clamp(1rem,2vw,1.5rem)] flex flex-col items-center gap-6">
      <h3 className="text-[#323232] font-semibold text-center">
        Payroll Cycle Status
      </h3>

      <div className="w-full flex flex-col gap-6">
        {dashboardItems.map((item, idx) => (
          <DashboardItem key={idx} {...item} />
        ))}
      </div>

      <h3 className="text-[#323232] font-semibold text-center mt-5">
        Compliance Alerts
      </h3>

      <div className="w-full flex flex-col gap-3 pl-4">
        {complianceItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-base font-semibold w-[35px]">
              {item.label}
            </span>
            <span
              className="w-[200px] h-[25px] rounded-md"
              style={{ backgroundColor: item.color }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PayroleDashboardCard

const DashboardItem: React.FC<DashboardItemProps> = ({
  icon,
  title,
  subtitle,
  circleBgColor = "#51B677",
}) => (
  <div className="flex items-start gap-4">
    <span
      className="w-[40px] h-[40px] flex justify-center items-center rounded-full"
      style={{ backgroundColor: circleBgColor }}
    >
      {icon}
    </span>
    <div className="flex flex-col gap-0.5">
      <span className="text-[#323232] text-base font-semibold">{title}</span>
      <span className="text-xs text-[#585858]">{subtitle}</span>
    </div>
  </div>
)
