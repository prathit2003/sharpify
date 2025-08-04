"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Topbar from "@/components/sections/dashboard/topbar";
import Sidebar from "@/components/ui/genSidebar";
import GenrateImage from "@/components/sections/dashboard/genrate";
import useUIStore from "../store/UIatom";
export default function ChatLayout() {
  const { isMobileMenuOpen } = useUIStore();
  return (
    <div className="h-[100vh] w-[100vw] bg-main flex flex-col p-6 space-y-6 overflow-hidden">
      <Topbar />
      {/* Sidebar + Main Content */}
      <div className="flex w-full h-full overflow-hidden space-x-6">
        {/* Sidebar */}
        <div className="hidden md:block w-[20vw] p-4">
          <Sidebar />
        </div>
        {isMobileMenuOpen && (
          <div className="w-[35vw] md:hidden z-20 h-full">
            <Sidebar />
          </div>
        )}
        {/* Main Content */}
        <main className="w-full md:w-[75vw] h-full">
          <GenrateImage />
        </main>
      </div>
    </div>
  );
}
