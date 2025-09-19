"use client"
import { MagnifyingGlass } from "phosphor-react"
import React, { ChangeEvent } from "react"

interface SearchInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-[#E5E5E5] gap-3 h-[45px] w-[50%] rounded-full px-3">
      <MagnifyingGlass
        size={19}
        weight="bold"
        className="text-[#323232] cursor-pointer"
      />
      <input
        placeholder="Search employees or action (Ex: Leave Request)"
        className="text-[#323232] font-medium text-xs focus:outline-none w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchInput
