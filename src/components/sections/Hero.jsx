import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img
          src="https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Dubai skyline at night"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-zorx-black/70 via-zorx-black/80 to-zorx-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-zorx-black/60 via-transparent to-zorx-black/40" />
      </motion.div>

      <div className="bg-grid absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-zorx-green/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-zorx-green/10 blur-[100px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zorx-green/30 bg-zorx-green/10 px-4 py-1.5 text-xs font-medium tracking-wider text-zorx-green uppercase sm:text-sm"
          >
            <MapPin size={14} />
            Digital Marketing Agency · Dubai
          </motion.div>

          <div className="mb-6 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-5xl leading-[0.95] font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Fueling
            </motion.h1>
          </div>

          <div className="mb-6 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-gradient-green">Brands</span>
              <span className="text-white"> Growth</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mb-10 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg md:text-xl"
          >
            ZORX is a Dubai-based digital marketing powerhouse crafting bold
            strategies, unforgettable brands, and measurable results that move
            markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-zorx-green px-8 py-4 text-base font-semibold text-white transition-all hover:bg-zorx-green-dark hover:shadow-xl hover:shadow-zorx-green/30"
            >
              Let's Work Together

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("#work")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-medium text-white transition-all hover:border-zorx-green/50 hover:bg-white/5"
            >
              View Our Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8 sm:gap-12"
          >
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "80+", label: "Happy Clients" },
              { value: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>

                <div className="mt-1 text-xs tracking-wider text-white/40 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-zorx-green"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}