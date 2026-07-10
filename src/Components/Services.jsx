import { motion } from "framer-motion";
import { SERVICES } from "../constants";

const Services = () => {
  return (
    <div className="border-b border-white/[0.06] py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <span className="eyebrow">What I do</span>
        <h2 className="section-heading mt-3">
          Services <span className="text-neutral-500">& Focus</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="glow-border rounded-2xl bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors duration-300"
          >
            <span className="font-mono text-xs text-signal-cyan/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
