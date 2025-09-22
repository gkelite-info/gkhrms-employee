import React from "react"
import ProgressBar from "../../../../utils/ProgressBar"

const BackupProgressTableGraphMain = () => {
  return (
    <div className="w-full flex gap-2.5 items-start">
      <div className="w-[70%] flex flex-col gap-2.5">
        <div className="w-full p-3 bg-white rounded-lg flex flex-col gap-3">
          <div className="w-full flex justify-between items-center">
            <span className="text-xs font-semibold text-[]">
              Employee payroll DB Backup
            </span>
            <span>00:12:34</span>
          </div>
          {/* <ProgressBar
            label="Maintanancy"
            value={30}
            color="bg-gradient-to-r from-[#D0CEF7] to-[#9891F7]"
          /> */}
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-2.5"></div>
    </div>
  )
}

export default BackupProgressTableGraphMain
