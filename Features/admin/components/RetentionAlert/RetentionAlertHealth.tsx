"use client"
import React, { useState } from "react"
import IconButton from "../../../../utils/IconButton"
import { DownloadSimple } from "phosphor-react"
import ToggleSwitch from "../../../../utils/ToggleSwitch"

const RetentionAlertHealth = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="w-[40%] h-full rounded-lg flex flex-col gap-2.5">
      <div className="w-full h-[80%] bg-white p-3 rounded-lg"></div>
      <IconButton
        label="Download Retention Report"
        className="w-[220px] bg-[#874DE6]"
        Icon={DownloadSimple}
      />
      <div className="w-full flex gap-2 items-center">
        <ToggleSwitch
          checked={enabled}
          onChange={() => setEnabled((prev) => !prev)}
        />
        <span className="text-xs text-[#464646] font-medium">
          Retention Alert Health
        </span>
      </div>
    </div>
  )
}

export default RetentionAlertHealth
