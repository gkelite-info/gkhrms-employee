"use client"
import {
  Briefcase,
  House,
  Key,
  Smiley,
  TrendDown,
  User,
  UsersThree,
} from "phosphor-react"
import CountCard from "./CountCard"
import { useState } from "react"
import TotalEmployeesModal from "@/app/(main)/hr/modals/totalemployees"
import ActiveEmployeesModal from "@/app/(main)/hr/modals/activeemployees"
import LeaveEmployeesModal from "@/app/(main)/hr/modals/leaveEmployees"
import WorkFromHomeEmployeesModal from "@/app/(main)/hr/modals/workfromhome"
import NewHireEmployeesModal from "@/app/(main)/hr/modals/newhire"
import OpeningsEmployeesModal from "@/app/(main)/hr/modals/openings"
import AttritionRatioEmployeesModal from "@/app/(main)/hr/modals/attritionratio"
import EmployeesSatisfactionModal from "@/app/(main)/hr/modals/employeesatisfaction"

const DashboardCards = () => {

  const [openModal, setOpenModal] = useState<string | null>(null)

  const cardsData = [
    {
      key: "total",
      title: "Total Employees",
      count: 200,
      icon: <UsersThree color="#8248E3" size={27} />,
      iconBg: "#E0DEFBD6",
    },
    {
      key: 'active',
      title: "Active Employees",
      count: 150,
      icon: <UsersThree color="#8248E3" size={27} />,
      iconBg: "#E0DEFBD6",
    },
    {
      key: 'leave',
      title: "Leave Employees",
      count: 150,
      icon: <UsersThree color="#8248E3" size={27} />,
      iconBg: "#E0DEFBD6",
    },
    {
      key: 'workfromhome',
      title: "Work From Home",
      count: 10,
      icon: <House size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    //
    {
      key: 'newhire',
      title: "New Hire",
      count: 10,
      icon: <User size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    {
      key: 'openings',
      title: "Open Positions",
      count: 10,
      icon: <Briefcase size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    {
      key: 'attrition',
      title: "Attrition Ratio",
      count: 10,
      icon: <TrendDown size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    {
      key: 'satisfaction',
      title: "Employee Satisfaction",
      count: 10,
      icon: <Smiley size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
  ]

  return (
    <>
      <div className="w-full flex flex-wrap gap-6 justify-between">
        {cardsData.map((card) => (
          <div
            key={card.key}
            onClick={() => setOpenModal(card.key)}
            className="cursor-pointer"
          >
            <CountCard
              title={card.title}
              count={card.count}
              icon={card.icon}
              iconBg={card.iconBg}
            />
          </div>
        ))}
      </div>

      <TotalEmployeesModal
        isOpen={openModal === 'total'}
        onClose={() => setOpenModal(null)}
      />
      <ActiveEmployeesModal
        isOpen={openModal === 'active'}
        onClose={() => setOpenModal(null)}
      />
      <LeaveEmployeesModal
        isOpen={openModal === 'leave'}
        onClose={() => setOpenModal(null)}
      />
      <WorkFromHomeEmployeesModal
        isOpen={openModal === 'workfromhome'}
        onClose={() => setOpenModal(null)}
      />
      <NewHireEmployeesModal
        isOpen={openModal === 'newhire'}
        onClose={() => setOpenModal(null)}
      />
      <OpeningsEmployeesModal
        isOpen={openModal === 'openings'}
        onClose={() => setOpenModal(null)}
      />
      <AttritionRatioEmployeesModal
        isOpen={openModal === 'attrition'}
        onClose={() => setOpenModal(null)}
      />
      <EmployeesSatisfactionModal
        isOpen={openModal === 'satisfaction'}
        onClose={() => setOpenModal(null)}
      />
    </>
  )
}

export default DashboardCards
