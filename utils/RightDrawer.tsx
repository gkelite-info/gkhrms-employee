"use client"
import React, { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RightDrawerProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  width?: string
}

const RightDrawer: React.FC<RightDrawerProps> = ({
  isOpen,
  onClose,
  children,
  width = "w-1/3",
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-gradient-to-b from-black/50 to-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={`fixed top-0 right-0 h-full ${width}  z-50  flex flex-col`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex-1 overflow-auto ">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default RightDrawer
