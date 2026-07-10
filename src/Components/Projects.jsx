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

const Projects = () => {
  return (
    <div id="projects" className="border-b border-white/[0.06] py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <span className="eyebrow">Selected work</span>
        <h2 className="section-heading mt-3">
          Technical <span className="text-neutral-500">Projects</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
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

              <div className="mt-5 flex items-center gap-6 text-sm font-medium">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-signal-cyan transition-colors"
                >
                  Live Demo <ArrowUpRight />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Source <GithubIcon />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
