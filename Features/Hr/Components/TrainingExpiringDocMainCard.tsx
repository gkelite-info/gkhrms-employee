"use client"
import React from "react"
import ExpiringDocument from "./ExpiringDocument"

type ProgramSectionProps = {
  number: number
  title: string
  programs: string[]
}

const ProgramSection: React.FC<ProgramSectionProps> = ({
  number,
  title,
  programs,
}) => (
  <div className="w-full flex flex-col lg:flex-row items-start gap-2">
    <div className="w-full lg:w-1/2 flex items-center gap-2">
      <span className="w-[25px] h-[25px] flex rounded-full justify-center items-center bg-[#272372] text-white font-semibold">
        {number}
      </span>
      <span className="text-[#272372] text-xs">{title}</span>
    </div>
    <div className="w-full lg:w-1/2 flex flex-col gap-2">
      {programs.map((program, idx) => (
        <span key={idx} className="text-xs text-[#4C488F]">
          {program}
        </span>
      ))}
    </div>
  </div>
)

const TrainingExpiringDocMainCard: React.FC = () => {
  const onGoingPrograms = [
    "AI ML - Certification",
    "Project Management - Certification",
    "Project Management - Certification",
    "Project Management - Certification",
  ]

  const upcomingPrograms = [
    "AI ML - Certification",
    "Project Management - Certification",
    "Project Management - Certification",
    "Project Management - Certification",
  ]

  return (
    <div className="w-full flex flex-col lg:flex-row gap-2.5">
      <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 flex flex-col gap-6">
        <h3 className="text-[#323232] font-semibold text-sm">
          Training Programs
        </h3>
        <div className="w-full flex flex-col gap-6">
          <ProgramSection
            number={1}
            title="On Going Programs:"
            programs={onGoingPrograms}
          />
          <ProgramSection
            number={2}
            title="Upcoming Programs:"
            programs={upcomingPrograms}
          />
        </div>
      </div>

      {/* Right Section */}
      <ExpiringDocument />
    </div>
  )
}

export default TrainingExpiringDocMainCard
