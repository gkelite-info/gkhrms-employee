'use client'
import { getEmployeeProfile } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react"

export default function ShiftAndLocation() {

    const [location, setLocation] = useState<string | null>(null);

    useEffect(() => {
        const employeeId = localStorage.getItem("employeeId");
        if (!employeeId) {
            console.error("No employeeId found in localStorage");
            return;
        }
        getEmployeeProfile(employeeId, ["location"])
            .then((data) => setLocation(data.location))
            .catch((err) => console.error("Failed to fetch location", err));
    }, []);


    return (
        <>
            <div className="bg-white w-full h-[20%] rounded-lg flex items-center justify-between p-3 shadow-md">
                <div>
                    <p className="text-sm text-[#1F2937]">Location: {location}</p>
                </div>
                <div>
                    <p className="text-sm text-[#1F2937]">Shift Type: Work from Office</p>
                </div>
                <div>
                    <p className="text-sm text-[#1F2937]">Shift Time: 10:30 AM - 07:30 PM</p>
                </div>
            </div>
        </>
    )
}