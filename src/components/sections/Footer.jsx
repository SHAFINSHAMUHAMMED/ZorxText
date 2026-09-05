import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { ScrollReveal } from "../ScrollReveal";

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const socials = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    href: "https://twitter.com",
  },
];

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Why ZORX", href: "#why" },
      { label: "Work", href: "#work" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Marketing", href: "#services" },
      { label: "Social Media", href: "#services" },
      { label: "Branding", href: "#services" },
      { label: "Web Development", href: "#services" },
    ],
  },
];

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-white/6 bg-zorx-black"
    >
      <div className="overflow-hidden border-b border-white/6 py-4">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-sm font-semibold tracking-[0.3em] text-white/20 uppercase"
            >
              ZORX · Fueling Brands Growth · Dubai ·
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="lg:col-span-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTop();
              }}
              className="font-display text-3xl font-bold tracking-tight text-white"
            >
              ZOR<span className="text-zorx-green">X</span>
            </a>

            <p className="mt-2 text-sm tracking-wider text-zorx-green uppercase">
              Fueling Brands Growth
            </p>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              A premium digital marketing agency based in Dubai, helping
              ambitious brands grow through strategy, creativity, and
              technology.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-zorx-green hover:bg-zorx-green hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          {footerLinks.map((col) => (
            <ScrollReveal
              key={col.title}
              className="lg:col-span-2"
              delay={0.1}
            >
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
                {col.title}
              </h4>

              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className="text-sm text-white/55 transition-colors hover:text-zorx-green"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}

          <ScrollReveal className="lg:col-span-4" delay={0.15}>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
              Contact
            </h4>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@zorx.ae"
                  className="group flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0 text-zorx-green"
                  />
                  hello@zorx.ae
                </a>
              </li>

              <li>
                <a
                  href="tel:+97140000000"
                  className="group flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0 text-zorx-green"
                  />
                  +971 4 000 0000
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-zorx-green"
                />

                <span>
                  Dubai, United Arab Emirates
                  <br />
                  Business Bay
                </span>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ZORX Digital Marketing Agency. All
            rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollTop}
            className="group flex items-center gap-2 text-xs font-medium tracking-wider text-white/40 uppercase transition-colors hover:text-zorx-green"
          >
            Back to top

            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
