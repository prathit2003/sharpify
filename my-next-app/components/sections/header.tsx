"use client";
import { Button } from "../ui/button";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import useUIStore from "@/app/store/UIatom";
const Navbar = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    expandIconClick,
    setexpandIconClick,
  } = useUIStore();
  const router = useRouter();
  return (
    <div className="bg-header fixed top-0 left-0 w-full z-5">
      <div className="flex items-center justify-between px-8 py-4 md:px-10 md:py-5">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-14">
          <img
            src="/icons/logo.svg"
            alt="Icon"
            className="h-6 md:h-10 w-auto"
          />

          <nav className="hidden lg:flex items-center space-x-8">
            {["Tools", "Generate", "Contact", "About", "API"].map((item) =>
              item === "Tools" ? (
                <div
                  key={item}
                  className="relative flex items-center space-x-1 group"
                >
                  <a
                    href="/tools"
                    className="nav-link text-main hover:text-primary"
                  >
                    Tools
                  </a>
                  <button
                    onClick={() => setexpandIconClick(!expandIconClick)}
                    className="p-1"
                  >
                    <ExpandMoreIcon
                      className={`transition-transform duration-200 ${
                        expandIconClick
                          ? "rotate-180 text-primary hover:cursor-pointer"
                          : "text-main hover:text-primary hover:cursor-pointer"
                      }`}
                    />
                  </button>

                  {expandIconClick && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-main rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] px-5 py-4 z-50">
                      {[
                        "Enhanceimage",
                        "RemoveBackground",
                        "Reducesize",
                        "Changeformat",
                      ].map((tool) => (
                        <a
                          key={tool}
                          href={`/tools?section=${tool.toLowerCase()}`}
                          className="block text-main text-md hover:text-primary py-2 transition-colors"
                        >
                          {tool}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="nav-link text-main hover:text-primary"
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
            onClick={() => router.push("/signup")}
            className="text-primary text-lg py-2 hover:underline transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
          >
            signup
          </a>
          <div className="h-6 w-[1px] bg-white" />
          <Button
            onClick={() => router.push("/signin")}
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
          {["Tools", "Generate", "Contact", "About", "API"].map((item) =>
            item === "Tools" ? (
              <div
                key={item}
                className="relative flex items-center space-x-1 group"
              >
                <a
                  href="/tools"
                  className="nav-link text-main hover:text-primary"
                >
                  Tools
                </a>
                <button
                  onClick={() => setexpandIconClick(!expandIconClick)}
                  className="p-1"
                >
                  <ExpandMoreIcon
                    className={`transition-transform duration-200 ${
                      expandIconClick
                        ? "rotate-180 text-primary hover:cursor-pointer"
                        : "text-main hover:text-primary hover:cursor-pointer"
                    }`}
                  />
                </button>

                {expandIconClick && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-main rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] px-5 py-4 z-50">
                    {[
                      "Enhanceimage",
                      "RemoveBackground",
                      "Reducesize",
                      "Changeformat",
                    ].map((tool) => (
                      <a
                        key={tool}
                        href={`/tools?section=${tool.toLowerCase()}`}
                        className="block  text-main text-md hover:text-primary py-2 transition-colors"
                      >
                        {tool}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="nav-link text-main hover:text-primary"
              >
                {item}
              </a>
            )
          )}
          <div className="flex flex-col items-center space-y-3 mt-3">
            <a
              onClick={() => router.push("/signup")}
              className="text-primary text-lg py-2 hover:underline transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
            >
              signup
            </a>
            <Button
              onClick={() => router.push("/signin")}
              className="bg-secondary rounded-2xl text-main text-lg font-semibold py-2 px-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              Signin
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
