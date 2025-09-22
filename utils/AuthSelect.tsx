import React, { FC, SelectHTMLAttributes } from "react"

interface AuthSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: { value: string | number; label: string }[]
}

const AuthSelect: FC<AuthSelectProps> = ({
  label,
  options,
  className,
  ...selectProps
}) => {
  return (
    <div className="w-full flex flex-col gap-0.5">
      {label && (
        <span className="text-xs font-medium text-[#585858]">{label}</span>
      )}
      <select
        className={`w-full h-[42px] border border-gray-900 rounded-md outline-none px-2 ${className}`}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default AuthSelect
