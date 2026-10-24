"use client"
import { ChartBar, NotePencil } from "phosphor-react"
import React, { useState, useEffect } from "react"
import CreatePostModal from "./CreatePostModal"
import PollsModal from "./PollsModal"

const PostUploadCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPollModalOpen, setIsPollModalOpen] = useState(false)
  const [pollInitialMode, setPollInitialMode] = useState<"list" | "create">("list")

  // Open modals if URL has ?createPost=true, ?poll=true, or ?createPoll=true
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search)
      if (searchParams.get("createPost") === "true") {
        setIsModalOpen(true)
      } else if (searchParams.get("createPoll") === "true") {
        setPollInitialMode("create")
        setIsPollModalOpen(true)
      } else if (searchParams.get("poll") === "true") {
        setPollInitialMode("list")
        setIsPollModalOpen(true)
      }
    }
  }, [])

  return (
    <>
      <div className="w-[95%] bg-[#F9FAFB] h-34 rounded-lg shadow-md mt-3 transition-all hover:shadow-lg">
        <div className="bg-red-00 h-[35%] flex items-center justify-between py-2 px-3 rounded-t-lg border-0 border-b-[#C2C2C2] border-b-1">
          {/* Post Tab Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-green-00 w-[30%] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <NotePencil size={23} color="#00AF9B" />
            <p className="text-[#111827] ml-1 font-medium text-sm">
              Post
            </p>
          </button>

          {/* Poll Tab Button */}
          <button
            type="button"
            onClick={() => {
              setPollInitialMode("list")
              setIsPollModalOpen(true)
            }}
            className="bg-green-00 w-[30%] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <ChartBar size={23} color="#AD5A5A" />
            <p className="text-[#111827] ml-1 font-medium text-sm">
              Poll
            </p>
          </button>
        </div>

        <div
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-00 rounded-b-lg h-full p-2 cursor-pointer hover:bg-slate-100/60 transition-colors"
        >
          <p className="text-xs text-[#545454]">
            Share the post here and tag your colleagues
          </p>
        </div>
      </div>

      {/* Post Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={{
          name: "Jane Smith",
          department: "Human Resources",
          avatar: "/images/jane_smith.jpg",
        }}
      />

      {/* Polls Modal (Image 1: Active Polls & Image 2: Create Poll) */}
      <PollsModal
        isOpen={isPollModalOpen}
        onClose={() => setIsPollModalOpen(false)}
        initialMode={pollInitialMode}
      />
    </>
  )
}

export default PostUploadCard
