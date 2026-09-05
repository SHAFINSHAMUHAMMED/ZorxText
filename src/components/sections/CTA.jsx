import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, TextReveal } from "../ScrollReveal";

export function CTA() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto max-w-7xl px-5 sm:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl border border-zorx-green/20 bg-gradient-to-br from-zorx-green/20 via-zorx-card to-zorx-black p-10 sm:p-16 md:p-20">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-zorx-green/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-zorx-green/15 blur-[80px]" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-zorx-green/40 bg-zorx-green/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-zorx-green uppercase">
                Ready to scale?
              </span>
            </ScrollReveal>

            <TextReveal
              text="Let's Grow Your Brand"
              className="justify-center font-display text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
              as="h2"
            />

            <ScrollReveal delay={0.25}>
              <p className="mx-auto mt-6 max-w-xl text-base text-white/55 sm:text-lg">
                Whether you're launching, rebranding, or ready to dominate your market — ZORX is
                your growth partner in Dubai and beyond.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="btn-shine group inline-flex items-center gap-2 rounded-full bg-zorx-green px-8 py-4 text-base font-semibold text-white shadow-xl shadow-zorx-green/25 transition-all hover:bg-zorx-green-dark hover:shadow-zorx-green/40"
                >
                  Start a Project
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <a
                  href="mailto:hello@zorx.ae"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-medium text-white transition-all hover:border-white/30 hover:bg-white/5"
                >
                  hello@zorx.ae
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
