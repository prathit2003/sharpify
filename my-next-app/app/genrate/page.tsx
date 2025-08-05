"use client";
import Topbar from "@/components/sections/dashboard/topbar";
import Sidebar from "@/components/ui/genSidebar";
import GenrateImage from "@/components/sections/dashboard/genrate";
import useUIStore from "../store/UIatom";
export default function ChatLayout() {
  const { isMobileMenuOpen } = useUIStore();

  return (
    <div className="relative h-[100vh] w-[100vw] bg-main flex flex-col p-6 space-y-6 overflow-hidden">
      <Topbar />

      {/* Main content container (Sidebar + GenrateImage) */}
      <div className="flex w-full h-full overflow-hidden space-x-6">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-[20vw] p-4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="w-full md:w-[75vw] h-full">
          <GenrateImage />
        </main>
      </div>

      {/* Mobile Sidebar (absolute positioned) */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 z-20 w-[70vw] h-full md:hidden bg-main shadow-xl p-4">
          <Sidebar />
        </div>
      )}
    </div>
  );
}
