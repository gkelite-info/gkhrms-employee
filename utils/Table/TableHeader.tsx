import React from "react"
import { TableColumn } from "./types"

type Props<T> = {
  columns: TableColumn<T>[]
  bgColor?: string
  headerTextColor?: string
  showBorder?: boolean
}

function TableHeader<T>({
  columns,
  bgColor = "bg-[#a7acb7]",
  headerTextColor = "#FFFEFE",
  showBorder = false,
}: Props<T>) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={`w-full h-[45px] overflow-hidden flex items-center ${
        showBorder ? "border-y border-y-[#B7B7B7]" : ""
      }`}
    >
      {columns.map((column, index) => (
        <span
          key={index}
          style={{ width: column.width || "auto", color: headerTextColor }}
          className="font-medium px-2 py-3  text-xs"
        >
          {column.name}
        </span>
      ))}
    </div>
  )
}

export default TableHeader
