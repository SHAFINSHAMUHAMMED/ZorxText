import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Target, Cpu, Users } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "../ScrollReveal";

const reasons = [
  {
    icon: Lightbulb,
    title: "Creative Approach",
    description:
      "We challenge conventions and craft bold ideas that make your brand unforgettable in crowded markets.",
  },
  {
    icon: Target,
    title: "Results-Driven Marketing",
    description:
      "Every campaign is measured, optimized, and refined until it delivers the growth metrics that matter.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "From AI-assisted insights to cutting-edge web stacks — we leverage tools that keep you ahead.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Strategists, designers, developers, and storytellers who've scaled brands across industries and borders.",
  },
];

export function WhyZorx() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    ["0%", "100%"]
  );

  return (
    <section
      id="why"
      ref={ref}
      className="section-pad relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left sticky intro */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <span className="mb-4 inline-block text-sm font-semibold tracking-[0.2em] text-zorx-green uppercase">
                Why ZORX
              </span>
            </ScrollReveal>

            <TextReveal
              text="The difference is in how we think, build, and deliver."
              className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl"
              as="h2"
            />

            <ScrollReveal delay={0.25}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
                Agencies are everywhere. Partners who truly fuel growth are
                rare. Here's what sets ZORX apart in Dubai's competitive
                digital landscape.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-10 hidden overflow-hidden rounded-2xl lg:block">
                <img
                  src="https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dubai Marina skyline"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right reasons list */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-white/8 md:block">
              <motion.div
                className="origin-top bg-zorx-green"
                style={{ height: lineHeight, width: 2 }}
              />
            </div>

            <StaggerContainer
              className="flex flex-col gap-6"
              stagger={0.12}
            >
              {reasons.map((reason, i) => {
                const Icon = reason.icon;

                return (
                  <StaggerItem key={reason.title}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      className="group relative flex gap-5 rounded-2xl border border-white/6 bg-zorx-card/50 p-6 backdrop-blur-sm transition-colors hover:border-zorx-green/30 hover:bg-zorx-card sm:gap-6 sm:p-8"
                    >
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zorx-green/30 bg-zorx-black text-zorx-green transition-all group-hover:bg-zorx-green group-hover:text-white md:h-14 md:w-14">
                        <Icon size={22} strokeWidth={1.75} />

                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-zorx-green text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="mb-2 font-display text-xl font-semibold text-white sm:text-2xl">
                          {reason.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-white/45 sm:text-base">
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
