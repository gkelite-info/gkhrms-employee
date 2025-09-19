import React from "react"
import { TableColumn } from "./types"

type Props<T> = {
  row: T
  columns: TableColumn<T>[]
  tableItemBg?: string
  tableItemTextColor?: string
  showBorder?: boolean
}

function TableItem<T>({
  row,
  columns,
  tableItemBg = "#F4F3FF",
  tableItemTextColor = "#000",
  showBorder = false,
}: Props<T>) {
  return (
    <div
      style={{ backgroundColor: tableItemBg }}
      className={`w-full flex items-center ${
        showBorder ? "border-b border-b-[#B7B7B7]" : ""
      }`}
    >
      {columns.map((column, index) => (
        <div
          key={index}
          style={{ width: column.width, color: tableItemTextColor }}
          className="flex items-center px-2 py-3 text-xs border-gray-300 last:border-r-0"
        >
          {column.render ? column.render(row) : null}
        </div>
      ))}
    </div>
  )
}

export default TableItem
