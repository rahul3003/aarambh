"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { APPLY_URL } from "@/data/content";

const heroImages = [
  "/images/gen-left.png",
  "/images/gen-mid.png",
  "/images/gen-right.png",
  "/images/gen-new-1.png",
  "/images/gen-new-2.png",
  "/images/gen-new-3.png",
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [cycle1, setCycle1] = useState(0);
  const [cycle2, setCycle2] = useState(0);
  const [cycle3, setCycle3] = useState(0);
  const [cycle4, setCycle4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % 6); // Cycle between 0 and 5
    }, 500); // cycle quickly (every 500ms)
    return () => clearInterval(interval);
  }, []);

  // Card 1 cycles through the three uploaded images
  const card1Images = [
    "/images/card-image-1.png",
    "/images/card-image-2.png",
    "/images/card-image-3.png",
  ];
  const card2Images = [
    "/images/card-image-4.png",
    "/images/card-image-5.png",
    "/images/card-image-6.png",
  ];
  const card3Images = [
    "/images/card-image-7.png",
    "/images/card-image-8.png",
    "/images/card-image-9.png",
  ];
  const card4Images = [heroImages[1], heroImages[4]]; // variation combo

  // Constants for lanes to create the alternating ECG wave pattern:
  // Lane UP (Cards 1 & 3): y goes from -40vh to 80vh
  // Lane DOWN (Cards 2 & 4): y goes from 20vh to 140vh
  // Horizontal path for both lanes: x goes from 25vw to -125vw (total 150vw span)

  // Card 1:
  // Starts at 25% of Lane UP (t = 0.25)
  // x: 25 - 0.25 * 150 = -12.5vw
  // y: -40 + 0.25 * 120 = -10vh
  const isCard1First = cycle1 === 0;
  const card1Animate = isCard1First
    ? { x: ["-12.5vw", "-125vw"], y: ["-10vh", "80vh"] }
    : { x: ["25vw", "-125vw"], y: ["-40vh", "80vh"] };
  const card1Transition = {
    duration: isCard1First ? 18 : 24,
    ease: "linear",
  };

  // Card 2:
  // Starts at 50% of Lane DOWN (t = 0.50)
  // x: 25 - 0.50 * 150 = -50vw
  // y: 20 + 0.50 * 120 = 80vh
  const isCard2First = cycle2 === 0;
  const card2Animate = isCard2First
    ? { x: ["-50vw", "-125vw"], y: ["80vh", "140vh"] }
    : { x: ["25vw", "-125vw"], y: ["20vh", "140vh"] };
  const card2Transition = {
    duration: isCard2First ? 12 : 24,
    ease: "linear",
  };

  // Card 3:
  // Starts at 75% of Lane UP (t = 0.75)
  // x: 25 - 0.75 * 150 = -87.5vw
  // y: -40 + 0.75 * 120 = 50vh
  const isCard3First = cycle3 === 0;
  const card3Animate = isCard3First
    ? { x: ["-87.5vw", "-125vw"], y: ["50vh", "80vh"] }
    : { x: ["25vw", "-125vw"], y: ["-40vh", "80vh"] };
  const card3Transition = {
    duration: isCard3First ? 6 : 24,
    ease: "linear",
  };

  // Card 4:
  // Starts at 0% of Lane DOWN on load
  // x: 25vw
  // y: 20vh
  const card4Animate = {
    x: ["25vw", "-125vw"],
    y: ["20vh", "140vh"],
  };
  const card4Transition = {
    duration: 24,
    ease: "linear",
  };

  return (
    <section className="relative flex h-full min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Card 1 - Rotated -16deg (Starts at 25% on load) */}
        <motion.div
          key={`card1-${cycle1}`}
          className="absolute top-0 right-0 z-10"
          initial={isCard1First ? { x: "-12.5vw", y: "-10vh" } : { x: "25vw", y: "-40vh" }}
          animate={card1Animate}
          transition={card1Transition}
          onAnimationComplete={() => {
            setCycle1((prev) => prev + 1);
          }}
        >
          <div className="relative rotate-[-16deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 w-[240px] h-[168px] md:w-[340px] md:h-[238px] lg:w-[390px] lg:h-[273px]">
            {card1Images.map((src, idx) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-75 ${
                  idx === (currentIdx % card1Images.length) ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 390px"
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 2 - Rotated -16deg (Starts at 50% on load) */}
        <motion.div
          key={`card2-${cycle2}`}
          className="absolute top-0 right-0 z-10"
          initial={isCard2First ? { x: "-50vw", y: "80vh" } : { x: "25vw", y: "20vh" }}
          animate={card2Animate}
          transition={card2Transition}
          onAnimationComplete={() => {
            setCycle2((prev) => prev + 1);
          }}
        >
          <div className="relative rotate-[-16deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 w-[240px] h-[168px] md:w-[340px] md:h-[238px] lg:w-[390px] lg:h-[273px]">
            {card2Images.map((src, idx) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-75 ${
                  idx === (currentIdx % card2Images.length) ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 390px"
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3 - Rotated -16deg (Starts at 75% on load) */}
        <motion.div
          key={`card3-${cycle3}`}
          className="absolute top-0 right-0 z-10"
          initial={isCard3First ? { x: "-87.5vw", y: "50vh" } : { x: "25vw", y: "-40vh" }}
          animate={card3Animate}
          transition={card3Transition}
          onAnimationComplete={() => {
            setCycle3((prev) => prev + 1);
          }}
        >
          <div className="relative rotate-[-16deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 w-[240px] h-[168px] md:w-[340px] md:h-[238px] lg:w-[390px] lg:h-[273px]">
            {card3Images.map((src, idx) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-75 ${
                  idx === (currentIdx % card3Images.length) ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 390px"
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4 - Rotated -16deg (Starts at 0% on load) */}
        <motion.div
          key={`card4-${cycle4}`}
          className="absolute top-0 right-0 z-10"
          initial={{ x: "25vw", y: "20vh" }}
          animate={card4Animate}
          transition={card4Transition}
          onAnimationComplete={() => {
            setCycle4((prev) => prev + 1);
          }}
        >
          <div className="relative rotate-[-16deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 w-[240px] h-[168px] md:w-[340px] md:h-[238px] lg:w-[390px] lg:h-[273px]">
            {card4Images.map((src, idx) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-75 ${
                  idx === (currentIdx % card4Images.length) ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 390px"
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 flex max-w-5xl flex-col items-center text-center">
        <p className="mb-6 text-s tracking-[0.35em] text-[#999999] uppercase">
          SINCE — 2021
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 font-[family-name:var(--font-manrope)] text-9xl leading-[1.05] font-light tracking-tight text-white mix-blend-normal sm:text-7xl md:text-9xl lg:text-[7.5rem]"
        >
          <span className="relative z-20">From deep-tech</span>
          <br />
          <span className="relative z-20">to Real Markets</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#5b45e0] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#4a38c9] md:text-base"
          >
            Apply Now
            <FiArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <p className="mt-6 max-w-md text-sm text-white">
          Facing issues? Write to us at{" "}
          <a
            href="mailto:analyst@cocreate.ventures"
            className="text-white underline-offset-2 transition hover:text-white hover:underline"
          >
            analyst@cocreate.ventures
          </a>
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-10">
        <div className="scroll-indicator-track" aria-hidden="true">
          <div className="scroll-indicator-bar" />
        </div>
        <span className="text-[10px] tracking-[0.3em] text-[#999999] uppercase">
          SCROLL
        </span>
      </div>
    </section>
  );
}
