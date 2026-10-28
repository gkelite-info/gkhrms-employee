"use client"

import {
  Info,
  UsersThree,
  Clock,
  WifiHigh,
  FileText,
} from "phosphor-react"
import { WfhGuidelineItem } from "./types"

const guidelines: WfhGuidelineItem[] = [
  {
    id: "manager-approval",
    title: "Manager Approval Required",
    description: "All WFH requests are subject to manager approval.",
    icon: UsersThree,
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#EA580C]",
  },
  {
    id: "available-hours",
    title: "Be Available During Working Hours",
    description:
      "Ensure you are available and reachable during your regular working hours.",
    icon: Clock,
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#059669]",
  },
  {
    id: "stable-internet",
    title: "Stable Internet Connection",
    description:
      "Maintain a stable internet connection to attend calls, meetings and collaborate with the team.",
    icon: WifiHigh,
    iconBg: "bg-[#FAF5FF]",
    iconColor: "text-[#9333EA]",
  },
  {
    id: "attachment-note",
    title: "Attachment (Optional)",
    description:
      "You can attach supporting documents if required (e.g., personal reasons, travel details, etc.).",
    icon: FileText,
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
  },
]

export default function WfhGuidelinesCard() {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-xs flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0">
          <Info size={18} weight="bold" />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
            Work From Home Guidelines
          </h3>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Please go through the following guidelines before submitting your request.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {guidelines.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="flex items-start gap-3.5">
              <div
                className={`w-9 h-9 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
              >
                <Icon size={18} weight="bold" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-gray-900 leading-tight">
                  {item.title}
                </span>
                <span className="text-[11px] text-gray-400 font-medium leading-relaxed mt-0.5">
                  {item.description}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
