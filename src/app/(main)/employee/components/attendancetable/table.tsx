'use client'

export default function AttendanceTable() {
  const columns = [
    "DATE",
    "ATTENDANCE VISUAL",
    "EFFECTIVE HOURS",
    "GROSS HOURS",
    "ARRIVAL",
    "LOG"
  ];

  const rows = [
    {
      date: "2025-09-23",
      visual: "Present",
      effective: "8h 30m",
      gross: "9h 00m",
      arrival: "10:30 AM",
      log: "View"
    },
    {
      date: "2025-09-22",
      visual: "Absent",
      effective: "0h 0m",
      gross: "0h 0m",
      arrival: "-",
      log: "View"
    },
    {
      date: "2025-09-21",
      visual: "Present",
      effective: "7h 45m",
      gross: "8h 00m",
      arrival: "10:45 AM",
      log: "View"
    },
    {
      date: "2025-09-20",
      visual: "Present",
      effective: "8h 0m",
      gross: "8h 30m",
      arrival: "10:30 AM",
      log: "View"
    },
    {
      date: "2025-09-19",
      visual: "Leave",
      effective: "0h 0m",
      gross: "0h 0m",
      arrival: "-",
      log: "View"
    },
    {
      date: "2025-09-18",
      visual: "Present",
      effective: "9h 0m",
      gross: "9h 30m",
      arrival: "10:30 AM",
      log: "View"
    },
  ];

  return (
    <div className="rounded-lg overflow-x- mt-2">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="bg-[#EAEAEA] text-[#323232] text-sm px-3 py-2 text-center font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="text-[#323232] text-sm">
              <td className="px-3 py-2 text-center">{row.date}</td>
              <td className="px-3 py-2 text-center">{row.visual}</td>
              <td className="px-3 py-2 text-center">{row.effective}</td>
              <td className="px-3 py-2 text-center">{row.gross}</td>
              <td className="px-3 py-2 text-center">{row.arrival}</td>
              <td className="px-3 py-2 text-center">{row.log}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
