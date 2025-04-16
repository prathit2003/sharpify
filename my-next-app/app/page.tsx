import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Navbar from "@/components/sections/header";
import FaQs from "@/components/sections/Faq";
import Footer from "@/components/sections/footer";
import GetStarted from "@/components/sections/getstarted";
import Testominial from "@/components/sections/testomonial";
import ThreeCard from "@/components/sections/threeicongallery";
import AbouT from "@/components/sections/about";
import Hero from "@/components/sections/hero";

export default async function Home() {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/dashboard");
  // }
  return (
    <>
      <div className=" flex flex-col  item-center min-h-screen bg-[#03001C]">
        <Navbar></Navbar>
        <Hero></Hero>
        <ThreeCard></ThreeCard>
        <AbouT></AbouT>
        <Testominial></Testominial>
        <FaQs></FaQs>
        <GetStarted></GetStarted>
        <Footer></Footer>
      </div>
    </>
  );
}
