"use client"

import React, { useState, useEffect, useRef } from "react"
import { ArrowLeft, PlusCircle } from "lucide-react"
import { ChatCircleDots, PaperPlaneRight } from "phosphor-react"

export interface CommentItem {
  id: string
  name: string
  role: string
  avatar: string
  avatarType?: "image" | "silhouette"
  text: string
  time: string
  isLiked?: boolean
}

interface CommentsModalProps {
  isOpen: boolean
  onClose: () => void
  initialComments?: CommentItem[]
}

export const defaultComments: CommentItem[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Team lead",
    avatar: "",
    avatarType: "silhouette",
    text: "“Congratulations! Truly well deserved 👏👏”",
    time: "2h",
  },
  {
    id: "2",
    name: "John Doe",
    role: "Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    text: "“Your dedication has been inspiring for the whole team 🌟”",
    time: "2h",
  },
  {
    id: "3",
    name: "Michael Smith",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "“Kudos! Keep shining and motivating us 🎉💯”",
    time: "2h",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "HR Executive",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    text: "“A big shoutout for your hard work and consistency 🙌”",
    time: "2h",
  },
  {
    id: "5",
    name: "Raj Patel",
    role: "HR Executive",
    avatar: "/images/shyam.jpg",
    text: "“Proud moment! You’ve set a great example for all of us 💪”",
    time: "2h",
  },
  {
    id: "6",
    name: "Priya Sharma",
    role: "Marketing",
    avatar: "/images/shreya_raj.jpg",
    text: "“Your efforts never go unnoticed. Keep up the great work 💫✨”",
    time: "2h",
  },
]

export default function CommentsModal({
  isOpen,
  onClose,
  initialComments = defaultComments,
}: CommentsModalProps) {
  const [comments, setComments] = useState<CommentItem[]>(initialComments)
  const [newCommentText, setNewCommentText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Sync URL query param ?comments=true
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href)
        if (!url.searchParams.has("comments")) {
          url.searchParams.set("comments", "true")
          window.history.pushState({}, "", url.toString())
        }
      }
    }
  }, [isOpen])

  const handleClose = () => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      if (url.searchParams.has("comments") || url.searchParams.has("comment")) {
        url.searchParams.delete("comments")
        url.searchParams.delete("comment")
        window.history.pushState({}, "", url.pathname + (url.search ? url.search : ""))
      }
    }
    onClose()
  }

  const handleAddComment = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const trimmed = newCommentText.trim()
    if (!trimmed) return

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: "Rohan Mehta",
      role: "Team lead",
      avatar: "/images/admin_rohan.jpg",
      text: `“${trimmed}”`,
      time: "Just now",
    }

    setComments((prev) => [...prev, newComment])
    setNewCommentText("")

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
    }, 50)
  }

  const handleToggleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, isLiked: !c.isLiked } : c
      )
    )
  }

  const handleReply = (authorName: string) => {
    setNewCommentText(`@${authorName} `)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      {/* Modal Container (Matches Screenshot Exactly) */}
      <div
        className="relative w-full max-w-[500px] bg-white rounded-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: Back Arrow + Centered "Comments" */}
        <div className="shrink-0 relative flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <button
            type="button"
            onClick={handleClose}
            className="p-1 -ml-1 text-gray-800 hover:text-black transition-colors cursor-pointer"
            title="Back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <h2 className="text-[17px] font-bold text-[#111827] tracking-normal absolute left-1/2 -translate-x-1/2">
            Comments
          </h2>

          <div className="w-5 h-5" />
        </div>

        {/* Scrollable Comments List */}
        <div
          ref={scrollRef}
          className="flex-1 min-h-0 overflow-y-auto px-6 py-4 space-y-5"
        >
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-3.5">
              {/* Avatar */}
              {comment.avatarType === "silhouette" ? (
                <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-[#00A3FF] fill-current"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
                  </svg>
                </div>
              ) : (
                <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 shrink-0 shadow-xs">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
                    }}
                  />
                </div>
              )}

              {/* Comment Content */}
              <div className="flex-1 min-w-0">
                {/* Author Name & Role */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[15px] font-semibold text-[#111827]">
                    {comment.name}
                  </span>
                  <span className="text-[#6B7280] text-sm">-</span>
                  <span className="text-sm text-[#6B7280] italic font-normal">
                    {comment.role}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-[14px] text-[#1F2937] leading-snug font-normal mt-1">
                  {comment.text}
                </p>

                {/* Action Row: Timestamp | Like | Reply */}
                <div className="flex items-center gap-3.5 mt-1.5 text-xs text-[#6B7280]">
                  <span className="text-[#9CA3AF] font-normal">{comment.time}</span>
                  <button
                    type="button"
                    onClick={() => handleToggleLike(comment.id)}
                    className={`font-normal hover:text-black transition-colors cursor-pointer ${
                      comment.isLiked ? "text-purple-600 font-medium" : ""
                    }`}
                  >
                    {comment.isLiked ? "Liked" : "Like"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReply(comment.name)}
                    className="font-normal hover:text-black transition-colors cursor-pointer"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comment Input Bar (Matches Screenshot Exactly) */}
        <div className="shrink-0 p-4 pt-2 bg-white flex items-center gap-3">
          <form
            onSubmit={handleAddComment}
            className="flex-1 flex items-center bg-[#F8F9FA] border border-[#E5E7EB] rounded-full px-3.5 py-1.5 shadow-2xs focus-within:border-purple-300 focus-within:bg-white transition-all"
          >
            {/* Left Chat Icon */}
            <ChatCircleDots size={22} className="text-gray-400 shrink-0" />

            {/* Text Input */}
            <input
              ref={inputRef}
              type="text"
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Write a Comment......"
              className="flex-1 bg-transparent border-none text-[13.5px] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-hidden px-2.5 py-1"
            />

            {/* Right Send Icon (Purple Plane) */}
            <button
              type="submit"
              disabled={!newCommentText.trim()}
              className="text-[#874DE6] hover:text-[#703bc7] disabled:opacity-40 disabled:hover:text-[#874DE6] transition-colors p-1 cursor-pointer shrink-0"
              title="Post comment"
            >
              <PaperPlaneRight size={20} weight="fill" />
            </button>
          </form>

          {/* Plus Circle Button */}
          <button
            type="button"
            onClick={() => {
              if (inputRef.current) inputRef.current.focus()
            }}
            className="text-gray-600 hover:text-black transition-colors p-0.5 cursor-pointer shrink-0"
            title="Attach or Add"
          >
            <PlusCircle className="w-[32px] h-[32px] stroke-[1.5]" />
          </button>
        </div>
      </div>
    </div>
  )
}
