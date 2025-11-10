'use client'
import { useState } from "react";
import { useEffect } from "react";
import ScrollArrow from "../components/ScrollArrow"; 
import Summary from "./cv/Summary";

interface heroProps {
    name: string;
    summaryText: string;
}

export default function Hero( props: heroProps ) {

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
        <div className="flex items-center justify-center min-h-screen px-4 relative">
          <div className="max-w-2xl text-[#f66262] text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif mb-6 font-bold">
              henry
            </h1>
            <Summary paragraph={props.summaryText} />
          </div>

          <ScrollArrow isScrolled={isScrolled} />
        </div>
    );
}

