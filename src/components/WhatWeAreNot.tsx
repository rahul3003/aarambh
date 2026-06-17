"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatWeAreNot() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex justify-center">
            <Image src="/images/icon.png" alt="" width={20} height={20} />
          </div>
          <h2 className="font-[family-name:var(--font-unbounded)] text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            What we are not
          </h2>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-white/60 md:text-lg">
            <p>
              We are not generalist investors{" "}
              <span className="text-white/30">|</span> We are not trend chasers{" "}
              <span className="text-white/30">|</span> We are not passive capital
            </p>
            <p>
              If your work requires:
              <br />
              Depth <span className="text-white/30">|</span> Patience with
              Direction <span className="text-white/30">|</span> Serious
              engagement
            </p>
            <p className="text-white/80">You&apos;ll find us aligned.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
