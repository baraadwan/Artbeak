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
      <head />
      <body
        className={`${interFont.variable} ${playfairDisplay.variable} antialiased font-inter`}
      >
        <LenisWrapper>{children}</LenisWrapper>

        {/* Microsoft Clarity */}
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t6nesxgcgt");`,
          }}
        />

        {/* PostHog */}
        <Script
          id="posthog"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_
