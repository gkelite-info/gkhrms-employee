'use client';

import { getEmployeeProfil } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react";

interface Profile {
    aboutMe: string;
    professionalSummary: string;
}

export default function AboutMe() {

    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const employeeId = localStorage.getItem("employeeId");
                if (!employeeId) return;

                const data = await getEmployeeProfil(employeeId);
                setProfile(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProfile();
    }, []);

    if (!profile) return <p className="text-black"></p>;


    return (
        <>
            <div className="bg-white p-3 rounded-lg flex flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">About Me</h3>
                <p className="text-xs text-[#585858] mt-1">{profile.aboutMe}</p>
            <h3 className="text-[#1F2937] font-semibold mt-5 text-sm">Professional Summary</h3>
                    <p className="text-xs text-[#585858] mt-1">{profile.professionalSummary}</p>
            </div>
        </>
   )
    
}