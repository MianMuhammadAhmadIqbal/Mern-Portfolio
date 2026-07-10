import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { CONTACT } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            Muhammad Ahmad Iqbal
          </p>
          <p className="text-xs text-neutral-500 mt-1">{CONTACT.address}</p>
        </div>

        <div className="flex items-center gap-5 text-lg text-neutral-500">
          <a
            href="https://www.linkedin.com/in/muhammad-ahmad-iqbal-88966431b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MianMuhammadAhmadIqbal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        <p className="font-mono text-[11px] text-neutral-600">
          © {year} ahmad.dev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
