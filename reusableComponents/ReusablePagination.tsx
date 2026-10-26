"use client"

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import {
  CaretLeft,
  CaretRight,
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretDown,
  ArrowRight,
  X,
} from "phosphor-react"
import { motion, AnimatePresence } from "framer-motion"
import ReusableDropdown from "./ReusableDropdown"

export interface ReusablePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems?: number
  pageSize?: number
  onPageSizeChange?: (size: number) => void
  pageSizeOptions?: number[]
  showPageSize?: boolean
  showTotalInfo?: boolean
  showJumpToPage?: boolean
  quickJumpPages?: number[]
  className?: string
}

export default function ReusablePagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize = 10,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  showPageSize = true,
  showTotalInfo = true,
  showJumpToPage = true,
  quickJumpPages,
  className = "",
}: ReusablePaginationProps) {
  const [isJumpOpen, setIsJumpOpen] = useState(false)
  const [jumpValue, setJumpValue] = useState("")
  const [jumpError, setJumpError] = useState("")
  const [openUpward, setOpenUpward] = useState(false)

  const jumpDropdownRef = useRef<HTMLDivElement>(null)
  const jumpInputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null)

  const calculatePosition = useCallback(() => {
    if (!jumpDropdownRef.current) return
    const rect = jumpDropdownRef.current.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top
    setOpenUpward(spaceBelow < 200 && spaceAbove > spaceBelow)
  }, [])

  useEffect(() => {
    if (isJumpOpen) {
      calculatePosition()
      setJumpValue("")
      setJumpError("")
      const timer = setTimeout(() => {
        if (window.innerWidth < 640) {
          mobileInputRef.current?.focus()
        } else {
          jumpInputRef.current?.focus()
        }
      }, 60)
      return () => clearTimeout(timer)
    }
  }, [isJumpOpen, calculatePosition])

  useEffect(() => {
    if (!isJumpOpen) return
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        jumpDropdownRef.current &&
        !jumpDropdownRef.current.contains(e.target as Node)
      ) {
        setIsJumpOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsJumpOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleEscape)
    window.addEventListener("scroll", calculatePosition, true)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscape)
      window.removeEventListener("scroll", calculatePosition, true)
    }
  }, [isJumpOpen, calculatePosition])

  if (totalPages <= 0) return null

  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages]
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages]
    }
    return [1, "...", currentPage, "...", totalPages]
  }

  const pages = getPageNumbers()
  const startItem = totalItems ? Math.min((currentPage - 1) * pageSize + 1, totalItems) : 0
  const endItem = totalItems ? Math.min(currentPage * pageSize, totalItems) : 0

  const handleJumpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (totalPages <= 1) return

    const num = parseInt(jumpValue, 10)
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      onPageChange(num)
      setIsJumpOpen(false)
      setJumpValue("")
      setJumpError("")
    } else {
      setJumpError(`Enter page (1 - ${totalPages})`)
    }
  }

  const milestones = useMemo(() => {
    if (quickJumpPages && quickJumpPages.length > 0) {
      return quickJumpPages.filter((p) => p >= 1 && p <= totalPages)
    }
    if (totalPages <= 5) return []

    const candidateSteps = [2, 3, 4, 5, 10, 15, 20, 25, 50, 100, 150, 200, 250, 500, 1000]
    const targetStep = totalPages / 4.2

    let selectedStep = candidateSteps[0]
    let minDiff = Math.abs(targetStep - selectedStep)
    for (const step of candidateSteps) {
      const diff = Math.abs(targetStep - step)
      if (diff < minDiff) {
        minDiff = diff
        selectedStep = step
      }
    }

    const result: number[] = []
    for (let p = selectedStep; p < totalPages; p += selectedStep) {
      result.push(p)
    }

    if (
      result.length === 0 ||
      totalPages - result[result.length - 1] >= selectedStep * 0.4
    ) {
      result.push(totalPages)
    } else {
      result[result.length - 1] = totalPages
    }

    return result.filter((p) => p >= 1 && p <= totalPages)
  }, [quickJumpPages, totalPages])
  const parsedJump = parseInt(jumpValue, 10)
  const isValidJump = !isNaN(parsedJump) && parsedJump >= 1 && parsedJump <= totalPages

  return (
    <div
      className={`w-full flex flex-col xl:flex-row xl:items-center justify-between gap-3 pt-3 pb-2 select-none text-xs min-w-0 ${className}`}
    >
      <div className="w-full xl:w-auto flex items-center justify-between xl:justify-start gap-2 sm:gap-3 shrink-0 min-w-0">
        {showTotalInfo && (
          <span className="text-gray-500 font-medium text-xs whitespace-nowrap">
            {totalItems ? (
              <>
                <span className="hidden sm:inline">Showing </span>
                <strong className="text-gray-800">{startItem.toLocaleString()}</strong>-
                <strong className="text-gray-800">{endItem.toLocaleString()}</strong> of{" "}
                <strong className="text-gray-800">{totalItems.toLocaleString()}</strong>
                <span className="hidden sm:inline"> entries</span>
              </>
            ) : (
              `Page ${currentPage} of ${totalPages}`
            )}
          </span>
        )}

        {showPageSize && onPageSizeChange && (
          <div className="flex items-center gap-1.5 ml-auto xl:ml-2 pl-2 border-l border-gray-200 shrink-0">
            <span className="text-gray-500 text-xs">Rows:</span>
            <ReusableDropdown
              value={pageSize}
              options={pageSizeOptions.map((opt) => ({ label: `${opt}`, value: opt }))}
              onChange={(val) => onPageSizeChange(Number(val))}
              buttonClassName="py-1 px-2.5 text-xs h-7.5"
              selectionType="radio"
              align="right"
            />
          </div>
        )}
      </div>

      <div className="flex sm:hidden items-center justify-between w-full gap-1.5 pt-0.5 min-w-0">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex-1 min-w-0 h-9 px-2 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-xs flex items-center justify-center gap-1 shadow-2xs hover:bg-gray-50 active:scale-98 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <CaretLeft size={13} weight="bold" className="shrink-0" />
          <span className="truncate">Prev</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (totalPages > 1) setIsJumpOpen(true)
          }}
          disabled={totalPages <= 1}
          className="shrink-0 h-9 px-2.5 rounded-xl bg-[#F1F0FD] hover:bg-[#E8E6FC] text-[#5B50EC] font-bold text-xs flex items-center justify-center gap-1 transition-all border border-[#5B50EC]/20 cursor-pointer shadow-2xs active:scale-98 disabled:opacity-40"
          title="Tap to jump to page"
          aria-label="Jump to page"
        >
          <span className="whitespace-nowrap">
            <span className="hidden min-[360px]:inline">Page </span>
            {currentPage}
          </span>
          <span className="text-gray-400 font-normal">/</span>
          <span className="text-gray-600 font-semibold">{totalPages}</span>
          {totalPages > 1 && (
            <CaretDown size={11} weight="bold" className="text-[#5B50EC] shrink-0 ml-0.5" />
          )}
        </button>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex-1 min-w-0 h-9 px-2 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-xs flex items-center justify-center gap-1 shadow-2xs hover:bg-gray-50 active:scale-98 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <span className="truncate">Next</span>
          <CaretRight size={13} weight="bold" className="shrink-0" />
        </button>
      </div>

      <div className="hidden sm:flex items-center justify-center xl:justify-end gap-1 sm:gap-1.5 py-1 w-full xl:w-auto">
        <button
          type="button"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-[#F1F0FD] hover:text-[#5B50EC] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-xs shrink-0 cursor-pointer"
          title="First Page"
          aria-label="First page"
        >
          <CaretDoubleLeft size={13} weight="bold" />
        </button>

        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-[#F1F0FD] hover:text-[#5B50EC] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-xs shrink-0 cursor-pointer"
          title="Previous Page"
          aria-label="Previous page"
        >
          <CaretLeft size={13} weight="bold" />
        </button>

        <div className="flex items-center gap-1 shrink-0">
          {pages.map((p, idx) => {
            if (p === "...") {
              return (
                <button
                  key={`ellipsis-${idx}`}
                  type="button"
                  onClick={() => {
                    if (totalPages > 1) {
                      setIsJumpOpen(true)
                    }
                  }}
                  disabled={totalPages <= 1}
                  className="px-1.5 py-1 text-gray-400 hover:text-[#5B50EC] hover:bg-[#F1F0FD] rounded-lg font-bold select-none text-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  title="Click to jump to page"
                  aria-label="Jump to page"
                >
                  ...
                </button>
              )
            }
            const pageNum = Number(p)
            const isActive = pageNum === currentPage

            return (
              <button
                key={`page-${pageNum}`}
                type="button"
                onClick={() => onPageChange(pageNum)}
                className={`min-w-[32px] h-8 px-2 rounded-xl font-bold text-xs transition-all duration-150 flex items-center justify-center cursor-pointer ${
                  isActive
                    ? "bg-[#5B50EC] text-white shadow-sm ring-2 ring-[#5B50EC]/20"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-[#F1F0FD] hover:border-[#C5C1FF] hover:text-[#5B50EC]"
                }`}
                aria-label={`Page ${pageNum}`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNum}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-[#F1F0FD] hover:text-[#5B50EC] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-xs shrink-0 cursor-pointer"
          title="Next Page"
          aria-label="Next page"
        >
          <CaretRight size={13} weight="bold" />
        </button>

        <button
          type="button"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-[#F1F0FD] hover:text-[#5B50EC] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shadow-xs shrink-0 cursor-pointer"
          title="Last Page"
          aria-label="Last page"
        >
          <CaretDoubleRight size={13} weight="bold" />
        </button>

        {showJumpToPage && (
          <div ref={jumpDropdownRef} className="relative inline-block ml-0.5 sm:ml-1">
            <button
              type="button"
              onClick={() => setIsJumpOpen((prev) => !prev)}
              disabled={totalPages <= 1}
              className="h-8 px-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:border-[#5B50EC] hover:bg-[#F9F9FE] hover:text-[#5B50EC] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-all text-xs font-semibold shadow-xs shrink-0 cursor-pointer"
              title={totalPages <= 1 ? "No pages to jump" : "Go to page"}
              aria-haspopup="dialog"
              aria-expanded={isJumpOpen}
            >
              <span>Go to</span>
              <CaretDown
                size={11}
                weight="bold"
                className={`text-gray-400 transition-transform duration-200 ${
                  isJumpOpen ? "rotate-180 text-[#5B50EC]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isJumpOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: openUpward ? 4 : -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: openUpward ? 4 : -4 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className={`absolute z-50 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 flex flex-col gap-2.5 right-0 ${
                    openUpward ? "bottom-full mb-1.5" : "top-full mt-1.5"
                  }`}
                  role="dialog"
                  aria-label="Jump to page"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-xs font-bold text-[#1F2433]">Jump to Page</span>
                    <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
                      1 – {totalPages}
                    </span>
                  </div>

                  <form onSubmit={handleJumpSubmit} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <input
                        ref={jumpInputRef}
                        type="number"
                        min={1}
                        max={totalPages}
                        value={jumpValue}
                        onChange={handleJumpInputChange}
                        disabled={totalPages <= 1}
                        placeholder={totalPages <= 1 ? "Disabled" : `1 - ${totalPages}`}
                        className="flex-1 min-w-0 px-2.5 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#5B50EC] focus:ring-2 focus:ring-[#5B50EC]/15 transition-all disabled:bg-gray-50 disabled:cursor-not-allowed no-spinner [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        aria-label="Target page number"
                      />
                      <button
                        type="submit"
                        disabled={!isValidJump || totalPages <= 1}
                        className="px-3 py-1.5 rounded-xl bg-[#5B50EC] hover:bg-[#483fd4] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        <span>Go</span>
                        <ArrowRight size={11} weight="bold" />
                      </button>
                    </div>

                    {jumpError ? (
                      <p className="text-[10px] text-red-500 font-medium px-0.5">
                        {jumpError}
                      </p>
                    ) : (
                      <p className="text-[10px] text-gray-400 font-medium px-0.5">
                        Type page 1 to {totalPages} and press Enter
                      </p>
                    )}
                  </form>

                  {milestones.length > 0 && (
                    <div className="pt-2 border-t border-gray-100 flex flex-col gap-1.5">
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
                              setIsJumpOpen(false)
                            }}
                            className={`flex-1 min-w-[62px] px-2 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer text-center select-none shadow-2xs ${
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
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isJumpOpen && (
          <div className="sm:hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsJumpOpen(false)}
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
                  onClick={() => setIsJumpOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={15} weight="bold" />
                </button>
              </div>

              <form onSubmit={handleJumpSubmit} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    ref={mobileInputRef}
                    type="number"
                    min={1}
                    max={totalPages}
                    value={jumpValue}
                    onChange={handleJumpInputChange}
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
                  <p className="text-[11px] text-red-500 font-medium px-0.5">
                    {jumpError}
                  </p>
                ) : (
                  <p className="text-[10px] text-gray-400 font-medium px-0.5">
                    Enter page between 1 and {totalPages}
                  </p>
                )}
              </form>

              {milestones.length > 0 && (
                <div className="pt-2.5 border-t border-gray-100 flex flex-col gap-1.5">
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
                          setIsJumpOpen(false)
                        }}
                        className={`flex-1 min-w-[65px] py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center active:scale-97 select-none shadow-2xs ${
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
    </div>
  )
}
