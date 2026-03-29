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
      className="relative py-12 px-6 md:px-16 flex flex-col items-center justify-center max-w-[1200px] mx-auto z-10 min-h-[80vh]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
          Get In Touch
        </h2>
        <div className="h-1 w-16 bg-indigo-500 rounded-full"></div>
        <p className="mt-4 text-accentLight/60 dark:text-accentDark/60 font-light text-sm max-w-md">
          Have a project in mind? Let's build something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl items-center">
        {/* Left Side: Professional Info Cards */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20">
              <Mail size={24} />
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

          <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              <MapPin size={24} />
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

          {/* This was the missing "Let's Chat" card from your screenshot */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm">
            <MessageSquare className="text-indigo-500 mb-3" size={28} />
            <h4 className="text-lg font-bold text-accentLight dark:text-accentDark mb-1">
              Let's Chat!
            </h4>
            <p className="text-xs text-accentLight/50 dark:text-accentDark/50 leading-relaxed">
              I'm currently looking for new opportunities and collaborations.
              Feel free to drop a message and I'll respond as soon as possible!
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="relative">
          {status === "SUCCESS" ? (
            <div className="flex flex-col items-center justify-center p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] animate-in fade-in zoom-in duration-300 h-full min-h-[400px]">
              <CheckCircle size={64} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-accentLight dark:text-accentDark">
                Message Sent!
              </h3>
              <p className="text-accentLight/60 text-center mt-2 text-sm">
                Thanks! I will get back to you soon.
              </p>
              <button
                onClick={() => setStatus("")}
                className="mt-6 text-sky-500 text-sm font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-8 rounded-[40px] bg-white/5 dark:bg-slate-900/30 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl focus:border-sky-500 outline-none transition-all text-sm text-accentLight dark:text-accentDark"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl focus:border-sky-500 outline-none transition-all text-sm text-accentLight dark:text-accentDark"
              />

              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                className="w-full p-4 bg-white/5 dark:bg-black/20 border border-white/10 rounded-2xl focus:border-sky-500 outline-none transition-all text-sm text-accentLight dark:text-accentDark resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={status === "SENDING"}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold tracking-widest hover:brightness-110 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all active:scale-95 shadow-lg disabled:opacity-50"
              >
                {status === "SENDING" ? "SENDING..." : "SEND MESSAGE"}
                <Send size={18} />
              </button>
              {status === "ERROR" && (
                <p className="text-red-500 text-[10px] text-center mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <footer className="mt-16 opacity-30 text-[9px] tracking-[0.5em] uppercase text-accentLight dark:text-accentDark text-center">
        © 2026 OWHIE LUMBANG • BU IT STUDENT
      </footer>
    </section>
  );
};

export default Contact;
