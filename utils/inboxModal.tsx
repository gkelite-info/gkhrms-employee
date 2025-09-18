"use client"

import { ClipboardText, Clock, House, Star, Warning } from "phosphor-react"
import { useState } from "react"

interface InboxModalProps {
    open: boolean
    onClose: () => void
}

export default function InboxModal({ open, onClose }: InboxModalProps) {
    if (!open) return null

    const [active, setActive] = useState<"All" | "Unread" | "Flagged" | "Archived">("All")

    const btnBase =
        "px-2 py-1 text-[#111827] text-xs rounded-lg cursor-pointer transition-colors"


    return (
        <div
            className="fixed inset-0 z-50"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div
                className="
          absolute right-4 top-16
          w-[25rem]
          h-80
          bg-[#EEECFF] rounded-xl shadow-xl p-4
          overflow-y-auto
          scrollbar-hide
        "
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-sm font-semibold mb-1 text-[#323232]">Inbox</h2>
                <div className="bg-red-00 w-[100%] p-2 pl-0 flex gap-5">
                    {["All", "Unread", "Flagged", "Archived"].map((label) => {
                        const isActive = active === label
                        return (
                            <button
                                key={label}
                                onClick={() => setActive(label as typeof active)}
                                className={`${btnBase} ${isActive ? "bg-[#DDDBF9] font-medium" : "bg-[#E8E8E8]"
                                    }`}
                            >
                                {label}
                            </button>
                        )
                    })}
                </div>
                <div className="bg-white rounded-lg p-2 flex flex-col">
                    <div className="bg-blue-00 w-[100%] flex flex-col border-0 border-b-1 border-[#BABABA] pb-2">
                        <h5 style={{ fontSize: 10, fontWeight: '600', color: '#414141' }}>Today</h5>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <ClipboardText size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>Jasmine submitted a leave request for approval.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>2 mins ago</p>
                        </div>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <House size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>John Smith’s WFH request (2 days) auto-approved.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>1 hour ago</p>
                        </div>
                    </div>
                    <div className="bg-blue-00 w-[100%] flex flex-col border-0 border-b-1 border-[#BABABA] pb-2 mt-2">
                        <h5 style={{ fontSize: 10, fontWeight: '600', color: '#414141' }}>Yesterday</h5>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <Clock size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>Jasmine submitted a leave request for approval.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>2 mins ago</p>
                        </div>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <Warning size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>John Smith’s WFH request (2 days) auto-approved.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>1 hour ago</p>
                        </div>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <Star size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>John Smith’s WFH request (2 days) auto-approved.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>1 hour ago</p>
                        </div>
                    </div>
                    <div className="bg-blue-00 w-[100%] flex flex-col border-0 border-b-1 border-[#BABABA] pb-2 mt-2">
                        <h5 style={{ fontSize: 10, fontWeight: '600', color: '#414141' }}>17/09/25</h5>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <Clock size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>Jasmine submitted a leave request for approval.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>2 mins ago</p>
                        </div>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <Warning size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>John Smith’s WFH request (2 days) auto-approved.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>1 hour ago</p>
                        </div>
                        <div className="bg-indigo-00 flex items-center justify-between gap-1 mt-2">
                            <div className="flex gap-1.5 items-center">
                                <div className="h-5 w-5 flex rounded-full items-center justify-center bg-[#D3BDF6]">
                                    <Star size={13} weight="fill" color="#FFFFFF" />
                                </div>
                                <p style={{ fontSize: 11, color: '#111827' }}>John Smith’s WFH request (2 days) auto-approved.</p>
                            </div>
                            <p style={{ fontSize: 8, color: '#414141' }}>1 hour ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}