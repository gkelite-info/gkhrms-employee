import React from "react"
import BarChartComponent from "../../../../utils/BarChartComponent"

const ImageImpactLineGraph = () => {
  const chartData = [
    { name: "HR", value: 40, color: "#281C4B" },
    { name: "Finance", value: 60, color: "#503995" },
    { name: "Operatons", value: 25, color: "#977BE6" },
    { name: "IT", value: 80, color: "#BBAAEF" },
  ]
  return (
    <div className="w-[30%] bg-white p-4 rounded-lg ">
      <BarChartComponent
        title="Employee Roles Distribution"
        data={chartData}
        height={340}
      />
    </div>
  )
}

export default ImageImpactLineGraph
