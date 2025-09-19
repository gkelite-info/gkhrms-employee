import {
  ChatCircleDots,
  Eye,
  Heart,
  Megaphone,
  Plus,
  Repeat,
  ShareNetwork,
} from "phosphor-react"
import React from "react"

const QuickUpdatedPostCard = () => {
  return (
    <div className="shadow-md h-76 w-[95%] bg-[#F9FAFB] mt-2 rounded-lg">
      <div className="bg-red-00 h-[15%] flex items-center justify-between px-3 py-2 rounded-t-lg">
        <div className="bg-red-00 w-[30%] h-[100%] flex items-center justify-start gap-2">
          <Megaphone
            size={18}
            color="#111827"
            className="transform -scale-x-100 cursor-pointer"
          />
          <p className="text-xs cursor-pointer text-[#111827]">Quick Update</p>
        </div>
        <div className="bg-red-00 w-[30%] h-[100%] flex items-center justify-center gap-2">
          <Eye
            size={18}
            color="#111827"
            className="transform -scale-x-100 cursor-pointer"
          />
          <p className="text-xs cursor-pointer text-[#111827]">View More</p>
        </div>
        <div className="bg-red-00 w-[30%] h-[100%] flex items-center justify-end gap-2">
          <div className="bg-[#C5C1FF] h-5 w-5 flex items-center justify-center cursor-pointer">
            <Plus
              size={17}
              color="#111827"
              weight="fill"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="h-65 bg-green-00 rounded-b-lg flex flex-col items-start p-2 pt-0">
        <p className="text-[#1C2334] font-medium text-xs">
          Employee of the Month
        </p>
        <div className="bg-blue-00 w-[100%] flex items-center justify-center mt-1">
          <img
            src="/images/eom.png"
            alt="eom.png"
            className="rounded-lg h-45 w-[80%]"
          />
        </div>
        <div className="bg-red-00 mt-3 flex items-center justify-center gap-7 w-[100%]">
          <div className="flex flex-col items-center justify-center">
            <Heart size={20} color="#1C2334" className="cursor-pointer" />
            <p className="text-xs text-[#1C2334] cursor-pointer">Like</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ChatCircleDots
              size={20}
              color="#1C2334"
              className="cursor-pointer"
            />
            <p className="text-xs text-[#1C2334] cursor-pointer">Comment</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Repeat size={20} color="#1C2334" className="cursor-pointer" />
            <p className="text-xs text-[#1C2334] cursor-pointer">Repost</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ShareNetwork
              size={20}
              color="#1C2334"
              className="cursor-pointer"
            />
            <p className="text-xs text-[#1C2334] cursor-pointer">Share</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickUpdatedPostCard
