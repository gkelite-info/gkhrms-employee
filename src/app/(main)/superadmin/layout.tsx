import type { Metadata } from "next"
import SuperAdminSidebar from "./components/SuperAdminSidebar"
import SuperAdminHeader from "./components/SuperAdminHeader"

export const metadata: Metadata = {
  title: "Super Admin Dashboard | GK-HRMS",
  description: "GK-HRMS Multi-tenant Super Admin Management Portal",
}

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-screen flex bg-[#F7F8FC] text-slate-800 antialiased overflow-hidden">
      {/* Super Admin Left Sidebar */}
      <SuperAdminSidebar />

      {/* Main Screen Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header with Search and Profile */}
        <SuperAdminHeader />

        {/* Scrollable Viewport */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {children}
        </main>
      </div>
    </div>
  )
}
