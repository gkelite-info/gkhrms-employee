"use client"
import { Cake, UsersThree } from "phosphor-react"
import React from "react"

const BirthdatNewJoinCount = () => {
  return (
    <div className="shadow-md h-15 w-[95%] bg-[#C5C1FF] mt-2 p-3 rounded-lg flex justify-between">
      <div className="h-full w-[32%] bg-white flex items-center justify-center gap-1 px-3 rounded-lg">
        <Cake size={16} color="#1F2937" />
        <p style={{ fontWeight: "500", fontSize: 10, color: "#323232" }}>
          Birthdays
        </p>
      </div>
      <div className="h-full w-[32%] bg-white flex items-center justify-center rounded-lg">
        <p style={{ fontSize: 10, fontWeight: "500", color: "#323232" }}>
          0 Work Anniversaries
        </p>
      </div>
      <div className="h-full w-[32%] bg-white flex items-center justify-between px-3 rounded-lg">
        <UsersThree size={16} color="#1F2937" />
        <p style={{ fontWeight: "500", fontSize: 10, color: "#323232" }}>
          0 New Joiners
        </p>
      </div>
    </div>
  )
}

export default BirthdatNewJoinCount
