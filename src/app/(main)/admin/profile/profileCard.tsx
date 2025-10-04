'use client'
import { getEmployeeProfile } from "@/api-requests/employeeApi";
import { useEffect, useState, useCallback } from "react"
import PhotoUploadForm from "./PhotoUploadForm"; // Import the upload component

const API_BASE_URL = "http://localhost:5000/api/v1/uploads";

interface Profile {
    firstname: string;
    designation: string;
    employeeId: string;
    email: string;
    mobile: string;
    dateOfJoining: Date;
    photoURL: string | null
}

export default function ProfileCard() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    const employeeId = localStorage.getItem("employeeId") || "123";

    const fetchProfile = useCallback(() => {
        setLoading(true);
        getEmployeeProfile(employeeId)
            .then((employee) => {
                console.log("Fetched profile:", employee);
                setProfile(employee);
            })
            .catch((err) => console.error("Error fetching profile:", err))
            .finally(() => setLoading(false));
    }, [employeeId]);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    // Function to call after successful upload
    const handlePhotoUploadSuccess = () => {
        fetchProfile();
    };


    if (loading)
        return <p className="text-black">Loading..</p>;

    if (!profile)
        return <p className="text-red-500">Error loading profile.</p>;


    return (
        <>


            <div className="bg-white lg:w-[35%] h-50 rounded-lg flex shadow-md">
                <div className="bg-yellow-00 w-[48%] rounded-l-lg flex flex-col items-center justify-center p-4">
                    {/* <p className="text-[#323232] font-semibold text-lg mb-2">Profile</p> */}
                    <PhotoUploadForm
                        employeeId={profile.employeeId}
                        onUploadSuccess={handlePhotoUploadSuccess}
                    />
                </div>
                <div className="bg-pink-00 flex flex-col justify-center rounded-r-lg gap-1 p-4">
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