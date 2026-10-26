"use client"

import React from "react"
import { CalendarBlank, X } from "phosphor-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DateFilterMode,
  DateFilterStructuredValue,
  QuickRangeOption,
} from "./types"
import DateView from "./DateView"
import MonthView from "./MonthView"
import YearView from "./YearView"
import QuickRangeView from "./QuickRangeView"

interface DateFilterModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  backdropClassName?: string
  availableModes: DateFilterMode[]
  hideTabsIfSingle?: boolean
  tabLabels?: Partial<Record<DateFilterMode, string>>
  activeTab: DateFilterMode
  setActiveTab: (mode: DateFilterMode) => void
  value: DateFilterStructuredValue
  quickRangeOptions?: QuickRangeOption[]
  navYear: number
  setNavYear: React.Dispatch<React.SetStateAction<number>>
  navMonth: number
  setNavMonth: React.Dispatch<React.SetStateAction<number>>
  onSelectQuickRange: (range: QuickRangeOption) => void
  onSelectDate: (day: number, month?: number, year?: number) => void
  onSelectMonth: (mIdx: number) => void
  onSelectYear: (yr: number) => void
}

export default function DateFilterModal({
  isOpen,
  onClose,
  title,
  subtitle,
  backdropClassName,
  availableModes,
  hideTabsIfSingle = true,
  tabLabels,
  activeTab,
  setActiveTab,
  value,
  quickRangeOptions,
  navYear,
  setNavYear,
  navMonth,
  setNavMonth,
  onSelectQuickRange,
  onSelectDate,
  onSelectMonth,
  onSelectYear,
}: DateFilterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
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
                onClick={onClose}
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
                  onSelectRange={onSelectQuickRange}
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
                  onSelectDate={onSelectDate}
                />
              )}

              {activeTab === "month" && (
                <MonthView
                  navYear={navYear}
                  selectedMonth={value.selectedMonth}
                  selectedYear={value.selectedYear}
                  onPrevYear={() => setNavYear(navYear - 1)}
                  onNextYear={() => setNavYear(navYear + 1)}
                  onSelectMonth={onSelectMonth}
                />
              )}

              {activeTab === "year" && (
                <YearView
                  navYear={navYear}
                  selectedYear={value.selectedYear}
                  onPrevDecade={() => setNavYear((prev) => prev - 10)}
                  onNextDecade={() => setNavYear((prev) => prev + 10)}
                  onSelectYear={onSelectYear}
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
