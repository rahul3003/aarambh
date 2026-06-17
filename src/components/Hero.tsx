"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { APPLY_URL } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex h-full min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-[18%] left-[2%] z-10 md:left-[6%]"
          style={{ "--rotate": "-12deg" } as React.CSSProperties}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rotate-[-12deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
            <Image
              src="/images/hero-left.png"
              alt=""
              width={370}
              height={258}
              className="h-auto w-[220px] md:w-[320px] lg:w-[370px]"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[8%] right-[2%] z-10 md:right-[8%]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="rotate-[12deg] overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
            <Image
              src="/images/hero-right.png"
              alt=""
              width={305}
              height={195}
              className="h-auto w-[180px] md:w-[260px] lg:w-[305px]"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 flex max-w-5xl flex-col items-center text-center">
        <p className="mb-6 text-xs tracking-[0.35em] text-[#999999] uppercase">
          SINCE — 2021
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 font-[family-name:var(--font-unbounded)] text-4xl leading-[1.05] font-medium tracking-tight text-white mix-blend-normal sm:text-5xl md:text-6xl lg:text-8xl"
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
            className="inline-flex items-center gap-3 rounded-full bg-[#5b45e0] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#4a38c9] md:text-base"
          >
            Apply Now
            <Image src="/images/arrow.svg" alt="" width={20} height={20} />
          </Link>
        </motion.div>

        <p className="mt-6 max-w-md text-sm text-[#999999]">
          Facing issues? Write to us at{" "}
          <a
            href="mailto:analyst@cocreate.ventures"
            className="text-white/70 underline-offset-2 transition hover:text-white hover:underline"
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
