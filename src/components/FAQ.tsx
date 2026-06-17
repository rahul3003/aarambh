"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  type MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/content";

type FAQProps = {
  scrollProgress?: MotionValue<number>;
};

export default function FAQ({ scrollProgress }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const fallbackProgress = useMotionValue(1);
  const progress = scrollProgress ?? fallbackProgress;
  const headerOpacity = useTransform(progress, [0, 0.5, 1], [1, 0.85, 0.6]);

  return (
    <section className="bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
          style={{ opacity: headerOpacity }}
        >
          <span className="mb-4 inline-block text-xs tracking-[0.3em] text-white/40 uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Got Questions?
            <br />
            We&apos;ve Got Answers!
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`overflow-hidden rounded-[30px] bg-[#1a1a1a] transition-colors ${
                  isOpen ? "border border-white" : "border border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                >
                  <h4 className="font-[family-name:var(--font-manrope)] text-base font-light tracking-[-0.02em] text-white md:text-lg">
                    {item.question}
                  </h4>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-colors ${
                      isOpen ? "bg-[#ff6b4a]" : "bg-[#61bdff]"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className={`text-[#111111] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 font-[family-name:var(--font-manrope)] text-sm leading-[1.5] font-light tracking-[-0.02em] text-white/80 md:px-8 md:pb-8 md:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
