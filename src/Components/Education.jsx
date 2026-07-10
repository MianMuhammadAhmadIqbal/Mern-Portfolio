import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="border-b border-white/[0.06] py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <span className="eyebrow">Academics</span>
        <h2 className="section-heading mt-3">Education</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {EDUCATION.map((edu) => (
          <motion.div
            key={edu.degree}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glow-border rounded-2xl bg-white/[0.02] p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-white">
                {edu.degree}
              </h3>
              <span className="font-mono text-xs text-neutral-500 rounded-full border border-white/[0.08] px-3 py-1">
                {edu.duration}
              </span>
            </div>
            <p className="text-signal-cyan text-sm font-medium mt-1">
              {edu.institution}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {edu.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-1 text-xs font-mono text-neutral-400"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
