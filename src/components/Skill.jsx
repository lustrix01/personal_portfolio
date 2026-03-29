import React, { useState } from "react";
import {
  Code2,
  Layout,
  Server,
  Braces,
  Database,
  Cpu,
  BrainCircuit,
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
    desc: "Building dynamic, component-driven UIs for complex web applications like IskoMart and TracePad.",
  },
  {
    name: "Tailwind CSS & DaisyUI",
    category: "Frontend",
    icon: Layout,
    color: "text-teal-400",
    border: "hover:border-teal-400/50",
    bg: "hover:bg-teal-400/10",
    desc: "Rapid utility-first styling, creating highly responsive and modern user interfaces.",
  },
  {
    name: "PHP & Laravel",
    category: "Backend",
    icon: Server,
    color: "text-red-400",
    border: "hover:border-red-400/50",
    bg: "hover:bg-red-400/10",
    desc: "Architecting secure server-side logic, routing, and robust MVC web applications.",
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    icon: Braces,
    color: "text-green-400",
    border: "hover:border-green-400/50",
    bg: "hover:bg-green-400/10",
    desc: "Developing scalable, event-driven JavaScript backend services and RESTful APIs.",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: Database,
    color: "text-blue-400",
    border: "hover:border-blue-400/50",
    bg: "hover:bg-blue-400/10",
    desc: "Designing relational databases, writing complex queries, and setting up automated triggers.",
  },
  {
    name: "Python",
    category: "Specialty",
    icon: Cpu,
    color: "text-yellow-400",
    border: "hover:border-yellow-400/50",
    bg: "hover:bg-yellow-400/10",
    desc: "Writing efficient scripts for automation, data processing, and backend integrations.",
  },
  {
    name: "Machine Learning",
    category: "Specialty",
    icon: BrainCircuit,
    color: "text-rose-400",
    border: "hover:border-rose-400/50",
    bg: "hover:bg-rose-400/10",
    desc: "Applying predictive models, including Naive Bayes classifiers and linear regression calculations.",
  },
  {
    name: "UI/UX Design",
    category: "Specialty",
    icon: Layers,
    color: "text-fuchsia-400",
    border: "hover:border-fuchsia-400/50",
    bg: "hover:bg-fuchsia-400/10",
    desc: "Drafting wireframes, mockups, and ensuring seamless, accessible user journeys.",
  },
];

const categories = ["All", "Frontend", "Backend", "Database", "Specialty"];

const Skill = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    // Reduced py-24 to py-12 and removed overflow-hidden to prevent clipping
    <section
      id="skill"
      className="relative py-12 md:py-16 px-6 md:px-16 min-h-screen flex flex-col items-center justify-center max-w-[1400px] mx-auto"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 dark:bg-sky-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex flex-col items-center gap-3 mb-10 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
          Technical Expertise
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full mb-2"></div>
        <p className="max-w-2xl text-accentLight/70 dark:text-accentDark/70 text-base md:text-lg font-light">
          A comprehensive overview of the languages, frameworks, and tools I use
          to bring digital products to life from the server to the browser.
        </p>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 z-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full z-10">
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
