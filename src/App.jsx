import { useCallback, useState } from "react";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { WhyZorx } from "./components/sections/WhyZorx";
import { Portfolio } from "./components/sections/Portfolio";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}

      <div
        className={`relative min-h-screen bg-zorx-black transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <WhyZorx />
          <Portfolio />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
