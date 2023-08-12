import React from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import HeroSection from "../component/HeroSection";
import OurServices from "../component/OurServices";
import WhyChooseUs from "../component/WhyChooseUs";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";
import About from "../component/About";

export default function Home() {
  return (
    <>
      <WebHeader />
      <div className="pagewrapper">
        <HeroSection />
        <OurServices />
        <WhyChooseUs />
        <About />
        <WebFooter />
      </div>
    </>
  );
}
