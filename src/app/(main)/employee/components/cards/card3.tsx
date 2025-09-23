'use client'
import { Scroll } from "phosphor-react";
import { useEffect, useState } from "react";




export default function Card3() {

    const [today, setToday] = useState("")
    const [timeString, setTimeString] = useState("")
    const [isDaytime, setIsDaytime] = useState(true)

    useEffect(() => {
        const now = new Date()
        setToday(
            now.toLocaleDateString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
            })
        )
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            setTimeString(
                now
                    .toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                    })
                    .toUpperCase()
            )

            const hour = now.getHours()
            setIsDaytime(hour >= 6 && hour < 18)
        }, 1000)

        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <div className="w-[32%] h-[100%] flex flex-col justify-between rounded-lg">
                <h3 className="text-[#323232] font-semibold">Actions</h3>
                <div className="rounded-lg bg-white h-[80%] flex flex-col shadow-md">
                    <div className="bg-white h-[80%] rounded-t-lg p-3 flex flex-col">
                        <div className="bg-indigo-00 h-[55%] flex justify-between">
                            <div className="border-1 border-[#848484] flex items-center justify-center w-[45%] h-[100%] rounded-lg">
                                <p className="text-[#323232]">{timeString}</p>
                            </div>
                            <button className="bg-[#BD413D] text-white cursor-pointer text-sm font-medium w-[45%] h-[100%] rounded-lg">
                                Clock-Out
                            </button>
                        </div>
                        <div className="bg-gray-00 h-[40%] flex items-end justify-between">
                            <p className="text-xs ml-3 text-[#323232]">{today}</p>
                            <div className="bg-green-00 w-[45%] h-[100%] flex items-end justify-around px-2">
                                <p className="text-xs text-[#323232]">5:08h</p>
                                <p className="text-xs text-[#323232]">Since login</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-00 h-[20%] rounded-b-lg flex items-start px-3 gap-2">
                        <Scroll size={15} color="#7D73E3" className="cursor-pointer" />
                        <p className="text-[#7D73E3] text-xs cursor-pointer">Attendance Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}