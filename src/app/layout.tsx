import type { Metadata } from "next";
import "./globals.css";
import LenisWrapper from "@/components/wrapper/LenisWrapper";
import localFont from "next/font/local";
import RB2BLoader from "@/components/RB2BLoader";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ExitIntentPopup from "@/components/ExitIntentPopup";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("artbeak-theme");document.documentElement.classList.toggle("dark",t!=="light");})();`,
          }}
        />
      </head>
      <body
        className={`${interFont.variable} ${playfairDisplay.variable} antialiased font-inter`}
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
