"use client";

interface TableProps {
  columns: string[];
  data: any[];
}

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse text-start">
        <thead>
          <tr className="bg-[#E8E8E8] text-[#323232] text-xs">
            {columns.map((col) => (
              <th
                key={col}
                className="text-left px-4 py-2 border-b border-gray-300"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white text-[#323232] text-xs">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 border-b border-gray-200">
                  {row[col] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
