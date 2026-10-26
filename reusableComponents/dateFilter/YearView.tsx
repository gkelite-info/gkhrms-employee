"use client"

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { CaretLeft, CaretRight } from "phosphor-react"

interface YearViewProps {
  navYear: number
  selectedYear?: number
  onPrevDecade: () => void
  onNextDecade: () => void
  onSelectYear: (year: number) => void
}

const ROW_HEIGHT = 38

export default function YearView({
  navYear,
  selectedYear,
  onSelectYear,
}: YearViewProps) {
  const currentYear = new Date().getFullYear()
  const activeYear = selectedYear || currentYear

  const [minYear, setMinYear] = useState(1940)
  const [maxYear, setMaxYear] = useState(2080)
  const [visibleDecade, setVisibleDecade] = useState(Math.floor(activeYear / 10) * 10)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isUserScrollingRef = useRef(false)

  const yearsList = useMemo(() => {
    const list: number[] = []
    for (let yr = minYear; yr <= maxYear; yr++) {
      list.push(yr)
    }
    return list
  }, [minYear, maxYear])

  const scrollToYear = useCallback((targetYear: number, smooth = true) => {
    const el = scrollContainerRef.current
    if (!el) return

    if (targetYear < minYear) {
      setMinYear(targetYear - 15)
    } else if (targetYear > maxYear) {
      setMaxYear(targetYear + 15)
    }

    const yearIdx = targetYear - minYear
    const rowIdx = Math.floor(yearIdx / 3)
    const targetTop = Math.max(0, rowIdx * ROW_HEIGHT - 65)

    el.scrollTo({
      top: targetTop,
      behavior: smooth ? "smooth" : "auto",
    })
    setVisibleDecade(Math.floor(targetYear / 10) * 10)
  }, [minYear, maxYear])

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToYear(activeYear, false)
    }, 10)
    return () => clearTimeout(timer)
  }, [activeYear, scrollToYear])

  const handleScroll = () => {
    const el = scrollContainerRef.current
    if (!el) return

    const rowIdx = Math.floor(el.scrollTop / ROW_HEIGHT)
    const topYear = minYear + rowIdx * 3
    const newDecade = Math.floor(topYear / 10) * 10
    setVisibleDecade(newDecade)

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 50) {
      setMaxYear((prev) => prev + 30)
    }

    if (el.scrollTop <= 25) {
      const prevHeight = el.scrollHeight
      const prevTop = el.scrollTop
      setMinYear((prev) => prev - 30)

      requestAnimationFrame(() => {
        if (el) {
          const heightDiff = el.scrollHeight - prevHeight
          el.scrollTop = prevTop + heightDiff
        }
      })
    }
  }

  const handleStepDecade = (delta: number) => {
    const target = visibleDecade + delta * 10
    scrollToYear(target + 4, true)
  }

  const decadeEnd = visibleDecade + 9

  return (
    <div className="w-full flex flex-col gap-2 pt-0.5">
      <div className="flex items-center justify-between text-xs font-bold text-gray-800 px-2.5 py-1.5 bg-gray-50/90 rounded-xl border border-gray-100 shrink-0">
        <span>{visibleDecade} – {decadeEnd}</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => handleStepDecade(-1)}
            title="Previous 10 Years"
            className="p-1 rounded-lg hover:bg-white text-gray-600 hover:text-[#5B50EC] transition-all cursor-pointer shadow-2xs"
          >
            <CaretLeft size={14} weight="bold" />
          </button>
          <button
            type="button"
            onClick={() => handleStepDecade(1)}
            title="Next 10 Years"
            className="p-1 rounded-lg hover:bg-white text-gray-600 hover:text-[#5B50EC] transition-all cursor-pointer shadow-2xs"
          >
            <CaretRight size={14} weight="bold" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="h-[180px] overflow-y-auto pr-1 space-y-1 custom-scrollbar my-0.5"
      >
        <div className="grid grid-cols-3 gap-1.5 pt-0.5">
          {yearsList.map((yr) => {
            const isSelected = selectedYear === yr
            const isCurrent = currentYear === yr

            return (
              <button
                key={yr}
                type="button"
                onClick={() => onSelectYear(yr)}
                className={`h-9 px-1 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none text-center flex items-center justify-center ${
                  isSelected
                    ? "bg-[#5B50EC] text-white shadow-xs font-bold"
                    : isCurrent
                    ? "bg-[#F1F0FD] text-[#5B50EC] border border-[#5B50EC]/40 font-bold"
                    : "bg-gray-50 hover:bg-[#F1F0FD] text-gray-700 hover:text-[#5B50EC]"
                }`}
              >
                {yr}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium pt-2 border-t border-gray-100 px-1 shrink-0">
        <span className="text-[10px]">Continuous scroll ({minYear}+)</span>
        <button
          type="button"
          onClick={() => {
            onSelectYear(currentYear)
            scrollToYear(currentYear, true)
          }}
          className="text-[#5B50EC] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
        >
          <span>Current Year ({currentYear})</span>
        </button>
      </div>
    </div>
  )
}
