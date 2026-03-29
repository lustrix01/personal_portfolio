import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import MatrixRain from "./components/MatrixRain";
import FloatingSidebar from "./components/FloatingSidebar"; // Import the new sidebar

const KONAMI_CODE = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

function App() {
  const [inputSequence, setInputSequence] = useState([]);
  const [isHackerMode, setIsHackerMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      setInputSequence((prev) => {
        const newSequence = [...prev, key];
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const isMatch = inputSequence.join(",") === KONAMI_CODE.join(",");

    if (isMatch && !isHackerMode) {
      setIsHackerMode(true);
      setInputSequence([]);
      setTimeout(() => {
        setIsHackerMode(false);
      }, 8000);
    }
  }, [inputSequence, isHackerMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black outline-none">
      {/* 1. Floating Sidebar: Appears on scroll down */}
      <FloatingSidebar />

      <div
        className={`app-container min-h-screen transition-all duration-1000 z-10 relative 
        ${isHackerMode ? "opacity-20 grayscale sepia hue-rotate-[70deg] saturate-[5] blur-[2px]" : "opacity-100"}`}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-inherit backdrop-blur-md">
          <Header />
        </div>

        <main>
          <Hero />
          <About />
          <Skill />
          <Project />
          <Contact />
        </main>
      </div>

      {/* 2. Matrix Easter Egg Overlay */}
      {isHackerMode && (
        <div className="fixed inset-0 z-[60] pointer-events-none flex flex-col items-center justify-center bg-black/90">
          <MatrixRain />
          <div className="z-10 flex flex-col items-center justify-center text-green-500 font-mono text-center drop-shadow-[0_0_15px_rgba(34,197,94,0.9)] animate-pulse">
            <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">
              SYSTEM BREACHED
            </h1>
            <p className="text-lg md:text-2xl tracking-[0.3em] uppercase">
              Developer Mode Initialized // Root Access Granted
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
