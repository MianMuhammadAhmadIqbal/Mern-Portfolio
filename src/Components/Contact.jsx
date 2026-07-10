import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaUserCheck } from "react-icons/fa";

export const Contact = () => {
  const hireSubject = encodeURIComponent(
    "Opportunity: Full Stack MERN Developer"
  );
  const hireBody = encodeURIComponent(
    "Hi Ahmad,\n\nI came across your portfolio and would love to discuss an opportunity with you.\n\nDetails:\n- Company/Organization:\n- Role type (Full-time / Internship / Contract):\n- Remote or on-site:\n\nLooking forward to connecting!"
  );

  const cards = [
    {
      icon: FaWhatsapp,
      iconClass: "text-green-500",
      title: "WhatsApp Chat",
      subtitle: CONTACT.phoneNo,
      body: "Fastest way to reach me for quick questions.",
      cta: "Send Message",
      href: "https://wa.me/923149671114",
      ctaClass: "bg-green-600 hover:bg-green-500 text-white",
      borderHover: "hover:border-green-500/40",
    },
    {
      icon: FaGithub,
      iconClass: "text-neutral-100",
      title: "Open Source",
      subtitle: "Review my repositories",
      body: "Raw codebases, architecture choices, and full commit history.",
      cta: "Explore GitHub",
      href: "https://github.com/MianMuhammadAhmadIqbal",
      ctaClass:
        "bg-white/[0.04] hover:bg-white/[0.08] text-neutral-200 border border-white/10",
      borderHover: "hover:border-white/20",
    },
    {
      icon: FaUserCheck,
      iconClass: "text-signal-violet",
      title: "Hire Me",
      subtitle: "Open to full-time & contract work",
      body: "Available for remote or on-site MERN engineering roles.",
      cta: "Start a Conversation",
      href: `mailto:${CONTACT.email}?subject=${hireSubject}&body=${hireBody}`,
      ctaClass:
        "bg-gradient-to-r from-signal-cyan to-signal-violet text-white",
      borderHover: "hover:border-signal-violet/40",
    },
  ];

  return (
    <div id="contact" className="pb-24 pt-24 scroll-mt-12">
      <div className="text-center mb-4">
        <span className="eyebrow">Let&apos;s talk</span>
      </div>
      <h2 className="section-heading text-center">
        Get In <span className="text-neutral-500">Touch</span>
      </h2>

      <p className="text-center text-neutral-400 mt-4 mb-14 max-w-md mx-auto px-4 text-sm">
        Have a role, a project, or an idea worth building? I&apos;m currently open
        to full-time and contract MERN work.
      </p>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glow-border rounded-2xl bg-white/[0.02] p-6 flex flex-col items-center text-center justify-between transition-colors duration-300 ${card.borderHover}`}
            >
              <div className="flex flex-col items-center">
                <Icon className={`text-4xl mb-4 ${card.iconClass}`} />
                <h4 className="text-lg font-semibold text-white mb-1">
                  {card.title}
                </h4>
                <p className="text-sm text-neutral-300 mb-2">
                  {card.subtitle}
                </p>
                <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
                  {card.body}
                </p>
              </div>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full font-medium py-2.5 px-4 rounded-xl text-sm transition-all duration-200 ${card.ctaClass}`}
              >
                {card.cta}
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
