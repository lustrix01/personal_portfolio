import React from "react";
import { Mail } from "lucide-react";

// Custom SVGs
export const FacebookIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.3 5.3 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export const InstagramIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/owhie.s.lumbang",
    icon: FacebookIcon,
    hover:
      "hover:text-[#1877F2] hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.8)]",
  },
  {
    name: "GitHub",
    url: "https://github.com/lustrix01",
    icon: GithubIcon,
    hover:
      "hover:text-black dark:hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/lustrix_0/",
    icon: InstagramIcon,
    hover:
      "hover:text-[#E4405F] hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.8)]",
  },
  {
    name: "Email",
    url: "mailto:osl2023-5510-65059@bicol-u.edu.ph",
    icon: Mail,
    hover:
      "hover:text-sky-500 hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-6">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 transform hover:scale-125 text-accentLight/60 dark:text-accentDark/60 ${social.hover}`}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
