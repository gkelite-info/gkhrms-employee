'use client'

import { getEmployeeEducation, getEmployeeExperience } from "@/api-requests/employeeApi";
import { useEffect, useState } from "react";

interface EducationRecord {
    branch: string;
    specialization?: string;
    university?: string;
    yearOfCompletion?: string;
    cgpa?: string;
}

interface ExperienceRecord {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    location?: string;
}

export default function Education() {

    const [education, setEducation] = useState<EducationRecord[]>([]);
    const [experience, setExperience] = useState<ExperienceRecord[]>([]);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const employeeID = localStorage.getItem("employeeId");
                if (!employeeID)
                    return
                const data = await getEmployeeEducation(employeeID);
                setEducation(data);
            } catch (error) {
                console.error("Failed to fetch education details", error)
                return
            }
        };
        fetchEducation();
    }, [])

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const employeeId = localStorage.getItem("employeeId");
                if (!employeeId) return;
                const data = await getEmployeeExperience(employeeId);
                setExperience(data);
            } catch (err) {
                console.error("Failed to fetch experience", err);
            }
        };
        fetchExperience();
    }, [])

    return (
        <>
            <div className="bg-white p-3 rounded-lg flex flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Education</h3>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index} className="flex flex-col mt-3 w-full">
                            <div className="flex items-center">
                                <h3 className="text-[#1F2937] font-semibold text-xs">Branch / Specialization :</h3>
                                <p className="text-[#585858] text-xs ml-2">
                                    {edu.branch} {edu.specialization ? `(${edu.specialization})` : ""}
                                </p>
                            </div>
                            <div className="flex items-center mt-2">
                                <h3 className="text-[#1F2937] font-semibold text-xs">Year of completion :</h3>
                                <p className="text-[#585858] text-xs ml-2">{edu.yearOfCompletion}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <h3 className="text-[#1F2937] font-semibold text-xs">CGPA :</h3>
                                <p className="text-[#585858] text-xs ml-2">{edu.cgpa}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <h3 className="text-[#1F2937] font-semibold text-xs">University / College :</h3>
                                <p className="text-[#585858] text-xs ml-2">{edu.university}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xs text-gray-500 mt-2">No education records found.</p>
                )}

                {experience.length === 1 ? (
                    experience.map((exp, index) => (
                        <div key={index} className="flex flex-col mt-3 bg-blue-00 w-full">
                            <h3 className="text-[#1F2937] font-semibold">Experience</h3>
                            <div className="flex items-center mt-3">
                                <h3 className="text-[#1F2937] font-semibold text-xs">Role & Company :</h3>
                                <p className="text-[#585858] text-xs ml-2">{exp.role} - {exp.company}</p>
                            </div>
                            <div className="flex items-center mt-1">
                                <h3 className="text-[#1F2937] font-semibold text-xs">Duration :</h3>
                                <p className="text-[#585858] text-xs ml-2">
                                    {new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
                                </p>
                            </div>
                            {exp.location && (
                                <div className="flex items-center mt-1">
                                    <h3 className="text-[#1F2937] font-semibold text-xs">Location :</h3>
                                    <p className="text-[#585858] text-xs ml-2">{exp.location}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-xs text-gray-500 mt-2">No experience records found.</p>
                )}
            </div >
        </>
    )
}