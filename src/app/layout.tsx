import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100','200','300','400','500','600','700','800','900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300','400','500','600','700'],
})


export const metadata: Metadata = {
  title: "NovaDev — Software Studio in YYC",
  description:
    "NovaDev builds modern web and mobile applications for startups and local businesses in Calgary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
