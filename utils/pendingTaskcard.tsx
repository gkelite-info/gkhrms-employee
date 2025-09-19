'use client';


export default function PendingTaskCard({ style, rounded = 'rounded-lg', shadow = 'shadow-md' }: { style: string, rounded?: string, shadow?: string }) {

    return (
        <>
            <div className={`bg-[#F9FAFB] h-[60%] w-[49%] p-2 py-0 flex flex-col justify-start ${shadow} ${style} ${rounded}`}>
                <div className="w-[100%] h-[20%] bg-pink-00 flex justify-between items-center">
                    <div className="flex bg-red-00 flex items-center">
                        <div className="rounded-full h-5 w-5 bg-[#272372] flex items-center justify-center">
                            <p className="text-xs font-semibold text-white">6</p>
                        </div>
                        <p className="text-[#272372] font-medium ml-2 text-xs">Pending Tasks</p>
                    </div>
                </div>
                <div className="bg-green-00 flex flex-col justify-center gap-2 mt-2">
                    <div className="flex w-[100%] bg-red-00 items-center">
                        <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1">
                        </div>
                        <p className="text-[#272372] font-medium text-xs ml-3">Created Dashboard</p>
                    </div>
                    <div className="flex w-[100%] bg-red-00 items-center">
                        <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1">
                        </div>
                        <p className="text-[#272372] text-xs ml-3">Task 2</p>
                    </div>
                    <div className="flex w-[100%] bg-red-00 items-center">
                        <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1">
                        </div>
                        <p className="text-[#272372] text-xs ml-3">Task 3</p>
                    </div>
                    <div className="flex w-[100%] bg-red-00 items-center">
                        <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1">
                        </div>
                        <p className="text-[#272372] text-xs ml-3">Task 4</p>
                    </div>
                    <div className="flex w-[100%] bg-red-00 items-center">
                        <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1">
                        </div>
                        <p className="text-[#272372] text-xs ml-3">Task 5</p>
                    </div>
                </div>
            </div>
        </>
    )
}