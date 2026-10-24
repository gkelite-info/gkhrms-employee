"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import AssignedAssets from "./assigned";
import RequestedAssets from "./requested";
import AssetDamageCharges from "./damageCharges";

function AssetsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const resolveSubTab = (param: string) => {
    const s = param.toLowerCase();
    if (s.includes("request")) return "Asset Requests";
    if (s.includes("damage") || s.includes("charge")) return "Asset Damage Charges";
    return "Assigned Assets";
  };

  const rawSubTab = searchParams?.get("subtab") || searchParams?.get("asset") || "";
  const [activeTab, setActiveTab] = useState(rawSubTab ? resolveSubTab(rawSubTab) : "Assigned Assets");

  useEffect(() => {
    const s = searchParams?.get("subtab") || searchParams?.get("asset") || "";
    if (s) {
      setActiveTab(resolveSubTab(s));
    }
  }, [searchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set(
        "subtab",
        tab
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
      window.history.pushState(null, "", url.toString());
      try {
        router.push(url.pathname + url.search, { scroll: false });
      } catch {}
    }
  };

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
            onClick={() => handleTabClick(tab)}
            className={`p-3 rounded-lg cursor-pointer text-sm font-medium text-center
              ${
                activeTab === tab
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

export default function Assets() {
  return (
    <Suspense fallback={null}>
      <AssetsContent />
    </Suspense>
  );
}
