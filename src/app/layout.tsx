import type { Metadata } from "next";
import { Manrope, Rethink_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aarambh Fund",
  description: "A fund focused on deep tech innovation out of campus",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Aarambh Fund",
    description: "A fund focused on deep tech innovation out of campus",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${manrope.variable} ${rethinkSans.variable} ${unbounded.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
