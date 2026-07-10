import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT, STATS } from "../constants";
import ParticleField from "./ParticleField";

const DEPLOY_LINES = [
  { prefix: "$", text: "git push origin main" },
  { text: "Building for production..." },
  { ok: true, text: "Compiled successfully" },
  { prefix: "$", text: "Migrating uploads → Cloudinary" },
  { ok: true, text: "128 assets migrated" },
  { text: "Deploying to render.com and vercel.com" },
  { ok: true, text: "Deployed · restopos.app" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const RequestFlowPanel = () => (
  <>
    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
      <span className="font-mono text-xs text-neutral-500">
        react → express → mongodb
      </span>
      <span className="flex items-center gap-1.5 font-mono text-[11px] text-signal-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan animate-blink" />
        LIVE
      </span>
    </div>

    <svg viewBox="0 0 440 300" className="mt-4 w-full flex-1">
      <path
        d="M40,50 L220,50 L220,120 L400,120 L400,190 L220,190 L220,260 L40,260"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle r="4" fill="#00E5FF" className="request-pulse" />

      <rect
        x="10"
        y="26"
        width="120"
        height="48"
        rx="10"
        className="flow-node"
      />
      <text x="70" y="47" textAnchor="middle" className="flow-label">
        Client
      </text>
      <text x="70" y="62" textAnchor="middle" className="flow-sub">
        React / Vite
      </text>

      <rect
        x="190"
        y="96"
        width="120"
        height="48"
        rx="10"
        className="flow-node"
      />
      <text x="250" y="117" textAnchor="middle" className="flow-label">
        API
      </text>
      <text x="250" y="132" textAnchor="middle" className="flow-sub">
        Express / JWT
      </text>

      <rect
        x="370"
        y="166"
        width="60"
        height="48"
        rx="10"
        className="flow-node"
      />
      <text
        x="400"
        y="187"
        textAnchor="middle"
        className="flow-label"
        fontSize="9"
      >
        Mongo
      </text>
      <text x="400" y="202" textAnchor="middle" className="flow-sub">
        Atlas
      </text>

      <rect
        x="10"
        y="236"
        width="120"
        height="48"
        rx="10"
        className="flow-node"
      />
      <text x="70" y="257" textAnchor="middle" className="flow-label">
        Response
      </text>
      <text x="70" y="272" textAnchor="middle" className="flow-sub">
        JSON · 24ms
      </text>
    </svg>

    <div className="mt-4 flex gap-2">
      {[
        { v: "200", l: "status" },
        { v: "24ms", l: "latency" },
        { v: "JWT", l: "auth" },
      ].map((chip) => (
        <div
          key={chip.l}
          className="flex-1 rounded-lg border border-white/[0.05] bg-white/[0.02] py-2 text-center font-mono"
        >
          <p className="text-sm text-white">{chip.v}</p>
          <p className="text-[9px] text-neutral-500 mt-0.5">{chip.l}</p>
        </div>
      ))}
    </div>

    <style>{`
      .flow-node { fill: rgba(255,255,255,0.03); stroke: rgba(255,255,255,0.12); stroke-width: 1; }
      .flow-label { font-family: "JetBrains Mono", monospace; font-size: 11px; fill: #d4d4d8; }
      .flow-sub { font-family: "JetBrains Mono", monospace; font-size: 9px; fill: #6b6b76; }
      .request-pulse {
        offset-path: path('M40,50 L220,50 L220,120 L400,120 L400,190 L220,190 L220,260 L40,260');
        animation: travel 3.2s linear infinite;
        filter: drop-shadow(0 0 6px #00E5FF);
      }
      @keyframes travel { to { offset-distance: 100%; } }
      @media (prefers-reduced-motion: reduce) {
        .request-pulse { animation: none; offset-distance: 0%; }
      }
    `}</style>
  </>
);

const DeployLogPanel = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setVisibleCount(DEPLOY_LINES.length);
      return;
    }

    let i = 0;
    let timeoutId;
    const step = () => {
      i += 1;
      setVisibleCount(i);
      if (i <= DEPLOY_LINES.length) {
        timeoutId = setTimeout(step, 550);
      } else {
        timeoutId = setTimeout(() => {
          setVisibleCount(0);
          i = 0;
          timeoutId = setTimeout(step, 550);
        }, 2200);
      }
    };
    timeoutId = setTimeout(step, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/40" />
        <span className="ml-2 font-mono text-[11px] text-neutral-500">
          ahmad@deploy
        </span>
      </div>

      <div className="mt-4 flex-1 font-mono text-xs leading-loose">
        {DEPLOY_LINES.map((line, index) => (
          <div
            key={line.text}
            className="transition-opacity duration-300"
            style={{ opacity: index < visibleCount ? 1 : 0 }}
          >
            {line.prefix && (
              <span className="text-signal-violet">{line.prefix} </span>
            )}
            {line.ok && <span className="text-emerald-400">✓ </span>}
            <span className="text-neutral-300">{line.text}</span>
          </div>
        ))}
        <span
          className="inline-block h-3 w-1.5 bg-signal-cyan animate-blink"
          style={{ opacity: visibleCount >= DEPLOY_LINES.length ? 1 : 0 }}
        />
      </div>
    </>
  );
};

const Hero = () => {
  const panelRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activePanel, setActivePanel] = useState("flow");

  const handleMouseMove = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  return (
    <div
      id="home"
      className="relative border-b border-white/[0.06] pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden"
    >
      {/* Aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[10%] h-[420px] w-[420px] rounded-full bg-signal-violet/20 blur-[130px]" />
        <div className="absolute top-[10%] right-[5%] h-[380px] w-[380px] rounded-full bg-signal-cyan/15 blur-[130px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center gap-y-12"
      >
        {/* Left: copy */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span
              variants={itemVariants}
              className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-cyan" />
              </span>
              Open to MERN roles
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]"
            >
              Hi, I&apos;m
              <br />
              Ahmad Iqbal
            </motion.h1>

            <motion.span
              variants={itemVariants}
              className="mt-4 font-mono text-lg sm:text-xl tracking-tight text-signal-cyan"
            >
              Full Stack MERN Developer
            </motion.span>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg font-light leading-relaxed text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink-950 shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                Featured Work
              </a>
              <a
                href="/Ahmad_Iqbal_Resume.pdf"
                download="Ahmad_Iqbal_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-signal-cyan/50 hover:bg-white/5 transition-all duration-300"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-signal-cyan/50 hover:bg-white/5 transition-all duration-300"
              >
                Hire Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right: signature panel, toggle between two concepts */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <div className="mb-3 flex justify-center gap-1.5">
              {[
                { key: "flow", label: "Request flow" },
                { key: "log", label: "Deploy log" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActivePanel(tab.key)}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition-colors duration-200 ${
                    activePanel === tab.key
                      ? "border-signal-cyan/50 bg-signal-cyan/10 text-signal-cyan"
                      : "border-white/10 text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-[4/5] sm:aspect-square"
              style={{ perspective: "1000px" }}
            >
              <ParticleField />

              <div
                ref={panelRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                className="relative z-10 h-full w-full"
              >
                <motion.div
                  animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="glass-panel flex h-full w-full flex-col rounded-3xl p-6 shadow-glow"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {activePanel === "flow" ? (
                    <RequestFlowPanel />
                  ) : (
                    <DeployLogPanel />
                  )}
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass-panel absolute -bottom-6 -left-6 z-20 hidden sm:block rounded-2xl px-4 py-3 shadow-glow-violet"
              >
                <p className="font-mono text-[11px] text-neutral-400">
                  MongoDB Atlas
                </p>
                <p className="text-xs text-signal-cyan">connected</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="glow-border rounded-2xl bg-white/[0.02] px-4 py-5 text-center"
          >
            <p className="font-display text-2xl sm:text-3xl font-semibold text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
