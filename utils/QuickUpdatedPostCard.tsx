"use client"
import {
  ChatCircleDots,
  Eye,
  Heart,
  Megaphone,
  Plus,
  Repeat,
  ShareNetwork,
} from "phosphor-react"
import React, { useState, useEffect } from "react"
import LikedByModal from "./LikedByModal"
import CommentsModal from "./CommentsModal"

const QuickUpdatedPostCard = () => {
  const [isLikedByOpen, setIsLikedByOpen] = useState(false)
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)

  // Open modal if URL has ?likedBy=true or ?comments=true
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search)
      if (searchParams.get("likedBy") === "true") {
        setIsLikedByOpen(true)
      }
      if (searchParams.get("comments") === "true" || searchParams.get("comment") === "true") {
        setIsCommentsOpen(true)
      }
    }
  }, [])
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
          <div
            onClick={() => setIsLikedByOpen(true)}
            className="flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Heart size={20} color="#1C2334" />
            <p className="text-xs text-[#1C2334]">Like</p>
          </div>
          <div
            onClick={() => setIsCommentsOpen(true)}
            className="flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
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

      {/* Liked By Modal (Matches Screenshot) */}
      <LikedByModal
        isOpen={isLikedByOpen}
        onClose={() => setIsLikedByOpen(false)}
        totalCount={23}
      />

      {/* Comments Modal (Matches Screenshot) */}
      <CommentsModal
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
      />
    </div>
  )
}

export default QuickUpdatedPostCard
