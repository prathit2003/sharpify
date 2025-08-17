"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import Enhance from "@/components/sections/dashboard/enhance";
import Resize from "@/components/sections/dashboard/resize";
import Removebg from "@/components/sections/dashboard/removebackground";
import ChangeFormat from "@/components/sections/dashboard/changeformat";
import { useCheckAuth } from "../utility/isloggedin";
const Home = () => {
  useCheckAuth();
  const isSmall = useMediaQuery("(max-width: 640px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");
  const router = useRouter();
  const searchParams = useSearchParams();

  const sectionParam = searchParams.get("section") || "";
  const [activeSectionKey, setActiveSectionKey] = useState(sectionParam);

  useEffect(() => {
    setActiveSectionKey(sectionParam);
  }, [sectionParam]);

  const sectionMap = [
    {
      key: "enhanceimage",
      title: "Enhance",
      component: <Enhance />,
    },
    {
      key: "reducesize",
      title: "Resize",
      component: <Resize />,
    },
    {
      key: "removebackground",
      title: "Remove Background",
      component: <Removebg />,
    },
    {
      key: "changeformat",
      title: "Change Format",
      component: <ChangeFormat />,
    },
  ];

  const activeSection = sectionMap.find(
    (item) => item.key === activeSectionKey
  );

  return (
    <div className="h-full w-full bg-header rounded-2xl">
      <div className="h-full w-full p-6 flex items-center justify-center">
        {activeSection?.component}
      </div>
    </div>
  );
};

export default Home;
