import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CODE_LINES = [
  { text: "const developer = {", indent: 0 },
  { text: "name:", indent: 1, value: "'Muhammad Ahmad Iqbal'," },
  { text: "role:", indent: 1, value: "'Full Stack MERN Developer'," },
  { text: "status:", indent: 1, value: "'available',", tag: true },
  { text: "};", indent: 0 },
];

const AnimatedLaptop = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setVisibleCount(CODE_LINES.length);
      return;
    }

    let i = 0;
    let timeoutId;
    const step = () => {
      i += 1;
      setVisibleCount(i);
      if (i <= CODE_LINES.length) {
        timeoutId = setTimeout(step, 480);
      } else {
        timeoutId = setTimeout(() => {
          i = 0;
          setVisibleCount(0);
          timeoutId = setTimeout(step, 480);
        }, 2600);
      }
    };
    timeoutId = setTimeout(step, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full"
      style={{ perspective: "1000px" }}
    >
      {/* ambient glow behind the laptop */}
      <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-signal-cyan/15 to-signal-violet/15 blur-2xl" />

      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
        {/* Screen */}
        <div className="glass-panel relative rounded-t-2xl rounded-b-md border-b-0 p-3 shadow-glow">
          {/* camera notch */}
          <div className="mb-2 flex justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          </div>

          <div className="rounded-lg border border-white/[0.06] bg-black/50 p-4 aspect-[16/11]">
            <div className="flex items-center gap-1.5 pb-3 border-b border-white/[0.06] mb-3">
              <span className="h-2 w-2 rounded-full bg-red-500/40" />
              <span className="h-2 w-2 rounded-full bg-amber-400/40" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/40" />
              <span className="ml-2 font-mono text-[10px] text-neutral-500">
                about.js
              </span>
            </div>

            <div className="font-mono text-[11px] sm:text-xs leading-relaxed">
              {CODE_LINES.map((line, index) => (
                <div
                  key={line.text}
                  className="transition-opacity duration-300 whitespace-pre"
                  style={{
                    opacity: index < visibleCount ? 1 : 0,
                    paddingLeft: `${line.indent * 16}px`,
                  }}
                >
                  {line.value ? (
                    <>
                      <span className="text-signal-cyan">{line.text}</span>{" "}
                      <span
                        className={
                          line.tag ? "text-emerald-400" : "text-neutral-300"
                        }
                      >
                        {line.value}
                      </span>
                    </>
                  ) : (
                    <span className="text-neutral-300">{line.text}</span>
                  )}
                </div>
              ))}
              <span
                className="inline-block h-3 w-1.5 bg-signal-cyan animate-blink"
                style={{ opacity: visibleCount >= CODE_LINES.length ? 1 : 0 }}
              />
            </div>
          </div>
        </div>

        {/* Base / keyboard deck — wider trapezoid to sell the laptop silhouette */}
        <div
          className="mx-auto h-3 rounded-b-xl bg-gradient-to-b from-ink-800 to-ink-900 border border-white/[0.06] border-t-0"
          style={{
            width: "108%",
            marginLeft: "-4%",
            clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0 100%)",
          }}
        />
        <div className="mx-auto h-1 w-1/5 rounded-b-md bg-white/[0.05]" />
      </div>
    </motion.div>
  );
};

export default AnimatedLaptop;
