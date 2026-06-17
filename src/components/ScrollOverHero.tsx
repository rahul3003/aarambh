"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Innovation from "@/components/Innovation";
import Criteria from "@/components/Criteria";

type ScrollOverHeroProps = {
  children: React.ReactNode;
};

export default function ScrollOverHero({ children }: ScrollOverHeroProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ["start end", "start start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="relative">
      <section className="sticky top-0 z-0 h-screen overflow-hidden bg-[#0a0a0a]">
        <motion.div
          className="h-full w-full"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <Hero />
        </motion.div>
      </section>

      <motion.div ref={overlayRef} className="relative z-20">
        <div className="px-4 md:px-6 lg:px-10">
          <div className="overflow-hidden rounded-t-[32px] bg-black shadow-[0_-40px_100px_rgba(0,0,0,1)] md:rounded-t-[48px]">
            <Intro scrollProgress={scrollYProgress} />
          </div>
        </div>

        <Innovation />

        <Criteria />

        <div className="bg-black px-4 md:px-6 lg:px-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
