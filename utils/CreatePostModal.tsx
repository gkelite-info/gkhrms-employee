"use client"

import React, { useState, useEffect, useRef } from "react"
import {
  Image as ImageIcon,
  Video,
  ChevronDown,
  X,
  CheckCircle2,
  Users,
  Lock,
  Globe,
} from "lucide-react"

interface CreatePostModalProps {
  isOpen: boolean
  onClose: () => void
  onPostSuccess?: (postData: {
    content: string
    audience: string
    mentions: string
    tags: string
    media?: string | null
  }) => void
  user?: {
    name?: string
    department?: string
    avatar?: string
  }
}

export default function CreatePostModal({
  isOpen,
  onClose,
  onPostSuccess,
  user,
}: CreatePostModalProps) {
  const [content, setContent] = useState("")
  const [audience, setAudience] = useState("Everyone")
  const [isAudienceDropdownOpen, setIsAudienceDropdownOpen] = useState(false)
  const [mentions, setMentions] = useState("")
  const [tags, setTags] = useState("")
  const [mediaFile, setMediaFile] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const imageInputRef = useRef<HTMLInputElement | null>(null)
  const videoInputRef = useRef<HTMLInputElement | null>(null)
  const audienceDropdownRef = useRef<HTMLDivElement | null>(null)

  // Default user info matching Image 2
  const userName = user?.name || "Jane Smith"
  const userDept = user?.department || "Human Resources"
  const userAvatar = user?.avatar || "/images/jane_smith.jpg"

  const audienceOptions = [
    { label: "Everyone", icon: Globe, desc: "Visible to all employees" },
    { label: "Human Resources", icon: Users, desc: "Only members in HR" },
    { label: "All Employees", icon: Users, desc: "All company staff" },
    { label: "Only Me", icon: Lock, desc: "Private draft" },
  ]

  // Close audience dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        audienceDropdownRef.current &&
        !audienceDropdownRef.current.contains(e.target as Node)
      ) {
        setIsAudienceDropdownOpen(false)
      }
    }
    if (isAudienceDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [isAudienceDropdownOpen])

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

  // Sync URL query param ?createPost=true
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href)
        if (!url.searchParams.has("createPost")) {
          url.searchParams.set("createPost", "true")
          window.history.pushState({}, "", url.toString())
        }
      }
    }
  }, [isOpen])

  const handleClose = () => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      if (url.searchParams.has("createPost")) {
        url.searchParams.delete("createPost")
        window.history.pushState({}, "", url.pathname + (url.search ? url.search : ""))
      }
    }
    onClose()
  }

  // Handle Image file selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setMediaFile(file)
      setMediaType("image")
      setMediaPreview(URL.createObjectURL(file))
    }
  }

  // Handle Video file selection
  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setMediaFile(file)
      setMediaType("video")
      setMediaPreview(URL.createObjectURL(file))
    }
  }

  const removeMedia = () => {
    setMediaFile(null)
    setMediaPreview(null)
    setMediaType(null)
    if (imageInputRef.current) imageInputRef.current.value = ""
    if (videoInputRef.current) videoInputRef.current.value = ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim() && !mediaFile) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setShowToast(true)

      if (onPostSuccess) {
        onPostSuccess({
          content,
          audience,
          mentions,
          tags,
          media: mediaPreview,
        })
      }

      setTimeout(() => {
        setShowToast(false)
        setContent("")
        setMentions("")
        setTags("")
        removeMedia()
        handleClose()
      }, 900)
    }, 600)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-60 bg-[#1E293B] text-white text-xs font-semibold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Post created successfully!</span>
        </div>
      )}

      {/* Main Modal Card (Matches screenshot radius) */}
      <div
        className="relative w-full max-w-[490px] bg-white rounded-xl shadow-2xl p-6 flex flex-col max-h-[94vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-[17px] font-bold text-[#1F2937] tracking-tight mb-3">
          Create a Post
        </h2>

        {/* User Info Header: Avatar + Name + Department */}
        <div className="flex items-center gap-3 mb-3.5">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-100 shadow-xs">
            <img
              src={userAvatar}
              alt={userName}
              className="w-full h-full object-cover"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
              }}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#1F2937] leading-tight">
              {userName}
            </h3>
            <p className="text-xs text-[#6B7280] font-medium">
              {userDept}
            </p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Text Area Box with Character Counter & Media Icons */}
          <div className="w-full border border-slate-300 rounded-lg p-3 bg-white flex flex-col justify-between min-h-[110px] focus-within:border-slate-400 transition-colors">
            <textarea
              rows={3}
              maxLength={500}
              placeholder="What’s on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full resize-none text-slate-700 text-sm placeholder-slate-400 focus:outline-none bg-transparent leading-relaxed"
            />

            {/* Attached media preview if any */}
            {mediaPreview && (
              <div className="relative mt-2 mb-1 w-24 h-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 group">
                {mediaType === "video" ? (
                  <video
                    src={mediaPreview}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={mediaPreview}
                    alt="attachment"
                    className="w-full h-full object-cover"
                  />
                )}
                <button
                  type="button"
                  onClick={removeMedia}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Bottom of Textarea: Counter */}
            <div className="flex justify-end pt-1">
              <span className="text-[11px] text-slate-400 font-medium">
                {content.length}/500
              </span>
            </div>
          </div>

          {/* Media Attach Action Buttons (Under Text Area) */}
          <div className="flex items-center gap-3 px-1 text-slate-600">
            {/* Image Upload Button */}
            <input
              type="file"
              ref={imageInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              title="Add Image"
              className="p-1 text-slate-500 hover:text-[#874DE6] transition-colors cursor-pointer"
            >
              <ImageIcon className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Video Upload Button */}
            <input
              type="file"
              ref={videoInputRef}
              accept="video/*"
              className="hidden"
              onChange={handleVideoSelect}
            />
            <button
              type="button"
              onClick={() => videoInputRef.current?.click()}
              title="Add Video"
              className="p-1 text-slate-500 hover:text-[#874DE6] transition-colors cursor-pointer"
            >
              <Video className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>

          {/* Audience Selector Dropdown (Everyone v) */}
          <div className="relative" ref={audienceDropdownRef}>
            <button
              type="button"
              onClick={() => setIsAudienceDropdownOpen(!isAudienceDropdownOpen)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white border border-slate-300 hover:border-slate-400 rounded-lg text-sm text-[#4B5563] font-normal transition-colors cursor-pointer"
            >
              <span>{audience}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  isAudienceDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isAudienceDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl z-20 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                {audienceOptions.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => {
                      setAudience(opt.label)
                      setIsAudienceDropdownOpen(false)
                    }}
                    className={`w-full px-3.5 py-2 text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      audience === opt.label
                        ? "bg-[#EEF0FD] text-[#5B50E5]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <opt.icon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{opt.label}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-normal">
                      {opt.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mention Colleagues Input */}
          <input
            type="text"
            value={mentions}
            onChange={(e) => setMentions(e.target.value)}
            placeholder="@ Mention Colleagues"
            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#374151] placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
          />

          {/* Add Tags Input */}
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="# Add tags"
            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#374151] placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
          />

          {/* Bottom Action Buttons: CANCEL + POST */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-[#374151] bg-[#E5E7EB] hover:bg-[#D1D5DB] transition-all cursor-pointer"
            >
              CANCEL
            </button>
            <button
              type="submit"
              disabled={isSubmitting || (!content.trim() && !mediaFile)}
              className="flex-1 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-[#874DE6] hover:bg-[#7638D5] shadow-sm shadow-purple-200 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>POSTING...</span>
                </>
              ) : (
                <span>POST</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
