"use client"

import React from "react"
import { Star } from "phosphor-react"

interface SkillItem {
  name: string
  percentage: number
}

const skills: SkillItem[] = [
  { name: "Design Quality", percentage: 90 },
  { name: "Creativity", percentage: 80 },
  { name: "Timeliness", percentage: 70 },
  { name: "Collaboration", percentage: 85 },
]

export default function SkillsAndAchievements() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
      {/* 1. Skill Breakdown Card (Left, 7 columns) */}
      <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-gray-100 flex flex-col justify-between">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight mb-4">
          Skill Breakdown
        </h3>

        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-gray-800">
                {skill.name}
              </span>

              <div className="flex items-center gap-3">
                {/* Progress bar */}
                <div className="flex-1 h-3.5 bg-gray-100 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#8571EE] to-[#C5C1FF] transition-all duration-500 shadow-xs"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>

                {/* Percentage label */}
                <span className="text-xs font-bold text-gray-700 min-w-[36px] text-right">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Achievements & Recognition Card (Right, 5 columns) */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-gray-100 flex flex-col">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight mb-5">
          Achievements & Recognition
        </h3>

        <div className="flex flex-col gap-4 my-auto">
          {/* Star of the Month */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
            <Star
              size={22}
              weight="fill"
              className="text-[#EAB308] shrink-0"
            />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              Star of the Month
            </span>
          </div>

          {/* Special Appreciation */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
            <Star
              size={22}
              weight="fill"
              className="text-[#EAB308] shrink-0"
            />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              Special Appreciation
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
