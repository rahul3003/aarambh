"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ScrollOverFooter() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ["start end", "start start"],
  });

  const faqScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const faqOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="relative">
      <section className="sticky top-0 z-0 overflow-hidden">
        <motion.div style={{ scale: faqScale, opacity: faqOpacity }}>
          <FAQ scrollProgress={scrollYProgress} />
        </motion.div>
      </section>

      <motion.div ref={overlayRef} className="relative z-20">
        <div className="overflow-hidden rounded-t-[32px] bg-footer-blue shadow-[0_-40px_100px_rgba(0,0,0,0.85)] md:rounded-t-[48px]">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
