"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founderTraits = [
  "Are building technically non-trivial products",
  "Care about getting to the right market",
  "Want operator feedback, not slogans",
  "Prefer clarity over hype",
];

export default function WhoIsFor() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex justify-center">
            <Image src="/images/icon.png" alt="" width={20} height={20} />
          </div>
          <h2 className="font-[family-name:var(--font-unbounded)] text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            Who Aarambh is for
          </h2>

          <p className="mt-8 text-base text-white/50 md:text-lg">
            Founders who:
          </p>

          <div className="mt-6 space-y-3">
            {founderTraits.map((trait, index) => (
              <motion.p
                key={trait}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-base text-white/70 md:text-lg"
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
