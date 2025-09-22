import React, { FC } from "react"
import ModalLayout from "../../../Layouts/ModalLayout"
import AuthInput from "../../../utils/AuthInput"
import ToggleSwitch from "../../../utils/ToggleSwitch"

interface AddNewLeavsTypeModal {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddNewLeavsTypeModal: FC<AddNewLeavsTypeModal> = ({ open, setOpen }) => {
  return (
    <ModalLayout
      open={open}
      onClose={() => setOpen(false)}
      className="w-[55%] h-[60%]"
    >
      <div className="w-full h-full bg-white flex flex-col gap-4 p-7">
        <span className="text-xs font-semibold text-[#323232]">
          Add New Leave Type
        </span>
        <div className="flex justify-between items-center gap-3">
          <AuthInput
            label="Leave Name"
            type="text"
            placeholder="Please Enter leavs name"
          />
          <AuthInput
            label="Max Days per Year"
            type="text"
            placeholder="PleaseEnter Max days per year"
          />
        </div>
        <div className="flex justify-between items-center gap-3">
          <AuthInput
            label="Applicable To"
            type="text"
            placeholder="Please Enter leavs name"
          />
          <AuthInput
            label="Paid/Unpaid"
            type="text"
            placeholder="PleaseEnter Max days per year"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-1/2 flex flex-col gap-1">
            <span className="text-xs font-medium text-[#585858]">
              Carry Forward
            </span>
            <ToggleSwitch checked={true} onChange={() => {}} />
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <span className="text-xs font-medium text-[#585858]">Status</span>
            <ToggleSwitch checked={false} onChange={() => {}} />
          </div>
        </div>
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

export default AddNewLeavsTypeModal
