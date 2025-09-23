'use client'
import { useState } from "react";
import Cards from "../components/cards/card";
import AttendanceTable from "../components/attendancetable/table";


export default function EmployeeMe() {

  const [is24, setIs24] = useState(true);
  const [activeTab, setActiveTab] = useState("log");
  const [activeButton, setActiveButton] = useState("30 DAYS");


  const tabs = [
    { key: "log", label: "Attendance Log" },
    { key: "cal", label: "Calendar" },
    { key: "req", label: "Attendance Requests" },
  ];

  const btns = [
    { key: "30 DAYS", label: "30 DAYS" },
    { key: "jan", label: "JAN" },
    { key: "feb", label: "FEB" },
    { key: "mar", label: "MAR" },
    { key: "apr", label: "APR" },
    { key: "may", label: "MAY" },
    { key: "jun", label: "JUN" },

  ];

  return (
    <>
      <div className="bg-red-00 flex flex-col">
        <div className="bg-gray-00 h-40 flex items-center justify-between p-3">
          <Cards />
        </div>
        <div className="bg-blue-00 p-3 flex flex-col">
          <div className="bg-red-00 flex justify-between">
            <p className="text-[#323232] font-semibold">Logs & Requests</p>
            <div className="bg-green-00 w-[14%]">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={is24}
                  onChange={() => setIs24(!is24)}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full
                        peer peer-checked:bg-indigo-600 transition-colors duration-300" />
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full
                        transition-transform duration-300
                        peer-checked:translate-x-6" />
                <span className="ml-3 text-sm font-medium text-[#323232] font-medium">
                  {is24 ? "24 hrs format" : "12 hrs format"}
                </span>
              </label>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-md">
            <div className="bg-[#EAEAEA] h-10 flex">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
              h-full w-[15%] flex items-center justify-center cursor-pointer
              ${activeTab === tab.key ? "bg-[#E1DFFB]" : "bg-[#EAEAEA]"}
            `}
                >
                  <p className="text-[#323232] font-medium text-sm">{tab.label}</p>
                </button>
              ))}
            </div>
            <div className="bg-green-00 h-10 flex items-center justify-between px-3 mt-1">
              <h3 className="text-[#585858] text-sm">Last 30 Days</h3>
              <div className="w-[60%] bg-red-00 gap-4 h-[100%] flex items-center">
                {btns.map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setActiveButton(btn.key)}
                    className={`
        h-[75%] rounded-lg w-[15%] flex items-center cursor-pointer text-sm justify-center
        ${activeButton === btn.key ? "bg-[#7D73E3] text-white" : "bg-[#E1DFFB] text-[#323232]"}
      `}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-pink-00 px-3">
              <AttendanceTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}