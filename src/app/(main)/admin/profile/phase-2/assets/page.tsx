"use client";
import { useState } from "react";

import AssignedAssets from "./assigned";
import RequestedAssets from "./requested";
import AssetDamageCharges from "./damageCharges";

export default function Assets() {
    const [activeTab, setActiveTab] = useState("Assigned Assets");

    const tabs = [
        "Assigned Assets",
        "Asset Requests",
        "Asset Damage Charges",
    ];

    return (
        <div className="flex h-screen w-full">
            <div className="w-[20%] flex flex-col gap-2 p-3">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`p-3 rounded-lg cursor-pointer text-sm font-medium text-center
              ${activeTab === tab
                                ? "bg-[#C5C1FF] text-[#323232]"
                                : "bg-[#EAEAEA] text-[#323232]"
                            }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="w-[80%] p-3">
                {activeTab === "Assigned Assets" && <AssignedAssets />}
                {activeTab === "Asset Requests" && <RequestedAssets />}
                {activeTab === "Asset Damage Charges" && <AssetDamageCharges />}
            </div>
        </div>
    );
}
