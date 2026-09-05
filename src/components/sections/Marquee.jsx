export function Marquee() {
  const items = [
    "Digital Marketing",
    "Social Media",
    "Branding",
    "Web Development",
    "SEO",
    "Video Production",
    "Growth Strategy",
    "Dubai Agency",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/6 bg-zorx-black py-5">
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-zorx-black to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-zorx-black to-transparent" />

      <div className="animate-marquee flex w-max items-center gap-8">
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-sm font-semibold tracking-[0.15em] text-white/40 uppercase whitespace-nowrap sm:text-base">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-zorx-green" />
          </div>
        ))}
      </div>
    </div>
  );
}
