import { motion } from "framer-motion";

const Loader = () => {
  // Common animation variants to keep the JSX clean
  const textAnimation = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      // Increase z-index even more just in case other fixed layout layers exist
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-neutral-950 text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      {/* 🌌 Atmospheric Glow Layer Background */}
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
        {/* Soft violet glow orb top-right */}
        <div className="absolute top-[-10%] right-[-15%] h-[400px] w-[400px] rounded-full bg-violet-900/15 blur-[120px]" />

        {/* Soft cyan glow orb bottom-left */}
        <div className="absolute bottom-[-10%] left-[-15%] h-[400px] w-[400px] rounded-full bg-cyan-900/10 blur-[130px]" />
      </div>

      {/* 🛠️ Content Layout Container */}
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        {/* Animated Stack Header: More appealing than initials */}
        <motion.div
          variants={textAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-1 items-center"
        >
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white/90">
            Ahmad Iqbal
          </h1>
          <span className="text-xl sm:text-2xl font-light tracking-wide bg-gradient-to-r from-cyan-300 via-slate-400 to-violet-400 bg-clip-text text-transparent">
            FULL STACK MERN DEVELOPER
          </span>
        </motion.div>

        {/* 🚀 New, Attractive "Glitch" Style Progress Indicator */}
        <motion.div
          className="relative h-1 w-40 overflow-hidden rounded bg-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Background Glow layer inside bar */}
          <div className="absolute inset-0 bg-cyan-600/30 blur-[4px]"></div>

          {/* Moving Progress Bar */}
          <motion.div
            className="relative h-full rounded bg-gradient-to-r from-cyan-300 via-cyan-500 to-violet-600"
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 2.0, ease: [0.76, 0, 0.24, 1], repeat: 0 }}
          />
        </motion.div>

        {/* Dynamic Status Text with subtle pulse */}
        <motion.p
          className="text-xs font-mono tracking-widest text-cyan-400 opacity-90 animate-pulse mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Connecting to the stack...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
