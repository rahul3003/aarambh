"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founderTraits = [
  "Are building technically non-trivial products",
  "Care about getting to the right market",
  "Want operator feedback, not slogans",
  "Prefer clarity over hype",
];

export default function Audience() {
  return (
    <section className="bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6 flex justify-center">
            <Image src="/images/icon.png" alt="" width={20} height={20} />
          </div>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            What we
            <br />
            are not
          </h2>

          <div className="mt-10 space-y-6 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#999999] md:text-base md:leading-7">
            <p>We are not generalist investors</p>
            <p>
              We are not trend chasers{" "}
              <span className="text-white/30">|</span> We are not passive
              capital
            </p>
            <p>
              If your work requires: Depth{" "}
              <span className="text-white/30">|</span> Patience with Direction{" "}
              <span className="text-white/30">|</span> Serious engagement
            </p>
            <p className="text-white">You&apos;ll find us aligned.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <div className="mb-6 flex justify-center">
            <Image src="/images/icon.png" alt="" width={20} height={20} />
          </div>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Who Aarambh
            <br />
            is for
          </h2>

          <div className="mt-10 space-y-4 font-[family-name:var(--font-manrope)] text-sm text-[#999999] md:text-base md:leading-7">
            <p>Founders who:</p>
            {founderTraits.map((trait, index) => (
              <motion.p
                key={trait}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="text-[#999999]"
              >
                {trait}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
