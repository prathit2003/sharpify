"use client";
import Sidebar from "@/components/sections/dashboard/sidebar";
import Topbar from "@/components/sections/dashboard/topbar";
import useUIStore from "../store/UIatom";
import Loader from "@/components/sections/loader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { Loading } = useUIStore();
  return (
    <div className="h-[100vh] w-[100vw] bg-main flex flex-col p-6 space-y-6 overflow-hidden">
      {/* Topbar with padding and separation */}
      <div className="w-full">
        <Topbar />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex w-full h-full overflow-hidden space-x-6">
        {/* Sidebar */}
        <div className="hidden md:block w-[20vw]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="w-full md:w-[75vw] h-full">{children}</main>
      </div>
    </div>
  );
}
