import NavBar from "./Components/Nav";
import HeroSection from "./Components/Hero";
import Description from "./Components/Description";
import Colors from "./Components/Colors";
import HowItWorks from "./Components/HowItWorks";
import Features from "./Components/Features";
import Perfection from "./Components/Perfection";
import VideoAndUsage from "./Components/VideoAndUsage";
import WhatIncludes from "./Components/WhatIncludes";
import ShoppingCards from "./Components/ShoppingCards";
import Reviews from "./Components/Reviews";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Description />
      <Colors />
      <HowItWorks />
      <Features />
      <Perfection />
      <VideoAndUsage />
      <WhatIncludes />
      <ShoppingCards />
      <Reviews />
      <FAQ />
      <HeroSection />
      <Footer />
    </>
  );
}
