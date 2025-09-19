


export default function MyTeam() {
    return (
        <>
            <div className="bg-[#F9FAFB] rounded-lg flex flex-col items-center justify-start h-60 w-[95%] mt-2 shadow-md p-3 mb-7">
                <h2 className="text-[#111827] font-semibold mb-2">My Team</h2>
                <div className="h-[75%] w-[95%] bg-[#E2E0FF] flex flex-wrap justify-center items-center gap-4 rounded-lg">
                    <div className="gap-1 flex flex-col">
                        <div className="bg-blue-200 h-14 w-14 rounded-full flex items-center justify-center">
                            <p className="text-black">I</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <div className="h-2 w-2 bg-[#50FF58] rounded-full">
                            </div>
                            <p style={{ fontSize: 10, color: "#535353" }}>FName</p>
                        </div>
                    </div>
                    <div className="gap-1 flex flex-col">
                        <div className="bg-blue-200 h-14 w-14 rounded-full flex items-center justify-center">
                            <p className="text-black">I</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <div className="h-2 w-2 bg-[#50FF58] rounded-full">
                            </div>
                            <p style={{ fontSize: 10, color: "#535353" }}>FName</p>
                        </div>
                    </div>
                    <div className="gap-1 flex flex-col">
                        <div className="bg-blue-200 h-14 w-14 rounded-full flex items-center justify-center">
                            <p className="text-black">I</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <div className="h-2 w-2 bg-[#50FF58] rounded-full">
                            </div>
                            <p style={{ fontSize: 10, color: "#535353" }}>FName</p>
                        </div>
                    </div>
                    <div className="gap-1 flex flex-col">
                        <div className="bg-blue-200 h-14 w-14 rounded-full flex items-center justify-center">
                            <p className="text-black">I</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <div className="h-2 w-2 bg-[#50FF58] rounded-full">
                            </div>
                            <p style={{ fontSize: 10, color: "#535353" }}>FName</p>
                        </div>
                    </div>

                </div>
                <div className="bg-red-00 w-[80%] mt-2 flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center gap-1">
                        <div className="h-2 w-2 bg-[#50FF58] rounded-full">
                        </div>
                        <p style={{ fontSize: 10, color: "#535353" }}>Present</p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <div className="h-2 w-2 bg-[#FF5050] rounded-full">
                        </div>
                        <p style={{ fontSize: 10, color: "#535353" }}>Absent</p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <div className="h-2 w-2 bg-[#F8FF91] rounded-full">
                        </div>
                        <p style={{ fontSize: 10, color: "#535353" }}>Vacation</p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <div className="h-2 w-2 bg-[#442BE6] rounded-full">
                        </div>
                        <p style={{ fontSize: 10, color: "#535353" }}>Sick Leave</p>
                    </div>
                </div>
            </div>
        </>
    )
}