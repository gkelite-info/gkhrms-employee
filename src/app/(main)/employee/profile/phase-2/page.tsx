"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PhaseLR from "../phaseLR/page";
import Documents from "./documents/page";
import Assets from "./assets/page";

function ProfileContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawTab = (searchParams?.get("tab") || "").toLowerCase();
  const initialTab =
    rawTab === "documents"
      ? "Documents"
      : rawTab === "assets"
      ? "Assets"
      : typeof window !== "undefined"
      ? localStorage.getItem("activeProfileTab") || "Profile"
      : "Profile";

  const [activeTab, setActiveTab] = useState<string>(initialTab);

  useEffect(() => {
    const t = (searchParams?.get("tab") || "").toLowerCase();
    if (t === "documents") setActiveTab("Documents");
    else if (t === "assets") setActiveTab("Assets");
    else if (t === "profile") setActiveTab("Profile");
  }, [searchParams]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeProfileTab", activeTab);
    }
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab.toLowerCase());
      if (tab === "Profile") {
        url.searchParams.delete("subtab");
      }
      window.history.pushState(null, "", url.toString());
      try {
        router.push(url.pathname + url.search, { scroll: false });
      } catch {}
    }
  };

  const tabs = ["Profile", "Documents", "Assets"];

  return (
    <div className="flex mt-3">
      <div className="flex w-[100%] rounded-lg flex-col">
        <div className="w-[100%] h-10 mt-3 rounded-lg flex justify-between">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`h-[100%] w-[33%] rounded-lg flex items-center justify-center cursor-pointer ${
                activeTab === tab ? "bg-[#9884D6]" : "bg-[#B3B3B3]"
              }`}
            >
              <h5 className="text-white">{tab}</h5>
            </div>
          ))}
        </div>

        <div className="mt-3">
          {activeTab === "Profile" && <PhaseLR />}
          {activeTab === "Documents" && <Documents />}
          {activeTab === "Assets" && <Assets />}
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <Suspense fallback={null}>
      <ProfileContent />
    </Suspense>
  );
}
