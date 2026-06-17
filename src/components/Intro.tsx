"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

type IntroProps = {
  scrollProgress: MotionValue<number>;
};

const paragraphs = [
  "We are an early-stage venture fund for founders building hard technology — and bringing it into the real economy.",
  "Aarambh invests in deeptech companies emerging from research, labs, and technically demanding problem spaces.",
  "We work with founders at the point where:",
];

const bullets = [
  "The technology works",
  "The market is not yet clear",
  "And decisions start to matter",
];

export default function Intro({ scrollProgress }: IntroProps) {
  const contentOpacity = useTransform(scrollProgress, [0, 0.4, 1], [0.35, 0.8, 1]);
  const contentY = useTransform(scrollProgress, [0, 1], [80, 0]);

  return (
    <section className="relative bg-black px-8 py-28 md:px-12 md:py-36 lg:px-16">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="space-y-8 text-lg leading-relaxed text-white font-bold md:text-2xl md:leading-[2.5rem]">
          {paragraphs.map((text, index) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="font-[family-name:var(--font-manrope)]"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-12 max-w-xl space-y-4 text-left text-lg text-white font-bold md:text-2xl"
        >
          {bullets.map((item, index) => (
            <motion.p
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              className="font-[family-name:var(--font-manrope)]"
            >
              <span className="text-accent-lime">&gt;</span> {item}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
