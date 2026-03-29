import ThemeToggle from "./ThemeToggle";

const navLinks = ["Home", "About", "Skill", "Project", "Contact"];

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 px-8 md:p-8 md:px-24 w-full">
      <div className="flex items-center gap-4">
        <div className="text-3xl md:text-4xl font-extrabold tracking-tighter text-accentLight dark:text-accentDark">
          OL
        </div>
        <div className="flex flex-col text-sm text-accentLight dark:text-accentDark opacity-90 border-l-2 border-accentLight/20 dark:border-accentDark/20 pl-4">
          <span className="font-semibold tracking-wide">Owhie S. Lumbang</span>
          <span className="font-light text-xs">Full Stack Developer</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm uppercase tracking-wider text-accentLight/70 dark:text-accentDark/70 hover:text-accentLight dark:hover:text-accentDark font-semibold transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
