import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    const form = e.target;

    const response = await fetch("https://formspree.io/f/xkopjbpe", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-6 md:py-8 px-6 md:px-16 flex flex-col items-center justify-center max-w-[1200px] mx-auto z-10 min-h-[calc(100vh-72px)] scroll-mt-[72px]"
    >
      <div className="w-full flex flex-col items-center -translate-y-6 md:-translate-y-10 z-10">
        {/* Header - Unified Eyebrow Style */}
        <div className="flex flex-col items-center gap-1.5 mb-6 md:mb-8 text-center z-10">
          <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
            Contact & Connect
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-accentLight dark:text-accentDark tracking-tight">
            Get In Touch
          </h2>
          <p className="max-w-md text-accentLight/70 dark:text-accentDark/70 text-xs md:text-sm font-light mt-0.5">
            Have an OJT opportunity, a project in mind, or just want to connect? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-5xl items-center">
          {/* Left Side: Professional Info Cards */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-5">
            <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-sky-500/30 transition-all shadow-xs">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-accentLight dark:text-accentDark">
                  Email Me
                </h4>
                <p className="text-xs text-accentLight/60 dark:text-accentDark/60 tracking-wide">
                  owhielumbang111@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-indigo-500/30 transition-all shadow-xs">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-accentLight dark:text-accentDark">
                  Location
                </h4>
                <p className="text-xs text-accentLight/60 dark:text-accentDark/60 tracking-wide">
                  Bicol University, Philippines
                </p>
              </div>
            </div>

            {/* Let's Chat card */}
            <div className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gradient-to-br dark:from-white/10 dark:to-transparent border border-slate-200/90 dark:border-white/10 backdrop-blur-sm shadow-xs">
              <MessageSquare className="text-indigo-500 mb-2.5" size={24} />
              <h4 className="text-base md:text-lg font-bold text-accentLight dark:text-accentDark mb-1">
                Let's Chat!
              </h4>
              <p className="text-xs text-accentLight/60 dark:text-accentDark/50 leading-relaxed">
                I'm currently seeking OJT placement and open for collaborations.
                Feel free to drop a message and I'll respond as soon as possible!
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative">
            {status === "SUCCESS" ? (
              <div className="flex flex-col items-center justify-center p-10 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 rounded-[28px] animate-in fade-in zoom-in duration-300 h-full min-h-[380px]">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-accentLight dark:text-accentDark">
                  Message Sent!
                </h3>
                <p className="text-accentLight/60 text-center mt-2 text-xs md:text-sm">
                  Thanks! I will get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("")}
                  className="mt-5 text-sky-500 text-xs font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3.5 p-6 md:p-7 rounded-[28px] bg-white/80 dark:bg-slate-900/30 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-2xl"
              >
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3.5 bg-white dark:bg-black/20 border border-slate-200/90 dark:border-white/10 rounded-xl focus:border-sky-500 outline-none transition-all text-xs md:text-sm text-accentLight dark:text-accentDark placeholder-slate-400"
                />

                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3.5 bg-white dark:bg-black/20 border border-slate-200/90 dark:border-white/10 rounded-xl focus:border-sky-500 outline-none transition-all text-xs md:text-sm text-accentLight dark:text-accentDark placeholder-slate-400"
                />

                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3.5 bg-white dark:bg-black/20 border border-slate-200/90 dark:border-white/10 rounded-xl focus:border-sky-500 outline-none transition-all text-xs md:text-sm text-accentLight dark:text-accentDark placeholder-slate-400 resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={status === "SENDING"}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs tracking-widest hover:brightness-110 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all active:scale-95 shadow-md disabled:opacity-50"
                >
                  {status === "SENDING" ? "SENDING..." : "SEND MESSAGE"}
                  <Send size={16} />
                </button>
                {status === "ERROR" && (
                  <p className="text-red-500 text-[10px] text-center mt-1">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-4 opacity-30 text-[9px] tracking-[0.5em] uppercase text-accentLight dark:text-accentDark text-center">
        © 2026 OWHIE LUMBANG • BU IT STUDENT
      </footer>
    </section>
  );
};

export default Contact;
