


export default function ParentialInsuranceDetails() {
    return (
        <>
            <div className="bg-white p-3 rounded-lg flex mt-3 flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Family Details</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Willing To OPT</h3>
                        <p className="text-[#585858] text-xs mt-1">No</p>
                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Current Address</h3>
                        <p className="text-[#585858] text-xs mt-1">21 Aug 1987</p>
                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Mother’s Name</h3>
                        <p className="text-[#585858] text-xs mt-1">Mother</p>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Father’s Name</h3>
                        <p className="text-[#585858] text-xs mt-1">Jones</p>
                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Father’s Age</h3>
                        <p className="text-[#585858] text-xs mt-1">48</p>
                        <h3 className="text-[#1F2937] font-semibold text-xs mt-2">Mother’s DOB</h3>
                        <p className="text-[#585858] text-xs mt-1">13 Feb 1993</p>
                    </div>
                </div>
            </div>
        </>
    )
}