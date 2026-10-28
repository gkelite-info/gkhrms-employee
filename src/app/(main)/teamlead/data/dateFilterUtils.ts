import { DateFilterStructuredValue } from "@/components/reusableComponents"

export function getDefaultDateFilterValue(): DateFilterStructuredValue {
  const now = new Date()
  const day = now.getDate()
  const weekday = now.toLocaleDateString("en-US", { weekday: "short" })
  const monthName = now.toLocaleDateString("en-US", { month: "short" })
  const year = now.getFullYear()
  const dayStr = String(day).padStart(2, "0")
  const monthStr = String(now.getMonth() + 1).padStart(2, "0")

  return {
    mode: "date",
    label: `${weekday}, ${day} ${monthName} ${year}`,
    selectedDate: `${dayStr}/${monthStr}/${year}`,
    selectedMonth: now.getMonth(),
    selectedYear: year,
    startDate: now,
    endDate: now,
  }
}
