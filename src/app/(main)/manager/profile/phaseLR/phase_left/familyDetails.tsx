'use client'

import { getEmployeeFamily } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react";

interface SiblingInfo {
    name?: string | null;
    dob?: string | null;
    gender?: string | null;
}

interface FamilyState {
    spouseName?: string | null;
    spouseDOB?: string | null;
    spouseGender?: string | null;
    siblings: SiblingInfo[]; 
}

export default function FamilyDetails() { 

    const storedEmployeeId = Number(localStorage.getItem("employeeId"));
    const employeeId = storedEmployeeId || null; 

    const [familyData, setFamilyData] = useState<FamilyState>({ siblings: [] });

    useEffect(() => {
        if (!employeeId) {
            console.error("I got !employeeId: The ID is missing from localStorage or is 0.");
            return;
        }
        
        const fetchFamily = async () => {
            try {
                const data = await getEmployeeFamily(employeeId); 
                
                setFamilyData({
                    ...data.family,
                    siblings: data.siblings || []
                });
            } catch (err) {
                console.error("Error fetching family details:", err);
            }
        };

        fetchFamily();
    }, [employeeId])

    const displayValue = (value: string | Date | null | undefined) => {
        const formattedValue = value instanceof Date 
            ? value.toLocaleDateString()
            : value;
        return formattedValue || "Non Set";
    }

    const child1 = familyData.siblings[0];
    const child2 = familyData.siblings[1];

    return (
        <>
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Family Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">Spouse Name :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(familyData.spouseName)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 1 Name :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(child1?.name)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 1 DOB :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(child1?.dob)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 2 Gender : </h3>
                            <p className="text-[#585858] text-xs">{displayValue(child2?.gender)}</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col mt-3 w-[50%] bg-yellow-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">Spouse DOB :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(familyData.spouseDOB)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 1 Gender :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(child1?.gender)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 2 Name :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(child2?.name)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 2 DOB : </h3>
                            <p className="text-[#585858] text-xs">{displayValue(child2?.dob)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}