"use client"
import React, { FC } from "react"
import { Plus, IconProps } from "phosphor-react"

interface IconButtonProps {
  onClick?: () => void
  label?: string
  className?: string
  Icon?: FC<IconProps>
}

const IconButton: FC<IconButtonProps> = ({
  onClick,
  label = "Add Employee",
  className = "w-[150px] bg-[#272372]",
  Icon = Plus,
}) => {
  return (
    <button
      onClick={onClick}
      className={` h-[40px]  flex gap-2 justify-center items-center rounded-md cursor-pointer ${
        className || ""
      }`}
    >
      <Icon size={20} className="text-white" />
      <span className="text-xs text-white">{label}</span>
    </button>
  )
}

export default IconButton
