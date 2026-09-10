import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const ArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-3.5 h-3.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-3.5 h-3.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    />
  </svg>
);

// Animated mock-browser fallback for projects without a screenshot.
// Uses mockUrl (address bar text) and mockWidgets (floating pill labels)
// over a slowly shifting gradient, so the card never looks empty or broken.
const AnimatedMock = ({ mockUrl, mockWidgets = [] }) => (
  <div className="relative w-full h-full bg-ink-900 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(120deg, rgba(34,211,238,0.15), rgba(168,85,247,0.12), rgba(34,211,238,0.15))",
        backgroundSize: "200% 200%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />

    <div className="absolute inset-0 flex flex-col p-4">
      {mockUrl && (
        <div className="flex items-center gap-1.5 rounded-md bg-ink-950/70 backdrop-blur border border-white/10 px-3 py-1.5 w-fit">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <span className="w-2 h-2 rounded-full bg-green-400/60" />
          <span className="ml-2 text-[10px] font-mono text-neutral-400">
            {mockUrl}
          </span>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center gap-3 flex-wrap px-4">
        {mockWidgets.map((widget, i) => (
          <motion.span
            key={widget}
            className="rounded-lg bg-ink-950/60 backdrop-blur border border-white/10 px-4 py-2 text-xs font-mono text-signal-cyan/90"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            {widget}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const gridClass =
    PROJECTS.length > 1
      ? "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
      : "grid gap-6 max-w-md mx-auto";

  return (
    <div
      id="projects"
      className="border-b border-white/[0.06] py-24 scroll-mt-24"
    >
      <div className="text-center mb-16">
        <span className="eyebrow">Selected work</span>
        <h2 className="section-heading mt-3">
          Projects <span className="text-neutral-500">I've Built</span>
        </h2>
      </div>

      <div className={gridClass}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            className="group glow-border rounded-2xl bg-white/[0.02] overflow-hidden hover:bg-white/[0.03] transition-colors duration-300"
          >
            <div className="relative overflow-hidden aspect-video bg-ink-900">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <AnimatedMock
                  mockUrl={project.mockUrl}
                  mockWidgets={project.mockWidgets}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ink-950/80 backdrop-blur border border-white/10 px-2.5 py-1 text-[10px] font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-1 text-xs font-mono text-signal-cyan/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-6 text-sm font-medium"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
