import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "../ScrollReveal";

const projects = [
  {
    title: "Luxe Fashion Campaign",
    category: "Branding · Social",
    image:
      "https://images.pexels.com/photos/7778887/pexels-photo-7778887.jpeg?auto=compress&cs=tinysrgb&w=900",
    year: "2025",
    size: "large",
  },
  {
    title: "Marina Brand Launch",
    category: "Digital Marketing",
    image:
      "https://images.pexels.com/photos/32410197/pexels-photo-32410197.png?auto=compress&cs=tinysrgb&w=800",
    year: "2025",
    size: "normal",
  },
  {
    title: "Content Studio Series",
    category: "Video · Social",
    image:
      "https://images.pexels.com/photos/13929362/pexels-photo-13929362.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2024",
    size: "normal",
  },
  {
    title: "Identity System Redesign",
    category: "Branding · Design",
    image:
      "https://images.pexels.com/photos/7598017/pexels-photo-7598017.jpeg?auto=compress&cs=tinysrgb&w=900",
    year: "2024",
    size: "large",
  },
  {
    title: "E-Commerce Experience",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/8534457/pexels-photo-8534457.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2025",
    size: "normal",
  },
  {
    title: "Growth Strategy Hub",
    category: "SEO · Marketing",
    image:
      "https://images.pexels.com/photos/17713789/pexels-photo-17713789.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2024",
    size: "normal",
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="section-pad relative overflow-hidden bg-zorx-dark"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-zorx-green/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl">
            <ScrollReveal>
              <span className="mb-4 inline-block text-sm font-semibold tracking-[0.2em] text-zorx-green uppercase">
                Our Work
              </span>
            </ScrollReveal>

            <TextReveal
              text="Selected projects that fueled real growth."
              className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl"
              as="h2"
            />
          </div>

          <ScrollReveal delay={0.2}>
            <p className="max-w-sm text-sm text-white/45 sm:text-base">
              A glimpse into campaigns, brands, and digital experiences crafted
              for clients across the region.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {projects.map((project) => (
            <StaggerItem
              key={project.title}
              className={
                project.size === "large"
                  ? "sm:col-span-1 lg:row-span-1"
                  : ""
              }
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/6 bg-zorx-card"
    >
      <div className="img-reveal relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zorx-black via-zorx-black/20 to-transparent opacity-70 transition-opacity duration-400 group-hover:opacity-90" />

        <motion.div
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-zorx-green text-white"
          variants={{
            rest: { scale: 0, opacity: 0, rotate: -45 },
            hover: { scale: 1, opacity: 1, rotate: 0 },
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium tracking-wider text-zorx-green uppercase">
            {project.category}
          </span>

          <span className="text-xs text-white/30">
            {project.year}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-zorx-green sm:text-xl">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
}
