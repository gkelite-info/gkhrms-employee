


export default function IdentityInformation() {
    return (
        <>
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Identity Information</h3>
                <h3 className="text-[#1F2937] font-semibold text-xs mt-3">Photo ID</h3>
                <div className="bg-white w-[100%] border-b-1 flex justify-between mt-3">
                    <p className="text-xs text-black">File</p>
                </div>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Aadhaar Number :</h3>
                            <p className="text-[#585858] text-xs">1234 5678 9012</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Date of Birth :</h3>
                            <p className="text-[#585858] text-xs">19 Feb 2003</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Address :</h3>
                            <p className="text-[#585858] text-xs">Flat 502, Sun....</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Enrollment Number : </h3>
                            <p className="text-[#585858] text-xs">11157253794082903</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Name :</h3>
                            <p className="text-[#585858] text-xs">Alexander</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Gender :</h3>
                            <p className="text-[#585858] text-xs">Male</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[100%] border-b-1 flex justify-between mt-3">
                    <p className="text-xs text-black">File</p>
                </div>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Permanent Account Number :</h3>
                            <p className="text-[#585858] text-xs">XXXXXXX9678</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Date of Birth :</h3>
                            <p className="text-[#585858] text-xs">19 Feb 2003</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2 mt-2">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Name : </h3>
                            <p className="text-[#585858] text-xs">Alexander</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-semibold text-xs">Father’s Name :</h3>
                            <p className="text-[#585858] text-xs">Jones</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}