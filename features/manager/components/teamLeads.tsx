export default function TeamLeads() {
  const teamLeadName = [
    {
      name: "Shiva",
      designation: "Team Lead",
      dotColor: "#55B575",
    },
    {
      name: "Vamshi",
      designation: "Team Lead",
      dotColor: "#F16564",
    },
    {
      name: "Deekshitha",
      designation: "Team Lead",
      dotColor: "#55B575",
    },
    {
      name: "Vamsi",
      designation: "Team Lead",
      dotColor: "#F8BE3F",
    },
    {
      name: "Sarala",
      designation: "Team Lead",
      dotColor: "#F16564",
    },
  ]

  return (
    <>
      <div className="bg-green-00 h-[70%] flex flex-col justify-between">
        <div className="w-full bg-indigo-00 flex flex-wrap justify-center mt-1">
          {teamLeadName.map((user) => (
            <div
              className="flex flex-col items-center w-[100px] bg-blue-00"
              key={user.name}
            >
              <div className="bg-[#E2E7FD] h-16 w-16 rounded-full bg-green-00 flex items-center justify-center">
                <p className="text-black">I</p>
              </div>
              <div className="flex items-center gap-2 bg-green-00 mt-1">
                <div
                  style={{ backgroundColor: user.dotColor }}
                  className="h-3 w-3 rounded-full"
                ></div>
                <h3 className="text-[#111827] text-xs">{user.name}</h3>
              </div>
              <p style={{ fontSize: 9, color: "#414141", marginTop: 1 }}>
                {user.designation}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-green-00 flex justify-center gap-3 w-[100%]">
          <div className="bg-red-00 flex items-center gap-1">
            <div className="bg-[#55B575] rounded-full h-3 w-3"></div>
            <p className="text-xs text-[#414141]">Present</p>
          </div>
          <div className="bg-red-00 flex items-center gap-1">
            <div className="bg-[#F16564] rounded-full h-3 w-3"></div>
            <p className="text-xs text-[#414141]">Leave</p>
          </div>
          <div className="bg-red-00 flex items-center gap-1">
            <div className="bg-[#F8BE3F] rounded-full h-3 w-3"></div>
            <p className="text-xs text-[#414141]">Remote</p>
          </div>
        </div>
      </div>
    </>
  )
}
