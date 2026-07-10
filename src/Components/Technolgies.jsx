import { motion } from "framer-motion";
import { TECH_STACK } from "../constants";

const Technologies = () => {
  return (
    <div id="stack" className="border-b border-white/[0.06] py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <span className="eyebrow">The toolkit</span>
        <h2 className="section-heading mt-3">
          Tech <span className="text-neutral-500">Stack</span>
        </h2>
        <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">
          What I reach for to take a product from an empty repo to production.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {TECH_STACK.map((group, groupIndex) => (
          <motion.div
            key={group.group}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
            className="group glow-border rounded-2xl bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors duration-300"
          >
            <h3 className="font-display text-sm font-semibold text-white tracking-wide">
              {group.group}
            </h3>

            {/* fills on scroll into view — a quiet signal, not a skill percentage */}
            <div className="mt-3 h-px w-full bg-white/[0.06] overflow-hidden">
              <motion.div
                whileInView={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: groupIndex * 0.08 + 0.15 }}
                style={{ transformOrigin: "left" }}
                className="h-full w-full bg-gradient-to-r from-signal-cyan to-signal-violet"
              />
            </div>

            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-signal-cyan/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
