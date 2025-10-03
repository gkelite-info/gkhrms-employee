'use client'

import { getEmployeeFamily, getEmployeeAddresses } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react";


interface EmployeeAddress {
    id: number;
    employeeId: number;
    type: string;
    addressLine: string;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postalCode?: string | null;
}

interface ParentInsuranceState {
    fatherName?: string | null;
    fatherAge?: number | null;
    motherName?: string | null;
    motherDOB?: string | null;
    willingToOPT?: boolean | null;
}

export default function ParentialInsuranceDetails() {

    const storedEmployeeId = Number(localStorage.getItem("employeeId"));
    const employeeId = storedEmployeeId || null;

    const [insuranceDetails, setInsuranceDetails] = useState<ParentInsuranceState>({});
    
    const [addresses, setAddresses] = useState<EmployeeAddress[]>([]);

    useEffect(() => {
        if (!employeeId) {
            console.error("Employee ID is missing from localStorage. Cannot fetch details.");
            return;
        }

        const fetchDetails = async () => {
            try {
                const familyData = await getEmployeeFamily(employeeId);
                const family = familyData.family || {};
                setInsuranceDetails({
                    fatherName: family.fatherName,
                    fatherAge: family.fatherAge,
                    motherName: family.motherName,
                    motherDOB: family.motherDOB,
                    willingToOPT: family.willingToOPT,
                });

                const addressData = await getEmployeeAddresses(employeeId);
                setAddresses(addressData);

            } catch (err) {
                console.error("Error fetching details:", err);
            }
        };

        fetchDetails();
    }, [employeeId]);

    const displayValue = (value: string | Date | number | boolean | null | undefined) => {
        let display: string | number | undefined | null;

        if (typeof value === 'boolean') {
            display = value ? "Yes" : "No";
        } else if (value instanceof Date) {
            display = value.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        } else {
            display = value;
        }

        return display ? String(display) : "Non Set";
    }

    const renderCurrentAddress = () => {
        const address = addresses.find(addr => addr.type.toLowerCase() === "current");
        
        if (!address) {
            return <p className="text-[#585858] text-xs mt-1">No current address found</p>;
        }

        return (
            <p className="text-[#585858] text-xs mt-1">
                {address.addressLine} <br />
                {address.city && `${address.city}, `}{address.state && `${address.state} – `}{address.postalCode} <br />
                {address.country}
            </p>
        );
    };


    return (
        <>
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Parental Insurance Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Father’s Name</h3>
                        <p className="text-[#585858] text-xs mt-1">{displayValue(insuranceDetails.fatherName)}</p>

                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Father’s Age</h3>
                        <p className="text-[#585858] text-xs mt-1">{displayValue(insuranceDetails.fatherAge)}</p>

                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Mother’s DOB</h3>
                        <p className="text-[#585858] text-xs mt-1">{displayValue(insuranceDetails.motherDOB)}</p>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Willing To OPT</h3>
                        <p className="text-[#585858] text-xs mt-1">{displayValue(insuranceDetails.willingToOPT)}</p>

                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Current Address</h3>
                        {renderCurrentAddress()}

                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Mother’s Name</h3>
                        <p className="text-[#585858] text-xs mt-1">{displayValue(insuranceDetails.motherName)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}