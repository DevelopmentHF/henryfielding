// components/ScrollArrow.js
import { ChevronDown } from "lucide-react";

interface scrollState {
    isScrolled: boolean,
}

export default function ScrollArrow( props: scrollState ) {
    return (
        <div
          className={`absolute bottom-8 transition-opacity duration-500 ${
            !props.isScrolled ? "animate-bounce opacity-100" : "opacity-0"
          }`}
        >
          <ChevronDown className="w-10 h-10 text-[#f66262]" />
        </div>
      );
}