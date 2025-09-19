"use client"
import React from "react"
import StandLineGraph from "../../../utils/StandLineGraph"
import Approvals from "./Approvals"
import { CheckCircle, Clock, UsersThree } from "phosphor-react"
import ExperienceDistribution from "./ExperienceDistribution"

const DashboardGraphsContainer = () => {
  const chartData = [
    { name: "HR", value: 200, color: "#8248E3" },
    { name: "Managers", value: 400, color: "#1E90FF" },
    { name: "Employees", value: 300, color: "#28A745" },
    { name: "Admins", value: 240, color: "#FF5733" },
  ]
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-2.5">
      <div className="w-full lg:w-[30%] bg-white h-[330px] rounded-lg p-4 shadow flex flex-col justify-center items-center">
        <h3 className="text-[#323232] font-semibold text-sm">
          Headcount by Department
        </h3>
        <StandLineGraph data={chartData} />
      </div>
      <ExperienceDistribution />
      <div className="w-full lg:w-[30%] bg-white h-[330px] rounded-lg p-4 shadow flex flex-col  items-center gap-5">
        <h3 className="text-[#323232] font-semibold text-sm">Approvals</h3>
        <div className="w-full p-4 flex flex-col justify-center items-center h-[85%] gap-6">
          <Approvals
            icon={<Clock size={22} color="#fff" />}
            count={10}
            label="Pending Approvals"
            bgColor="#51B677"
          />
          <Approvals
            icon={<CheckCircle size={22} color="#fff" />}
            count={25}
            label="Completed Tasks"
            bgColor="#4A90E2"
          />
          <Approvals
            icon={<UsersThree size={22} color="#fff" />}
            count={200}
            label="Employees"
            bgColor="#8248E3"
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardGraphsContainer
