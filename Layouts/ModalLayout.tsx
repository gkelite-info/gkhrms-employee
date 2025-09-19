"use client"

import React, { FC, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ModalLayoutProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

const ModalLayout: FC<ModalLayoutProps> = ({
  open,
  onClose,
  children,
  className,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            className={`relative z-10 overflow-hidden rounded-lg shadow-lg ${
              className || ""
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ModalLayout
