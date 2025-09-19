import React, { FC, ReactNode } from "react"

interface ModalLayoutProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string // ✅ allow size customization
}

const ModalLayout: FC<ModalLayoutProps> = ({
  open,
  onClose,
  children,
  className,
}) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={`relative z-10 overflow-hidden  rounded-lg shadow-lg ${
          className || ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalLayout
