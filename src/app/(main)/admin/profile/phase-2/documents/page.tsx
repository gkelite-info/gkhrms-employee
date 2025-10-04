"use client";
import { useEffect, useState } from "react";
import IdentityProof from "./identityproof";
import AddressProof from "./addressproof";
import EducationalCertificates from "./educationalCertificates";
import WorkExperienceDocs from "./workexperience";
import IdentityEmploymentForm from "./identityEmploymentform";
import BackgroundVerification from "./backgroundVerification";
import LegalComplianceDocs from "./legalCompliance";
import OptionalDocs from "./optionalDocs";

export default function Documents() {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [identityFiles, setIdentityFiles] = useState<{ [label: string]: File | null }>({});

    useEffect(() => {
        const savedTab = localStorage.getItem("activeTab");
        setActiveTab(savedTab || "Identity Proof");
    }, []);

    useEffect(() => {
        if (activeTab) {
            localStorage.setItem("activeTab", activeTab);
        }
    }, [activeTab]);

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
                    <IdentityProof files={identityFiles} setFiles={setIdentityFiles} />
                )}

                {activeTab === "Address Proof" && (
                    <AddressProof files={identityFiles} setFiles={setIdentityFiles} />
                )}

                {activeTab === "Educational Certificates" && (
                    <EducationalCertificates files={identityFiles} setFiles={setIdentityFiles} />
                )}

                {activeTab === "Work Experience Documents" && (
                    <WorkExperienceDocs files={identityFiles} setFiles={setIdentityFiles} />
                )}

                {activeTab === "Identity & Employment Forms" && (
                    <IdentityEmploymentForm files={identityFiles} setFiles={setIdentityFiles} />
                )}

                {activeTab === "Background Verification Documents" && (
                    <BackgroundVerification files={identityFiles} setFiles={setIdentityFiles} />
                )}

                {activeTab === "Legal & Compliance Documents" && (
                    <LegalComplianceDocs files={identityFiles} setFiles={setIdentityFiles} />
                )}

                {activeTab === "Other Optional Documents" && (
                    <OptionalDocs files={identityFiles} setFiles={setIdentityFiles} />
                )}
            </div>
        </div>
    );
}
