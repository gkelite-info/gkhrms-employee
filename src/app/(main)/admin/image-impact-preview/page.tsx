import React from "react"
import ImageImpactCounterCard from "../../../../../features/admin/components/ImageImpactPreview/ImageImpactCounterCard"
import ImageImpactTableWithGraph from "../../../../../features/admin/components/ImageImpactPreview/ImageImpactTableWithGraph"

const ImageImpactPreview = () => {
  return (
    <div className="flex flex-col gap-2.5 p-4 w-full">
      <h2 className="text-sm text-[#323232] font-semibold">
        Change Impact Preview
      </h2>
      <p className="text-xs font-medium text-[#414141]">
        Track upcoming and recent policy or system changes
      </p>
      <ImageImpactCounterCard />
      <ImageImpactTableWithGraph />
    </div>
  )
}

export default ImageImpactPreview
