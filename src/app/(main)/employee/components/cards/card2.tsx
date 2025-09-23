'use client'
import { useState } from "react";
import { Coffee } from "phosphor-react";
import { motion } from "framer-motion";


export default function Card2() {
    const [activeDay, setActiveDay] =
        useState<"M" | "T" | "W" | "Th" | "F" | "S" | "Su">("M");

    const timings: Record<string, { start: string; end: string }> = {
        M: { start: "10:30 AM", end: "07:00 PM" },
        T: { start: "10:30 AM", end: "07:00 PM" },
        W: { start: "10:30 AM", end: "07:00 PM" },
        Th: { start: "10:30 AM", end: "07:00 PM" },
        F: { start: "10:30 AM", end: "07:00 PM" },
        S: { start: "10:30 AM", end: "04:00 PM" },
        Su: { start: "--", end: "--" },
    };

    const weekDays = ["M", "T", "W", "Th", "F", "S", "Su"];
    const current = timings[activeDay];

    const isClosed = activeDay === "Su";
    const duration = isClosed
        ? "Closed"
        : activeDay === "S"
            ? "5h 30m"
            : "9h 0m";

    return (
        <div className="w-[32%] h-full flex flex-col justify-between rounded-lg">
            <h3 className="text-[#323232] font-semibold">Timings</h3>
            <div className="bg-white rounded-lg h-[80%] shadow-md">
                <div className="bg-green-00 h-[35%] rounded-t-lg flex items-center justify-between px-3">
                    {weekDays.map(day => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day as any)}
                            className={`h-6 w-6 rounded-full flex cursor-pointer items-center justify-center border border-[#848484]
                ${activeDay === day ? "bg-[#323232] text-white" : "text-[#323232]"}`}
                        >
                            <p className="text-sm">{day[0]}</p>
                        </button>
                    ))}
                </div>

                <div className="h-[65%] bg-indigo-00 px-3 rounded-b-lg flex flex-col justify-between">
                    <div className="h-[70%] flex flex-col justify-center gap-1">
                        <p className="text-xs text-[#323232]">
                            {isClosed
                                ? "Closed"
                                : `Today (${current.start} - ${current.end})`}
                        </p>

                        <div className="bg-[#E7E7E7] rounded-full w-full h-[40%]">
                            <motion.div
                                key={activeDay}
                                className="bg-gradient-to-r from-[#453F7D] to-[#ABA3FF] rounded-full h-full"
                                initial={{ width: "0%" }}
                                animate={{ width: isClosed ? "0%" : "70%" }}
                                transition={{ duration: 0.9, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    <div className="h-[30%] flex justify-between items-center">
                        <p className="text-xs text-[#323232]">Duration: {duration}</p>
                        <div className="flex gap-1 items-end">
                            <Coffee size={18} color="#323232" />
                            <p className="text-xs text-[#323232]">
                                {isClosed ? "0 min" : activeDay === "S" ? "30 min" : "60 min"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
