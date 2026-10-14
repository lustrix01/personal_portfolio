import React, { useState } from "react";
import {
  Code2,
  Layout,
  FileCode2,
  Database,
  Network,
  Server,
  Layers,
} from "lucide-react";

const skillsData = [
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
    color: "text-sky-400",
    border: "hover:border-sky-400/50",
    bg: "hover:bg-sky-400/10",
    desc: "My go-to frontend library. Used it to build dynamic state-driven components, manage user sessions, and create interactive UI for IskoMart and school projects.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: Layout,
    color: "text-teal-400",
    border: "hover:border-teal-400/50",
    bg: "hover:bg-teal-400/10",
    desc: "How I style almost everything I build. Helps me prototype clean, responsive layouts quickly while keeping dark mode and mobile views consistent without messy CSS.",
  },
  {
    name: "PHP",
    category: "Backend",
    icon: FileCode2,
    color: "text-indigo-400",
    border: "hover:border-indigo-400/50",
    bg: "hover:bg-indigo-400/10",
    desc: "The core backend language from our college curriculum. Used it to write server-side scripts, handle form validations, manage sessions, and connect to databases.",
  },
  {
    name: "MySQL & PostgreSQL",
    category: "Database",
    icon: Database,
    color: "text-blue-400",
    border: "hover:border-blue-400/50",
    bg: "hover:bg-blue-400/10",
    desc: "Hands-on experience from database coursework. Comfortable writing CRUD queries, JOINs, and designing relational table structures with primary/foreign keys.",
  },
  {
    name: "Basic Networking",
    category: "IT & Systems",
    icon: Network,
    color: "text-amber-400",
    border: "hover:border-amber-400/50",
    bg: "hover:bg-amber-400/10",
    desc: "Learned through our IT laboratory subjects and Cisco Packet Tracer. Familiar with IP subnetting, LAN configuration, TCP/IP, and basic switch/router setup.",
  },
  {
    name: "Basic System Admin",
    category: "IT & Systems",
    icon: Server,
    color: "text-emerald-400",
    border: "hover:border-emerald-400/50",
    bg: "hover:bg-emerald-400/10",
    desc: "Comfortable using the Linux terminal, managing user permissions, installing service packages, and setting up local development environments.",
  },
  {
    name: "UI/UX Design",
    category: "Design",
    icon: Layers,
    color: "text-fuchsia-400",
    border: "hover:border-fuchsia-400/50",
    bg: "hover:bg-fuchsia-400/10",
    desc: "I care a lot about visual hierarchy and clean spacing. I like wireframing layout flows and picking clear typography before writing code.",
  },
];

const categories = ["All", "Frontend", "Backend", "Database", "IT & Systems", "Design"];

const Skill = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skill"
      className="relative py-6 md:py-8 px-6 md:px-16 min-h-[calc(100vh-72px)] flex flex-col items-center justify-center max-w-[1400px] mx-auto scroll-mt-[72px]"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 dark:bg-sky-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="w-full flex flex-col items-center -translate-y-6 md:-translate-y-10 z-10">
        {/* Section Header (Unified Modern Eyebrow Design) */}
      <div className="flex flex-col items-center gap-1.5 mb-5 md:mb-6 text-center z-10">
        <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
          Technical Arsenal
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-accentLight dark:text-accentDark tracking-tight">
          Skills & Tools
        </h2>
        <p className="max-w-xl text-accentLight/70 dark:text-accentDark/70 text-xs md:text-sm font-light mt-0.5">
          A realistic overview of technologies and foundational IT concepts I've learned through academic coursework and practical projects.
        </p>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-7 z-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105
              ${
                activeFilter === category
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/10 dark:bg-slate-800/50 text-accentLight/70 dark:text-accentDark/70 hover:bg-white/30 dark:hover:bg-slate-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid - Adjusted gap and padding for better screen fit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4 w-full z-10">
        {filteredSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name + activeFilter}
              className="group relative flex flex-col p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-800/50 cursor-default transition-all duration-500 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 40}ms`, opacity: 0 }}
            >
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl ${skill.bg} group-hover:opacity-100`}
              ></div>
              <div
                className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transform -translate-x-full transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0 ${skill.color}`}
              ></div>

              <div className="relative z-10 flex items-center gap-3 mb-3">
                <div
                  className={`p-2.5 rounded-xl bg-white/50 dark:bg-slate-800 border border-white/20 dark:border-slate-700 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${skill.color}`}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-accentLight dark:text-accentDark tracking-tight leading-tight">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-accentLight/50 dark:text-accentDark/50">
                    {skill.category}
                  </span>
                </div>
              </div>

              <div className="relative z-10 text-xs md:text-sm font-light leading-relaxed text-accentLight/70 dark:text-accentDark/70 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:text-accentLight/90 dark:group-hover:text-accentDark/90">
                {skill.desc}
              </div>
            </div>
          );
        })}
      </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </section>
  );
};

export default Skill;
