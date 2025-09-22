'use client';
import { useRouter } from "next/navigation";
import { ArrowBendUpLeft, UserCircle } from "phosphor-react";
import CountCard from "../../../../../features/hr/components/CountCard";
import AreaCharts from "../../../../../utils/areaChart";
import InsightCard from "../../../../../utils/insightCard";


export default function DailyActiveUsers() {

    const router = useRouter();

    const cardsData = [
        {
            title: "Daily Active Users",
            count: 278,
            icon: <UserCircle color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        },
        {
            title: "Peak Login Time",
            count: 350,
            // icon: <UsersThree color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        },
        {
            title: "Average Session Du.. ",
            count: 45,
            // icon: <UsersThree color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        },
        {
            title: "% Growth VS Yest....",
            count: 5,
            // icon: <UsersThree color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        }
    ]

    const userActivityData = [
        { name: '09:00', uv: 80, pv: 80 },
        { name: '10:00', uv: 80, pv: 78 },
        { name: '11:00', uv: 95, pv: 92 },
        { name: '12:00', uv: 70, pv: 65 },
        { name: '01:00', uv: 88, pv: 84 },
        { name: '02:00', uv: 92, pv: 90 },
        { name: '03:00', uv: 92, pv: 92 },
        { name: '04:00', uv: 92, pv: 92 },
    ];

    return (
        <>
            <div className="bg-red-00">
                <div className="bg-blue-00 h-40 flex flex-col">
                    <div className="h-[40%] px-5 bg-yellow-00 flex items-center">
                        <div className="flex flex-col justify-center items-between bg-green-00 h-[100%] w-[50%]">
                            <div className="flex w-[100%] justify-start gap-3 bg-pink-00">
                                <ArrowBendUpLeft size={22} color="#323232" weight="fill" className="cursor-pointer" onClick={() => router.back()} />
                                <h2 className="text-[#323232] font-semibold">Daily Active Users</h2>
                            </div>
                            <p className="text-[#414141] text-xs mt-1">Track employees actively using the system on a daily basis</p>
                        </div>
                        <div className="flex items-center justify-end h-[100%] w-[50%] bg-red-00">
                            <select className="text-white bg-[#874DE6] p-2 rounded-lg focus:outline-none">
                                <option className="bg-white text-black" value="currentmonth">Current Month</option>
                                <option className="bg-white text-black" value="jan">JAN</option>
                                <option className="bg-white text-black" value="feb">FEB</option>
                                <option className="bg-white text-black" value="mar">MAR</option>
                                <option className="bg-white text-black" value="apr">APR</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-gray-00 h-[60%] px-5 flex items-end justify-between">
                        {cardsData.map((card, index) => (
                            <CountCard
                                key={index}
                                title={card.title}
                                count={card.count}
                                style="h-[80px]"
                                icon={card.icon}
                                iconBg={card.iconBg} />
                        ))}
                    </div>
                </div>
                <div className="bg-red-00 p-5 flex justify-between">
                    <div className="bg-white w-[48%] flex flex-col py-3 px-3 rounded-lg shadow-md">
                        <h3 className="text-[#111827] font-semibold">User Activity Trend </h3>
                        <AreaCharts data={userActivityData} />
                    </div>
                    <div className="bg-white w-[50%] rounded-lg shadow-md p-3">
                        <div className="flex flex-col justify-start gap-5 bg-blue-00 h-[100%]">
                            <h3 className="text-[#111827] font-semibold">Insights</h3>
                            <div className="bg-green-00 flex justify-between w-[100%]">
                                <InsightCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-00 p-5 pt-0">
                    <div className="bg-white rounded-lg p-3 overflow-x-auto shadow-md">
                        <table className="min-w-full border-0 text-sm text-[#323232] text-center">
                            <thead className="bg-[#EAEAEA] text-[#323232] font-medium">
                                <tr>
                                    <th className="px-4 py-2">User Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Employee ID</th>
                                    <th className="px-4 py-2">Role</th>
                                    <th className="px-4 py-2">Last Login Time</th>
                                    <th className="px-4 py-2">Session Duration</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 11 }).map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-2">LIC-{i + 1}</td>
                                        <td className="px-4 py-2">Module {i + 1}</td>
                                        <td className="px-4 py-2">Active</td>
                                        <td className="px-4 py-2">User {i + 1}</td>
                                        <td className="px-4 py-2">Dept {i + 1}</td>
                                        <td className="px-4 py-2">2025-09-22</td>
                                        <td className="px-4 py-2">2026-09-22</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}