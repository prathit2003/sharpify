import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Navbar from "@/components/sections/header";
import StepExplainer from "@/components/sections/steps-explainer";
import CustomCarousel from "@/components/sections/carousel";
import FaQs from "@/components/sections/Faq";
import Footer from "@/components/sections/footer";
import GetStarted from "@/components/sections/getstarted";
import Testominial from "@/components/sections/testomonial";
import ThreeCard from "@/components/sections/threeicongallery";
import AbouT from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StepExplainer></StepExplainer>
      <ThreeCard></ThreeCard>
      <CustomCarousel></CustomCarousel>
      <AbouT></AbouT>
      <Testominial></Testominial>
      <FaQs></FaQs>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </>
  );
}
