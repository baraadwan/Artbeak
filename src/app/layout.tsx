import type { Metadata } from "next";
import "./globals.css";
import LenisWrapper from "@/components/wrapper/LenisWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import RB2BLoader from "@/components/RB2BLoader";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = localFont({
  src: "../assets/fonts/PlayfairDisplay-Italic-VariableFont.ttf",
  variable: "--font-playfair-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://artbeak.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Artbeak | Risk-Free Website Redesign & Conversion Optimization",
    template: "%s | Artbeak",
  },
  description:
    "Free website redesign — pay only if you love it. We redesign your site at no upfront cost. Webflow builds, ongoing maintenance, and A/B testing for higher conversions. Brooklyn-based award-winning agency.",
  keywords: [
    "website redesign",
    "risk-free redesign",
    "Webflow development",
    "conversion rate optimization",
    "CRO",
    "A/B testing",
    "website maintenance",
    "Brooklyn web agency",
    "Artbeak",
  ],
  authors: [{ name: "Artbeak LLC", url: siteUrl }],
  creator: "Artbeak LLC",
  publisher: "Artbeak LLC",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Artbeak",
    title: "Artbeak | Risk-Free Website Redesign & Conversion Optimization",
    description:
      "Free website redesign — pay only if you love it. Webflow, maintenance, and CRO. No upfront cost. Brooklyn-based award-winning agency.",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Artbeak — Risk-free website redesign and conversion optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artbeak | Risk-Free Website Redesign & Conversion Optimization",
    description:
      "Free website redesign — pay only if you love it. Webflow, maintenance, CRO. No upfront cost.",
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("artbeak-theme");document.documentElement.classList.toggle("dark",t!=="light");})();`,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} antialiased font-inter`}
      >
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("[analytics] Loading Microsoft Clarity");
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t6nesxgcgt");`,
          }}
        />

        {/* RB2B loader (client-side, on every route) */}
        <RB2BLoader />

        <ThemeProvider>
          <LenisWrapper>{children}</LenisWrapper>
          <ExitIntentPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
