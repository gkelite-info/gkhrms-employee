export type DateFilterMode = "30-days" | "date" | "month" | "year"

export interface DateFilterStructuredValue {
  mode: DateFilterMode
  label: string
  selectedDate?: string
  selectedMonth?: number
  selectedYear?: number
  startDate?: Date
  endDate?: Date
}

export type DateRangeValue = { startDate: Date; endDate: Date }

export type DateFilterValue =
  | DateFilterStructuredValue
  | Date
  | DateRangeValue
  | null
  | undefined

export interface QuickRangeOption {
  mode: "30-days" | "month" | "year"
  label: string
  desc?: string
  selectedDate?: string
  selectedMonth?: number
  selectedYear?: number
}

export const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

export const DATE_FILTER_PRESETS = {
  ALL: ["30-days", "date", "month", "year"] as DateFilterMode[],
  DATE_MONTH_YEAR: ["date", "month", "year"] as DateFilterMode[],
  MONTH_YEAR: ["month", "year"] as DateFilterMode[],
  YEAR_ONLY: ["year"] as DateFilterMode[],
  DATE_ONLY: ["date"] as DateFilterMode[],
}
