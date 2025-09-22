'use client';
import { ArrowClockwise, CheckCircle, Download, DownloadSimple, Play } from "phosphor-react";
import AreaCharts from "../../../../../utils/areaChart";
import FullPieGraph from "../../../../../features/admin/components/FullPieGraph";
import IconButton from "../../../../../utils/IconButton";

export default function BackupRestoration() {

    const dailyActiveUser = [
        { value: 33, color: "#D6C7FF", legend: "Full" },
        { value: 33, color: "#9D82E7", legend: "Incremental" },
        { value: 34, color: "#7855E0", legend: "Differential" },
    ]

    return (
        <>
            <div className="bg-red-00 w-[100%] flex justify-center">
                <div className="bg-blue-00 w-[95%] flex flex-col p-3 pl-0 pr-0">
                    <div className="bg-green-00 h-10 w-[100%] flex justify-between">
                        <h3 className="text-[#323232] font-semibold text-lg">Recent Backup Status</h3>
                        <div className="bg-indigo-00 h-[100%] w-[25%] flex justify-between">
                            <div className="flex items-center justify-center gap-3 w-[40%]">
                                <ArrowClockwise size={20} color='#323232' weight="fill" className="cursor-pointer" />
                                <h4 className="text-[#323232] font-medium text-xs cursor-pointer">Refresh</h4>
                            </div>
                            <div className="flex items-center justify-center gap-3 w-[60%]">
                                <DownloadSimple size={20} color='#323232' weight="fill" className="cursor-pointer" />
                                <h4 className="text-[#323232] font-medium text-xs cursor-pointer">Download Report</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-00 h-20 flex items-end justify-between rounded-b-lg">
                        <div className="bg-white w-[23%] h-[90%] rounded-lg shadow-md flex">
                            <div className="bg-green-00 w-[25%] flex items-center justify-center">
                                <CheckCircle size={30} color="#7CCC8A" weight="fill" />
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Last backup Completed</p>
                                <p className="text-xs text-[#323232]">15 Sept 2025, 11:45 PM</p>
                            </div>
                        </div>
                        <div className="bg-white w-[23%] h-[90%] flex justify-center rounded-lg shadow-md">
                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Backup Size</p>
                                <p className="text-xs text-[#323232]">120 GB</p>
                            </div>
                        </div>
                        <div className="bg-white w-[23%] h-[90%] flex justify-center rounded-lg shadow-md">
                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Duration</p>
                                <p className="text-xs text-[#323232]">45 Mins</p>
                            </div>
                        </div>
                        <div className="bg-white w-[23%] h-[90%] flex justify-center rounded-lg shadow-md">
                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Status</p>
                                <p className="text-xs text-[#323232]">Successful</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-00 mt-2 h-auto rounded-lg flex justify-between pb-7">
                        <div className="w-[49%] bg-red-400 rounded-lg shadow-md">
                            <div className="bg-white h-[100%] rounded-lg p-2">
                                <h1 className="text-[#111827] font-semibold">Backup History</h1>
                                <table className="w-full border-1 text-xs text-center text-black mt-2">
                                    <thead className="bg-[#EAEAEA]">
                                        <tr className="border-1">
                                            <th className="px-4 py-2">Date &amp; Time</th>
                                            <th className="px-4 py-2">Backup Type</th>
                                            <th className="px-4 py-2">Size</th>
                                            <th className="px-4 py-2">Duration</th>
                                            <th className="px-4 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-50 border-1">
                                            <td className="px-4 py-2">2025-09-19&nbsp;10:30 AM</td>
                                            <td className="px-4 py-2">Full</td>
                                            <td className="px-4 py-2">25 GB</td>
                                            <td className="px-4 py-2">35 min</td>
                                            <td className="px-4 py-2 text-green-600">Completed</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 border-1">
                                            <td className="px-4 py-2">2025-09-18&nbsp;03:15 PM</td>
                                            <td className="px-4 py-2">Incremental</td>
                                            <td className="px-4 py-2">5 GB</td>
                                            <td className="px-4 py-2">10 min</td>
                                            <td className="px-4 py-2 text-yellow-600">In Progress</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-2">2025-09-17&nbsp;08:45 AM</td>
                                            <td className="px-4 py-2">Differential</td>
                                            <td className="px-4 py-2">12 GB</td>
                                            <td className="px-4 py-2">20 min</td>
                                            <td className="px-4 py-2 text-red-600">Failed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-indigo-00 w-[49%] rounded-lg flex flex-col">
                            <div className="bg-white h-60 rounded-lg shadow-md p-2 flex flex-col justify-between">
                                <h3 className="text-lg text-[#111827] font-semibold">Backup Success Rate (7 Days)</h3>
                                <div className="w-[100%] h-[85%] bg-white">
                                    <AreaCharts />
                                </div>
                            </div>
                            <div className="h-40 mt-2 rounded-lg shadow-md">
                                <FullPieGraph
                                    data={dailyActiveUser}
                                    title="Daily Active Users"
                                    variant="full"
                                    style="flex"
                                    linkStyle="flex flex-col"
                                    shadow="shadow-md"
                                />
                            </div>
                            <div className="bg-red-00 mt-7 h-10 rounded-lg flex items-center justify-center gap-5">
                                <IconButton Icon={Play} label="Start Manual Backup" className="w-[180px] bg-[#874DE6]" />
                                <IconButton Icon={DownloadSimple} label="Export Backup Logs" className="w-[180px] bg-[#874DE6]" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
