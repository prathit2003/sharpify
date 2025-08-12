"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import useUIStore from "@/app/store/UIatom";
import { useSession } from "next-auth/react";
import usePopupStore from "@/app/store/popupsatom";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
const Navbar = () => {
  const { status, data } = useSession();
  const { setSignInpopup, setSignUppopup } = usePopupStore();
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    expandIconClick,
    setexpandIconClick,
  } = useUIStore();
  const router = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-header fixed top-0 left-0 w-full z-20"
    >
      <div className="flex items-center justify-between px-8 py-3 md:px-10 md:py-4">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-14">
          <div className="flex items-center justify-between space-x-2">
            <img
              src="/icons/favicon.svg"
              alt="Logo"
              className="h-6 md:h-8 w-auto"
            />
            <span className="text-main text-2xl font-bold">Refyned.AI</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {["Tools", "Genrate", "Enhance", "API"].map((item) =>
              item === "Tools" ? (
                <div
                  key={item}
                  onClick={() => setexpandIconClick(!expandIconClick)}
                  className="relative flex items-center group hover:cursor-pointer"
                >
                  <span className="text-main group-hover:text-gray-400 transition-colors">
                    Tools
                  </span>
                  <button className="p-1">
                    <ExpandMoreIcon
                      className={`transition-transform duration-200 ${
                        expandIconClick
                          ? "rotate-180 text-gray-400"
                          : "text-main group-hover:text-gray-400"
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

        {/* Desktop Right Section */}
        {status === "unauthenticated" ? (
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
        ) : (
          <div
            className="relative hidden lg:flex "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Avatar */}
            <div className="lg:w-10 md:w-8 aspect-square rounded-full bg-secondary hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden">
              {data?.user?.ProfilePic ? (
                <img
                  src={data.user.ProfilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <PersonIcon className="text-main" />
              )}
            </div>

            {/* Dropdown */}
            {hover && (
              <div className="absolute right-0 mt-10 w-56 bg-main text-main text-left rounded-lg shadow-lg p-4 flex flex-col  z-50">
                <span className="font-semibold text-lg">
                  {data?.user?.username}
                </span>
                <span className="text-sm text-gray-300">
                  {data?.user?.email}
                </span>
              </div>
            )}
          </div>
        )}

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
                onClick={() => setexpandIconClick(!expandIconClick)}
                className="relative flex items-center space-x-1 group hover:text-gray-400"
              >
                <span className="text-main">Tools</span>
                <button className="p-1">
                  <ExpandMoreIcon
                    className={`transition-transform duration-200 ${
                      expandIconClick
                        ? "rotate-180 text-gray-400"
                        : "text-main hover:text-gray-400"
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

          {/* Mobile Auth Buttons */}
          {status === "unauthenticated" ? (
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
          ) : (
            <div className="flex flex-col items-center mt-3 space-y-1">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                {data?.user?.ProfilePic ? (
                  <img
                    src={data.user.ProfilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <PersonIcon className="text-main" />
                )}
              </div>
              <span className="font-semibold text-main">
                {data?.user?.username}
              </span>
              <span className="text-sm text-gray-300">{data?.user?.email}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
