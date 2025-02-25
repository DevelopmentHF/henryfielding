'use client'
import { useState, useEffect } from "react";
import HeaderText from "../components/HeaderText";
import Summary from "@/components/cv/Summary";
import ScrollArrow from "../components/ScrollArrow"; 
import Experience from "@/components/cv/Experience";

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
    <div className="">
        <div className="flex items-center justify-center min-h-screen px-4 relative">
          <div className="max-w-2xl text-[#C3F6FF] text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif mb-6 font-bold">
              henry
            </h1>
            <Summary paragraph="software developer & masters student" />
          </div>

          <ScrollArrow isScrolled={isScrolled} />
        </div>

        <div className="flex justify-start items-center px-4 relative">
          <div className="flex justify-start">
            <Experience
                jobTitle="Software Developer"
                company="Jocapps GmbH"
                jobStartYear="2020"
                jobEndYear="Present"
                jobBulletPoints={["Developed web applications", "Collaborated with teams", "Implemented features"]}
            />
          </div>
        </div>

        <div className="h-40"></div> {/* Extra space to scroll */}
    </div>
  );
}
