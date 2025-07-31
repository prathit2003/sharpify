import Navbar from "@/components/sections/header";
import FaQs from "@/components/sections/Faq";
import Footer from "@/components/sections/footer";
import GetStarted from "@/components/sections/getstarted";
import Testominial from "@/components/sections/testomonial";
import ThreeCard from "@/components/sections/threeicongallery";
import AbouT from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Feature from "@/components/sections/features";

export default async function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-main">
        <Navbar></Navbar>
        <Hero></Hero>
        <ThreeCard></ThreeCard>
        <Feature></Feature>
        <AbouT></AbouT>
        <Testominial></Testominial>
        <FaQs></FaQs>
        <GetStarted></GetStarted>
        <Footer></Footer>
      </div>
    </>
  );
}
