import React from "react"
import SearchInput from "../../../utils/SearchInput"
import { useTableAttendaceData } from "../data/TableAttendanceData"
import { useAttendaceLeavsHook } from "../hooks/AttendanceLeaves.hook"
import Table from "../../../utils/Table/Table"
import DataWrapper from "../../../utils/DataWrapper"

const AttendanceModal = () => {
  const { column } = useTableAttendaceData()
  const { attendanceUser, search, setSearch, loading } = useAttendaceLeavsHook()

  return (
    <div className="w-full h-full bg-[#F4F3FF] p-6 flex flex-col gap-4  items-center">
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="w-full h-[calc(100%-50px)]">
        <DataWrapper loading={loading} error={null} data={attendanceUser}>
          <Table
            columns={column}
            data={attendanceUser}
            bgColor="#F4F3FF"
            headerTextColor="#000"
          />
        </DataWrapper>
      </div>
    </div>
  )
}

export default AttendanceModal
