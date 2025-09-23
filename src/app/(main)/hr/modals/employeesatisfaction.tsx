"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EmployeesSatisfactionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="modal"
            className="bg-white p-6 rounded-lg w-96 relative"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 cursor-pointer"
              onClick={onClose}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold mb-4">Total Employees</h2>
            <p>Custom charts, filters, or a list of all employees here…</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
