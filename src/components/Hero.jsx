import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Terminal, Check, Copy, Download } from "lucide-react";
import SocialIcons from "./SocialIcons";

const INITIAL_HISTORY = [
  {
    cmd: "whoami",
    output: "Owhie S. Lumbang — 4th-Year BSIT @ Bicol University",
  },
  {
    cmd: "cat focus.txt",
    output: "Web Development · Networking · System Admin",
  },
  {
    cmd: "ping ojt_status",
    output: "Seeking OJT Placement — Ready to Learn & Build 🟢",
    isStatus: true,
  },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "Owhie S. Lumbang | 4th-Year BSIT @ Bicol University | Seeking OJT: Web Dev, Systems, Networking"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (rawCmd) => {
    const cleanCmd = rawCmd.trim();
    if (!cleanCmd) return;

    setCommandHistory((prev) => [...prev, cleanCmd]);
    setHistoryIdx(-1);

    const lower = cleanCmd.toLowerCase();

    if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let result = "";
    let isStatus = false;
    let isHelp = false;

    switch (lower) {
      case "help":
        isHelp = true;
        break;
      case "whoami":
      case "about":
        result = "Owhie S. Lumbang — 4th-Year BS Information Technology student at Bicol University.";
        break;
      case "skills":
      case "focus":
      case "cat focus.txt":
        result = "Frontend (React, Tailwind CSS) · PHP & MySQL · Networking · System Admin";
        break;
      case "ojt":
      case "status":
      case "ping ojt_status":
        result = "Seeking OJT Placement — Ready to Learn, Contribute, and Build 🟢";
        isStatus = true;
        break;
      case "projects":
        result = "Featured: IskoMart, DentiSYS, Pike-mon Booth & Flower Card.";
        break;
      case "resume":
      case "cv":
        window.open("/Lumbang_Resume.pdf", "_blank");
        result = "Opening Owhie's Resume (Lumbang_Resume.pdf)... 📄";
        break;
      case "contact":
        result = "Email: osl2023-5510-65059@bicol-u.edu.ph | GitHub: github.com/lustrix01";
        break;
      case "sudo":
        result = "Permission denied. Hire me first to get root access! 😉";
        break;
      case "date":
        result = new Date().toLocaleString();
        break;
      default:
        result = `command not found: "${cleanCmd}". Type 'help' to see available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { cmd: cleanCmd, output: result, isStatus, isHelp },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIdx(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal("");
      }
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-6 md:py-8 min-h-[calc(100vh-72px)] gap-8 md:gap-12 max-w-[1600px] mx-auto scroll-mt-[72px]"
    >
      {/* 1. Left Column: Interactive Minimalist Terminal */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative py-2">
        {/* Subtle Ambient Backing Glow */}
        <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-sky-400/15 via-indigo-400/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

        {/* Minimal macOS Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="w-full max-w-[480px] rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl shadow-xl shadow-slate-200/40 dark:shadow-2xl dark:shadow-black/50 overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 cursor-text"
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/60 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
              <Terminal size={13} className="text-sky-500" />
              <span>owhie@bicol-u:~ (interactive)</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              title="Copy summary"
              className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors p-1 rounded"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Terminal Scrollable Content Area */}
          <div
            ref={terminalBodyRef}
            className="p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed max-h-[290px] overflow-y-auto space-y-3 text-left"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">owhie</span>
                  <span className="text-slate-400">@</span>
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">bicol-u</span>
                  <span className="text-slate-400">:~$</span>
                  <span className="font-medium text-slate-900 dark:text-white">{item.cmd}</span>
                </div>

                {item.isHelp ? (
                  <div className="mt-1 pl-3 border-l-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 space-y-1 text-xs">
                    <p className="font-semibold text-slate-700 dark:text-slate-200">Available commands:</p>
                    <p>• <span className="text-sky-500 font-medium">whoami</span> — Identity & education</p>
                    <p>• <span className="text-sky-500 font-medium">skills</span> — Technical foundations</p>
                    <p>• <span className="text-sky-500 font-medium">ojt</span> — Internship availability status</p>
                    <p>• <span className="text-sky-500 font-medium">projects</span> — Key highlighted works</p>
                    <p>• <span className="text-sky-500 font-medium">resume</span> — Open & download CV</p>
                    <p>• <span className="text-sky-500 font-medium">contact</span> — Get in touch directly</p>
                    <p>• <span className="text-sky-500 font-medium">clear</span> — Clear the screen</p>
                  </div>
                ) : item.isStatus ? (
                  <div className="mt-1 pl-3 text-slate-600 dark:text-slate-300 border-l-2 border-slate-200 dark:border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {item.output}
                    </span>
                  </div>
                ) : (
                  <p className="mt-1 pl-3 text-slate-600 dark:text-slate-300 border-l-2 border-slate-200 dark:border-slate-800">
                    {item.output}
                  </p>
                )}
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-1.5 pt-1 text-slate-700 dark:text-slate-200">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">owhie</span>
              <span className="text-slate-400">@</span>
              <span className="text-sky-600 dark:text-sky-400 font-semibold">bicol-u</span>
              <span className="text-slate-400">:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help'..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs md:text-sm text-slate-900 dark:text-white placeholder:text-slate-400/60 caret-sky-500"
              />
            </div>
          </div>

          {/* Quick Clickable Suggestions Bar */}
          <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono text-slate-500 select-none">
            <span className="text-slate-400 text-[10px] uppercase tracking-wider mr-1">Try:</span>
            {["help", "skills", "ojt", "projects", "resume", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
                className="px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Right Column: Text Content & Socials */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 space-y-4 md:space-y-5 md:pl-10">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-accentLight/60 dark:text-accentDark/60 uppercase">
            Crafting Digital Experiences
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-accentLight dark:text-accentDark leading-tight md:leading-[1.1] pb-1">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-700 hover:from-indigo-500 hover:to-sky-400 inline-block hover:scale-105 transform origin-left cursor-pointer pb-2 pr-4 whitespace-nowrap">
              Owhie Lumbang
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-accentLight/80 dark:text-accentDark/80 mt-[-4px]">
            IT Student & Aspiring Developer
          </h2>
        </div>

        <p className="max-w-[480px] text-base md:text-lg font-light text-accentLight/80 dark:text-accentDark/80 leading-relaxed">
          4th-year BS Information Technology student at Bicol University seeking
          an OJT internship. Grounded in web development, foundational networking,
          and system administration — ready to learn, contribute, and adapt to
          real-world team workflows.
        </p>

        {/* CTA Buttons (Vercel / Linear Minimalist Style) */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
          <a
            href="#project"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-medium text-sm shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>

          <a
            href="/Lumbang_Resume.pdf"
            download="Lumbang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-300 dark:border-sky-800/80 bg-sky-50/80 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/60 font-medium text-sm transition-all duration-200 active:scale-[0.98] shadow-xs"
          >
            <span>Download Resume</span>
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300/80 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/40 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800/80 hover:border-slate-400 dark:hover:border-slate-600 font-medium text-sm transition-all duration-200 active:scale-[0.98] backdrop-blur-sm shadow-xs"
          >
            <span>Get in touch</span>
          </a>
        </div>

        <div className="pt-2 w-full flex justify-center md:justify-start">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
