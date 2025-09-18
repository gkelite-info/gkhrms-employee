import AttendancePayrolMainCard from "../../../features/Hr/Components/AttendancePayrolMainCard"
import DashboardGraphsContainer from "../../../features/Hr/Components/DashboardGraphsContainer"
import EmployeeCountCard from "../../../features/Hr/Components/EmployeeCountCard"
import TrainingExpiringDocMainCard from "../../../features/Hr/Components/TrainingExpiringDocMainCard"
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
