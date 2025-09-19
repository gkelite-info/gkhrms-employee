"use client"
import React, { FC } from "react"

interface ToggleSwitchProps {
  checked: boolean
  onChange: () => void
  className?: string
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-[22px] w-10 items-center rounded-full transition-colors duration-300 focus:outline-none ${
        checked ? "bg-green-500" : "bg-gray-300"
      } ${className || ""}`}
    >
      <span
        className={`inline-block h-[17px] w-[17px] transform rounded-full bg-white transition-transform duration-300 ${
          checked ? "translate-x-4" : "translate-x-1"
        }`}
      />
    </button>
  )
}

export default ToggleSwitch
