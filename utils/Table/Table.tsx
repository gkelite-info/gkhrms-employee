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
}: TableProps<T>) {
  return (
    <div className="w-full flex flex-col rounded-md overflow-hidden">
      <TableHeader
        columns={columns}
        bgColor={bgColor}
        headerTextColor={headerTextColor}
      />
      {data?.map((row, index) => (
        <TableItem
          key={index}
          row={row}
          columns={columns}
          tableItemBg={tableItemBg}
          tableItemTextColor={tableItemTextColor}
        />
      ))}
    </div>
  )
}

export default Table
