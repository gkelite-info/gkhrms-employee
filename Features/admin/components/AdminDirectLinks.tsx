import React from "react"

const AdminDirectLinks = () => {
  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-2 shadow">
      <h2 className="text-[#111827] font-semibold text-sm ">Direct Links</h2>
      <div className="w-full flex items-center gap-2">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#272372] text-white font-semibold">
          5
        </span>
        <span className="text-[#272372] text-sm">Links</span>
      </div>
      <span className="text-xs text-[#4C488F] ml-2.5 cursor-pointer">
        GKelitelink
      </span>
      <span className="text-xs text-[#4C488F] ml-2.5 cursor-pointer">
        OutlookLink
      </span>
      <span className="text-xs text-[#4C488F] ml-2.5 cursor-pointer">
        GooglemeetLink
      </span>
      <span className="text-xs text-[#4C488F] ml-2.5 cursor-pointer">
        ZoommeetLink
      </span>
      <span className="text-xs text-[#4C488F] ml-2.5 cursor-pointer">
        OutlookLink
      </span>
    </div>
  )
}

export default AdminDirectLinks
