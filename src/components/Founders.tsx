"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founderCards } from "@/data/content";

type FounderCard = (typeof founderCards)[number];

function PipeLine({ items }: { items: string[] }) {
  return (
    <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-white md:text-base md:leading-7">
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && <span className="mx-2 text-white/30 md:mx-3">|</span>}
          <span className="capitalize">{item}</span>
        </span>
      ))}
    </p>
  );
}

function FeaturedCard({ card }: { card: FounderCard }) {
  return (
    <div className="rounded-[24px] bg-[#0a0a0a] px-8 py-12 text-center md:rounded-[28px] md:px-14 md:py-16">
      <h3 className="mb-8 font-[family-name:var(--font-manrope)] text-xl font-bold leading-snug text-white md:text-2xl lg:text-[28px]">
        {card.title}
      </h3>

      <div className="mx-auto max-w-2xl space-y-6">
        {"shouldNot" in card && card.shouldNot && (
          <>
            <p className="font-[family-name:var(--font-manrope)] text-sm text-white md:text-base">
              Not every deeptech company should:
            </p>
            <PipeLine items={card.shouldNot} />
            <p className="font-[family-name:var(--font-manrope)] text-sm text-white md:text-base">
              We help founders evaluate:
            </p>
            {card.evaluate && <PipeLine items={card.evaluate} />}
          </>
        )}

        {card.closing && (
          <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-white md:text-base">
            {card.closing}
          </p>
        )}
      </div>
    </div>
  );
}

function GridCard({ card }: { card: FounderCard }) {
  const isBuyersCard = card.title.includes("real buyers");

  return (
    <div className="text-left">
      <div className="mb-5 flex h-10 w-10 items-center justify-center">
        <Image src={card.icon} alt="" width={28} height={28} />
      </div>

      <h3 className="mb-5 font-[family-name:var(--font-manrope)] text-xl font-bold leading-snug text-white md:text-2xl">
        {card.title}
      </h3>

      <div className="space-y-4 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#999999] md:text-base md:leading-7">
        {card.intro && !isBuyersCard && (
          <p className="whitespace-pre-line">{card.intro}</p>
        )}

        {isBuyersCard && (
          <p>
            Deeptech companies don&apos;t sell to &quot;users&quot;.
            <br />
            They sell to{" "}
            <span className="font-semibold text-white">
              institutions, enterprises, and systems
            </span>
            .
          </p>
        )}

        {card.bulletsIntro && !card.bullets2 && (
          <p className="text-[#999999]">{card.bulletsIntro}</p>
        )}

        {card.bullets && (
          <ul className="space-y-2 pl-4">
            {card.bullets.map((item) => (
              <li key={item} className="list-disc marker:text-[#999999]">
                {item}
              </li>
            ))}
          </ul>
        )}

        {card.mid && <p>{card.mid}</p>}

        {card.bulletsIntro && card.bullets2 && (
          <p className="text-[#999999]">{card.bulletsIntro}</p>
        )}

        {card.bullets2 && (
          <ul className="space-y-2 pl-4">
            {card.bullets2.map((item) => (
              <li key={item} className="list-disc marker:text-[#999999]">
                {item}
              </li>
            ))}
          </ul>
        )}

        {card.closing && (
          <p className="whitespace-pre-line text-[#999999]">{card.closing}</p>
        )}
      </div>
    </div>
  );
}

export default function Founders() {
  const [featuredCard, ...gridCards] = founderCards;

  return (
    <section className="bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center md:mb-16"
        >
          <div className="mb-6 flex justify-center">
            <Image src="/images/icon.png" alt="" width={20} height={20} />
          </div>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            How we work with Deeptech
            <br />
            Founders
          </h2>
          <p className="mt-4 font-[family-name:var(--font-manrope)] text-base text-white/45 md:text-lg">
            Discover support like no other, here&apos;s a few aspects we
            specialise in
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl md:mb-20"
        >
          <FeaturedCard card={featuredCard} />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-20">
          {gridCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
            >
              <GridCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
