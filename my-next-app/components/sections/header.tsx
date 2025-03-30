"use client";
import { Button } from "../ui/button";
import useUIStore from "@/app/store/UIatom";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();
  const handlelogin = () => {
    const router = useRouter();
    router.push("/login");
  };
  return (
    <div className="bg-black fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-2 px-8">
        <div className="w-1/8 flex items-center justify-center pt-2 p-4">
          <img src="/icons/logo-white.svg" alt="Icon" />
        </div>

        <nav className="hidden md:flex space-x-8 mt-2">
          <a href="/dashboard" className="text-xl text-white">
            Dashboard
          </a>
          <a href="#contact" className="text-xl text-white">
            Contact
          </a>
          <a href="#features" className="text-xl text-white">
            Features
          </a>
          <a href="#about" className="text-xl text-white">
            About
          </a>
        </nav>

        {/* Authentication Links */}
        <div className="hidden md:flex items-center space-x-4 mr-6">
          <a href="/signup" className="hover:underline text-white text-xl">
            Sign In
          </a>
          <div className="h-10 w-[2px] bg-white"></div>
          <Button
            onClick={handlelogin}
            className="border border-white text-white text-xl px-4 py-2 bg-transparent rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-300"
          >
            Log In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <a href="#" className="text-lg text-white">
            Dashboard
          </a>
          <a href="#" className="text-lg text-white">
            Contact
          </a>
          <a href="#features" className="text-lg text-white">
            Features
          </a>
          <a href="#" className="text-lg text-white">
            About
          </a>
          <div className="flex flex-col items-center space-y-3 mt-3">
            <a
              href="/signup"
              className="underline font-semibold text-white text-lg"
            >
              Sign In
            </a>
            <Button
              onClick={handlelogin}
              className="border border-white text-white text-lg font-semibold px-4 py-2 bg-transparent rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-300"
            >
              Log In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
