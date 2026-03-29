import React from "react";
import { ExternalLink, ShoppingCart, Camera, Flower2 } from "lucide-react";

// Custom SVG for GitHub since Lucide removed it
const GithubIcon = ({ className, size = 20, strokeWidth = 2 }) => (
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
    title: "IskoMart",
    description:
      "A full-stack e-commerce app with merchant systems and dynamic product cataloging.",
    icon: ShoppingCart,
    liveUrl: "https://iskotmart-frontend.vercel.app/",
    techStack: ["React", "Node.js", "MySQL"],
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
  },
  {
    title: "Pike-mon Booth",
    description:
      "An interactive themed web experience with smooth UI animations and booth interface.",
    icon: Camera,
    liveUrl: "https://pike-mon-booth.vercel.app/",
    techStack: ["React", "CSS", "Vite"],
    color: "from-yellow-400 to-red-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
  },
  {
    title: "Flower Card",
    description:
      "A digital card application demonstrating creative UI/UX and state management.",
    icon: Flower2,
    liveUrl: "https://flower-card-one.vercel.app/",
    techStack: ["React", "Framer Motion"],
    color: "from-pink-500 to-rose-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="relative py-12 px-6 md:px-16 min-h-screen flex flex-col items-center justify-center max-w-[1200px] mx-auto z-10"
    >
      {/* Header - Made more compact */}
      <div className="flex flex-col items-center gap-2 mb-10 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
          Featured Projects
        </h2>
        <div className="h-1 w-16 bg-indigo-500 rounded-full"></div>
      </div>

      {/* Projects Grid - Optimized spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {projectsData.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={project.title}
              className={`group relative flex flex-col rounded-3xl bg-white/30 dark:bg-slate-900/40 backdrop-blur-md border border-white/10 dark:border-slate-800/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${project.glow}`}
            >
              {/* Card Banner */}
              <div
                className={`w-full h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
              >
                <Icon className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-accentLight dark:text-accentDark mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-accentLight/70 dark:text-accentDark/70 font-light mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/20 dark:bg-white/5 border border-white/10 text-accentLight/60 dark:text-accentDark/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white text-sm font-bold shadow-md hover:brightness-110 transition-all`}
                  >
                    Live <ExternalLink size={14} strokeWidth={3} />
                  </a>
                  <a
                    href="#"
                    className="p-2.5 rounded-xl bg-white/10 dark:bg-slate-800 text-accentLight dark:text-accentDark hover:bg-white/20 transition-all"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
