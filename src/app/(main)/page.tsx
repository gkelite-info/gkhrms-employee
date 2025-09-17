import AttendancePayrolMainCard from "../../../Features/Hr/Components/AttendancePayrolMainCard"
import DashboardGraphsContainer from "../../../Features/Hr/Components/DashboardGraphsContainer"
import EmployeeCountCard from "../../../Features/Hr/Components/EmployeeCountCard"
import TrainingExpiringDocMainCard from "../../../Features/Hr/Components/TrainingExpiringDocMainCard"

const page = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <EmployeeCountCard />
      <DashboardGraphsContainer />
      <AttendancePayrolMainCard />
      <TrainingExpiringDocMainCard />
    </div>
  )
}

export default page
