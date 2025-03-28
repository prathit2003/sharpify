"use client";

import useUIStore from "@/app/store/UIatom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();

  return (
    <div className="absolute inset-x-0 z-10 bg-transparent">
      <div className="flex justify-between items-center p-6 md:px-10  lg:px-20 mt-5">
        {/* Logo */}
        <div className="w-[200px] h-[100px] ml-10">
          <img src="/icons/icon.svg" alt="Icon" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-xl text-content">
            Dashboard
          </a>
          <a href="#" className="text-xl text-content">
            Contact
          </a>
          <a href="#features" className="text-xl text-content">
            Features
          </a>
          <a href="#" className="text-xl text-content">
            About
          </a>
        </nav>

        {/* Authentication Links */}
        <div className="hidden md:flex items-center space-x-4 mr-14">
          <a href="#" className="underline font-semibold text-black text-lg">
            Sign In
          </a>
          <div className="h-10 w-[2px] bg-black"></div>
          <button className="border border-black text-black text-lg font-semibold px-4 py-2 bg-transparent rounded-md">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <a href="#" className="text-lg text-content">
            Dashboard
          </a>
          <a href="#" className="text-lg text-content">
            Contact
          </a>
          <a href="#features" className="text-lg text-content">
            Features
          </a>
          <a href="#" className="text-lg text-content">
            About
          </a>
          <div className="flex flex-col items-center space-y-3 mt-3">
            <a href="#" className="underline font-semibold text-black text-lg">
              Sign In
            </a>
            <button className="border border-black text-black text-lg font-semibold px-4 py-2 bg-transparent rounded-md">
              Log In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
