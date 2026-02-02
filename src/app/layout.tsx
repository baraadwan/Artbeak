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
      <head />
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

        {/* Reb2b */}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("[analytics] Initializing Reb2b");
            !function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("QOQRJH905462");`,
          }}
        />

        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}
