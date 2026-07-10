/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "../constants";

const ShowcaseCard = ({ project, reversed }) => {
  const {
    title,
    tagline,
    description,
    highlights,
    stack,
    metrics,
    mockUrl,
    mockWidgets,
  } = project;

  const copy = (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: reversed ? 40 : -40 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-1/2"
    >
      <h3 className="font-display text-3xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-signal-cyan text-sm font-mono">{tagline}</p>
      <p className="mt-5 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs font-mono text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 max-w-xs">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="font-display text-xl font-semibold text-white">
              {m.value}
            </p>
            <p className="text-[11px] text-neutral-500 mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const preview = (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: reversed ? -40 : 40 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-[calc(50%-2.5rem)]"
    >
      {/* Mocked dashboard preview — no real screenshot, so we build the
          impression with the same terminal/receipt vocabulary as the hero */}
      <div className="rounded-2xl border border-white/[0.06] bg-black/30 overflow-hidden mb-6">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-red-500/40" />
          <span className="h-2 w-2 rounded-full bg-amber-400/40" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/40" />
          <span className="ml-3 font-mono text-[10px] text-neutral-600">
            {mockUrl}
          </span>
        </div>
        <div className="p-4 grid grid-cols-3 gap-2">
          {mockWidgets.map((label, i) => (
            <motion.div
              key={label}
              initial={{ scaleY: 0.4, opacity: 0.4 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ transformOrigin: "bottom" }}
              className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-3 h-24 flex flex-col justify-between"
            >
              <span className="font-mono text-[10px] text-neutral-500">
                {label}
              </span>
              <span className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-signal-cyan/60 to-signal-violet/60" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="flex gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5"
          >
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal-cyan" />
            <div>
              <p className="text-sm font-medium text-white">{h.label}</p>
              <p className="mt-0.5 text-xs text-neutral-500 leading-relaxed">
                {h.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 shadow-glow max-w-6xl mx-auto">
      <div
        className={`flex flex-wrap gap-10 ${reversed ? "lg:flex-row-reverse" : ""}`}
      >
        {copy}
        {preview}
      </div>
    </div>
  );
};

const FeaturedProject = () => {
  return (
    <div id="work" className="border-b border-white/[0.06] py-24 scroll-mt-24">
      <div className="text-center mb-14">
        <span className="eyebrow">Client delivery</span>
        <h2 className="section-heading mt-3">
          Featured <span className="text-neutral-500">Work</span>
        </h2>
      </div>

      <div className="space-y-8">
        {FEATURED_PROJECTS.map((project, index) => (
          <ShowcaseCard
            key={project.title}
            project={project}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProject;
