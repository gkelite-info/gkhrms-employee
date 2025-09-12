import Header from "../../Layouts/Header"
import Sidebar from "../../Layouts/Sidebar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-[100vh] bg-red-300 flex flex-col">
      <Header />
      <div className="w-full h-[calc(100%-70px)] flex items-start">
        <Sidebar />
        <main className="h-full w-[calc(100%-100px)] flex flex-col overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  )
}
