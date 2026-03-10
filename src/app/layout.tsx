import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Wonka | Desarrollo Web",
  description:
    "Hago tiendas online, webs y apps que funcionan de verdad. Si tenés una idea, la construyo.",
  openGraph: {
    title: "Wonka | Desarrollo Web",
    description:
      "Hago tiendas online, webs y apps que funcionan de verdad. Si tenés una idea, la construyo.",
    url: "https://wonka.online",
    siteName: "Wonka",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonka | Desarrollo Web",
    description:
      "Hago tiendas online, webs y apps que funcionan de verdad. Si tenés una idea, la construyo.",
  },
  metadataBase: new URL("https://wonka.online"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
