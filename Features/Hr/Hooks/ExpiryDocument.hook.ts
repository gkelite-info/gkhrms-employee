import { useState } from "react"
import { expiryDocDummyData } from "../dummy-data/expiry-docs-data"
// import { expiryDocDummyData } from "../dummy-data/expiry-docs-data"

export const useExpiryDocumentHook = () => {
  const [expiryDocs, setExpiryDocs] = useState(expiryDocDummyData)
  return {
    expiryDocs,
  }
}
