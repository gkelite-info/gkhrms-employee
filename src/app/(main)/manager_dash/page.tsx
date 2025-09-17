'use client';

import { MapPin, Megaphone, Moon, PlusCircle, SignIn, SignOut, Sun, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import NotificationCount from "../../../../utils/notificationCount";
import TeamSnapshot from "../../../../features/manager/components/teamSnapshot";
import TeamLeads from "../../../../features/manager/components/teamLeads";
import TaskCard from "../../../../utils/taskCard";
import PendingTaskCard from "../../../../utils/pendingTaskcard";
import PercentPie from "../../../../utils/pieChart";
import LeaveTable from "../../../../utils/leaveTable";


export default function ManagerDashboard() {

    const [today, setToday] = useState("");
    const [timeString, setTimeString] = useState("");
    const [isDaytime, setIsDaytime] = useState(true);

    useEffect(() => {
        const now = new Date();
        setToday(
            now.toLocaleDateString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
            })
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTimeString(
                now
                    .toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                    })
                    .toUpperCase()
            );

            const hour = now.getHours();
            setIsDaytime(hour >= 6 && hour < 18);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <div className="w-[100%] bg-red-00 h-auto flex items-between overflow-y-auto">
                    <div className="bg-red-00 flex h-31 w-[65%]">
                        <div className="w-[15%] flex justify-center pl-2">
                            <div className="bg-white text-xs text-black h-15 w-15 rounded-full mt-4 flex items-center justify-center">
                                Profile
                            </div>
                        </div>
                        <div className="w-[85%] flex flex-col pt-2">
                            <h2 className="text-[#323232] text-3xl font-semibold">Good Morning !</h2>
                            <div className="flex items-end justify-between pr-10">
                                <p className="text-[#4B4B4B] text-xs mt-1">
                                    Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry
                                </p>
                            </div>

                            <div className="flex w-full mt-2 gap-4">
                                <div className="flex items-center gap-2 w-[20%]">
                                    <MapPin size={15} weight="fill" className="text-[#323232]" />
                                    <p className="text-[#323232] text-xs font-medium">Location</p>
                                </div>
                                <div className="flex items-center w-[80%] px-3 gap-2">
                                    {isDaytime ? (
                                        <Sun size={23} color="#ffc800" weight="fill" />
                                    ) : (
                                        <Moon size={23} color="#9e9e9e" weight="fill" />
                                    )}
                                    <p className="text-xs text-[#323232] font-medium">{today}</p>
                                    <p className="text-2xl text-[#323232] font-semibold ml-2">{timeString}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[35%] flex items-start justify-end px-5 py-4">
                        <div className="relative bg-[#F9FAFB] h-13 w-13 rounded-full flex items-center justify-center">
                            <Megaphone size={28} color="#874DE6" weight="fill" className="cursor-pointer" />
                            <NotificationCount count={3} style="top-[-2] right-0" />
                        </div>
                    </div>
                </div>
                <div className="bg-blue-400 h-auto flex justify-between">
                    <div className="w-[50%] bg-red-400 p-2">
                        <div className="bg-white rounded-lg flex items-center justify-between h-40 w-[100%] mt-1 shadow-md">
                            <div className="w-[60%] h-[100%] bg-green-400 flex flex-col items-start justify-between p-3 rounded-l-lg">
                                <div className="bg-red-00 h-[35%] w-[100%] flex justify-between">
                                    <p className="text-xs text-[#323232] font-medium">Today's Login Time</p>
                                    <div className="h-[100%] w-[45%] bg-white flex flex-col justify-between">
                                        <div className="bg-blue-00 h-[49%] w-[100%] flex items-center gap-1">
                                            <p className="text-[#007752] font-medium text-xs">Log In</p>
                                            <SignIn size={19} color="#007752" weight="fill" />
                                            <p className="text-[#007752] text-xs">:</p>
                                            <p className="text-[#007752] text-xs">10:30 AM</p>
                                        </div>
                                        <div className="bg-blue-00 h-[49%] w-[100%] flex items-center gap-1">
                                            <p className="text-[#B31212] font-medium text-xs">Log Out</p>
                                            <SignOut size={19} color="#B31212" weight="fill" />
                                            <p className="text-[#B31212] text-xs">:</p>
                                            <p className="text-[#B31212] text-xs">07:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-00 h-[65%] w-[100%] flex flex-col justify-between">
                                    <div className="h-[32%] bg-blue-00 flex items-center gap-5">
                                        <p className="text-xs font-medium text-[#323232] w-[50%]">Total Effective Hours</p>
                                        <p className="text-xs font-semibold text-[#100E2E]">5 Hours</p>
                                    </div>
                                    <div className="h-[32%] bg-blue-00 flex items-center gap-5">
                                        <p className="text-xs font-medium text-[#323232] w-[50%]">Total Break</p>
                                        <p className="text-xs font-semibold text-[#100E2E]">2 Hours</p>
                                    </div>
                                    <div className="h-[32%] bg-blue-00 flex items-center gap-5">
                                        <p className="text-xs font-medium text-[#323232] w-[50%]">Total Gross Hours</p>
                                        <p className="text-xs font-semibold text-[#100E2E]">1 Hour</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[45%] h-[100%] flex items-center justify-center">
                                <div className="h-[75%] w-[85%] bg-gradient-to-b from-[#D0CEF7] to-[#E7E7E8] flex flex-col rounded-lg">
                                    <div className="w-[100%] bg-blue-00 h-[30%] flex items-end justify-center rounded-tr-lg rounded-tl-lg">
                                        <h3 className="font-semibold text-white">Mood Tracker</h3>
                                    </div>
                                    <div className="w-[100%] h-[70%] bg-red-00 flex items-center justify-center gap-3 rounded-br-lg rounded-bl-lg">
                                        <div className="bg-green-00 flex flex-col justify-center items-center">
                                            <img src="/images/happy.png" alt="happy.png" className="h-7.5 w-7.5 cursor-pointer hover:h-9 hover:w-9 transition-all hover:-translate-y-1 duration-200" />
                                            <p style={{ fontSize: 8, color: '#111827', cursor: 'pointer' }}>Happy</p>
                                        </div>
                                        <div className="bg-green-00 flex flex-col justify-center items-center">
                                            <img src="/images/sad.png" alt="happy.png" className="h-7.5 w-7 cursor-pointer hover:h-9.5 hover:w-9 transition-all hover:-translate-y-1 duration-200" />
                                            <p style={{ fontSize: 8, color: '#111827', cursor: 'pointer' }}>Sad</p>
                                        </div>
                                        <div className="bg-green-00 flex flex-col justify-center items-center">
                                            <img src="/images/cool.png" alt="happy.png" className="h-7.5 w-7 cursor-pointer hover:h-9.5 hover:w-9 transition-all hover:-translate-y-1 duration-200" />
                                            <p style={{ fontSize: 8, color: '#111827', cursor: 'pointer' }}>Cool</p>
                                        </div>
                                        <div className="bg-green-00 flex flex-col justify-center items-center">
                                            <img src="/images/relaxed.png" alt="happy.png" className="h-7.5 w-7 cursor-pointer hover:h-9.5 hover:w-9 transition-all hover:-translate-y-1 duration-200" />
                                            <p style={{ fontSize: 8, color: '#111827', cursor: 'pointer' }}>Relaxed</p>
                                        </div>
                                        <div className="bg-green-00 flex flex-col justify-center items-center">
                                            <img src="/images/angry.png" alt="happy.png" className="h-8 w-7.5 cursor-pointer hover:h-10 hover:w-9.5 transition-all hover:-translate-y-1 duration-200" />
                                            <p style={{ fontSize: 8, color: '#111827', cursor: 'pointer' }}>Angry</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white h-82 mt-2 rounded-lg p-2">
                            <TeamSnapshot />
                            <TeamLeads />
                        </div>
                        <div className="h-92 bg-white flex flex-col rounded-lg mt-2">
                            <TaskCard style="w-[100%]" gapStyle="w-[14%]" rounded="rounded-t-lg" boxShadow='shadow-none' customHeight="h-[60%]" />
                            <PendingTaskCard style="w-[100%]" rounded='rounded-b-lg' />
                        </div>
                        <div className="bg-white h-143 mt-2 shadow-md rounded-lg p-3 flex flex-col items-center justify-center">
                            <div className="bg-red-00 w-[98%] flex flex-col items-center justify-center">
                                <h3 className="text-[#111827] font-semibold">Attendance & Leave</h3>
                                <div className="bg-[#F4F3FF] rounded-lg flex flex-col items-center h-82 w-[100%] shadow-md pt-3">
                                    <div className="flex justify-between w-[100%] h-[80%]">
                                        <div className="bg-blue-00 w-[56%] h-[100%] flex flex-col items-center p-2">
                                            <div className="bg-[#F7D396] w-[23%] flex items-center justify-center rounded-md">
                                                <h2 className="text-black text-md">Monthly</h2>
                                            </div>
                                            <PercentPie />
                                        </div>
                                        <div className="bg-red-00 w-[44%] h-[100%] flex flex-col items-start text-center p-2 gap-2">
                                            <div className="w-full flex justify-center">
                                                <div className="bg-[#F7D396] w-[25%] flex items-center justify-center rounded-md">
                                                    <h2 className="text-black text-md">Yearly</h2>
                                                </div>
                                            </div>
                                            <div className="bg-blue-00 mt-2 h-full w-[90%] flex flex-col justify-between">
                                                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                                                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#A7A2F2] to-[#4C43DB] rounded-r-full">
                                                    </div>
                                                </div>
                                                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                                                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#FF9FF1] to-[#9D338E] rounded-r-full">
                                                    </div>
                                                </div>
                                                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                                                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#FFC055] to-[#CA8106] rounded-r-full">
                                                    </div>
                                                </div>
                                                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                                                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#E83E1B] to-[#82230F] rounded-r-full">
                                                    </div>
                                                </div>
                                                <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                                                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#F8FF91] to-[#B8C500] rounded-r-full">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-pink-00 w-[95%] h-[15%] flex items-center justify-between gap-1">
                                        <div className="w-[24%] bg-gray-00 flex items-center gap-2">
                                            <div className="h-7 w-7 rounded-full bg-[#6366F1] flex items-center justify-center">
                                                <img src="/images/sick.png" alt="sick.png" style={{ height: 21 }} />
                                            </div>
                                            <p className="text-xs text-black">Sick Leaves</p>
                                        </div>
                                        <div className="w-[25%] bg-indigo-00 flex items-center gap-2">
                                            <div className="h-7 w-7 rounded-full bg-[#FF9FF1] flex items-center justify-center">
                                                <img src="/images/paidLeaves.png" alt="paidLeaves.png" style={{ height: 14, marginBottom: 2 }} />
                                            </div>
                                            <p className="text-xs text-black">Paid Leaves</p>
                                        </div>
                                        <div className="w-[17%] bg-green-00 flex items-center gap-2">
                                            <div className="h-7 w-7 rounded-full bg-[#F59E0B] flex items-center justify-center">
                                                <img src="/images/holidays.png" alt="holidays.png" style={{ height: 16, marginBottom: 2 }} />
                                            </div>
                                            <p className="text-xs text-black">Holidays</p>
                                        </div>
                                        <div className="w-[29%] bg-red-00 flex items-center gap-2">
                                            <div className="h-7 w-7 rounded-full bg-[#CB7475] flex items-center justify-center">
                                                <img src="/images/unpaidLeaves.png" alt="unpaidLeaves.png" style={{ height: 20, marginBottom: 2, marginRight: 1 }} />
                                            </div>
                                            <p className="text-xs text-black">Unpaid Leaves</p>
                                        </div>
                                        <div className="w-[17%] bg-yellow-00 flex items-center gap-2">
                                            <div className="h-7 w-7 rounded-full bg-[#F8FF91] flex items-center justify-center">
                                                <img src="/images/vacation.png" alt="vacation.png" style={{ height: 17 }} />
                                            </div>
                                            <p className="text-xs text-black">Vacation</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-40 w-[100%] bg-[#F4F3FF] mt-2 p-3 rounded-lg">
                                    <p className="text-black">Vamshi</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[50%] bg-gray-400 p-2">
                        Right
                    </div>
                </div>
            </div>
        </>
    )
}