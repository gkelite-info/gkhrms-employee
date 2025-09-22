import MeetingCalendar from "./calendar"

export default function MeetingCalendarComp({
  style = "h-92 mt-2",
}: {
  style?: string
}) {
  return (
    <>
      <div
        className={`bg-[#F9FAFB] ${style} p-0 rounded-lg shadow-md flex justify-center`}
      >
        <div className="bg-yellow-00 w-[50%] h-[100%] rounded-tl-lg rounded-bl-lg overflow-y-auto p-3">
          <div className="bg-red-00 w-[100%] h-[15%] rounded-lg mt-2">
            <h2 className="text-xs font-semibold text-[#111827]">
              Today's Meetings Preview
            </h2>
            <p className="text-xs text-[#464646] mt-1">
              Synced with Outlook/Google Calendar
            </p>
          </div>
          <div className="bg-indigo-00 h-[85%] w-[100%] flex flex-col gap-3">
            <div className="bg-gray-300 h-auto w-[100%] flex justify-between rounded-md p-2">
              <div className="flex justify-between items-center bg-red-00 flex-col items-start">
                <h4 className="text-[#111111] text-xs font-medium">
                  9:00 AM - 10:00 AM
                </h4>
                <p className="text-[#6B6B6B] text-xs">Project Kick - Off</p>
              </div>
              <p className="text-xs font-semibold text-[#272372]">Sarala</p>
              <button
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  backgroundColor: "#272372",
                  padding: 3,
                  paddingLeft: 4,
                  paddingRight: 4,
                  borderRadius: 5,
                  cursor: "pointer",
                  width: 55,
                  color: "white",
                }}
              >
                Join
              </button>
            </div>
            <div className="bg-gray-300 h-auto w-[100%] flex justify-between rounded-md p-2">
              <div className="flex justify-between items-center bg-red-00 flex-col items-start">
                <h4 className="text-[#111111] text-xs font-medium">
                  1:00 PM - 2:00 PM
                </h4>
                <p className="text-[#6B6B6B] text-xs">Team Weekly Sync</p>
              </div>
              <p className="text-xs font-semibold text-[#272372]">Shiva</p>
              <button
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  backgroundColor: "#272372",
                  padding: 3,
                  paddingLeft: 4,
                  paddingRight: 4,
                  borderRadius: 5,
                  cursor: "pointer",
                  width: 55,
                  color: "white",
                }}
              >
                Join
              </button>
            </div>
            <div className="bg-gray-300 h-auto w-[100%] flex justify-between rounded-md p-2">
              <div className="flex justify-between items-center bg-red-00 flex-col items-start">
                <h4 className="text-[#111111] text-xs font-medium">
                  3:00 PM - 4:00 PM
                </h4>
                <p className="text-[#6B6B6B] text-xs">Client Call</p>
              </div>
              <p className="text-xs font-semibold text-[#272372]">Vamsi</p>
              <button
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  backgroundColor: "#272372",
                  padding: 3,
                  paddingLeft: 4,
                  paddingRight: 4,
                  borderRadius: 5,
                  cursor: "pointer",
                  width: 55,
                  color: "white",
                }}
              >
                Join
              </button>
            </div>
            <div className="bg-gray-300 h-auto w-[100%] flex justify-between rounded-md p-2">
              <div className="flex justify-between items-center bg-red-00 flex-col items-start">
                <h4 className="text-[#111111] text-xs font-medium">
                  9:00 AM - 10:00 AM
                </h4>
                <p className="text-[#6B6B6B] text-xs">Project Kick - Off</p>
              </div>
              <p className="text-xs font-semibold text-[#272372]">
                Deekshitha Chatla
              </p>
              <button
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  backgroundColor: "#272372",
                  padding: 3,
                  paddingLeft: 4,
                  paddingRight: 4,
                  borderRadius: 5,
                  cursor: "pointer",
                  width: 55,
                  color: "white",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red-400 w-[50%] h-[100%] flex flex-col rounded-lg">
          <div className="bg-green-00 h-[50%] overflow-hidden rounded-tr-lg">
            <MeetingCalendar style="rounded-lg h-49" />
          </div>
          <div className="bg-yellow-200 h-[50%] rounded-br-lg p-2">
            <p className="text-black text-xs font-semibold">
              Upcoming meetings
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
