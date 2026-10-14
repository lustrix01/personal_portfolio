import React, { useState, useRef } from "react";
import {
  GraduationCap,
  Code2,
  MonitorSmartphone,
  Layout,
  Network,
  Server,
  FileCode2,
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

  // Technical Foundations tailored for OJT candidate
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
      name: "PHP",
      icon: FileCode2,
      color: "text-indigo-400",
      border: "hover:border-indigo-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(129,140,248,0.4)]",
    },
    {
      name: "UI/UX Design",
      icon: MonitorSmartphone,
      color: "text-fuchsia-400",
      border: "hover:border-fuchsia-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(232,121,249,0.4)]",
    },
    {
      name: "Basic Networking",
      icon: Network,
      color: "text-amber-400",
      border: "hover:border-amber-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]",
    },
    {
      name: "Basic System Admin",
      icon: Server,
      color: "text-emerald-400",
      border: "hover:border-emerald-400/50",
      glow: "hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-6 md:py-8 min-h-[calc(100vh-72px)] flex items-center justify-center scroll-mt-[72px] overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20 -translate-y-6 md:-translate-y-10">
        {/* 1. Left Side: Tasteful & Proportionate Profile Card */}
        <div className="w-full md:w-5/12 flex justify-center perspective-[1000px]">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            className="w-full max-w-[330px] rounded-3xl p-[1px] bg-gradient-to-br from-sky-400/40 via-indigo-500/20 to-transparent group hover:shadow-xl transition-all duration-300"
          >
            {/* Inner Card Content */}
            <div className="w-full rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 md:p-7 flex flex-col items-center text-center shadow-lg shadow-slate-200/40 dark:shadow-2xl dark:shadow-black/40 transition-all duration-300">
              {/* Profile Image Frame (Clean circular avatar, no distracting badges) */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-sky-500/15 dark:ring-sky-400/20 shadow-md mb-4 bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-700">
                <img
                  src="/Body.png"
                  alt="Owhie Lumbang"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Identity & Program */}
              <h3 className="text-xl md:text-2xl font-bold text-accentLight dark:text-accentDark tracking-tight">
                Owhie S. Lumbang
              </h3>

              <p className="text-sky-600 dark:text-sky-400 font-semibold text-xs md:text-sm mt-0.5">
                BS Information Technology
              </p>

              <div className="flex items-center gap-2 text-accentLight/70 dark:text-accentDark/70 text-xs mt-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Bicol University (Year 4)</span>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 w-full text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Seeking OJT
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Web & Systems
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Right Side: Bio & Interactive Skills Grid */}
        <div className="w-full md:w-7/12 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
              Get To Know Me
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentLight dark:text-accentDark tracking-tight">
              About Me
            </h2>
          </div>

          {/* Bio Text (Authentic, Student-friendly, Zero AI fluff) */}
          <div className="text-sm md:text-base text-accentLight/80 dark:text-accentDark/80 font-light leading-relaxed space-y-3.5">
            <p>
              I'm a 4th-year Information Technology student at Bicol University
              currently preparing for my On-the-Job Training (OJT). Over the
              course of my studies, I discovered a real curiosity for how web
              applications, servers, and networks connect and work together.
            </p>
            <p>
              Instead of just memorizing theory, I enjoy building practical web
              projects using React, Tailwind CSS, and PHP, while continuously
              strengthening my fundamentals in basic networking and system
              administration. I'm eager to join an actual development or IT team
              where I can contribute, learn from experienced mentors, and adapt
              quickly.
            </p>
          </div>

          {/* Interactive Technical Arsenal Grid */}
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
