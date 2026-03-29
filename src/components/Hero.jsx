import React, { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  // Mini-game State
  const leftSymbols = ["<", "{", "[", "(", "/*"];
  const rightSymbols = [">", "}", "]", ")", "*/"];

  const [leftIdx, setLeftIdx] = useState(0);
  const [rightIdx, setRightIdx] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Click Handlers to cycle through symbols
  const handleLeftClick = () => {
    setLeftIdx((prev) => (prev + 1) % leftSymbols.length);
  };

  const handleRightClick = () => {
    setRightIdx((prev) => (prev + 1) % rightSymbols.length);
  };

  // Check for the winning combination: { } (which are at index 1)
  useEffect(() => {
    if (leftIdx === 1 && rightIdx === 1) {
      setIsUnlocked(true);
    } else {
      setIsUnlocked(false);
    }
  }, [leftIdx, rightIdx]);

  return (
    /* FIXED: Added id="home" and scroll-mt-20 to prevent header overlap */
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between p-8 px-8 md:p-16 md:px-24 min-h-[80vh] gap-12 max-w-[1600px] mx-auto scroll-mt-20"
    >
      {/* 1. Left Column: Custom Abstract Tech Graphic (The Puzzle) */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-[350px] md:h-[500px] group">
        {/* Interactive Glowing Background Orbs */}
        <div
          className={`absolute w-48 h-48 md:w-72 md:h-72 rounded-full blur-[60px] animate-pulse transition-all duration-700 
          ${isUnlocked ? "bg-yellow-400/40 scale-125" : "bg-sky-400/30 dark:bg-sky-500/20 group-hover:bg-sky-400/40"}`}
        ></div>
        <div
          className={`absolute w-48 h-48 md:w-72 md:h-72 rounded-full blur-[60px] animate-pulse delay-1000 -translate-x-12 translate-y-12 transition-all duration-700 
          ${isUnlocked ? "bg-amber-500/40 scale-125" : "bg-indigo-500/20 dark:bg-indigo-600/20 group-hover:bg-indigo-500/30"}`}
        ></div>

        {/* Rotating Abstract Rings */}
        <svg
          className={`absolute z-10 w-64 h-64 md:w-[400px] md:h-[400px] transition-all duration-700 
            ${isUnlocked ? "animate-[spin_3s_linear_infinite]" : "animate-[spin_20s_linear_infinite] group-hover:animate-[spin_8s_linear_infinite]"}`}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            className={`transition-colors duration-500 ${isUnlocked ? "text-yellow-300/60" : "text-accentLight/20 dark:text-accentDark/20 group-hover:text-sky-300/50"}`}
          />
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="10 10"
            className={`transition-all duration-500 ${isUnlocked ? "text-yellow-400" : "text-sky-500/40 group-hover:text-sky-400/80"}`}
          />
          <circle
            cx="100"
            cy="100"
            r="55"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="20 15"
            className={`transition-all duration-500 ${isUnlocked ? "text-amber-500" : "text-indigo-500/50 group-hover:text-indigo-400/80"}`}
          />
        </svg>

        {/* The Interactive Combination Lock */}
        <div className="absolute z-20 flex items-center justify-center gap-6 md:gap-10 text-5xl md:text-7xl font-mono font-bold select-none">
          <span
            onClick={handleLeftClick}
            className={`cursor-pointer transform transition-all duration-300 hover:scale-125 hover:-translate-y-2 active:scale-90
              ${isUnlocked ? "text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" : "text-indigo-600 dark:text-indigo-400 drop-shadow-[0_0_8px_rgba(79,70,229,0.4)] hover:text-indigo-500"}`}
          >
            {leftSymbols[leftIdx]}
          </span>

          <span
            onClick={handleRightClick}
            className={`cursor-pointer transform transition-all duration-300 hover:scale-125 hover:-translate-y-2 active:scale-90
              ${isUnlocked ? "text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" : "text-sky-600 dark:text-sky-400 drop-shadow-[0_0_8px_rgba(2,132,199,0.4)] hover:text-sky-500"}`}
          >
            {rightSymbols[rightIdx]}
          </span>
        </div>

        {/* Easter Egg Message */}
        <div
          className={`absolute -bottom-8 md:-bottom-12 whitespace-nowrap font-black tracking-widest uppercase transition-all duration-700
          ${isUnlocked ? "opacity-100 translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 drop-shadow-xl scale-110" : "opacity-0 translate-y-4 text-accentLight/50"}`}
        >
          Developer Mode Unlocked!
        </div>

        {/* Subtle Hint */}
        <div
          className={`absolute bottom-10 md:bottom-20 transition-opacity duration-500 text-xs font-semibold tracking-widest text-accentLight/40 dark:text-accentDark/40 uppercase pointer-events-none
          ${isUnlocked ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}
        >
          Click brackets to unlock
        </div>
      </div>

      {/* 2. Right Column: Text Content & Socials */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 space-y-6 md:pl-12">
        <div className="flex flex-col gap-3 w-full">
          <span className="text-sm md:text-base font-semibold tracking-[0.2em] text-accentLight/60 dark:text-accentDark/60 uppercase">
            Crafting Digital Experiences
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-accentLight dark:text-accentDark leading-tight md:leading-[1.1] pb-2">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-700 hover:from-indigo-500 hover:to-sky-400 inline-block hover:scale-105 transform origin-left cursor-pointer pb-4 pr-4 whitespace-nowrap">
              Owhie Lumbang
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-accentLight/80 dark:text-accentDark/80 mt-[-10px]">
            Full Stack Developer
          </h2>
        </div>

        <p className="max-w-[480px] text-base md:text-lg font-light text-accentLight/70 dark:text-accentDark/70 leading-relaxed">
          I build scalable, high-performance web applications with a focus on
          elegant code, seamless user interfaces, and robust backend
          architectures.
        </p>

        <div className="pt-2 w-full flex justify-center md:justify-start">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
