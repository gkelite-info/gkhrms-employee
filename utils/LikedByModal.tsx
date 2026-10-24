"use client"

import React, { useEffect } from "react"
import { ArrowLeft } from "lucide-react"

export interface LikedUser {
  id: string
  name: string
  role: string
  avatar: string
  time: string
  separator?: string
}

interface LikedByModalProps {
  isOpen: boolean
  onClose: () => void
  totalCount?: number
  users?: LikedUser[]
}

export const defaultLikedUsers: LikedUser[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Team lead",
    avatar: "/images/shyam.jpg",
    time: "2h",
    separator: " - ",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    time: "2h",
    separator: " – ",
  },
  {
    id: "3",
    name: "Michael Smith",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    time: "2h",
    separator: "- ",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    time: "2h",
    separator: " - ",
  },
  {
    id: "5",
    name: "Raj Patel",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    time: "2h",
    separator: "- ",
  },
  {
    id: "6",
    name: "Priya Sharma",
    role: "Team lead",
    avatar: "/images/shreya_raj.jpg",
    time: "2h",
    separator: "- ",
  },
  {
    id: "7",
    name: "Ankit Verma",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    time: "2h",
    separator: " - ",
  },
  {
    id: "8",
    name: "Neha Kapoor",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    time: "2h",
    separator: "- ",
  },
  {
    id: "9",
    name: "Rohan Mehta",
    role: "Team lead",
    avatar: "/images/admin_rohan.jpg",
    time: "2h",
    separator: " - ",
  },
  {
    id: "10",
    name: "Kavya Iyer",
    role: "Team lead",
    avatar: "/images/jane_smith.jpg",
    time: "2h",
    separator: "- ",
  },
  {
    id: "11",
    name: "Vikram Malhotra",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    time: "3h",
    separator: " - ",
  },
  {
    id: "12",
    name: "Ananya Deshmukh",
    role: "Team lead",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    time: "3h",
    separator: " - ",
  },
]

export default function LikedByModal({
  isOpen,
  onClose,
  totalCount = 23,
  users = defaultLikedUsers,
}: LikedByModalProps) {
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

  // Sync URL query param ?likedBy=true
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href)
        if (!url.searchParams.has("likedBy")) {
          url.searchParams.set("likedBy", "true")
          window.history.pushState({}, "", url.toString())
        }
      }
    }
  }, [isOpen])

  const handleClose = () => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      if (url.searchParams.has("likedBy")) {
        url.searchParams.delete("likedBy")
        window.history.pushState({}, "", url.pathname + (url.search ? url.search : ""))
      }
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      {/* Modal Card (Matches screenshot exactly) */}
      <div
        className="relative w-full max-w-[500px] bg-white rounded-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar: Back Arrow + Centered "Liked By" + Right "23 People Liked" */}
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
            Liked By
          </h2>

          <span className="text-xs text-gray-400 font-normal italic ml-auto">
            {totalCount} People Liked
          </span>
        </div>

        {/* Scrollable List of Likers */}
        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-2 space-y-3">
          {users.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between py-1.5 hover:bg-gray-50/80 rounded-lg px-2 -mx-2 transition-colors cursor-pointer"
            >
              {/* Left: Avatar + Name - Team lead */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
                    }}
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-semibold text-[#111827]">
                    {person.name}
                  </span>
                  <span className="text-[#6B7280] text-sm">
                    {person.separator || " - "}
                  </span>
                  <span className="text-sm text-[#6B7280] italic font-normal">
                    {person.role}
                  </span>
                </div>
              </div>

              {/* Right: Timestamp */}
              <span className="text-xs text-[#9CA3AF] font-normal shrink-0 ml-3">
                {person.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
