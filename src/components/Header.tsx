import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full pl-4 pr-6 py-6 md:pl-6 md:pr-10 ml-60 mt-20">
      <Link href="/" className="inline-block">
        <Image
          src="/images/logo.png"
          alt="Aarambh"
          width={120}
          height={80}
          className="h-6 w-auto md:h-10"
          priority
        />
      </Link>
    </header>
  );
}
