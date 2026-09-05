import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImageReveal, ScrollReveal, TextReveal } from "../ScrollReveal";

export function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-zorx-green/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative">
            <motion.div style={{ y: parallaxY }} className="relative">
              <ImageReveal
                src="https://images.pexels.com/photos/32082430/pexels-photo-32082430.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="ZORX creative team collaboration"
                className="aspect-[4/5] rounded-2xl sm:rounded-3xl"
              />

              {/* Floating badge */}
              <ScrollReveal
                delay={0.4}
                direction="scale"
                className="absolute -right-4 -bottom-6 rounded-2xl border border-white/10 bg-zorx-card/90 p-5 backdrop-blur-xl sm:-right-8 sm:p-6"
              >
                <div className="font-display text-3xl font-bold text-zorx-green sm:text-4xl">
                  Dubai
                </div>

                <div className="mt-1 text-xs tracking-wider text-white/50 uppercase">
                  Based & Thriving
                </div>
              </ScrollReveal>
            </motion.div>

            {/* Decorative frame */}
            <div className="pointer-events-none absolute -top-4 -left-4 h-24 w-24 rounded-tl-3xl border-t-2 border-l-2 border-zorx-green/40" />
          </div>

          {/* Content column */}
          <div>
            <ScrollReveal>
              <span className="mb-4 inline-block text-sm font-semibold tracking-[0.2em] text-zorx-green uppercase">
                About ZORX
              </span>
            </ScrollReveal>

            <TextReveal
              text="We don't just market brands — we fuel their growth."
              className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl"
              as="h2"
            />

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-white/55 sm:text-lg">
                Born in the heart of Dubai's dynamic business landscape, ZORX is a full-service
                digital marketing agency that blends creative excellence with data-driven strategy.
                We partner with ambitious brands ready to dominate their markets across the GCC and
                beyond.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
                From social storytelling to high-converting websites, SEO that ranks, and video
                that captivates — every touchpoint is engineered for impact. Our team thrives on
                bold ideas and measurable outcomes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  {
                    label: "Strategy First",
                    desc: "Every campaign starts with insight",
                  },
                  {
                    label: "Creative Edge",
                    desc: "Design that stops the scroll",
                  },
                  {
                    label: "Tech Forward",
                    desc: "Modern tools, smarter delivery",
                  },
                  {
                    label: "Results Obsessed",
                    desc: "ROI you can measure",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-2 border-zorx-green/40 pl-4 transition-colors hover:border-zorx-green"
                  >
                    <div className="text-sm font-semibold text-white sm:text-base">
                      {item.label}
                    </div>

                    <div className="mt-1 text-xs text-white/40 sm:text-sm">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}