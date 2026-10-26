"use client"

import React from "react"

interface NodeMember {
  id: string
  name: string
  role: string
  avatar: string
  status: "Present" | "Absent"
  isLead?: boolean
  isNameOnTop?: boolean
}

export default function TeamTreeChart() {
  const ceo: NodeMember = {
    id: "ceo",
    name: "",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    status: "Present",
  }

  const manager1: NodeMember = {
    id: "mgr-james",
    name: "James",
    role: "Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    status: "Absent",
  }

  const manager2: NodeMember = {
    id: "mgr-jay",
    name: "Jay",
    role: "Manager",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&auto=format&fit=crop&q=80",
    status: "Present",
  }

  const manager3: NodeMember = {
    id: "mgr-emily",
    name: "Emily Davis",
    role: "Manager",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    status: "Present",
  }

  const teamLead: NodeMember = {
    id: "tl-james",
    name: "James",
    role: "Team Lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    status: "Absent",
  }

  const members: NodeMember[] = [
    {
      id: "mem-john",
      name: "John Doe",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=140&auto=format&fit=crop&q=80",
      status: "Present",
      isNameOnTop: true,
    },
    {
      id: "mem-sarah",
      name: "Sarah Johnson",
      role: "Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=140&auto=format&fit=crop&q=80",
      status: "Present",
      isNameOnTop: true,
    },
    {
      id: "mem-michael",
      name: "Michael Smith",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=140&auto=format&fit=crop&q=80",
      status: "Present",
      isNameOnTop: true,
    },
    {
      id: "mem-emily",
      name: "Emily Davis",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=140&auto=format&fit=crop&q=80",
      status: "Present",
      isNameOnTop: true,
    },
    {
      id: "mem-davis",
      name: "Davis",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=140&auto=format&fit=crop&q=80",
      status: "Present",
      isNameOnTop: true,
    },
  ]

  return (
    <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-100 flex flex-col items-center">
      {/* Scrollable container for responsiveness while keeping exact tree layout */}
      <div className="w-full overflow-x-auto flex justify-center py-2">
        <div className="w-[840px] min-w-[840px] flex flex-col items-center relative select-none">
          {/* LEVEL 1: CEO (Positioned at center x = 520) */}
          <div className="w-full flex" style={{ paddingLeft: "472px" }}>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative">
                <img
                  src={ceo.avatar}
                  alt={ceo.role}
                  className="w-14 h-14 rounded-full object-cover shadow-xs ring-2 ring-emerald-500/20 group-hover:scale-105 group-hover:ring-emerald-500 transition-all duration-200"
                />
              </div>
              <span className="text-sm font-bold text-gray-900 mt-1">
                {ceo.role}
              </span>
              <div className="flex items-center gap-1 text-[10px] text-[#10B981] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Present</span>
              </div>
            </div>
          </div>

          {/* SVG CONNECTOR 1: CEO to 3 Managers */}
          {/* Spans across x=240 (Manager James), x=520 (Manager Jay / CEO), x=760 (Manager Emily Davis) */}
          <svg
            className="w-[840px] h-8 pointer-events-none mt-1"
            viewBox="0 0 840 32"
          >
            {/* Vertical stem from CEO down to horizontal branch */}
            <line
              x1="520"
              y1="0"
              x2="520"
              y2="16"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            {/* Horizontal branch line spanning from Mgr 1 to Mgr 3 */}
            <line
              x1="240"
              y1="16"
              x2="760"
              y2="16"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            {/* Vertical drop lines to each of the 3 Managers */}
            <line
              x1="240"
              y1="16"
              x2="240"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            <line
              x1="520"
              y1="16"
              x2="520"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            <line
              x1="760"
              y1="16"
              x2="760"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
          </svg>

          {/* LEVEL 2: 3 Managers Row */}
          <div className="w-[840px] flex items-start">
            {/* Manager 1: James (Centered at x = 240, width = 160, left offset = 160) */}
            <div
              className="w-[160px] flex flex-col items-center group cursor-pointer"
              style={{ marginLeft: "160px" }}
            >
              <img
                src={manager1.avatar}
                alt={manager1.name}
                className="w-13 h-13 rounded-full object-cover shadow-xs ring-2 ring-red-400/20 group-hover:scale-105 group-hover:ring-red-500 transition-all duration-200"
              />
              <span className="text-xs font-bold text-gray-900 mt-1">
                {manager1.role}
              </span>
              <span className="text-[11px] font-medium text-gray-700">
                {manager1.name}
              </span>
              <div className="flex items-center gap-1 text-[9px] text-[#EF4444] font-medium mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                <span>Absent</span>
              </div>
            </div>

            {/* Manager 2: Jay (Centered at x = 520, width = 160, left offset = 120) */}
            <div
              className="w-[160px] flex flex-col items-center group cursor-pointer"
              style={{ marginLeft: "120px" }}
            >
              <img
                src={manager2.avatar}
                alt={manager2.name}
                className="w-13 h-13 rounded-full object-cover shadow-xs ring-2 ring-emerald-500/20 group-hover:scale-105 group-hover:ring-emerald-500 transition-all duration-200"
              />
              <span className="text-xs font-bold text-gray-900 mt-1">
                {manager2.role}
              </span>
              <span className="text-[11px] font-medium text-gray-700">
                {manager2.name}
              </span>
              <div className="flex items-center gap-1 text-[9px] text-[#10B981] font-medium mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Present</span>
              </div>
            </div>

            {/* Manager 3: Emily Davis (Centered at x = 760, width = 160, left offset = 80) */}
            <div
              className="w-[160px] flex flex-col items-center group cursor-pointer"
              style={{ marginLeft: "80px" }}
            >
              <img
                src={manager3.avatar}
                alt={manager3.name}
                className="w-13 h-13 rounded-full object-cover shadow-xs ring-2 ring-emerald-500/20 group-hover:scale-105 group-hover:ring-emerald-500 transition-all duration-200"
              />
              <span className="text-xs font-bold text-gray-900 mt-1">
                {manager3.role}
              </span>
              <span className="text-[11px] font-medium text-gray-700">
                {manager3.name}
              </span>
              <div className="flex items-center gap-1 text-[9px] text-[#10B981] font-medium mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Present</span>
              </div>
            </div>
          </div>

          {/* SVG CONNECTOR 2: From Manager James (x = 240) down to Team Lead James */}
          <svg
            className="w-[840px] h-7 pointer-events-none"
            viewBox="0 0 840 28"
          >
            <line
              x1="240"
              y1="0"
              x2="240"
              y2="28"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
          </svg>

          {/* LEVEL 3: Team Lead James (Positioned at x = 240) */}
          <div className="w-[840px] flex items-start">
            <div
              className="w-[160px] flex flex-col items-center group cursor-pointer"
              style={{ marginLeft: "160px" }}
            >
              <img
                src={teamLead.avatar}
                alt={teamLead.name}
                className="w-11 h-11 rounded-full object-cover shadow-xs ring-2 ring-red-400/20 group-hover:scale-105 group-hover:ring-red-500 transition-all duration-200"
              />
              <span className="text-[11px] font-bold text-gray-900 mt-1">
                {teamLead.role}
              </span>
              <span className="text-[10px] font-medium text-gray-700">
                {teamLead.name}
              </span>
              <div className="flex items-center gap-1 text-[8px] text-[#EF4444] font-medium mt-0.5">
                <span className="w-1 h-1 rounded-full bg-[#EF4444]" />
                <span>Absent</span>
              </div>
            </div>
          </div>

          {/* SVG CONNECTOR 3: Team Lead (x = 240) down to 5 Team Members */}
          {/* Members centered at x = 45, 142.5, 240, 337.5, 435 */}
          <svg
            className="w-[840px] h-8 pointer-events-none mt-0.5"
            viewBox="0 0 840 32"
          >
            {/* Vertical stem down from Team Lead */}
            <line
              x1="240"
              y1="0"
              x2="240"
              y2="16"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            {/* Horizontal line across the 5 members */}
            <line
              x1="45"
              y1="16"
              x2="435"
              y2="16"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            {/* 5 Drop lines to each member */}
            <line
              x1="45"
              y1="16"
              x2="45"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            <line
              x1="142.5"
              y1="16"
              x2="142.5"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            <line
              x1="240"
              y1="16"
              x2="240"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            <line
              x1="337.5"
              y1="16"
              x2="337.5"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
            <line
              x1="435"
              y1="16"
              x2="435"
              y2="32"
              stroke="#D1D5DB"
              strokeWidth="1.5"
            />
          </svg>

          {/* LEVEL 4: 5 Team Members Row */}
          <div className="w-[840px] flex items-start">
            {members.map((member, index) => (
              <div
                key={member.id}
                className="w-[95px] flex flex-col items-center text-center group cursor-pointer"
                style={{
                  marginLeft: index === 0 ? "0px" : "2.5px",
                }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-9 h-9 rounded-full object-cover shadow-xs ring-2 ring-emerald-500/20 group-hover:scale-105 group-hover:ring-emerald-500 transition-all duration-200"
                />
                <span className="text-[10px] font-bold text-gray-900 mt-1 leading-tight">
                  {member.name}
                </span>
                <span className="text-[9px] text-gray-500 leading-tight">
                  {member.role}
                </span>
                <div className="flex items-center gap-1 text-[8px] text-[#10B981] font-medium mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                  <span>Present</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
