import { motion } from "framer-motion";
import {
  Megaphone,
  Share2,
  Palette,
  Code2,
  Search,
  Video,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "../ScrollReveal";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "End-to-end campaigns that connect your brand with the right audience at the right moment — across every digital channel.",
    tags: ["PPC", "Email", "Strategy"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Scroll-stopping content and community management that builds loyal audiences and drives meaningful engagement.",
    tags: ["Content", "Ads", "Community"],
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description:
      "Visual identities that tell your story with clarity and confidence — from logos to full brand systems.",
    tags: ["Identity", "Print", "Digital"],
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Fast, beautiful, conversion-focused websites built with modern tech and meticulous attention to UX.",
    tags: ["UI/UX", "React", "CMS"],
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical and content SEO strategies that climb rankings, capture intent, and deliver sustainable organic growth.",
    tags: ["On-page", "Technical", "Content"],
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Cinematic brand films, social reels, and commercial content that captivate and convert on every screen.",
    tags: ["Film", "Reels", "Motion"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-pad relative overflow-hidden bg-zorx-dark"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zorx-green/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl sm:mb-20">
          <ScrollReveal>
            <span className="mb-4 inline-block text-sm font-semibold tracking-[0.2em] text-zorx-green uppercase">
              Our Services
            </span>
          </ScrollReveal>

          <TextReveal
            text="Everything your brand needs to grow online."
            className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl"
            as="h2"
          />

          <ScrollReveal delay={0.25}>
            <p className="mt-5 text-base text-white/50 sm:text-lg">
              Six core disciplines. One integrated team. Unlimited ambition for
              your brand.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="border-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/6 bg-zorx-card p-6 sm:p-8"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-zorx-green/0 blur-3xl transition-all duration-500 group-hover:bg-zorx-green/20" />

      <div className="mb-6 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zorx-green/20 bg-zorx-green/10 text-zorx-green transition-all duration-300 group-hover:bg-zorx-green group-hover:text-white group-hover:shadow-lg group-hover:shadow-zorx-green/30">
          <Icon size={22} strokeWidth={1.75} />
        </div>

        <span className="font-display text-4xl font-bold text-white/5 transition-colors group-hover:text-zorx-green/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mb-3 font-display text-xl font-semibold text-white transition-colors group-hover:text-zorx-green">
        {service.title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-white/45">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-[11px] font-medium tracking-wide text-white/40 uppercase transition-colors group-hover:border-zorx-green/30 group-hover:text-zorx-green/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

