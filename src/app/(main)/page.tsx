import AttendancePayrolMainCard from "../../../features/hr/components/AttendancePayrolMainCard"
import DashboardGraphsContainer from "../../../features/hr/components/DashboardGraphsContainer"
import EmployeeCountCard from "../../../features/hr/components/EmployeeCountCard"
import TrainingExpiringDocMainCard from "../../../features/hr/components/TrainingExpiringDocMainCard"

import UserDetailsCard from "../../../utils/UserDetailsCard"

const HrDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-2.5 p-6">
      <UserDetailsCard />
      <EmployeeCountCard />
      <DashboardGraphsContainer />
      <AttendancePayrolMainCard />
      <TrainingExpiringDocMainCard />
    </div>
  )
}

export default HrDashboard
