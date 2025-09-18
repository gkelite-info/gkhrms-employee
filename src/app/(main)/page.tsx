import AttendancePayrolMainCard from "../../../features/hr/components/AttendancePayrolMainCard"
import DashboardGraphsContainer from "../../../features/hr/components/DashboardGraphsContainer"
import EmployeeCountCard from "../../../features/hr/components/EmployeeCountCard"
import TrainingExpiringDocMainCard from "../../../features/hr/components/TrainingExpiringDocMainCard"
import UserDetailsCard from "../../../utils/UserDetailsCard"

const page = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <UserDetailsCard />
      <EmployeeCountCard />
      <DashboardGraphsContainer />
      <AttendancePayrolMainCard />
      <TrainingExpiringDocMainCard />
    </div>
  )
}

export default page
