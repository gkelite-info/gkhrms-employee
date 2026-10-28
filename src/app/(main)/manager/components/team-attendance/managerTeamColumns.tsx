import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { TableColumn, ReusableAvatar } from "@/components/reusableComponents"
import { ManagerTeamMember } from "../../data/managerAttendanceData"

export const getManagerTeamColumns = (
  router: AppRouterInstance
): TableColumn<ManagerTeamMember>[] => [
  {
    header: "Employee",
    accessor: "name",
    className: "font-medium text-gray-900 whitespace-nowrap min-w-[200px]",
    render: (row) => (
      <div className="flex items-center gap-3">
        <ReusableAvatar
          src={row.avatar}
          alt={row.name}
          name={row.name}
          size="sm"
          fallbackType="icon"
        />
        <span className="font-semibold text-gray-900">{row.name}</span>
      </div>
    ),
  },
  {
    header: "Employee ID",
    accessor: "employeeId",
    className: "text-gray-500 whitespace-nowrap font-mono text-xs",
  },
  {
    header: "Designation",
    accessor: "designation",
    className: "text-gray-600 whitespace-nowrap",
  },
  {
    header: "Status",
    accessor: "status",
    className: "whitespace-nowrap",
    render: (row) => {
      const val = row.status
      const config =
        val === "Present"
          ? { bg: "bg-[#E8FAF4]", text: "text-[#10B981]", dot: "bg-[#10B981]" }
          : val === "Work From Home"
          ? { bg: "bg-[#F3E8FF]", text: "text-[#9333EA]", dot: "bg-[#9333EA]" }
          : val === "On Leave"
          ? { bg: "bg-[#FFF8EC]", text: "text-[#F59E0B]", dot: "bg-[#F59E0B]" }
          : { bg: "bg-[#FFF1F2]", text: "text-[#F43F5E]", dot: "bg-[#F43F5E]" }

      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
          {val}
        </span>
      )
    },
  },
  {
    header: "Check-in",
    accessor: "checkIn",
    className: "text-gray-700 whitespace-nowrap",
  },
  {
    header: "Check-out",
    accessor: "checkOut",
    className: "text-gray-700 whitespace-nowrap",
  },
  {
    header: "Working Hours",
    accessor: "workingHours",
    className: "text-gray-700 font-semibold whitespace-nowrap",
  },
  {
    header: "Shift",
    accessor: "shift",
    className: "text-gray-600 whitespace-nowrap text-xs",
    render: (row) => (
      <div className="flex flex-col">
        <span className="font-semibold text-gray-800">{row.shift}</span>
        <span className="text-[11px] text-gray-400">9 AM - 6 PM</span>
      </div>
    ),
  },
  {
    header: "Action",
    key: "action",
    className: "text-center whitespace-nowrap",
    render: (row) => (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          router.push(`/manager/member/${row.id}`)
        }}
        className="px-3.5 py-1.5 text-xs font-semibold rounded-xl text-[#5B50EC] border border-[#5B50EC]/30 hover:bg-[#5B50EC] hover:text-white transition-all cursor-pointer"
      >
        View
      </button>
    ),
  },
]
