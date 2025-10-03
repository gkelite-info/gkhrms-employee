'use client'

import { getEmployeeProfile } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react";

interface Person {
    firstname: string;
    lastname: string;
    gender: string;
    marital_status: string;
    physicallyHandicapped: string;
    nationality: string;
    bloodGroup: string;
    dob: string | null;
    email: string;
    emergencyContact: string;
}

export default function PrimaryDetails() {

    const [user, setUser] = useState<Person | null>(null);

    useEffect(() => {
        const employeeId = localStorage.getItem("employeeId") || "123";

        getEmployeeProfile(employeeId)
            .then((employee) => {
                console.log("Fetched profile:", employee);
                setUser(employee);
            })
            .catch((err) => console.error("Error fetching profile:", err));

        console.log("Finding Loop", employeeId);
    }, []);

    if (!user) return <p className="text-black"></p>

    return (
        <>
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Primary Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">First Name :</h3>
                            <p className="text-[#585858] text-xs">{user.firstname}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Gender :</h3>
                            <p className="text-[#585858] text-xs">{user.gender}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Martial Status :</h3>
                            <p className="text-[#585858] text-xs">{user.marital_status}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Physically Handicapped :</h3>
                            <p className="text-[#585858] text-xs">{user.physicallyHandicapped}</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-yellow-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">Last Name :</h3>
                            <p className="text-[#585858] text-xs">{user.lastname}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">DOB :</h3>
                            <p className="text-[#585858] text-xs">{user.dob}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Blood Group :</h3>
                            <p className="text-[#585858] text-xs">{user.bloodGroup}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Nationality :</h3>
                            <p className="text-[#585858] text-xs">{user.nationality}</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-[#1F2937] font-semibold mt-3">Contact Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-2 w-[50%] bg-green-00">
                        <div className="flex flex-col justify-center gap-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Personal Email</h3>
                            <p className="text-[#585858] text-xs">{user.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 w-[50%] bg-yellow-00">
                        <div className="flex flex-col justify-center gap-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Residence Contact</h3>
                            <p className="text-[#585858] text-xs">{user.emergencyContact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}