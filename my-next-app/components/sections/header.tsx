"use client";
import { Button } from "../ui/button";
import useUIStore from "@/app/store/UIatom";
import { Menu, X } from "lucide-react";
import usePopupStore from "@/app/store/popupsatom";
const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();
  const { setSignInpopup, setSignUppopup } = usePopupStore();

  return (
    <div className="bg-black fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-4 px-12 md:px-8">
        <div className="flex items-center ">
          <img src="/icons/logo-white.svg" alt="Icon" className="h-12 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-6 mt-2">
          {["Dashboard", "Contact", "Features", "About"].map((item, index) => (
            <a
              key={index}
              href={`${item.toLowerCase()}`}
              className="relative text-xl text-white transition-all duration-300 ease-in-out hover:text-white hover:scale-110"
            >
              {item}
              <span className="absolute left-1/2 bottom-[-4px] h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            onClick={() => {
              setSignUppopup(true);
            }}
            className="text-lg text-white  transition duration-300 ease-in-out  hover:scale-105 "
          >
            start creating
          </Button>
          <div className="h-6 w-[1px] bg-white"></div>
          <Button
            onClick={() => {
              setSignInpopup(true);
            }}
            className="border border-white text-white text-lg px-4 py-2 bg-transparent rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            signin
          </Button>
        </div>

        <Button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black flex flex-col items-center space-y-4 py-4">
          {["Dashboard", "Contact", "Features", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-white hover:underline"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-3 mt-3">
            <Button
              onClick={() => {
                setSignUppopup(true);
              }}
              className="text-lg text-white  transition duration-300 ease-in-out  hover:scale-105 "
            >
              start creating
            </Button>
            <div className="h-6 w-[1px] bg-white"></div>
            <Button
              onClick={() => {
                setSignInpopup(true);
              }}
              className="border border-white text-white text-lg px-4 py-2 bg-transparent rounded-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            >
              signin
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
