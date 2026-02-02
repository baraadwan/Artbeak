import type { Metadata } from "next";
import "./globals.css";
import LenisWrapper from "@/components/wrapper/LenisWrapper";
import localFont from "next/font/local";
import Script from "next/script";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t6nesxgcgt");`,
          }}
        />

        {/* ✅ Reb2b script */}
        <Script
          id="reb2b-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(key) {
              if (window.reb2b) return;
              window.reb2b = {loaded: true};
              var s = document.createElement("script");
              s.async = true;
              s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
              document.getElementsByTagName("script")[0].parentNode.insertBefore(
                s,
                document.getElementsByTagName("script")[0]
              );
            }("QOQRJH905462");`,
          }}
        />
        
        {/* Stellar preconnect */}
        <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
        <link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" />
      </head>

      <body
        className={`${interFont.variable} ${playfairDisplay.variable} antialiased font-inter`}
      >
        <LenisWrapper>{children}</LenisWrapper>

        {/* Stellar client script */}
        <Script
          id="stellar-script"
          src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=49810e4de6a3e7cb99cdab6812e052b7:560902eadc2f3fc8bc43755e40c2348f156258326a6818a53596a7df053d97bb"
          strategy="afterInteractive"
        />

        {/* Page hide script */}
        <Script
          id="page-hide"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(){
              var e="body {opacity: 0 !important;}",
                  t=document.createElement("style");
              t.type="text/css";
              t.id="page-hide-style";
              t.styleSheet ? t.styleSheet.cssText=e : t.appendChild(document.createTextNode(e));
              document.head.appendChild(t);
              window.rmo=function(){
                var e=document.getElementById("page-hide-style");
                e && (e.parentNode.removeChild(e), document.body.style.opacity="");
              };
              setTimeout(window.rmo, 3000);
            }();`,
          }}
        />
      </body>
    </html>
  );
}
