import React from "react"

const ImageImpactCounterCard = () => {
  const counterData = [
    {
      name: "Total Changes",
      count: 10,
    },
    {
      name: "High Impact Changes",
      count: 20,
    },
    {
      name: "Pending Approvals",
      count: 40,
    },
    {
      name: "Effective Today",
      count: 20,
    },
  ]

  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-4">
      {counterData?.map((count, index) => (
        <div
          key={index}
          className="w-[23.5%] bg-white rounded-lg p-3 flex flex-col gap-2 justify-center items-center"
        >
          <span className="text-xs font-medium">{count.name}</span>
          <span className="text-sm font-semibold">{count.count}</span>
        </div>
      ))}
    </div>
  )
}

export default ImageImpactCounterCard
