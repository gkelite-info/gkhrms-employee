import React, { FC } from "react"
import ModalLayout from "../../../Layouts/ModalLayout"
import AuthInput from "../../../utils/AuthInput"

interface AttendanceRulesModalTypes {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AttendanceRulesModal: FC<AttendanceRulesModalTypes> = ({
  open,
  setOpen,
}) => {
  return (
    <ModalLayout
      open={open}
      onClose={() => setOpen(false)}
      className="w-[55%] h-[63%]"
    >
      <div className="w-full h-full bg-white flex flex-col gap-4 p-7">
        <span className="text-xs font-semibold text-[#323232]">
          Add Attendance Rule
        </span>
        <div className="flex justify-between items-center gap-3">
          <AuthInput
            label="Rule Name"
            type="text"
            placeholder="Please Enter rule name"
          />
          <AuthInput
            label="Grace Period"
            type="text"
            placeholder="Please Enter grace perios"
          />
        </div>
        <div className="flex justify-between items-end gap-3">
          <AuthInput label="Shift Timing" type="text" placeholder="09:00 PM" />
          <AuthInput type="text" placeholder="06:00 PM" />
        </div>
        <AuthInput label="Status" />
        <div className="w-full flex justify-between gap-3">
          <button
            onClick={() => setOpen(false)}
            className="w-1/2 h-[40px] rounded-lg text-xs font-medium  bg-[#DADADA] cursor-pointer"
          >
            Cancel
          </button>
          <button className="w-1/2 h-[40px] rounded-lg text-xs font-medium  bg-[#874DE6] cursor-pointer text-white">
            Save
          </button>
        </div>
      </div>
    </ModalLayout>
  )
}

export default AttendanceRulesModal
