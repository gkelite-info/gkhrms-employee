


export default function FamilyDetails() {
    return (
        <>
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Family Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">Spouse Name :</h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child Name :</h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child DOB :</h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 2 Gender : </h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-yellow-00">
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#1F2937] font-medium text-xs">Spouse DOB :</h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child Gender :</h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 2 Name :</h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <h3 className="text-[#1F2937] font-medium text-xs">Child 2 DOB : </h3>
                            <p className="text-[#585858] text-xs">Non Set</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}