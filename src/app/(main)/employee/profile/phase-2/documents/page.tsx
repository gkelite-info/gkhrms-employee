"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import IdentityProof from "./identityproof";
import AddressProof from "./addressproof";
import EducationalCertificates from "./educationalCertificates";
import WorkExperienceDocs from "./workexperience";
import IdentityEmploymentForm from "./identityEmploymentform";
import BackgroundVerification from "./backgroundVerification";
import LegalComplianceDocs from "./legalCompliance";
import OptionalDocs from "./optionalDocs";

const docCategoryFromSlug = (slug: string): string => {
  const s = slug.toLowerCase().trim();
  if (s.includes("identity") && (s.includes("proof") || !s.includes("employ"))) return "Identity Proof";
  if (s.includes("address")) return "Address Proof";
  if (s.includes("education")) return "Educational Certificates";
  if (s.includes("experience") || s.includes("work")) return "Work Experience Documents";
  if (s.includes("form") || (s.includes("identity") && s.includes("employ"))) return "Identity & Employment Forms";
  if (s.includes("background") || s.includes("verification")) return "Background Verification Documents";
  if (s.includes("legal") || s.includes("compliance")) return "Legal & Compliance Documents";
  if (s.includes("optional")) return "Other Optional Documents";
  return "Identity Proof";
};

function DocumentsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawSubTab = searchParams?.get("subtab") || searchParams?.get("doc") || searchParams?.get("category") || "";

  const [activeTab, setActiveTab] = useState(rawSubTab ? docCategoryFromSlug(rawSubTab) : "Identity Proof");

  useEffect(() => {
    const s = searchParams?.get("subtab") || searchParams?.get("doc") || searchParams?.get("category") || "";
    if (s) {
      setActiveTab(docCategoryFromSlug(s));
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
    "Identity Proof",
    "Address Proof",
    "Educational Certificates",
    "Work Experience Documents",
    "Identity & Employment Forms",
    "Background Verification Documents",
    "Legal & Compliance Documents",
    "Other Optional Documents",
  ];

  return (
    <div className="flex h-screen w-full">
      <div className="w-[20%] flex flex-col gap-2 p-3">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`p-3 rounded-lg cursor-pointer text-sm font-medium text-center ${
              activeTab === tab ? "bg-[#C5C1FF] text-[#323232]" : "bg-[#EAEAEA] text-[#323232]"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="w-[80%] p-3">
        {activeTab === "Identity Proof" && <IdentityProof />}
        {activeTab === "Address Proof" && <AddressProof />}
        {activeTab === "Educational Certificates" && <EducationalCertificates />}
        {activeTab === "Work Experience Documents" && <WorkExperienceDocs />}
        {activeTab === "Identity & Employment Forms" && <IdentityEmploymentForm />}
        {activeTab === "Background Verification Documents" && <BackgroundVerification />}
        {activeTab === "Legal & Compliance Documents" && <LegalComplianceDocs />}
        {activeTab === "Other Optional Documents" && <OptionalDocs />}
      </div>
    </div>
  );
}

export default function Documents() {
  return (
    <Suspense fallback={null}>
      <DocumentsContent />
    </Suspense>
  );
}
