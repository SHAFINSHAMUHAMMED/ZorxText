import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "/images/logo-green2.png";
export function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();
    let raf = 0;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
        setTimeout(onComplete, 900);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-zorx-black"
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Logo */}
          <div className="relative mb-12">
            {/* Glow behind logo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-zorx-green/20 blur-3xl"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 0.8, 0.4],
                scale: [0.5, 1.15, 1],
              }}
              transition={{
                duration: 1.4,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Animated logo */}
            <motion.img
              src={logo}
              alt="ZORX"
              className="relative z-10 h-16 w-auto object-contain sm:h-20 md:h-24"
              initial={{
                opacity: 0,
                scale: 0.65,
                y: 25,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                scale: [0.65, 1.08, 1],
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>

          {/* Loading progress */}
          <motion.div
            className="w-48 sm:w-64"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-3 flex items-center justify-between text-xs tracking-widest text-white/50">
              <span>LOADING</span>

              <span className="tabular-nums text-zorx-green">
                {progress}%
              </span>
            </div>

            <div className="h-[2px] w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full origin-left bg-zorx-green"
                style={{
                  scaleX: progress / 100,
                }}
              />
            </div>
          </motion.div>

          {/* Decorative corners */}
          <div className="pointer-events-none absolute inset-6 border border-white/5 sm:inset-10" />

          <motion.div
            className="pointer-events-none absolute top-6 left-6 h-4 w-4 border-t border-l border-zorx-green sm:top-10 sm:left-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />

          <motion.div
            className="pointer-events-none absolute top-6 right-6 h-4 w-4 border-t border-r border-zorx-green sm:top-10 sm:right-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          />

          <motion.div
            className="pointer-events-none absolute bottom-6 left-6 h-4 w-4 border-b border-l border-zorx-green sm:bottom-10 sm:left-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          />

          <motion.div
            className="pointer-events-none absolute right-6 bottom-6 h-4 w-4 border-r border-b border-zorx-green sm:right-10 sm:bottom-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
