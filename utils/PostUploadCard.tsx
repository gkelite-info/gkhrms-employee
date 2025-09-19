"use client"
import { ChartBar, NotePencil } from "phosphor-react"
import React from "react"

const PostUploadCard = () => {
  return (
    <div className="w-[95%] bg-[#F9FAFB] h-34 rounded-lg shadow-md mt-3">
      <div className="bg-red-00 h-[35%] flex items-center justify-between py-2 px-3 rounded-t-lg border-0 border-b-[#C2C2C2] border-b-1">
        <div className="bg-green-00 w-[30%] flex items-center justify-center">
          <NotePencil size={23} color="#00AF9B" className="cursor-pointer" />
          <p className="text-[#111827] ml-1 font-medium text-sm cursor-pointer">
            Post
          </p>
        </div>
        <div className="bg-green-00 w-[30%] flex items-center justify-center">
          <ChartBar size={23} color="#AD5A5A" className="cursor-pointer" />
          <p className="text-[#111827] ml-1 font-medium text-sm cursor-pointer">
            Poll
          </p>
        </div>
      </div>
      <div className="bg-blue-00 rounded-b-lg h-full p-2">
        <p className="text-xs text-[#545454]">
          Share the post here and tag your colleagues
        </p>
      </div>
    </div>
  )
}

export default PostUploadCard
