import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, JOURNEY } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-white/[0.06] py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <span className="eyebrow">Background</span>
        <h2 className="section-heading mt-3">
          About <span className="text-neutral-500">Me</span>
        </h2>
      </div>

      <div className="flex flex-wrap items-start gap-y-10">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5 p-4 flex justify-center lg:sticky lg:top-28"
        >
          <div className="w-full max-w-[300px]">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-signal-cyan/20 to-signal-violet/20 blur-xl" />
              <img
                className="relative rounded-2xl w-full h-auto object-cover border border-white/[0.08]"
                src={aboutImg}
                alt="Muhammad Ahmad Iqbal"
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-neutral-400 text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>

        {/* Journey timeline — real, typed sequence, so numbering earns its place */}
        <div className="w-full lg:w-3/5 lg:pl-8">
          <div className="relative border-l border-white/[0.08] pl-8 space-y-10">
            {JOURNEY.map((step, index) => (
              <motion.div
                key={step.title}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 40 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ink-950 border-2 border-signal-cyan/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
                </span>
                <p className="font-mono text-xs text-signal-cyan/80 mb-1">
                  {step.year}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400 max-w-lg">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
