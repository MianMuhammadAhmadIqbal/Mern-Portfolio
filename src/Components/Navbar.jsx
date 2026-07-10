import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.jpg";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/muhammad-ahmad-iqbal-88966431b",
    icon: FaLinkedin,
    label: "LinkedIn",
    hover: "hover:text-[#0A66C2]",
  },
  {
    href: "https://github.com/MianMuhammadAhmadIqbal",
    icon: FaGithub,
    label: "GitHub",
    hover: "hover:text-white",
  },
  {
    href: "https://wa.me/923149671114",
    icon: FaWhatsapp,
    label: "WhatsApp",
    hover: "hover:text-[#25D366]",
  },
  {
    href: "mailto:ahmad70iqbal@gmail.com",
    icon: MdEmail,
    label: "Email",
    hover: "hover:text-signal-cyan",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      // hide on scroll down past the hero, reveal on scroll up
      if (currentY > lastY && currentY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between py-3 px-6 lg:px-8 border-b transition-colors duration-300 ${
          scrolled
            ? "bg-ink-950/70 backdrop-blur-xl border-white/[0.06]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center gap-2 group">
            <img
              className="w-9 h-9 rounded-lg object-cover ring-1 ring-white/10 group-hover:ring-signal-cyan/50 transition-all"
              src={logo}
              alt="Ahmad Iqbal logo"
            />
            <span className="hidden sm:block font-mono text-xs tracking-widest text-neutral-400 group-hover:text-white transition-colors">
              A.IQBAL
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-neutral-400">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-full transition-colors ${
                  activeSection === link.href
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-5 text-lg text-neutral-500">
          {SOCIALS.map(({ href, icon: Icon, label, hover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`transition-colors ${hover}`}
            >
              <Icon />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden flex items-center text-2xl cursor-pointer text-neutral-300 hover:text-white z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <FiMenu />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-ink-950/95 border-l border-white/[0.06] backdrop-blur-xl z-40 p-8 pt-24 flex flex-col gap-6 text-xl font-medium text-neutral-300"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/[0.06] my-2" />
            <div className="flex gap-6 text-2xl">
              {SOCIALS.map(({ href, icon: Icon, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={toggleMenu}
                  className={`transition-colors ${hover}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
