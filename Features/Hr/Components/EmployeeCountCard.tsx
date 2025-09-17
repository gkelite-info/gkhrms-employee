"use client"
import {
  Briefcase,
  House,
  Smiley,
  TrendDown,
  User,
  UsersThree,
} from "phosphor-react"
import CountCard from "./CountCard"

const DashboardCards = () => {
  const cardsData = [
    {
      title: "Total Employees",
      count: 200,
      icon: <UsersThree color="#8248E3" size={27} />,
      iconBg: "#E0DEFBD6",
    },
    {
      title: "Active Employees",
      count: 150,
      icon: <UsersThree color="#8248E3" size={27} />,
      iconBg: "#E0DEFBD6",
    },
    {
      title: "Leave Employees",
      count: 150,
      icon: <UsersThree color="#8248E3" size={27} />,
      iconBg: "#E0DEFBD6",
    },
    {
      title: "Work From Home",
      count: 10,
      icon: <House size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    //
    {
      title: "New Hire",
      count: 10,
      icon: <User size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    {
      title: "Open Positions",
      count: 10,
      icon: <Briefcase size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    {
      title: "Attrition Ratio",
      count: 10,
      icon: <TrendDown size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
    {
      title: "Employee Satisfaction",
      count: 10,
      icon: <Smiley size={27} color="#8248E3" />,
      iconBg: "#E0DEFBD6",
    },
  ]

  return (
    <div className="w-full flex flex-wrap gap-6 justify-between">
      {cardsData.map((card, index) => (
        <CountCard
          key={index}
          title={card.title}
          count={card.count}
          icon={card.icon}
          iconBg={card.iconBg}
        />
      ))}
    </div>
  )
}

export default DashboardCards
