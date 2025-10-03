'use client'
import { getEmployeeProfile } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react"


interface Profile {
    firstname: string;
    designation: string;
    employeeId: string;
    email: string;
    mobile: string;
    dateOfJoining: Date;
}

export default function ProfileCard() {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const employeeId = localStorage.getItem("employeeId") || "123";

        getEmployeeProfile(employeeId)
            .then((employee) => {
                console.log("Fetched profile:", employee);
                setProfile(employee);
            })
            .catch((err) => console.error("Error fetching profile:", err));

        console.log("Finding Loop", employeeId);
    }, []);


    if (!profile)
        return <p className="text-black">Loading..</p>;


    return (
        <>
            <div className="bg-white lg:w-[35%] h-50 rounded-lg flex shadow-md">
                <div className="bg-yellow-00 w-[48%] rounded-l-lg flex items-center justify-center">
                    <p className="text-[#323232] font-semibold text-lg">Profile</p>
                </div>
                <div className="bg-pink-00  flex flex-col justify-center rounded-r-lg gap-1">
                    <p className="text-[#323232] font-semibold text-lg">{profile.firstname}</p>
                    <p className="text-[#1F2937] font-medium text-sm">Designation: {profile.designation}</p>
                    <p className="text-[#1F2937] font-medium text-sm">Employee ID: {profile.employeeId}</p>
                    <p className="text-[#1F2937] font-medium text-sm">Email ID: {profile.email}</p>
                    <p className="text-[#1F2937] font-medium text-sm">Mobile Number: {profile.mobile}</p>
                    <p className="text-[#1F2937] font-medium text-sm">
                        Join Date: {profile.dateOfJoining ? new Date(profile.dateOfJoining).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }) : "N/A"}
                    </p>
                </div>
            </div>
        </>
    )
}