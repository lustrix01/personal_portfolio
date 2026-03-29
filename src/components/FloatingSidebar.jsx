import React, { useState, useEffect } from "react";
import { Home, User, Cpu, Briefcase, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Skill", icon: Cpu, id: "skill" },
  { name: "Project", icon: Briefcase, id: "project" },
  { name: "Contact", icon: Mail, id: "contact" },
];

const FloatingSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Show/Hide Sidebar
      setIsVisible(window.scrollY > 300);

      // 2. Detect Active Section for highlighting icons
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-[100] transition-all duration-700 transform 
      ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
    >
      <div className="flex flex-col gap-4 p-3 bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.id;

          return (
            <a
              key={`nav-${link.id}`}
              href={`#${link.id}`}
              className={`relative p-3 rounded-full transition-all duration-300 group
                ${
                  isActive
                    ? "bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-110"
                    : "text-accentLight/40 dark:text-accentDark/40 hover:bg-white/10 hover:text-sky-500"
                }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />

              {/* Tooltip on hover */}
              <span className="absolute left-16 bg-slate-800 text-white text-[10px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest border border-white/10">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default FloatingSidebar;
