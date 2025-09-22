'use client';
import { ArrowBendUpLeft } from "phosphor-react";
import CountCard from "../../../../../features/hr/components/CountCard";
import { useRouter } from "next/navigation";
import Table from "../../../../../utils/Table/Table";


export default function LicenseUtilization() {

    const router = useRouter();

    const cardsData = [
        {
            title: "Total Licenses",
            count: 500,
            // icon: <UsersThree color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        },
        {
            title: "Active Licenses",
            count: 350,
            // icon: <UsersThree color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        },
        {
            title: "Inactive Licenses",
            count: 150,
            // icon: <UsersThree color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        },
        {
            title: "Utilization %",
            count: 70,
            // icon: <UsersThree color="#8248E3" size={27} />,
            iconBg: "#E0DEFBD6",
        }

    ]


    return (
        <>
            <div className="bg-red-00">
                <div className="bg-blue-00 h-40 flex flex-col">
                    <div className="h-[40%] px-5 bg-yellow-00 flex items-center">
                        <div className="flex items-center justify-between h-[100%] w-[16%]">
                            <ArrowBendUpLeft size={22} color="#323232" weight="fill" className="cursor-pointer" onClick={() => router.back()} />
                            <h2 className="text-[#323232] font-semibold">License Utilization</h2>
                        </div>
                        <div className="flex items-center justify-end h-[100%] w-[84%] bg-red-00">
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
                                // icon={card.icon}
                                iconBg={card.iconBg} icon={undefined} />
                        ))}
                    </div>
                </div>
                <div className="bg-green-00 h-auto p-5">
                    <div className="bg-white rounded-lg p-3 overflow-x-auto">
                        <table className="min-w-full border-0 text-sm text-[#323232] text-center">
                            <thead className="bg-[#EAEAEA] text-[#323232] font-medium">
                                <tr>
                                    <th className="px-4 py-2">License ID</th>
                                    <th className="px-4 py-2">Module</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Assigned To</th>
                                    <th className="px-4 py-2">Department</th>
                                    <th className="px-4 py-2">Last Active Date</th>
                                    <th className="px-4 py-2">Expiry Date</th>
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