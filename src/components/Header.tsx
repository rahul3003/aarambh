import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-10">
      <Link href="/" className="inline-block">
        <Image
          src="/images/logo.png"
          alt="Aarambh"
          width={159}
          height={71}
          className="h-10 w-auto md:h-14"
          priority
        />
      </Link>
    </header>
  );
}
