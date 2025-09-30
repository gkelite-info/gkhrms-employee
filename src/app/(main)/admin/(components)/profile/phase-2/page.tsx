"use client";
import { useState } from "react";

// your imports
import Timeline from "../timeline/page";
import PhaseLeft from "../phaseLR/phase_left/page";
import PhaseLR from "../phaseLR/page";
import ProfileAndTimeline from "../profileAndBasic";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = ["Profile", "Documents", "Assets"];

  return (
    <div className="bg-red-00 flex mt-3">
      <div className="flex w-[100%] rounded-lg flex-col">
        {/* Tabs */}
        <div className="w-[100%] h-10 mt-3 rounded-lg flex justify-between">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-[100%] w-[33%] rounded-lg flex items-center justify-center cursor-pointer 
                ${activeTab === tab ? "bg-[#9884D6]" : "bg-[#B3B3B3]"}`}
            >
              <h5 className="text-white">{tab}</h5>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-5">
          {activeTab === "Profile" && (
            <>
              {/* <ProfileAndTimeline /> */}
              <PhaseLR />
            </>
          )}

          {activeTab === "Documents" && (
            <>
              <ProfileAndTimeline />
            </>
          )}

          {activeTab === "Assets" && (
            <>
            <ProfileAndTimeline />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
