import { getEmployeeProfil } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react";

interface Profile{
    whatILove: string;
    strengths: string;
    passions: string;
}

export default function WhatILove() {

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
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">What I Love</h3>
                <p className="text-xs text-[#585858] mt-1">{profile.whatILove}</p>
            <h3 className="text-[#1F2937] font-semibold mt-5 text-sm">Strengths</h3>
                    <p className="text-xs text-[#585858] mt-1">{profile.strengths}</p>
                    <h3 className="text-[#1F2937] font-semibold mt-5 text-sm">Passions</h3>
                    <p className="text-xs text-[#585858] mt-1">{profile.passions}</p>
            </div>
        </>
    ) 
}