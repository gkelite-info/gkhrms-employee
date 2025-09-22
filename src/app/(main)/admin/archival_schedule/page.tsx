'use client';
import { CheckCircle, DownloadSimple, Pencil, PencilSimple, Plus } from "phosphor-react";
import MeetingCalendar from "../../../../../utils/calendar";
import AreaCharts from "../../../../../utils/areaChart";
import FullPieGraph from "../../../../../features/admin/components/FullPieGraph";


export default function ArchivalSchedule() {

    const dailyActiveUser = [
        { value: 33, color: "#D6C7FF", legend: "Finance" },
        { value: 33, color: "#9D82E7", legend: "HR" },
        { value: 34, color: "#7855E0", legend: "Logs" },
    ]

    return (
        <>
            <div className="bg-gradient-b from-[#DDDBFA] to-[#F0EFFD] w-[100%] flex justify-center">
                <div className="bg-blue-00 w-[95%] flex flex-col p-3 pl-0 pr-0">
                    <div className="bg-green-00 h-10 w-[100%] flex justify-between">
                        <h3 className="text-[#323232] font-semibold text-lg">Archival Schedule</h3>
                        <div className="bg-indigo-00 h-[100%] w-[33%] flex justify-between">
                            <div className="flex items-center justify-center gap-2">
                                <Plus size={20} color='#323232' weight="fill" className="cursor-pointer" />
                                <h4 className="text-[#323232] font-medium text-xs cursor-pointer">Add New Schedule</h4>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <PencilSimple size={20} color='#323232' className="cursor-pointer" />
                                <h4 className="text-[#323232] font-medium text-xs cursor-pointer">Edit Rule</h4>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <DownloadSimple size={20} color='#323232' weight="fill" className="cursor-pointer" />
                                <h4 className="text-[#323232] font-medium text-xs cursor-pointer">Export Logs</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-00 h-20 flex items-end justify-between rounded-b-lg">
                        <div className="bg-white w-[23%] h-[90%] rounded-lg shadow-md flex justify-center">

                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Next Archival Run</p>
                                <p className="text-xs text-[#323232]">15 Sept 2025, 11:45 PM</p>
                            </div>
                        </div>
                        <div className="bg-white w-[23%] h-[90%] flex justify-center rounded-lg shadow-md">
                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Data Volume for Ar....</p>
                                <p className="text-xs text-[#323232]">120 GB</p>
                            </div>
                        </div>
                        <div className="bg-white w-[23%] h-[90%] flex justify-center rounded-lg shadow-md">
                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Retention Policy</p>
                                <p className="text-xs text-[#323232]">90 Days</p>
                            </div>
                        </div>
                        <div className="bg-white w-[23%] h-[90%] flex justify-center rounded-lg shadow-md">
                            <div className="flex flex-col justify-center gap-2">
                                <p className="text-[#323232] font-semibold text-xs">Archival Type</p>
                                <p className="text-xs text-[#323232]">Incremental</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-00 flex items-start justify-between mt-2">
                        <div className="bg-white shadow-md w-[69%] h-62 flex flex-col items-start p-3 overflow-y-auto scrollbar-hide rounded-lg">
                            <h3 className="text-md text-[#111827] font-semibold">Archival Rules</h3>
                            <table className="w-full border-1 text-xs text-center text-black mt-2">
                                <thead className="bg-[#EAEAEA]">
                                    <tr className="border-1">
                                        <th className="px-4 py-2">Rule Name</th>
                                        <th className="px-4 py-2">Frequency</th>
                                        <th className="px-4 py-2">Data Category</th>
                                        <th className="px-4 py-2">Retention Period</th>
                                        <th className="px-4 py-2">last Run</th>
                                        <th className="px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 border-1">
                                        <td className="px-4 py-2">Finance Rcords</td>
                                        <td className="px-4 py-2">Weekly</td>
                                        <td className="px-4 py-2">Transactions</td>
                                        <td className="px-4 py-2">180 Days</td>
                                        <td className="px-4 py-2">14 Sept 2</td>
                                        <td className="px-4 py-2 text-green-600">Active</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 border-1">
                                        <td className="px-4 py-2">Finance Rcords</td>
                                        <td className="px-4 py-2">Weekly</td>
                                        <td className="px-4 py-2">Transactions</td>
                                        <td className="px-4 py-2">180 Days</td>
                                        <td className="px-4 py-2">14 Sept 2</td>
                                        <td className="px-4 py-2 text-yellow-600">Pending</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 border-1">
                                        <td className="px-4 py-2">Finance Rcords</td>
                                        <td className="px-4 py-2">Weekly</td>
                                        <td className="px-4 py-2">Transactions</td>
                                        <td className="px-4 py-2">180 Days</td>
                                        <td className="px-4 py-2">14 Sept 2</td>
                                        <td className="px-4 py-2 text-red-600">Failed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-green-400 w-[29%] rounded-lg shadow-md">
                            <MeetingCalendar style="calendar-wrapper rounded-lg h-62 text-[20px]" />
                        </div>
                    </div>
                    <div className="rounded-lg w-[100%] mt- py-3 flex justify-between">
                        <div className="w-[49%] bg-white rounded-lg p-2 shadow-md">
                            <AreaCharts />
                        </div>
                        <div className="w-[49%] bg-white rounded-lg p-2 shadow-md">
                            <FullPieGraph
                                data={dailyActiveUser}
                                title="Backup Types"
                                variant="full"
                                style="flex"
                                linkStyle="flex flex-col"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}