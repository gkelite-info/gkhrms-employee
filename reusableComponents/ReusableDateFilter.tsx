"use client"

import React, { useState, useEffect, useMemo } from "react"
import { CalendarBlank, CaretDown, X } from "phosphor-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DateFilterMode,
  DateFilterValue,
  QuickRangeOption,
  MONTH_NAMES,
  DATE_FILTER_PRESETS,
} from "./dateFilter/types"
import DateView from "./dateFilter/DateView"
import MonthView from "./dateFilter/MonthView"
import YearView from "./dateFilter/YearView"
import QuickRangeView from "./dateFilter/QuickRangeView"

export type { DateFilterMode, DateFilterValue, QuickRangeOption }
export { DATE_FILTER_PRESETS }

export interface ReusableDateFilterProps {
  value: DateFilterValue
  onChange: (val: DateFilterValue) => void
  /**
   * Available view modes/tabs for this instance.
   * Examples:
   * - ["30-days", "date", "month", "year"] (default: all tabs)
   * - ["month", "year"] (month & year only)
   * - ["year"] (year only)
   * - ["date", "month", "year"] (date, month, year)
   * - ["date"] (date only)
   */
  modes?: DateFilterMode[]
  /**
   * Title displayed in the modal header.
   * Default: "Filter Attendance"
   */
  title?: string
  /**
   * Subtitle displayed below the title in modal header.
   * If omitted, defaults to `value.label`.
   */
  subtitle?: string
  /**
   * Whether to hide the tabs bar if only 1 mode is passed in `modes`.
   * Default: true
   */
  hideTabsIfSingle?: boolean
  /**
   * Custom labels for tabs if you want different wording
   */
  tabLabels?: Partial<Record<DateFilterMode, string>>
  /**
   * Custom preset options for the "30-days" (quick range) view.
   */
  quickRangeOptions?: QuickRangeOption[]
  /**
   * Additional className for the trigger button container
   */
  className?: string
  /**
   * Custom backdrop className (default: "bg-black/60 backdrop-blur-md")
   */
  backdropClassName?: string
}

export default function ReusableDateFilter({
  value,
  onChange,
  modes,
  title = "Filter Attendance",
  subtitle,
  hideTabsIfSingle = true,
  tabLabels,
  quickRangeOptions,
  className = "",
  backdropClassName,
}: ReusableDateFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  const availableModes = useMemo(() => {
    return modes && modes.length > 0
      ? modes
      : (["30-days", "date", "month", "year"] as DateFilterMode[])
  }, [modes])

  const [activeTab, setActiveTab] = useState<DateFilterMode>(() => {
    if (availableModes.includes(value.mode)) {
      return value.mode
    }
    return availableModes[0] || "date"
  })

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const [navYear, setNavYear] = useState(value.selectedYear || currentYear)
  const [navMonth, setNavMonth] = useState(
    value.selectedMonth !== undefined ? value.selectedMonth : currentMonth
  )

  useEffect(() => {
    if (isOpen) {
      if (availableModes.includes(value.mode)) {
        setActiveTab(value.mode)
      } else {
        setActiveTab(availableModes[0] || "date")
      }
      if (value.selectedYear) setNavYear(value.selectedYear)
      if (value.selectedMonth !== undefined) setNavMonth(value.selectedMonth)
    }
  }, [isOpen, value, availableModes])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const handleSelectDate = (day: number, month = navMonth, year = navYear) => {
    const dayStr = String(day).padStart(2, "0")
    const monthStr = String(month + 1).padStart(2, "0")
    onChange({
      mode: "date",
      label: `${dayStr} ${MONTH_NAMES[month]} ${year}`,
      selectedDate: `${dayStr}/${monthStr}/${year}`,
      selectedMonth: month,
      selectedYear: year,
    })
    setIsOpen(false)
  }

  const handleSelectMonth = (mIdx: number) => {
    setNavMonth(mIdx)
    onChange({
      mode: "month",
      label: `${MONTH_NAMES[mIdx]} ${navYear}`,
      selectedMonth: mIdx,
      selectedYear: navYear,
    })
    setIsOpen(false)
  }

  const handleSelectYear = (yr: number) => {
    setNavYear(yr)
    onChange({ mode: "year", label: `Year ${yr}`, selectedYear: yr })
    setIsOpen(false)
  }

  const handleSelectQuickRange = (range: QuickRangeOption) => {
    onChange({
      mode: range.mode,
      label: range.label,
      selectedMonth: range.selectedMonth,
      selectedYear: range.selectedYear,
      selectedDate: range.selectedDate,
    })
    setIsOpen(false)
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-[#1F2433] hover:border-[#5B50EC] hover:bg-[#F9F8FE] transition-all shadow-xs cursor-pointer select-none"
      >
        <CalendarBlank size={16} weight="bold" className="text-[#5B50EC] shrink-0" />
        <span className="whitespace-nowrap">{value.label}</span>
        <CaretDown size={12} weight="bold" className="text-gray-400 shrink-0" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className={`fixed inset-0 ${
                backdropClassName || "bg-black/60 backdrop-blur-md"
              }`}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[350px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 sm:p-4.5 flex flex-col gap-2.5 select-none"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 px-0.5 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F1F0FD] flex items-center justify-center text-[#5B50EC] shrink-0">
                    <CalendarBlank size={16} weight="bold" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1F2433]">{title}</h3>
                    <p className="text-[10px] text-gray-400 font-medium">
                      {subtitle ?? value.label}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                  title="Close modal"
                >
                  <X size={16} weight="bold" />
                </button>
              </div>

              {(availableModes.length > 1 || !hideTabsIfSingle) && (
                <div className="flex items-center bg-[#F1F0FD] p-1 rounded-xl gap-1 shrink-0">
                  {availableModes.map((mode) => {
                    const defaultTabName =
                      mode === "30-days"
                        ? "30 Days"
                        : mode === "date"
                        ? "Date"
                        : mode === "month"
                        ? "Month"
                        : "Year"
                    const label = tabLabels?.[mode] || defaultTabName
                    return (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setActiveTab(mode)}
                        className={`flex-1 py-1 text-[11px] font-semibold rounded-lg transition-all capitalize cursor-pointer select-none ${
                          activeTab === mode
                            ? "bg-[#5B50EC] text-white shadow-xs"
                            : "text-gray-600 hover:text-[#5B50EC]"
                        }`}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              )}

              <div className="w-full flex flex-col">
                {activeTab === "30-days" && (
                  <QuickRangeView
                    currentValue={value}
                    onSelectRange={handleSelectQuickRange}
                    options={quickRangeOptions}
                  />
                )}

                {activeTab === "date" && (
                  <DateView
                    navYear={navYear}
                    navMonth={navMonth}
                    selectedDate={value.selectedDate}
                    onPrevMonth={() => {
                      if (navMonth === 0) {
                        setNavMonth(11)
                        setNavYear(navYear - 1)
                      } else {
                        setNavMonth(navMonth - 1)
                      }
                    }}
                    onNextMonth={() => {
                      if (navMonth === 11) {
                        setNavMonth(0)
                        setNavYear(navYear + 1)
                      } else {
                        setNavMonth(navMonth + 1)
                      }
                    }}
                    onSelectDate={handleSelectDate}
                  />
                )}

                {activeTab === "month" && (
                  <MonthView
                    navYear={navYear}
                    selectedMonth={value.selectedMonth}
                    selectedYear={value.selectedYear}
                    onPrevYear={() => setNavYear(navYear - 1)}
                    onNextYear={() => setNavYear(navYear + 1)}
                    onSelectMonth={handleSelectMonth}
                  />
                )}

                {activeTab === "year" && (
                  <YearView
                    navYear={navYear}
                    selectedYear={value.selectedYear}
                    onPrevDecade={() => setNavYear((prev) => prev - 10)}
                    onNextDecade={() => setNavYear((prev) => prev + 10)}
                    onSelectYear={handleSelectYear}
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

