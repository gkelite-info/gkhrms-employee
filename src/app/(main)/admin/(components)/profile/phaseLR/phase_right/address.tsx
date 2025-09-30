


export default function Address() {
    return (
        <>
            <div className="bg-white p-3 mt-3 rounded-lg flex flex-col items-start shadow-md">
                <h3 className="text-[#1F2937] font-semibold">Addresses</h3>
                <div className="flex w-[100%]">
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Current Address</h3>
                        <p className="text-[#585858] text-xs mt-1">Flat 502, Sunrise Apartments
                            MG Road, Andheri West
                            Mumbai, Maharashtra – 400058
                            India
                        </p>
                    </div>
                    <div className="flex flex-col mt-3 w-[50%] bg-green-00">
                        <h3 className="text-[#1F2937] font-semibold text-xs">Permanent Address</h3>
                        <p className="text-[#585858] text-xs mt-1">Flat 502, Sunrise Apartments
                            MG Road, Andheri West
                            Mumbai, Maharashtra – 400058
                            India
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}