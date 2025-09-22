import React from "react"

const BackupProgressCardMain = () => {
  const dummyData = [
    {
      name: "Last Backup Status Successful",
      date: "Sep 19,2025,2:00 AM",
    },
    {
      name: "Next Scheduled Backup",
      date: "Tomorrow 2:00AM",
    },
    {
      name: "Backup Type",
      date: "Full/ Incremental",
    },
    {
      name: "Encryption Status",
      date: "Enabled",
    },
  ]

  return (
    <div className="w-full flex flex-wrap gap-2.5 justify-between items-center">
      {dummyData?.map((doc, index) => (
        <div
          key={index}
          className="w-full lg:w-[23%] bg-white rounded-lg p-2.5 py-4 flex flex-col items-center gap-2.5 "
        >
          <span className="text-xs font-semibold text-[#323232]">
            {doc.name}
          </span>
          <span className="text-xs text-[#6B6B6D]">{doc.date}</span>
        </div>
      ))}
    </div>
  )
}

export default BackupProgressCardMain
