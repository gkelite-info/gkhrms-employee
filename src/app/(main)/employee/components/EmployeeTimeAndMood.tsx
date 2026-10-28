"use client"

import {  useState  } from "react";
import { SignIn, SignOut } from "phosphor-react"

const moods = [
  { id: "happy", label: "Happy", icon: "/images/happy.png" },
  { id: "sad", label: "Sad", icon: "/images/sad.png" },
  { id: "cool", label: "Cool", icon: "/images/cool.png" },
  { id: "relaxed", label: "Relaxed", icon: "/images/relaxed.png" },
  { id: "angry", label: "Angry", icon: "/images/angry.png" },
]

export default function EmployeeTimeAndMood() {
  const [selectedMood, setSelectedMood] = useState<string>("happy")

  return (
    <div className="w-full bg-[#F9FAFB] rounded-xl shadow-sm border border-gray-100 flex items-stretch justify-between p-3.5 gap-4">
      {/* Left Column: Login Times & Working Hours */}
      <div className="w-[58%] flex flex-col justify-between py-0.5">
        {/* Row 1: Today's Login Time */}
        <div className="flex items-start justify-between pb-2 border-b border-gray-100">
          <span className="text-xs text-[#323232] font-medium pt-0.5">
            Today&apos;s Login Time
          </span>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center gap-1.5 text-[#007752] font-medium">
              <span>Log In</span>
              <SignIn size={18} color="#007752" weight="fill" />
              <span>:</span>
              <span className="font-semibold">10:30 AM</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#B31212] font-medium">
              <span>Log Out</span>
              <SignOut size={18} color="#B31212" weight="fill" />
              <span>:</span>
              <span className="font-semibold">07:30 PM</span>
            </div>
          </div>
        </div>

        {/* Row 2, 3, 4: Hours Breakdown */}
        <div className="flex flex-col gap-2 pt-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[#323232] font-medium">Total Effective Hours</span>
            <span className="text-[#100E2E] font-semibold">5 Hours</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#323232] font-medium">Total Break</span>
            <span className="text-[#100E2E] font-semibold">2 Hours</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#323232] font-medium">Total Gross Hours</span>
            <span className="text-[#100E2E] font-semibold">1 Hour</span>
          </div>
        </div>
      </div>

      {/* Right Column: Mood Tracker */}
      <div className="w-[42%] flex items-center justify-center">
        <div className="w-full h-full min-h-[135px] bg-gradient-to-b from-[#D0CEF7] to-[#E7E7E8] rounded-xl flex flex-col justify-between py-2.5 px-2 shadow-inner">
          <div className="text-center">
            <h3 className="font-semibold text-white text-sm tracking-wide">
              Mood Tracker
            </h3>
          </div>

          <div className="flex items-center justify-around gap-1 px-1">
            {moods.map((m) => {
              const isSelected = selectedMood === m.id
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMood(m.id)}
                  className={`flex flex-col items-center justify-center group focus:outline-none transition-all duration-150 ${
                    isSelected ? "scale-110" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`p-0.5 rounded-full transition-transform duration-200 group-hover:-translate-y-1 ${
                      isSelected ? "ring-2 ring-white/80 shadow-sm" : ""
                    }`}
                  >
                    <img
                      src={m.icon}
                      alt={m.label}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <span
                    className={`text-[8px] mt-1 font-medium transition-colors ${
                      isSelected ? "text-[#272372] font-bold" : "text-[#111827]"
                    }`}
                  >
                    {m.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
