"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { innovationItems } from "@/data/content";

export default function Innovation() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex justify-center">
            <Image src="/images/icon.png" alt="" width={20} height={20} />
          </div>
          <h2 className="font-[family-name:var(--font-unbounded)] text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            But why Innovation?
          </h2>
          <p className="mt-4 text-base text-white/50 md:text-lg">
            Why we think innovation is the future to a countries growth!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {innovationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`flex flex-col items-center px-6 py-10 text-center ${
                index % 4 !== 3 ? "lg:border-r lg:border-white/10" : ""
              } ${index < 4 ? "border-b border-white/10 sm:border-b-0" : ""} ${
                index % 2 === 0 ? "sm:border-r sm:border-white/10" : ""
              } ${index < innovationItems.length - 1 ? "border-b border-white/10 lg:border-b-0" : ""}`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <Image src={item.icon} alt="" width={24} height={24} />
              </div>
              <h3 className="mb-3 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
