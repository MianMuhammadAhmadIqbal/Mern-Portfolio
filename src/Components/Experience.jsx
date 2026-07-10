import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-white/[0.06] py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <span className="eyebrow">Where I&apos;ve worked</span>
        <h2 className="section-heading mt-3">Experience</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={`${experience.role}-${experience.company}`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glow-border rounded-2xl bg-white/[0.02] p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="text-sm text-signal-cyan mt-0.5">
                  {experience.company}
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-500 rounded-full border border-white/[0.08] px-3 py-1">
                {experience.year}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {experience.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-1 text-xs font-mono text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
