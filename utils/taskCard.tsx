"use client"
import { PlusCircle, Trash } from "phosphor-react"

export default function TaskCard({
  style,
  gapStyle = "w-[23%]",
  rounded = "rounded-lg",
  boxShadow = "shadow-md",
  customHeight = "h-[100%]",
}: {
  style?: string
  gapStyle?: string
  rounded?: string
  boxShadow?: string
  customHeight?: string
}) {
  return (
    <>
      <div
        className={`bg-[#F9FAFB] w-[49%] p-2 flex flex-col justify-center ${style} ${rounded} ${boxShadow} ${customHeight}`}
      >
        <h3 className="font-semibold text-[#111827] text-sm">Todays Tasks</h3>
        <div className="w-[100%] h-[20%] bg-pink-00 flex justify-between items-center mt-1">
          <div className="flex bg-red-00 flex items-center">
            <div className="rounded-full h-5 w-5 bg-[#272372] flex items-center justify-center">
              <p className="text-xs font-semibold text-white">5</p>
            </div>
            <p className="text-[#272372] font-medium ml-2 text-xs">Tasks</p>
          </div>
          <div
            className={`h-[100%] flex items-center justify-between ${gapStyle}`}
          >
            <div className="flex flex-col items-center">
              <PlusCircle
                size={24}
                color="#272372"
                weight="fill"
                className="cursor-pointer mb-1"
              />
              <p
                style={{
                  fontSize: 8,
                  color: "#272372",
                  cursor: "pointer",
                }}
              >
                Add Task
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-[#F1E0E1]">
                <Trash size={14} color="#B31212" className="cursor-pointer" />
              </div>
              <p
                style={{
                  fontSize: 8,
                  color: "#B31212",
                  cursor: "pointer",
                  marginTop: 3,
                }}
              >
                Delete
              </p>
            </div>
          </div>
        </div>
        <div className="bg-green-00 flex flex-col justify-center gap-2 mt-2">
          <div className="flex w-[100%] bg-red-00 items-center">
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1"></div>
            <p className="text-[#272372] font-medium text-xs ml-3">
              Created Dashboard
            </p>
          </div>
          <div className="flex w-[100%] bg-red-00 items-center">
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1"></div>
            <p className="text-[#272372] text-xs ml-3">Task 2</p>
          </div>
          <div className="flex w-[100%] bg-red-00 items-center">
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1"></div>
            <p className="text-[#272372] text-xs ml-3">Task 3</p>
          </div>
          <div className="flex w-[100%] bg-red-00 items-center">
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1"></div>
            <p className="text-[#272372] text-xs ml-3">Task 4</p>
          </div>
          <div className="flex w-[100%] bg-red-00 items-center">
            <div className="h-4 w-4 rounded-full flex items-center justify-center border border-[#272372] border-1"></div>
            <p className="text-[#272372] text-xs ml-3">Task 5</p>
          </div>
        </div>
      </div>
    </>
  )
}
