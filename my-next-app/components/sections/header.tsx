"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import useUIStore from "@/app/store/UIatom";
import usePopupStore from "@/app/store/popupsatom";
import { useCheckAuth } from "@/app/utility/isloggedin";
const Navbar = () => {
  const { setSignInpopup, setSignUppopup } = usePopupStore();
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    expandIconClick,
    setexpandIconClick,
  } = useUIStore();
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-header fixed top-0 left-0 w-full z-20"
    >
      <div className="flex items-center justify-between px-8 py-4 md:px-10 md:py-5">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-14">
          <img
            src="/icons/logo.svg"
            alt="Icon"
            className="h-6 md:h-10 w-auto"
          />

          <nav className="hidden lg:flex items-center space-x-8">
            {["Tools", "Genrate", "Enhance", "API"].map((item) =>
              item === "Tools" ? (
                <div
                  key={item}
                  className="relative flex items-center group hover:cursor-pointer"
                >
                  <span className="text-main group-hover:text-gray-400 group-hover:cursor-pointer transition-colors">
                    Tools
                  </span>
                  <button
                    onClick={() => setexpandIconClick(!expandIconClick)}
                    className="p-1"
                  >
                    <ExpandMoreIcon
                      className={`transition-transform duration-200 group-hover:text-gray-400 ${
                        expandIconClick
                          ? "rotate-180 text-gray-400"
                          : "text-main"
                      }`}
                    />
                  </button>

                  {expandIconClick && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-main rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] px-5 py-4 z-50">
                      {["RemoveBackground", "Reducesize", "Changeformat"].map(
                        (tool) => (
                          <a
                            key={tool}
                            href={`/tools?section=${tool.toLowerCase()}`}
                            className="block text-main text-md hover:text-gray-400 py-2 transition-colors"
                          >
                            {tool}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item}
                  href={
                    item === "Enhance"
                      ? "/tools?section=enhanceimage"
                      : `/${item.toLowerCase()}`
                  }
                  className="nav-link text-main hover:text-gray-400"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            onClick={() => setSignUppopup(true)}
            className="text-main text-lg py-2 hover:underline hover:text-secondary transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
          >
            signup
          </a>
          <div className="h-6 w-[1px] bg-white" />
          <Button
            onClick={() => setSignInpopup(true)}
            className="bg-secondary rounded-2xl text-main text-lg font-semibold py-2 px-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
          >
            Signin
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <Button
          className="lg:hidden p-2 rounded-md bg-secondary transition-colors hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="h-5 w-5 text-main" />
          ) : (
            <MenuIcon className="h-5 w-5 text-main" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-main flex flex-col items-center space-y-4 py-4">
          {["Tools", "Generate", "Enhance", "API"].map((item) =>
            item === "Tools" ? (
              <div
                key={item}
                className="relative flex items-center space-x-1 group hover:text-gray-400"
              >
                <span className="text-main">Tools</span>
                <button
                  onClick={() => setexpandIconClick(!expandIconClick)}
                  className="p-1"
                >
                  <ExpandMoreIcon
                    className={`transition-transform duration-200 ${
                      expandIconClick
                        ? "rotate-180 text-gray-400 hover:cursor-pointer"
                        : "text-main hover:text-gray-400 hover:cursor-pointer"
                    }`}
                  />
                </button>

                {expandIconClick && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-main rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] px-5 py-4 z-50">
                    {["RemoveBackground", "Reducesize", "Changeformat"].map(
                      (tool) => (
                        <a
                          key={tool}
                          href={`/tools?section=${tool.toLowerCase()}`}
                          className="block  text-main text-md hover:text-gray-400 py-2 transition-colors"
                        >
                          {tool}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item}
                href={
                  item === "Enhance"
                    ? "/tools?section=enhanceimage"
                    : `/${item.toLowerCase()}`
                }
                className="nav-link text-main hover:text-gray-400"
              >
                {item}
              </a>
            )
          )}
          <div className="flex flex-col items-center space-y-3 mt-3">
            <a
              onClick={() => setSignUppopup(true)}
              className="text-main text-lg py-2 hover:underline hover:text-gray-400 transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
            >
              signup
            </a>
            <Button
              onClick={() => setSignInpopup(true)}
              className="bg-secondary rounded-2xl text-main text-lg font-semibold py-2 px-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              Signin
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
