import { useState } from "react"
import { imageImpactDummyData } from "../dummy-data/image-impact-dummy.data"

export const useImageImpactPreview = () => {
  const [imageImpactPreview, setImageImpactPreview] =
    useState(imageImpactDummyData)

  return {
    imageImpactPreview,
  }
}
