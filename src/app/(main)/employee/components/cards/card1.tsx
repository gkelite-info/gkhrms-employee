'use client';
import { UserCircle } from "phosphor-react"


export default function Card1() {

    const data1 = [{
        hour: 7,
        percent: 25,
        icon: <UserCircle size={34} color="#FFFFFF" weight="fill" />
    }]

    return (
        <>
            <div className="w-[32%] h-[100%] flex flex-col justify-between rounded-lg">
                <h3 className="text-[#323232] font-semibold">Attendance Stats</h3>
                <div className="bg-red-00 rounded-lg bg-white h-[80%] shadow-md">
                    <div className="bg-green-00 w-[100%] h-[30%] flex items-center px-3 rounded-t-lg">
                        <select className="focus:outline-none text-black text-xs">
                            <option id="Option">Option</option>
                        </select>
                    </div>
                    {data1.map((data, index) => (
                        <div className="flex bg-indigo-00 h-[70%] w-[100%] items-center" key={index}>
                            <div className="bg-pink-00 w-[25%] h-[100%] flex items-center justify-center rounded-bl-lg">
                                <div className="rounded-full flex items-center justify-center h-15 w-15 bg-black">
                                    {data.icon}
                                </div>
                            </div>
                            <div className="bg-yellow-00 w-[75%] h-[100%] rounded-br-lg flex">
                                <div className="flex flex-col justify-center gap-1 w-[50%] h-[100%] flex items-center justify-center">
                                    <p className="text-[#252525] font-medium text-sm">AVG HRS / DAY</p>
                                    <p className="text-[#323232] font-semibold">{data.hour}</p>
                                </div>
                                <div className="flex flex-col justify-center gap-1 w-[50%] h-[100%] bg-orange-00 rounded-br-lg flex items-center justify-center">
                                    <p className="text-[#252525] font-medium text-sm">AVG HRS / DAY</p>
                                    <p className="text-[#323232] font-semibold">{data.percent}%</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}