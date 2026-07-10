import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import FeaturedProject from "./Components/FeaturedProject";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import SmoothScroll from "./Components/SmoothScroll";
import Technolgies from "./Components/Technolgies";
import Loader from "./Components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="portfolio-loader" />}
      </AnimatePresence>

      <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-ink-950">
        {/* Ambient background: dot grid + radial glow + film-grain noise */}
        <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
          <div className="absolute inset-0 bg-dot-pattern bg-dots" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,229,255,0.10),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="container mx-auto px-6 sm:px-8">
          <Navbar />
          <Hero />
          <About />
          <Technolgies />
          <FeaturedProject />
          <Services />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </div>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
