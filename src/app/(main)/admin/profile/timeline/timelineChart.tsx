


export default function TimelineChart() {
    return (
        <>
            <div className="bg-white rounded-lg h-[100%] p-3 flex flex-col items-center justify-center shadow-md">
                <p className="text-sm font-medium text-[#323232]">Timeline</p>
                <div className="w-full bg-blue-00 h-[80%]">
                    <button className="p-1 bg-[#C5C1FF] text-xs rounded-lg px-2 text-[#323232]">2025</button>
                    <div className="h-[11%] w-[74.7%] ml-6 border-l-1 border-b-1 border-[#4C5662]">
                    </div>
                    <div className="flex h-[12%] w-[75%] ml-6 bg-red-00">
                        <div className="bg-green-00 h-[100%] w-[33%] border-r-1 border-[#4C5662]">
                        </div>
                        <div className="bg-green-00 h-[100%] w-[33%] border-r-1 border-[#4C5662]">
                        </div>
                        <div className="bg-green-00 h-[100%] w-[33.5%] border-r-1 border-[#4C5662]">
                        </div>
                    </div>
                    <div className="w-[75%] flex h-[52%] ml-28">
                        <div className="w-[33%] h-[100%] flex flex-col justify-between items-center">
                            <div className="bg-[#9884D6] rounded-full h-5 w-5">
                            </div>
                            <p style={{fontSize:10, color:'#323232', fontWeight:'600'}}>Joined GKelite</p>
                            <p style={{fontSize:8, color:'#323232'}}>23 Jan 2025</p>
                        </div>
                        <div className="w-[33%] h-[100%] flex flex-col justify-between items-center">
                            <div className="bg-orange-400 rounded-full h-5 w-5">
                            </div>
                            <p style={{fontSize:10, color:'#323232', fontWeight:'600'}}>Probation Completed</p>
                            <p style={{fontSize:8, color:'#323232'}}>22 Aug 2025</p>
                        </div>
                        <div className="w-[34%] h-[100%] flex flex-col justify-between items-center">
                            <div className="bg-green-400 rounded-full h-5 w-5">
                            </div>
                            <p style={{fontSize:10, color:'#323232', fontWeight:'600'}}>Active</p>
                            <p style={{fontSize:8, color:'#323232'}}>23 Jun 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}