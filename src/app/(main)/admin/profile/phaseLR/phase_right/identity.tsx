'use client'

import { useEffect, useState } from "react";
import { getEmployeeAddresses, getEmployeeFamily, getEmployeeProfile } from "@/api-requests/employeeApi";

interface EmployeeProfile {
    firstname?: string | null; 
    dob?: string | null;
    gender?: string | null;
    aadhaarNumber?: string | null;
    panNumber?: string | null;
}

interface FamilyData {
    fatherName?: string | null;
}

interface EmployeeAddress {
    type: string;
    addressLine: string;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postalCode?: string | null;
}

interface IdentityState {
    profile: EmployeeProfile;
    family: FamilyData;
    addresses: EmployeeAddress[];
}

export default function IdentityInformation() {
    const storedEmployeeId = Number(localStorage.getItem("employeeId"));
    const employeeId = storedEmployeeId || null;

    const [identityData, setIdentityData] = useState<IdentityState>({
        profile: {},
        family: {},
        addresses: [],
    });

    useEffect(() => {
        if (!employeeId) {
            console.error("Employee ID is missing from localStorage. Cannot fetch identity details.");
            return;
        }

        const fetchIdentityDetails = async () => {
            try {
                const [profileRes, familyRes, addressRes] = await Promise.all([
                    getEmployeeProfile(employeeId),
                    getEmployeeFamily(employeeId),
                    getEmployeeAddresses(employeeId)
                ]);

                const profileData: EmployeeProfile = {
                    firstname: profileRes.firstname || null,
                    dob: profileRes.dob || null,
                    gender: profileRes.gender || null,
                    aadhaarNumber: profileRes.aadhaarNumber || null,
                    panNumber: profileRes.panNumber || null
                };

                setIdentityData({
                    profile: profileData,
                    family: familyRes.family || {},
                    addresses: addressRes || []
                });

            } catch (err) {
                console.error("Error fetching identity details:", err);
            }
        };

        fetchIdentityDetails();
    }, [employeeId]);

    const displayValue = (value: string | Date | number | null | undefined) => {
        const display = value instanceof Date ? value.toLocaleDateString('en-GB') : value;
        return display ? String(display) : "Non Set";
    }

    const renderAddress = () => {
        const address = identityData.addresses.find(addr => addr.type.toLowerCase() === "current");
        if (!address) return <p className="text-[#585858] text-xs">No current address found</p>;

        return (
            <p className="text-[#585858] text-xs">
                {address.addressLine} <br />
                {address.city && `${address.city}, `}{address.state && `${address.state} – `}{address.postalCode} <br />
                {address.country}
            </p>
        );
    };

    const { profile, family } = identityData;

    return (
        <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
            <h3 className="text-[#1F2937] font-semibold">Identity Information</h3>

            <h3 className="text-[#1F2937] font-semibold text-xs mt-3">Photo ID</h3>
            <div className="bg-white w-[100%] border-b-1 flex justify-between mt-3">
                <p className="text-xs text-black">File</p>
            </div>
            <div className="flex w-[100%]">
                <div className="flex flex-col mt-3 w-[50%] gap-1">
                    <div className="flex items-center gap-2 mt-1">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Name :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(profile.firstname)}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Aadhaar Number :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(profile.aadhaarNumber)}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Date of Birth :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(profile.dob)}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Gender :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(profile.gender)}</p>
                    </div>
                    <div className="flex items-start gap-2 mt-1">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Address :</h3>
                        {renderAddress()}
                    </div>
                </div>
            </div>

            <div className="bg-white w-[100%] border-b-1 flex justify-between mt-3">
                <p className="text-xs text-black">File</p>
            </div>
            <div className="flex w-[100%]">
                <div className="flex flex-col mt-3 w-[50%]">
                    <div className="flex items-center gap-2 mt-2">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Name :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(profile.firstname)}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Father’s Name :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(family.fatherName)}</p>
                    </div>
                </div>
                <div className="flex flex-col mt-3 w-[50%]">
                    <div className="flex items-center gap-2 mt-2">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Permanent Account Number :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(profile.panNumber)}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Date of Birth :</h3>
                        <p className="text-[#585858] text-xs">{displayValue(profile.dob)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
