"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { criteriaItems } from "@/data/content";

const ACTIVE_NUMBER = "#8a8a2e";
const INACTIVE_NUMBER = "#2f2f18";

type CriteriaItemProps = {
  item: (typeof criteriaItems)[number];
  index: number;
  isLast: boolean;
  isActive: boolean;
  itemRef: (el: HTMLDivElement | null) => void;
};

function CriteriaItem({
  item,
  index,
  isLast,
  isActive,
  itemRef,
}: CriteriaItemProps) {
  return (
    <div
      ref={itemRef}
      className="flex min-h-[50vh] items-center py-6 md:py-8"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1 }}
        className="grid w-full grid-cols-[72px_1fr] gap-5 md:grid-cols-[110px_1fr] md:gap-8"
      >
        <div className="flex flex-col items-center">
          <motion.span
            className="font-[family-name:var(--font-manrope)] text-5xl leading-none font-bold transition-colors duration-500 md:text-7xl lg:text-8xl"
            animate={{ color: isActive ? ACTIVE_NUMBER : INACTIVE_NUMBER }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {item.number}
          </motion.span>

          {!isLast && (
            <div className="mt-3 flex flex-1 flex-col items-center">
              <motion.div
                className="mb-2 h-1.5 w-2 shrink-0 rounded-[2px]"
                animate={{
                  backgroundColor: isActive
                    ? "#ff6b4a"
                    : "rgba(255, 255, 255, 0.06)",
                  opacity: isActive ? 1 : 0.2,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
              <div className="min-h-16 w-px flex-1 bg-white/10 md:min-h-24" />
            </div>
          )}
        </div>

        <div className="rounded-[28px] bg-[#1e1e1e] p-8 md:rounded-[32px] md:p-10">
          <span className="mb-5 inline-block rounded-full border border-[#ff6b4a] bg-[#ff6b4a]/20 px-4 py-1.5 text-[10px] tracking-[0.18em] text-white uppercase">
            {item.tag}
          </span>
          <h3 className="mb-4 font-[family-name:var(--font-manrope)] text-2xl font-bold text-white md:text-3xl">
            {item.title}
          </h3>
          <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#b0b0b0] md:text-base md:leading-7">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Criteria() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const updateActiveStates = () => {
      const section = sectionRef.current;
      if (!section) return;

      const midline = window.innerHeight * 0.5;
      const sectionRect = section.getBoundingClientRect();

      if (sectionRect.bottom <= 0 || sectionRect.top >= window.innerHeight) {
        setActiveIndex(null);
        return;
      }

      let nextActive: number | null = null;
      let closestToMidline = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        const isInUpperHalf = itemCenterY <= midline;

        if (!isVisible || !isInUpperHalf) return;

        const distance = Math.abs(itemCenterY - midline);
        if (distance < closestToMidline) {
          closestToMidline = distance;
          nextActive = index;
        }
      });

      setActiveIndex(nextActive);
    };

    updateActiveStates();
    window.addEventListener("scroll", updateActiveStates, { passive: true });
    window.addEventListener("resize", updateActiveStates);

    return () => {
      window.removeEventListener("scroll", updateActiveStates);
      window.removeEventListener("resize", updateActiveStates);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] tracking-[0.25em] text-accent-blue uppercase md:text-xs">
            our process
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our 4 Key Criteria
          </h2>
        </motion.div>

        <div>
          {criteriaItems.map((item, index) => (
            <CriteriaItem
              key={item.number}
              item={item}
              index={index}
              isLast={index === criteriaItems.length - 1}
              isActive={activeIndex === index}
              itemRef={setItemRef(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
