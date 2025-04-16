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
    <div className="flex flex-col h-screen w-full">
      <Topbar />

      <div className="flex flex-grow pt-20">
        <div className="hidden md:flex md:w-1/5  md:p-4 md:bg-main ">
          <Sidebar />
        </div>
        <main className="flex-grow p-4 sm:w-4/5 ">{children}</main>
      </div>
    </div>
  );
}
