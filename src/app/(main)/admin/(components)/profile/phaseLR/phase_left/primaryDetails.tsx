

export default function PrimaryDetails() {
    return (
        <>
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Primary Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">First Name :</h3>
                            <p className="text-[#585858] text-xs">Vamshi</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Gender :</h3>
                            <p className="text-[#585858] text-xs">Male</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Martial Status :</h3>
                            <p className="text-[#585858] text-xs">Single</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Physically Handicapped :</h3>
                            <p className="text-[#585858] text-xs">Yes</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-yellow-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">Last Name :</h3>
                            <p className="text-[#585858] text-xs">Jane</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">DOB :</h3>
                            <p className="text-[#585858] text-xs">04 Nov 2003</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Blood Group :</h3>
                            <p className="text-[#585858] text-xs">o+ (O Positive)</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Nationality :</h3>
                            <p className="text-[#585858] text-xs">India</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-[#1F2937] font-semibold mt-3">Contact Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-2 w-[50%] bg-green-00">
                        <div className="flex flex-col justify-center gap-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Personal Email</h3>
                            <p className="text-[#585858] text-xs">Alexander@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 w-[50%] bg-yellow-00">
                        <div className="flex flex-col justify-center gap-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Residence Contact</h3>
                            <p className="text-[#585858] text-xs">9086837392</p>
                        </div>
                    </div>
                </div>
            </div>
        </>     
    )
}