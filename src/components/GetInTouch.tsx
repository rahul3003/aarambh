"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-6 bottom-6 z-50 md:right-10 md:bottom-10"
    >
      {/* <Link
        href="mailto:create@cocreate.ventures"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-xs font-medium tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 md:text-sm"
      >
        <span className="h-2 w-2 rounded-full bg-accent-lime" />
        GET IN TOUCH
      </Link> */}
    </motion.div>
  );
}
