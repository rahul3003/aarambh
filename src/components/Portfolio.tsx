"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioLogos } from "@/data/content";

function LogoPill({ logo }: { logo: string }) {
  return (
    <div className="flex h-14 shrink-0 items-center justify-center rounded-full bg-white px-8 py-3 md:h-16 md:px-10">
      <Image
        src={`/images/${logo}`}
        alt="Portfolio company"
        width={140}
        height={48}
        className="h-6 w-auto max-w-[110px] object-contain md:h-8 md:max-w-[130px]"
      />
    </div>
  );
}

function LogoRow({
  logos,
  reverse = false,
  offset = false,
}: {
  logos: string[];
  reverse?: boolean;
  offset?: boolean;
}) {
  const items = [...logos, ...logos];

  return (
    <div className={`overflow-hidden ${offset ? "mt-5 md:mt-6" : ""}`}>
      <div
        className={`flex w-max gap-4 md:gap-6 ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        } ${offset ? "pl-16 md:pl-24" : ""}`}
      >
        {items.map((logo, index) => (
          <LogoPill key={`${logo}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const midpoint = Math.ceil(portfolioLogos.length / 2);
  const topRow = portfolioLogos.slice(0, midpoint);
  const bottomRow = portfolioLogos.slice(midpoint);

  return (
    <section className="overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto mb-14 max-w-5xl px-6 text-center md:mb-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] tracking-[0.25em] text-accent-blue uppercase md:text-xs">
            portfolio
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Investments we&apos;ve made
            <br className="hidden sm:block" />
            so far....
          </h2>
        </motion.div>
      </div>

      <div className="space-y-0 overflow-hidden">
        <LogoRow logos={topRow} />
        <LogoRow logos={bottomRow} reverse offset />
      </div>
    </section>
  );
}
