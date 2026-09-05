import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center"
            >
              <svg
                viewBox="0 0 320 80"
                className="h-12 w-auto sm:h-16"
                fill="none"
                aria-label="ZORX"
              >
                <motion.text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-display text-[64px] font-bold tracking-tight"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ZORX
                </motion.text>
              </svg>

              <motion.p
                className="mt-2 text-xs font-medium tracking-[0.35em] text-zorx-green uppercase sm:text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Fueling Brands Growth
              </motion.p>
            </motion.div>
          </div>

          <div className="w-48 sm:w-64">
            <div className="mb-3 flex items-center justify-between text-xs tracking-widest text-white/50">
              <span>LOADING</span>
              <span className="tabular-nums text-zorx-green">
                {progress}%
              </span>
            </div>

            <div className="h-[2px] w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full origin-left bg-zorx-green"
                style={{ scaleX: progress / 100 }}
              />
            </div>
          </div>

          {/* Decorative corners */}
          <div className="pointer-events-none absolute inset-6 border border-white/5 sm:inset-10" />

          <div className="pointer-events-none absolute top-6 left-6 h-4 w-4 border-t border-l border-zorx-green sm:top-10 sm:left-10" />

          <div className="pointer-events-none absolute top-6 right-6 h-4 w-4 border-t border-r border-zorx-green sm:top-10 sm:right-10" />

          <div className="pointer-events-none absolute bottom-6 left-6 h-4 w-4 border-b border-l border-zorx-green sm:bottom-10 sm:left-10" />

          <div className="pointer-events-none absolute right-6 bottom-6 h-4 w-4 border-r border-b border-zorx-green sm:right-10 sm:bottom-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
