"use client";
import { useState } from "react";
import IdentityProof from "./identityproof";
import AddressProof from "./addressproof";
import EducationalCertificates from "./educationalCertificates";
import WorkExperienceDocs from "./workexperience";
import IdentityEmploymentForm from "./identityEmploymentform";
import BackgroundVerification from "./backgroundVerification";
import LegalComplianceDocs from "./legalCompliance";
import OptionalDocs from "./optionalDocs";

export default function Documents() {
    const [activeTab, setActiveTab] = useState("Identity Proof");

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
                {activeTab === "Identity Proof" && (
                    <IdentityProof />
                )}

                {activeTab === "Address Proof" && (
                    <AddressProof />
                )}

                {activeTab === "Educational Certificates" && (
                    <EducationalCertificates />
                )}

                {activeTab === "Work Experience Documents" && (
                    <WorkExperienceDocs />
                )}

                {activeTab === "Identity & Employment Forms" && (
                    <IdentityEmploymentForm />
                )}

                {activeTab === "Background Verification Documents" && (
                    <BackgroundVerification />
                )}

                {activeTab === "Legal & Compliance Documents" && (
                    <LegalComplianceDocs />
                )}

                {activeTab === "Other Optional Documents" && (
                    <OptionalDocs />
                )}
            </div>
        </div>
    );
}
