"use client"

import React, { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

export interface PollItem {
  id: string
  authorName: string
  authorAvatar: string
  question: string
  options: Array<{
    label: string
    votes: number
    percentage: number
    color: "green" | "blue"
  }>
  totalResponses: number
  hasVoted?: boolean
  selectedOptionIndex?: number
  status: "active" | "closed"
  isMine?: boolean
}

interface PollsModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: "list" | "create"
}

const initialPolls: PollItem[] = [
  {
    id: "poll-1",
    authorName: "Shreya Raj",
    authorAvatar: "/images/shreya_raj.jpg",
    question: "Should we switch to hybrid work?",
    options: [
      { label: "Yes", votes: 91, percentage: 70, color: "green" },
      { label: "No", votes: 39, percentage: 30, color: "blue" },
    ],
    totalResponses: 130,
    status: "active",
  },
  {
    id: "poll-2",
    authorName: "Shyam",
    authorAvatar: "/images/shyam.jpg",
    question: "Do you approve of the new policy?",
    options: [
      { label: "Yes", votes: 70, percentage: 70, color: "green" },
      { label: "No", votes: 30, percentage: 30, color: "blue" },
    ],
    totalResponses: 100,
    status: "active",
  },
]

export default function PollsModal({
  isOpen,
  onClose,
  initialMode = "list",
}: PollsModalProps) {
  const [mode, setMode] = useState<"list" | "create">(initialMode)
  const [activeTab, setActiveTab] = useState<"active" | "closed" | "mine">("active")
  const [polls, setPolls] = useState<PollItem[]>(initialPolls)
  const [showToast, setShowToast] = useState<string | null>(null)

  // Create Poll Form State (Image 2)
  const [question, setQuestion] = useState("")
  const [options, setOptions] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ])

  useEffect(() => {
    if (initialMode) {
      setMode(initialMode)
    }
  }, [initialMode, isOpen])

  // Sync URL query param ?poll=true or ?createPoll=true
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href)
        if (mode === "create") {
          url.searchParams.set("createPoll", "true")
          url.searchParams.delete("poll")
        } else {
          url.searchParams.set("poll", "true")
          url.searchParams.delete("createPoll")
        }
        window.history.pushState({}, "", url.toString())
      }
    }
  }, [isOpen, mode])

  const handleClose = () => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.delete("poll")
      url.searchParams.delete("createPoll")
      window.history.pushState({}, "", url.pathname + (url.search ? url.search : ""))
    }
    onClose()
  }

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Handle Voting on an option
  const handleVote = (pollId: string, optionIdx: number) => {
    setPolls((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId || poll.hasVoted) return poll

        const updatedOptions = poll.options.map((opt, i) => {
          if (i === optionIdx) {
            return { ...opt, votes: opt.votes + 1 }
          }
          return opt
        })

        const totalVotes = updatedOptions.reduce((acc, curr) => acc + curr.votes, 0)
        const recalculated = updatedOptions.map((opt) => ({
          ...opt,
          percentage: totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0,
        }))

        return {
          ...poll,
          options: recalculated,
          totalResponses: totalVotes,
          hasVoted: true,
          selectedOptionIndex: optionIdx,
        }
      })
    )
    setShowToast("Thank you for your vote!")
    setTimeout(() => setShowToast(null), 2500)
  }

  // Handle Create Poll Submission (Image 2)
  const handleCreatePollSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedQuestion = question.trim()
    const validOptions = options.map((o) => o.trim()).filter((o) => o.length > 0)

    if (!trimmedQuestion) {
      alert("Please enter a poll question")
      return
    }

    if (validOptions.length < 2) {
      alert("Please enter at least 2 options")
      return
    }

    const newPoll: PollItem = {
      id: `poll-${Date.now()}`,
      authorName: "Jane Smith",
      authorAvatar: "/images/jane_smith.jpg",
      question: trimmedQuestion,
      options: validOptions.map((opt, idx) => ({
        label: opt,
        votes: 0,
        percentage: 0,
        color: idx % 2 === 0 ? "green" : "blue",
      })),
      totalResponses: 0,
      status: "active",
      isMine: true,
    }

    setPolls([newPoll, ...polls])
    setQuestion("")
    setOptions(["", "", "", "", "", "", ""])
    setShowToast("Poll created successfully!")
    setTimeout(() => setShowToast(null), 2500)
    setMode("list")
    setActiveTab("active")
  }

  if (!isOpen) return null

  // Filter polls according to active tab
  const displayedPolls = polls.filter((p) => {
    if (activeTab === "active") return p.status === "active"
    if (activeTab === "closed") return p.status === "closed"
    if (activeTab === "mine") return p.isMine
    return true
  })

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-60 bg-[#1E293B] text-white text-xs font-semibold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{showToast}</span>
        </div>
      )}

      {/* ===============================================================
          MODE 1: ACTIVE POLLS MODAL (Matches Image 1)
         =============================================================== */}
      {mode === "list" ? (
        <div
          className="relative w-full max-w-[500px] bg-white rounded-xl shadow-2xl p-6 flex flex-col max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Row: Title + "CREATE POLL" button */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[17px] font-bold text-[#1F2937] tracking-tight">
              Active Polls
            </h2>
            <button
              type="button"
              onClick={() => setMode("create")}
              className="px-4 py-2 bg-[#874DE6] hover:bg-[#7638D5] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm shadow-purple-200 transition-colors cursor-pointer"
            >
              CREATE POLL
            </button>
          </div>

          {/* 3 Tabs: Active Polls | Closed Polls | My Polls */}
          <div className="flex items-center gap-2.5 mb-5">
            <button
              type="button"
              onClick={() => setActiveTab("active")}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === "active"
                  ? "bg-[#874DE6] text-white"
                  : "bg-[#ECECEC] text-[#4B5563] hover:bg-slate-200"
              }`}
            >
              Active Polls
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("closed")}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === "closed"
                  ? "bg-[#874DE6] text-white"
                  : "bg-[#ECECEC] text-[#4B5563] hover:bg-slate-200"
              }`}
            >
              Closed Polls
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mine")}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === "mine"
                  ? "bg-[#874DE6] text-white"
                  : "bg-[#ECECEC] text-[#4B5563] hover:bg-slate-200"
              }`}
            >
              My Polls
            </button>
          </div>

          {/* Polls List (Matches Image 1) */}
          <div className="flex flex-col gap-5">
            {displayedPolls.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400 font-medium">
                No polls found in this category.
              </div>
            ) : (
              displayedPolls.map((poll) => (
                <div key={poll.id} className="flex flex-col">
                  {/* Author Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                        <img
                          src={poll.authorAvatar}
                          alt={poll.authorName}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            ;(e.currentTarget as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#1F2937]">
                        {poll.authorName}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="text-xs text-[#4B5563] hover:text-[#874DE6] font-medium transition-colors cursor-pointer"
                    >
                      View profile
                    </button>
                  </div>

                  {/* Poll Question */}
                  <h3 className="text-sm font-bold text-[#1F2937] mb-2.5">
                    {poll.question}
                  </h3>

                  {/* Options Progress Bars */}
                  <div className="flex flex-col gap-2">
                    {poll.options.map((opt, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleVote(poll.id, idx)}
                        className={`flex items-center gap-3 cursor-pointer group ${
                          poll.hasVoted && poll.selectedOptionIndex === idx
                            ? "opacity-100"
                            : ""
                        }`}
                      >
                        {/* Option Label (Yes / No / custom) */}
                        <span className="w-8 text-xs font-medium text-slate-700 shrink-0 group-hover:text-[#874DE6] transition-colors">
                          {opt.label}
                        </span>

                        {/* Bar Container */}
                        <div className="flex-1 h-6 bg-[#F3F4F6] rounded-full overflow-hidden flex items-center p-0.5">
                          <div
                            style={{
                              width: `${Math.max(opt.percentage, 4)}%`,
                            }}
                            className={`h-full rounded-full transition-all duration-500 ${
                              opt.color === "green"
                                ? "bg-[#68C200]"
                                : "bg-[#4D88FF]"
                            }`}
                          />
                        </div>

                        {/* Percentage */}
                        <span className="w-9 text-right text-xs font-medium text-slate-700 shrink-0">
                          {opt.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Responses Count */}
                  <span className="text-[11px] text-slate-400 font-medium mt-1.5">
                    {poll.totalResponses} Responses
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        /* ===============================================================
            MODE 2: CREATE POLL MODAL (Matches Image 2)
           =============================================================== */
        <div
          className="relative w-full max-w-[480px] bg-white rounded-xl shadow-2xl p-6 flex flex-col max-h-[94vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleCreatePollSubmit} className="flex flex-col gap-3">
            {/* Top Gray Box: "Enter Poll Question?" */}
            <div className="w-full bg-[#EAEAEA] rounded-lg p-3.5 mb-1">
              <input
                type="text"
                required
                placeholder="Enter Poll Question?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-[#1F2937] placeholder-[#4B5563] focus:outline-none"
              />
            </div>

            {/* 7 Options Input Fields (Matches Image 2) */}
            {options.map((optValue, i) => (
              <div
                key={i}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 bg-white flex items-center gap-3 focus-within:border-slate-400 transition-colors shadow-2xs"
              >
                {/* Radio button circle */}
                <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                <input
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  value={optValue}
                  onChange={(e) => {
                    const next = [...options]
                    next[i] = e.target.value
                    setOptions(next)
                  }}
                  className="w-full text-xs md:text-sm text-slate-700 placeholder-slate-400 focus:outline-none bg-transparent"
                />
              </div>
            ))}

            {/* Bottom Buttons: CANCEL + CREATE POLL */}
            <div className="flex items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => setMode("list")}
                className="flex-1 py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-[#374151] bg-[#E5E7EB] hover:bg-[#D1D5DB] transition-all cursor-pointer text-center"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-[#874DE6] hover:bg-[#7638D5] shadow-sm shadow-purple-200 transition-all cursor-pointer text-center"
              >
                CREATE POLL
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
