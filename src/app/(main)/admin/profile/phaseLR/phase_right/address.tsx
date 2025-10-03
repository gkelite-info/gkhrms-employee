'use client'

import { getEmployeeAddresses } from "@/api-requests/employeeApi";
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

export default function Address() {
    const [addresses, setAddresses] = useState<EmployeeAddress[]>([]);
    const employeeId = Number(localStorage.getItem("employeeId"));

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const data = await getEmployeeAddresses(employeeId);
                console.log("Fetched addresses:", data);
                setAddresses(data);
            } catch (err) {
                console.error("Error fetching addresses:", err);
            }
        };
        fetchAddresses();
    }, [employeeId]);


    const renderAddress = (type: string) => {
        const address = addresses.find(addr => addr.type.toLowerCase() === type.toLowerCase());
        if (!address) return <p className="text-[#585858] text-xs mt-1">No {type} address found</p>;

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
            <div className="bg-white p-3 mt-3 rounded-lg flex flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Addresses</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Current Address</h3>
                        {renderAddress("current")}
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Permanent Address</h3>
                        {renderAddress("permanent")}
                    </div>
                </div>
            </div>
        </>
    )
}