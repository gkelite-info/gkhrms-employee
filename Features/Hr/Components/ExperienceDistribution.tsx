import React from "react"
import DonutChart from "../../../utils/donotChat"

export interface DonotChatData {
  name: string
  value: number
  color: string
}

const ExperienceDistribution = () => {
  const chartData: DonotChatData[] = [
    { name: "HR", value: 120, color: "#110F2C" },
    { name: "Managers", value: 80, color: "#2A266E" },
    { name: "Employees", value: 200, color: "#554DDD" },
    { name: "Admins", value: 50, color: "#C6C4F4" },
  ]

  return (
    <div className="w-full lg:w-[40%] h-[330px] bg-white rounded-lg p-4 shadow flex flex-col  gap-4 items-center">
      <h3 className="text-[#323232] font-semibold text-sm">
        Experience Distribution
      </h3>
      <div className="w-full h-[86%] flex justify-center items-center relative">
        <DonutChart chartData={chartData} />
        {/* top left */}
        <div className="w-[170px] h-[100px]  absolute top-1 left-0 flex items-start gap-1">
          <span className="w-[3px] h-[3px] mt-1 rounded-full bg-black"></span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-[#323232]">
              Total Experience : &lt; 1 year
            </span>
            <span className="text-[10px] text-[#323232]">Males</span>
            <span className="text-[10px] text-[#323232]">Females</span>
            <span className="text-[10px] text-[#323232]">Total</span>
          </div>
        </div>
        {/* top right */}
        <div className="w-[170px] h-[100px]  absolute top-1 -right-5 flex items-start gap-1">
          <span className="w-[3px] h-[3px] mt-1 rounded-full bg-black"></span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-[#323232]">
              Total Experience : &gt; 1 year
            </span>
            <span className="text-[10px] text-[#323232]">Males</span>
            <span className="text-[10px] text-[#323232]">Females</span>
            <span className="text-[10px] text-[#323232]">Total</span>
          </div>
        </div>
        {/* bottom left */}
        <div className="w-[170px] h-[100px]  absolute -bottom-8 left-0 flex items-start gap-1">
          <span className="w-[3px] h-[3px] mt-1 rounded-full bg-black"></span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-[#323232]">
              Total Experience : &gt; 4 year
            </span>
            <span className="text-[10px] text-[#323232]">Males</span>
            <span className="text-[10px] text-[#323232]">Females</span>
            <span className="text-[10px] text-[#323232]">Total</span>
          </div>
        </div>
        {/* bottom right */}
        <div className="w-[170px] h-[100px]  absolute -bottom-8 -right-5 flex items-start gap-1">
          <span className="w-[3px] h-[3px] mt-1 rounded-full bg-black"></span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-[#323232]">
              Total Experience : &gt; 6 year
            </span>
            <span className="text-[10px] text-[#323232]">Males</span>
            <span className="text-[10px] text-[#323232]">Females</span>
            <span className="text-[10px]">Total</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceDistribution
