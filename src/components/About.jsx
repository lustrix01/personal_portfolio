import React, { useState, useRef } from "react";
import {
  GraduationCap,
  Code2,
  MonitorSmartphone,
  Database,
  Cpu,
  Layout,
} from "lucide-react";

const About = () => {
  // 3D Tilt Effect State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  // Handle Mouse Movement for the 3D Card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the center of the card
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Adjust the divisor to make the tilt more or less extreme
    setRotateX(-(y / 15));
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    // Reset to flat when mouse leaves
    setRotateX(0);
    setRotateY(0);
  };

  // Expanded Skills Array for the interactive grid
  const skills = [
    {
      name: "React",
      icon: Code2,
      color: "text-sky-400",
      border: "hover:border-sky-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]",
    },
    {
      name: "Tailwind CSS",
      icon: Layout,
      color: "text-teal-400",
      border: "hover:border-teal-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]",
    },
    {
      name: "Python",
      icon: Cpu,
      color: "text-yellow-400",
      border: "hover:border-yellow-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]",
    },
    {
      name: "UI/UX Design",
      icon: MonitorSmartphone,
      color: "text-fuchsia-400",
      border: "hover:border-fuchsia-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(232,121,249,0.4)]",
    },
    {
      name: "Node.js & C#",
      icon: Database,
      color: "text-green-400",
      border: "hover:border-green-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]",
    },
    {
      name: "Machine Learning",
      icon: Cpu,
      color: "text-indigo-400",
      border: "hover:border-indigo-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(129,140,248,0.4)]",
    },
  ];

  return (
    // The id="about" is crucial here so the Header navigation link works!
    <section
      id="about"
      className="relative py-20 px-8 md:px-24 min-h-screen flex items-center justify-center max-w-[1600px] mx-auto overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="w-full flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* 1. Left Side: Interactive 3D Profile Card */}
        <div className="w-full md:w-5/12 flex justify-center perspective-[1000px]">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.1s ease-out", // Smooth snappy tracking
            }}
            className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl p-[1px] bg-gradient-to-br from-sky-400/50 via-indigo-500/20 to-transparent group hover:shadow-2xl hover:shadow-indigo-500/20"
          >
            {/* Inner Card Content */}
            <div className="w-full h-full rounded-3xl bg-white/40 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-slate-800/50 p-8 flex flex-col items-center justify-end relative overflow-hidden transition-all duration-500">
              {/* Optional: Add an image inside the card later */}
              <img
                src="/src/assets/sense.jpg"
                className="absolute top-0 w-full h-full object-cover opacity-50"
              />

              <div className="absolute top-8 left-8 p-3 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                <GraduationCap size={32} />
              </div>

              <div className="relative z-10 w-full text-left mt-auto transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-3xl font-black text-accentLight dark:text-accentDark mb-1 tracking-tight">
                  Owhie Lumbang
                </h3>
                <p className="text-sky-600 dark:text-sky-400 font-semibold tracking-wide uppercase text-sm mb-3">
                  Information Technology
                </p>
                <div className="flex items-center gap-2 text-accentLight/70 dark:text-accentDark/70 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Bicol University
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Right Side: Bio & Interactive Skills Grid */}
        <div className="w-full md:w-7/12 flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 inline-block w-max">
              About Me
            </h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
          </div>

          {/* Bio Text */}
          <div className="text-base md:text-lg text-accentLight/80 dark:text-accentDark/80 font-light leading-relaxed space-y-4">
            <p>
              I am an Information Technology student at Bicol University with a
              deep passion for building scalable, user-centric digital
              experiences. I bridge the gap between robust backend architecture
              and beautiful frontend design.
            </p>
            <p>
              Whether I am conceptualizing a clean UI/UX or writing logic in
              React and Python, my goal is to write elegant code that solves
              real-world problems. I am constantly exploring new technologies to
              push my development skills further.
            </p>
          </div>

          {/* Interactive Skills Grid */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] text-accentLight/50 dark:text-accentDark/50 uppercase mb-6">
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-white/20 dark:bg-slate-800/30 backdrop-blur-sm border border-transparent 
                      transition-all duration-300 cursor-pointer transform hover:-translate-y-1
                      ${skill.border} ${skill.glow}`}
                  >
                    <Icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="font-semibold text-accentLight dark:text-accentDark text-sm">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
