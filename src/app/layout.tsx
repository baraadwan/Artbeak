import type { Metadata } from "next";
import "./globals.css";
import LenisWrapper from "@/components/wrapper/LenisWrapper";
import localFont from "next/font/local";

const interFont = localFont({
  src: "../assets/fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
});

const playfairDisplay = localFont({
  src: "../assets/fonts/PlayfairDisplay-Italic-VariableFont.ttf",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Artbeak | Creative Agency",
  description:
    "Performance-based, risk-free website redesign agency turning normal websites into conversion machines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${playfairDisplay.variable} antialiased font-inter`}
      >
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}
