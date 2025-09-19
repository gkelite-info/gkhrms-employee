import React from "react"
import { useExpiryDocumentHook } from "../hooks/ExpiryDocument.hook"
import Table from "../../../utils/Table/Table"
import { useExpiryDocsTableData } from "../data/ExpiryDocument.data"

const ExpiringDocument = () => {
  const { expiryDocs } = useExpiryDocumentHook()
  const { column } = useExpiryDocsTableData()

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-5">
      <h3 className="text-[#323232] font-semibold text-sm">
        Expiring Documents
      </h3>
      <div className="w-full  bg-gray-200 rounded overflow-hidden">
        <Table
          columns={column}
          data={expiryDocs}
          bgColor="#fff"
          headerTextColor="#000"
          tableItemBg="#fff"
          tableItemTextColor="#000"
        />
      </div>
    </div>
  )
}

export default ExpiringDocument
