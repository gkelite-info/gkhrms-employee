import React, { FC } from "react"
import ModalLayout from "../../../Layouts/ModalLayout"
import AuthInput from "../../../utils/AuthInput"

interface PayrollWorkflowsTypes {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PayrollWorkflowsModal: FC<PayrollWorkflowsTypes> = ({
  open,
  setOpen,
}) => {
  return (
    <ModalLayout
      open={open}
      onClose={() => setOpen(false)}
      className="w-[35%] min-h-[80%]"
    >
      <div className="w-full h-full bg-white flex flex-col gap-4 p-7">
        <span className="text-xs font-semibold text-[#323232]">
          Add Payroll Workflow
        </span>
        <AuthInput
          label="Workflow name"
          type="text"
          placeholder="e.g, Monthly Payroll , Weekly Payroll"
        />
        <AuthInput label="Payroll Cycle" type="text" placeholder="Monthly" />
        <ApprovalSteps />
        <AuthInput label="Status" type="text" placeholder="Active" />
        <div className="w-full flex flex-col gap-1.5">
          <span className="text-xs text-[#585858]">Notifications</span>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-[#323232]">Notify Manager</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-[#323232]">Notify HR</span>
            </div>{" "}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-xs text-[#323232]">Notify Employees</span>
            </div>
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

export default PayrollWorkflowsModal

const ApprovalSteps = () => {
  const steps = ["Manager", "Hr", "Finance"]

  return (
    <div className="flex w-full flex-col gap-2">
      <span className="text-xs text-[#585858]">Approval Steps</span>
      <div className="flex w-full justify-between items-center relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center relative">
            <span className="text-xs font-medium text-[#343434] px-4 py-2.5 border border-gray-900 rounded-lg z-10 bg-white relative w-[97px] text-center">
              {step}
            </span>

            {index !== steps.length - 1 && (
              <div className="absolute top-1/2 left-full w-12 h-[1px] border-t border-dotted border-gray-900 -translate-y-1/2">
                <span className="absolute right-0 -top-1 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
