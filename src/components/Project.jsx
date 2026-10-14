import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

// Custom SVG for GitHub
const GithubIcon = ({ className, size = 16, strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.3 5.3 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const projectsData = [
  {
    title: "DentiSys",
    subtitle: "Academic Grading and Retention Monitoring System",
    role: "Project Leader | Frontend and Backend Developer",
    category: "Academic Systems",
    badge: "Academic System",
    description:
      "A web-based system built for BU College of Dental Medicine to monitor student grading performance and retention status.",
    liveUrl: "https://52-76-5-164.sslip.io",
    githubUrl: "https://github.com/lustrix01",
    techStack: ["React", "Tailwind CSS", "REST API", "Cloud Hosted"],
  },
  {
    title: "IskoMart",
    subtitle: "Web-Based Marketplace System",
    role: "Project Leader | Frontend Developer",
    category: "Academic Systems",
    badge: "Academic System",
    description:
      "A campus e-commerce platform built to support student merchants with item catalogs, cart management, and responsive UI.",
    liveUrl: "https://iskotmart-frontend.vercel.app/",
    githubUrl: "https://github.com/lustrix01",
    techStack: ["React", "Tailwind CSS", "MySQL", "REST API"],
  },
  {
    title: "Pike-mon Booth",
    subtitle: "Interactive Web Photo Booth",
    role: "Personal Project · Creator",
    category: "Personal & Creative",
    badge: "Personal Project",
    description:
      "A playful Pokémon-themed web photo booth featuring live webcam capture, custom photo strip layout, and instant downloads.",
    liveUrl: "https://pike-mon-booth.vercel.app/",
    githubUrl: "https://github.com/lustrix01",
    techStack: ["React", "CSS Animations", "Vite"],
  },
  {
    title: "Flower Card",
    subtitle: "Interactive Digital Greeting Card",
    role: "Personal Project · Creator",
    category: "Personal & Creative",
    badge: "Personal Project",
    description:
      "A digital greeting card project crafted with micro-interactions and tactile animations for sending warm virtual notes.",
    liveUrl: "https://flower-card-one.vercel.app/",
    githubUrl: "https://github.com/lustrix01",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
  },
];

const categories = ["All Projects", "Academic Systems", "Personal & Creative"];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="project"
      className="relative py-6 md:py-8 px-6 md:px-12 min-h-[calc(100vh-72px)] flex flex-col items-center justify-center max-w-[1200px] mx-auto z-10 scroll-mt-[72px]"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-[90px] -z-10 pointer-events-none"></div>

      <div className="w-full flex flex-col items-center -translate-y-6 md:-translate-y-10 z-10">
        {/* Header - Unified Eyebrow Style */}
      <div className="flex flex-col items-center gap-1.5 mb-5 text-center z-10">
        <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
          Portfolio & Works
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-accentLight dark:text-accentDark tracking-tight">
          Featured Projects
        </h2>
        <p className="max-w-lg text-accentLight/70 dark:text-accentDark/70 text-xs md:text-sm font-light mt-0.5">
          Academic systems and creative personal projects I've built and deployed.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-200
              ${
                activeCategory === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid - Ultra-clean, Compact 2x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-3xl z-10">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col justify-between rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 p-3.5 sm:p-4 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"
          >
            <div>
              {/* Header: Title + Role + Live Status */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold text-accentLight dark:text-accentDark tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200/50 dark:border-sky-800/50 px-1.5 py-0.2 rounded">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live
                </span>
              </div>

              {/* Caption - Short, Readable, Complete */}
              <p className="text-[11px] sm:text-xs text-accentLight/70 dark:text-accentDark/70 font-light leading-relaxed my-2">
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center gap-2 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={11} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <GithubIcon size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Project;
