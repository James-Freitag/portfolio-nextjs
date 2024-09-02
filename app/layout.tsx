import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import "./ui/globals.css";
import Navbar from "./components/Navbar";

const inter = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Freitag, James",
  description:
    "Portfolio for James Freitag, created by James Freitag using Nextjs and tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
