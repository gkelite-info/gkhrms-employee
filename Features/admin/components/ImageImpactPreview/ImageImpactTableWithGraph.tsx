import React from "react"
import ImageImpactTable from "./ImageImpactTable"
import ImageImpactLineGraph from "./ImageImpactLineGraph"

const ImageImpactTableWithGraph = () => {
  return (
    <div className="w-full h-[400px] flex gap-2.5 mt-3">
      <ImageImpactTable />
      <ImageImpactLineGraph />
    </div>
  )
}

export default ImageImpactTableWithGraph
