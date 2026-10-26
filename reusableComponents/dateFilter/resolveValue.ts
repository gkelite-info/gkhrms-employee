import { DateFilterStructuredValue, MONTH_NAMES } from "./types"

export function resolveDateFilterValue(val: any): DateFilterStructuredValue {
  const now = new Date()
  const currentDay = now.getDate()
  const weekday = now.toLocaleDateString("en-US", { weekday: "short" })
  const monthName = now.toLocaleDateString("en-US", { month: "short" })
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()
  const dayStr = String(currentDay).padStart(2, "0")
  const monthStr = String(currentMonth + 1).padStart(2, "0")

  if (!val) {
    return {
      mode: "date",
      label: `${weekday}, ${currentDay} ${monthName} ${currentYear}`,
      selectedDate: `${dayStr}/${monthStr}/${currentYear}`,
      selectedMonth: currentMonth,
      selectedYear: currentYear,
      startDate: now,
      endDate: now,
    }
  }

  if (val instanceof Date) {
    const dDay = val.getDate()
    const dWeekday = val.toLocaleDateString("en-US", { weekday: "short" })
    const dMonthName = val.toLocaleDateString("en-US", { month: "short" })
    const dYear = val.getFullYear()
    const dDayStr = String(dDay).padStart(2, "0")
    const dMonthStr = String(val.getMonth() + 1).padStart(2, "0")
    return {
      mode: "date",
      label: `${dWeekday}, ${dDay} ${dMonthName} ${dYear}`,
      selectedDate: `${dDayStr}/${dMonthStr}/${dYear}`,
      selectedMonth: val.getMonth(),
      selectedYear: dYear,
      startDate: val,
      endDate: val,
    }
  }

  if (typeof val === "object" && val !== null) {
    if ("label" in val && typeof val.label === "string" && val.label) {
      return {
        mode: val.mode || "date",
        label: val.label,
        selectedDate: val.selectedDate ?? `${dayStr}/${monthStr}/${currentYear}`,
        selectedMonth: val.selectedMonth !== undefined ? val.selectedMonth : currentMonth,
        selectedYear: val.selectedYear || currentYear,
        startDate: val.startDate || now,
        endDate: val.endDate || now,
      }
    }

    if ("startDate" in val && val.startDate instanceof Date) {
      const s: Date = val.startDate
      const e: Date = val.endDate || s
      const isSameDate = s.toDateString() === e.toDateString()

      if (isSameDate) {
        const sDay = s.getDate()
        const sWeekday = s.toLocaleDateString("en-US", { weekday: "short" })
        const sMonthName = s.toLocaleDateString("en-US", { month: "short" })
        const sYear = s.getFullYear()
        const sDayStr = String(sDay).padStart(2, "0")
        const sMonthStr = String(s.getMonth() + 1).padStart(2, "0")
        return {
          mode: "date",
          label: `${sWeekday}, ${sDay} ${sMonthName} ${sYear}`,
          selectedDate: `${sDayStr}/${sMonthStr}/${sYear}`,
          selectedYear: sYear,
          selectedMonth: s.getMonth(),
          startDate: s,
          endDate: e,
        }
      }

      return {
        mode: "30-days",
        label: `${s.toLocaleDateString()} - ${e.toLocaleDateString()}`,
        selectedYear: s.getFullYear(),
        selectedMonth: s.getMonth(),
        startDate: s,
        endDate: e,
      }
    }
  }

  return {
    mode: val.mode || "date",
    label: val.label || `${weekday}, ${currentDay} ${monthName} ${currentYear}`,
    selectedDate: val.selectedDate ?? `${dayStr}/${monthStr}/${currentYear}`,
    selectedMonth: val.selectedMonth !== undefined ? val.selectedMonth : currentMonth,
    selectedYear: val.selectedYear || currentYear,
    startDate: val.startDate || now,
    endDate: val.endDate || now,
  }
}
