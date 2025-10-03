'use client'

import { getEmployeeFamily } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react";

interface SiblingInfo {
    name?: string | null;
    dob?: string | null;
    gender?: string | null;
    mobile?: string | null;
    profession?: string | null;
}

interface FamilyInfo {
    fatherName?: string | null;
    fatherDOB?: string | null;
    fatherMobile?: string | null;
    fatherProfession?: string | null;
    fatherGender?: string | null;
}

interface RelationsState {
    father: FamilyInfo;
    siblings: SiblingInfo[];
}

export default function Relations() {
    
    const storedEmployeeId = Number(localStorage.getItem("employeeId"));
    const employeeId = storedEmployeeId || null;

    const [relations, setRelations] = useState<RelationsState>({
        father: {},
        siblings: []
    });

    useEffect(() => {
        if (!employeeId) {
            console.error("Employee ID is missing from localStorage. Cannot fetch relations.");
            return;
        }

        const fetchRelations = async () => {
            try {
                const data = await getEmployeeFamily(employeeId);
                
                setRelations({
                    father: data.family || {},
                    siblings: data.siblings || []
                });
            } catch (err) {
                console.error("Error fetching relations details:", err);
            }
        };

        fetchRelations();
    }, [employeeId]);

    const displayValue = (value: string | Date | number | null | undefined) => {
        const formattedValue = value instanceof Date 
            ? value.toLocaleDateString('en-GB')
            : value;
        
        return formattedValue ? String(formattedValue) : "Non Set";
    }

    const father = relations.father;
    const sibling1 = relations.siblings[0];

    return (
        <>
            <div className="bg-white p-3 mt-3 rounded-lg flex flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Relations</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%]">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Father</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Name :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(father.fatherName)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Mobile :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(father.fatherMobile)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Profession :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(father.fatherProfession)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Date of Birth :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(father.fatherDOB)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Gender :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(father.fatherGender)}</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col mt-3 w-[50%]">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Sibling</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Name :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(sibling1?.name)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Mobile :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(sibling1?.mobile)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Profession :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(sibling1?.profession)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Date of Birth :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(sibling1?.dob)}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Gender :</h3>
                            <p className="text-[#585858] text-xs">{displayValue(sibling1?.gender)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}