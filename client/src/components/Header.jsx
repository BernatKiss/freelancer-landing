import React from "react";
import assets from "../assets/assets";

const Header = ({menuOpen}) => {
  return (
    <section className="relative w-full overflow-visible">

      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <img
          src={assets.deco1}
          className="absolute top-[-5%] left-0 w-[12%] max-w-[70px] z-10"
          alt=""
        />
        
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-20">
        {/* Bal oldal - szöveg */}
        <div className="flex flex-col gap-8 md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight leading-tight">
            Providing <br /> Best <br />
            <span className="font-medium text-primary">WEB Services</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>

          <div className="flex justify-center md:justify-start gap-6 md:gap-10">
            <button className="px-10 py-3 bg-primary text-white shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] cursor-pointer">
              Get Started
            </button>
            <button className="px-10 py-3 border border-primary text-primary cursor-pointer">
              Explore
            </button>
          </div>
        </div>

        {/* Jobb oldal - kép */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <img
            src={assets.header_bg}
            className="w-[80%] md:w-[90%] max-w-[500px] z-0"
            alt=""
          />
          <img
            src={assets.headerpic1}
            className={`absolute w-[60%] md:w-[70%] max-w-[400px] z-10 bottom-[5%] ${menuOpen ? 'hidden' : 'flex'}`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
