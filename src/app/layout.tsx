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
        {/* Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t6nesxgcgt");`,
          }}
        />

        {/* PostHog */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

            posthog.init('phc_yzaLA9RsDwVzWB2m6KHplkQCoC3F3Onxt1bDpni42j', {
              api_host: 'https://us.i.posthog.com',
              person_profiles: 'identified_only',
              capture_pageview: true,
              capture_pageleave: true,
              session_recording: {
                maskAllInputs: false,
                maskInputOptions: {
                  password: true,
                  email: true,
                },
              },
            });

            posthog.identify('uxb_v6g5541rw');

            posthog.people.set({
              uxb_tracking_code: 'uxb_v6g5541rw',
              account_type: 'uxbreak_user'
            });

            posthog.capture('uxbreak_tracking_initialized', {
              tracking_code: 'uxb_v6g5541rw',
              timestamp: new Date().toISOString()
            });`,
          }}
        />

        {/* Stellar preconnect / dns-prefetch */}
        <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
        <link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" />
      </head>

      <body
        className={`${interFont.variable} ${playfairDisplay.variable} antialiased font-inter`}
      >
        <LenisWrapper>{children}</LenisWrapper>

        {/* Keak script – after hydration */}
        <Script
          id="keak-script"
          src="https://zzontar2hsjaawcn.public.blob.vercel-storage.com/scripts/domain-1072-httpartbeak.com.js"
          data-domain="1072"
          strategy="afterInteractive"
        />

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
