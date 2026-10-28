"use client"

import React, { useState, useRef, useEffect } from "react"
import { ArrowRight, X } from "phosphor-react"
import { motion, AnimatePresence } from "framer-motion"

interface PaginationJumpModalProps {
  isOpen: boolean
  onClose: () => void
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  quickJumpPages?: number[]
}

export default function PaginationJumpModal({
  isOpen,
  onClose,
  totalPages,
  currentPage,
  onPageChange,
  quickJumpPages,
}: PaginationJumpModalProps) {
  const [jumpValue, setJumpValue] = useState("")
  const [jumpError, setJumpError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setJumpValue("")
      setJumpError("")
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 60)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const parsedJump = parseInt(jumpValue, 10)
  const isValidJump = !isNaN(parsedJump) && parsedJump >= 1 && parsedJump <= totalPages

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    if (raw === "") {
      setJumpValue("")
      setJumpError("")
      return
    }
    if (!/^\d+$/.test(raw)) return
    const num = parseInt(raw, 10)
    if (num <= 0) {
      setJumpValue("1")
      setJumpError("Page must be 1 or greater")
      return
    }
    if (num > totalPages) {
      setJumpValue(String(totalPages))
      setJumpError(`Max page is ${totalPages}`)
      return
    }
    setJumpValue(String(num))
    setJumpError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidJump) {
      onPageChange(parsedJump)
      onClose()
    }
  }

  const milestones = (() => {
    if (quickJumpPages && quickJumpPages.length > 0) return quickJumpPages
    if (totalPages <= 10) return []
    const quarter = Math.round(totalPages * 0.25)
    const half = Math.round(totalPages * 0.5)
    const threeQuarters = Math.round(totalPages * 0.75)
    const set = new Set<number>()
    ;[quarter, half, threeQuarters].forEach((p) => {
      if (p > 1 && p < totalPages) set.add(p)
    })
    return Array.from(set).filter((p) => p >= 1 && p <= totalPages)
  })()

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[310px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1F2433]">Jump to Page</span>
                <span className="text-[10px] font-bold text-[#5B50EC] bg-[#F1F0FD] px-2 py-0.5 rounded-lg border border-[#5B50EC]/20">
                  1 – {totalPages}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={15} weight="bold" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="number"
                  min={1}
                  max={totalPages}
                  value={jumpValue}
                  onChange={handleInputChange}
                  disabled={totalPages <= 1}
                  placeholder={totalPages <= 1 ? "Disabled" : `1 - ${totalPages}`}
                  className="flex-1 min-w-0 px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#5B50EC] focus:ring-2 focus:ring-[#5B50EC]/15 transition-all no-spinner [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  type="submit"
                  disabled={!isValidJump || totalPages <= 1}
                  className="px-4 py-2 rounded-xl bg-[#5B50EC] hover:bg-[#483fd4] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Go</span>
                  <ArrowRight size={12} weight="bold" />
                </button>
              </div>

              {jumpError ? (
                <p className="text-[11px] text-red-500 font-medium px-0.5">{jumpError}</p>
              ) : (
                <p className="text-[11px] text-gray-400 font-medium px-0.5">
                  Type a page number between 1 and {totalPages}
                </p>
              )}
            </form>

            {milestones.length > 0 && (
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Quick Milestones
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {milestones.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        onPageChange(m)
                        onClose()
                      }}
                      className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center select-none shadow-2xs ${
                        currentPage === m
                          ? "bg-[#5B50EC] text-white border-[#5B50EC] shadow-xs"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-[#F1F0FD] hover:text-[#5B50EC] hover:border-[#5B50EC]/30"
                      }`}
                    >
                      Page {m}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
