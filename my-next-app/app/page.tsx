import Navbar from "@/components/sections/header";
import FaQs from "@/components/sections/Faq";
import Footer from "@/components/sections/footer";
import GetStarted from "@/components/sections/getstarted";
import Testominial from "@/components/sections/testomonial";
import ThreeCard from "@/components/sections/threeicongallery";
import AbouT from "@/components/sections/about";
import Hero from "@/components/sections/hero";

export default async function Home() {
  return (
    <>
      <div className=" flex flex-col items-center min-h-screen bg-[#03001C]">
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
