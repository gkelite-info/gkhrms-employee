"use client"
import { CaretLeft } from "phosphor-react"
import React, { FC, ReactNode } from "react"
import IconButton from "./IconButton"
import { useRouter } from "next/navigation"

interface CardLayoutProps {
  title: string
  description: string
  children: ReactNode
  btnLable?: string
}

const AdminAutomationHub: FC<CardLayoutProps> = ({
  title,
  description,
  children,
  btnLable = "Add Employee",
}) => {
  const router = useRouter()
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#DDDBFA] p-6">
      <div className="w-full h-full bg-[#F9FAFB] rounded-lg p-4 px-2">
        <CaretLeft
          onClick={() => router.back()}
          className="cursor-pointer"
          size={20}
        />
        <div className="w-full  h-[95%] px-6 flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-[#323232]">{title}</span>
          <span className="text-xs font-medium text-[#464646]">
            {description}
          </span>
          <div className="w-full flex justify-end items-end">
            <IconButton label={btnLable} />
          </div>
          <div className="w-full h-[76%] overflow-y-scroll">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AdminAutomationHub
