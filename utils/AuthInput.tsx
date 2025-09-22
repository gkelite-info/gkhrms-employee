import React, { FC, InputHTMLAttributes } from "react"

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const AuthInput: FC<AuthInputProps> = ({ label, className, ...inputProps }) => {
  return (
    <div className="w-full flex flex-col gap-0.5">
      {label && (
        <span className="text-xs font-medium text-[#585858]">{label}</span>
      )}
      <input
        className={`w-full h-[42px] border border-gray-900 rounded-md outline-none px-2 ${className}`}
        {...inputProps}
      />
    </div>
  )
}

export default AuthInput
