import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer-blue text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="mb-6 text-xs tracking-[0.3em] uppercase">CONTACT</p>
            <Image
              src="/images/logo.png"
              alt="Aarambh"
              width={159}
              height={71}
              className="mb-6 h-9 w-auto"
            />
            <p className="text-sm leading-relaxed">
              Ground Floor, 96,
              <br />
              BSK III
            </p>
          </div>

          <div className="space-y-3">
            <Link
              href="mailto:create@cocreate.ventures"
              className="block text-sm underline underline-offset-4"
            >
              create@cocreate.ventures
            </Link>
            <Link
              href="mailto:analyst@cocreate.ventures"
              className="block text-sm underline underline-offset-4"
            >
              analyst@cocreate.ventures
            </Link>
          </div>

          <div className="space-y-3">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm underline underline-offset-4"
            >
              instagram
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm underline underline-offset-4"
            >
              linkedin
            </Link>
          </div>
        </div>

        <p className="mt-12 text-xs text-black/70">
          © 2026 — CoCreate All Rights Reserved
        </p>
      </div>

      <div className="footer-marquee-clip relative overflow-hidden">
        {/* <div className="footer-marquee-ltr flex w-max whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="footer-marquee-text px-8 md:px-12">
              GET IN TOUCH
            </span>
          ))}
        </div> */}
      </div>
    </footer>
  );
}
