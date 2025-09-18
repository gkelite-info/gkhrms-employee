"use client"
import Image from "next/image"
import { SignIn, SignOut } from "phosphor-react"
import React from "react"

const LogTimeRow = ({
  label,
  time,
  color,
  icon,
}: {
  label: string
  time: string
  color: string
  icon: React.ReactNode
}) => (
  <div className="flex items-center gap-1 w-full h-[49%]">
    <p className={`font-medium text-xs`} style={{ color }}>
      {label}
    </p>
    {icon}
    <p className={`text-xs`} style={{ color }}>
      :
    </p>
    <p className={`text-xs`} style={{ color }}>
      {time}
    </p>
  </div>
)

const StatsRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-5 h-[32%]">
    <p className="text-xs font-medium text-[#323232] w-[50%]">{label}</p>
    <p className="text-xs font-semibold text-[#100E2E]">{value}</p>
  </div>
)

const MoodOption = ({ src, label }: { src: string; label: string }) => (
  <div className="flex flex-col justify-center items-center">
    <Image
      width={28}
      height={28}
      src={src}
      alt={label}
      className=" cursor-pointer transition-all hover:h-9 hover:w-9 hover:-translate-y-1 duration-200"
    />
    <p className="text-[8px] text-gray-900 cursor-pointer">{label}</p>
  </div>
)

const LoginLogoutMoodtracker = () => {
  const moods = [
    { src: "/images/happy.png", label: "Happy" },
    { src: "/images/sad.png", label: "Sad" },
    { src: "/images/cool.png", label: "Cool" },
    { src: "/images/relaxed.png", label: "Relaxed" },
    { src: "/images/angry.png", label: "Angry" },
  ]

  return (
    <div className="bg-white rounded-lg flex items-center justify-between h-40 w-[100%] shadow-md p-4">
      <div className="w-[60%] h-full flex flex-col gap-1  rounded-l-lg">
        <div className="flex justify-between h-[35%] w-full">
          <p className="text-xs text-[#323232] font-medium">
            Today&apos;s Login Time
          </p>
          <div className="w-[45%] flex flex-col justify-between">
            <LogTimeRow
              label="Log In"
              time="10:30 AM"
              color="#007752"
              icon={<SignIn size={19} color="#007752" weight="fill" />}
            />
            <LogTimeRow
              label="Log Out"
              time="07:30 PM"
              color="#B31212"
              icon={<SignOut size={19} color="#B31212" weight="fill" />}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col justify-between h-[65%] w-full">
          <StatsRow label="Total Effective Hours" value="5 Hours" />
          <StatsRow label="Total Break" value="2 Hours" />
          <StatsRow label="Total Gross Hours" value="1 Hour" />
        </div>
      </div>
      <div className="w-[40%] h-full flex items-center justify-center">
        <div className="h-[100%] w-[100%] flex flex-col rounded-lg bg-gradient-to-b from-[#D0CEF7] to-[#E7E7E8]">
          <div className="flex items-end justify-center h-[30%] rounded-t-lg">
            <h3 className="font-semibold text-white">Mood Tracker</h3>
          </div>
          <div className="flex items-center justify-center gap-3 h-[70%] rounded-b-lg">
            {moods.map((m, idx) => (
              <MoodOption key={idx} src={m.src} label={m.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLogoutMoodtracker
