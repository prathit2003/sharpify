"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useUIStore from "@/app/store/UIatom";
const Topbar = () => {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };
  const handleprofileclick = () => {
    console.log("Logout clicked");
  };
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();
  return (
    <div className="flex items-center justify-between w-full bg-header py-4 px-6 rounded-2xl">
      <div className="flex items-center space-x-4">
        <Button
          className="md:hidden p-2 rounded-lg bg-header hover:scale-105 transition-all hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="h-5 w-5 text-main" />
        </Button>
        <img
          src="/icons/logo.svg"
          alt="Icon"
          className="h-6 lg:h-8 w-auto mx-2"
        />
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button
          onClick={handleBackButton}
          className="w-fit flex items-center gap-2  bg-card  rounded-xl py-2 px-4 text-main  transition-all"
        >
          <ArrowBackIcon fontSize="medium" />
          <span>Back</span>
        </Button>
      </motion.div>
    </div>
  );
};
export default Topbar;
