import React from "react"
import { TableColumn } from "./types"

type Props<T> = {
  row: T
  columns: TableColumn<T>[]
  tableItemBg?: string
  tableItemTextColor?: string
}

function TableItem<T>({
  row,
  columns,
  tableItemBg = "#F4F3FF",
  tableItemTextColor = "#000",
}: Props<T>) {
  return (
    <div
      style={{ backgroundColor: tableItemBg }}
      className="w-full flex items-center"
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
