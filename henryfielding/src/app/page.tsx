'use client'
import { useState, useEffect } from "react";
import HeaderText from "../components/HeaderText";
import Summary from "@/components/cv/Summary";
import ScrollArrow from "../components/ScrollArrow"; 

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-4 relative bg-[#0064E6]">
        <div className="max-w-2xl text-[#C3F6FF] text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif mb-6 font-bold">
            henry
          </h1>
          <Summary paragraph="software developer & masters student" />
        </div>

        <ScrollArrow isScrolled={isScrolled} />
      </div>

      <p className="p-4">here is some text</p>
      <div className="h-screen"></div> {/* Extra space to scroll */}
    </>
  );
}
