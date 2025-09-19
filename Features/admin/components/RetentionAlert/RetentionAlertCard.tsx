import React from "react"

const retentionAlert = [
  {
    name: "payroll Data",
    sub: "7 Years",
  },
  {
    name: "Attendance Logs",
    sub: "3 Years",
  },
  {
    name: "Exit Employee Data",
    sub: "Auto-archived",
  },
  {
    name: "Secure Deletion",
    sub: "GDPR Compliant",
  },
]

const RetentionAlertCard = () => {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-between items-center">
      {retentionAlert?.map((alre, index) => (
        <div
          key={index}
          className="w-[23.5%] py-4 rounded-md bg-white px-10 flex flex-col gap-1"
        >
          <span className="text-xs">{alre.name}</span>
          <span className="text-sm font-semibold">{alre.sub}</span>
        </div>
      ))}
    </div>
  )
}

export default RetentionAlertCard
