import {
  House,
  User,
  Buildings,
  UsersThree,
  CurrencyCircleDollar,
  Timer,
  ChartBar,
  Tray,
  Files,
  Airplay,
  Gear,
  Lock,
  Plugs,
  ChatsCircle,
} from "phosphor-react"
import { Roles } from "../features/auth/slice/loginType"

export const roleBasedNav: Record<
  Roles,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { label: string; href: string; icon: any }[]
> = {
  Admin: [
    { label: "Home", href: "/admin", icon: House },
    { label: "System & Users", href: "/admin/system-users", icon: Airplay },
    {
      label: "Policies & Configuration",
      href: "/admin/policies-configuration",
      icon: Gear,
    },
    {
      label: "Audit & Security",
      href: "/admin/audit-security",
      icon: Lock,
    },
    {
      label: "Integrations & Automation",
      href: "/admin/integration-automation",
      icon: Plugs,
    },
    {
      label: "Analytics & Reports",
      href: "/admin/analytics-reports",
      icon: ChartBar,
    },
    {
      label: "Engage",
      href: "/admin/engage",
      icon: ChatsCircle,
    },
  ],
  Manager: [
    { label: "Home", href: "/dashboard", icon: House },
    { label: "Me", href: "/manager_dash/details", icon: User },
    { label: "Inbox", href: "/manager/inbox", icon: Tray },
    { label: "My Team", href: "/manager/my-team", icon: UsersThree },
    { label: "Reports", href: "/manager/reports", icon: Files },
    { label: "Org Engage", href: "/manager/org-engage", icon: Buildings },
  ],
  Employee: [
    { label: "Home", href: "/dashboard", icon: House },
    { label: "Me", href: "/employee/details", icon: User },
    { label: "Inbox", href: "/employee/inbox", icon: Tray },
    {
      label: "My Finance",
      href: "/employee/finance",
      icon: CurrencyCircleDollar,
    },
    { label: "Org", href: "/employee/org", icon: Buildings },
    { label: "Engage", href: "/employee/engage", icon: Buildings },
  ],
  Hr: [
    { label: "Home", href: "/", icon: House },
    { label: "Workforce", href: "/hr/workforce", icon: User },
    {
      label: "Payroll & Compliance",
      href: "/hr/payrole-compliance",
      icon: CurrencyCircleDollar,
    },
    { label: "Attendance & Leave", href: "/hr/attendance-leaves", icon: Timer },
    {
      label: "Engagement & Culture",
      href: "/hr/engagement-culture",
      icon: Timer,
    },
    {
      label: "Analytics & Reports",
      href: "/hr/analytics-reports",
      icon: ChartBar,
    },
  ],
}
