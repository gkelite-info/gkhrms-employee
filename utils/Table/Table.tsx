import React from "react"
import TableHeader from "./TableHeader"
import TableItem from "./TableItem"
import { TableProps } from "./types"

function Table<T>({
  columns,
  data,
  bgColor,
  headerTextColor,
  tableItemBg,
  tableItemTextColor,
  showBorder = false,
}: TableProps<T>) {
  return (
    <div className="w-full flex flex-col rounded-md overflow-hidden">
      <TableHeader
        columns={columns}
        bgColor={bgColor}
        headerTextColor={headerTextColor}
        showBorder={showBorder}
      />
      {data?.map((row, index) => (
        <TableItem
          key={index}
          row={row}
          columns={columns}
          tableItemBg={tableItemBg}
          tableItemTextColor={tableItemTextColor}
          showBorder={showBorder}
        />
      ))}
    </div>
  )
}

export default Table
