


export default function ProfileCard() {
    return (
        <>
            <div className="bg-white lg:w-[35%] h-50 rounded-lg flex shadow-md">
                <div className="bg-yellow-00 w-[48%] rounded-l-lg flex items-center justify-center">
                    <p className="text-[#323232] font-semibold text-lg">Profile</p>
                </div>
                <div className="bg-pink-00 w-[52%] flex flex-col justify-center rounded-r-lg gap-1">
                    <p className="text-[#323232] font-semibold text-lg">Fullname</p>
                    <p className="text-[#1F2937] font-medium text-sm">Designation:</p>
                    <p className="text-[#1F2937] font-medium text-sm">Employee ID:</p>
                    <p className="text-[#1F2937] font-medium text-sm">Email ID:</p>
                    <p className="text-[#1F2937] font-medium text-sm">Mobile Number:</p>
                    <p className="text-[#1F2937] font-medium text-sm">Join Date:</p>
                </div>
            </div>
        </>
    )
}