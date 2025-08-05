"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const page = () => {
  const [headerActive, setHeaderActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(headerActive);
  return (
    <div>
      <TopBar />

      <div
        className={`w-full transition-transform duration-500 fixed -top-9 left-0 z-50 ${
          headerActive ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      {/* <Faq /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
