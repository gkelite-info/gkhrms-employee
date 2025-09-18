// import PercentPie from "./pieChart";

import PercentPie from "./pieChart"

export default function LeaveTable() {
  return (
    <>
      <div className="bg-white h-125 mt-2 shadow-md rounded-lg p-3 flex flex-col items-center">
        <div className="bg-red-300 w-[98%] flex flex-col items-center">
          <h3 className="text-[#111827] font-semibold">Attendance & Leave</h3>
          <div className="bg-[#F4F3FF] rounded-lg flex flex-col items-center h-82 w-[100%] shadow-md mb-7 pt-3">
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
                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#A7A2F2] to-[#4C43DB] rounded-r-full"></div>
                  </div>
                  <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#FF9FF1] to-[#9D338E] rounded-r-full"></div>
                  </div>
                  <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#FFC055] to-[#CA8106] rounded-r-full"></div>
                  </div>
                  <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#E83E1B] to-[#82230F] rounded-r-full"></div>
                  </div>
                  <div className="bg-[#E6E6E6] h-6 w-full rounded-r-full">
                    <div className="w-[75%] h-[100%] bg-gradient-to-r from-[#F8FF91] to-[#B8C500] rounded-r-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pink-00 w-[95%] h-[15%] flex items-center justify-between">
              <div className="w-[20%] flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#6366F1] flex items-center justify-center">
                  <img
                    src="/images/sick.png"
                    alt="sick.png"
                    style={{ height: 21 }}
                  />
                </div>
                <p className="text-xs text-black">Sick Leaves</p>
              </div>
              <div className="w-[20%] flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#FF9FF1] flex items-center justify-center">
                  <img
                    src="/images/paidLeaves.png"
                    alt="paidLeaves.png"
                    style={{ height: 14, marginBottom: 2 }}
                  />
                </div>
                <p className="text-xs text-black">Paid Leaves</p>
              </div>
              <div className="w-[18%] flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#F59E0B] flex items-center justify-center">
                  <img
                    src="/images/holidays.png"
                    alt="holidays.png"
                    style={{ height: 16, marginBottom: 2 }}
                  />
                </div>
                <p className="text-xs text-black">Holidays</p>
              </div>
              <div className="w-[22%] flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#CB7475] flex items-center justify-center">
                  <img
                    src="/images/unpaidLeaves.png"
                    alt="unpaidLeaves.png"
                    style={{ height: 20, marginBottom: 2, marginRight: 1 }}
                  />
                </div>
                <p className="text-xs text-black">Unpaid Leaves</p>
              </div>
              <div className="w-[20%] flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#F8FF91] flex items-center justify-center">
                  <img
                    src="/images/vacation.png"
                    alt="vacation.png"
                    style={{ height: 17 }}
                  />
                </div>
                <p className="text-xs text-black">Vacation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
