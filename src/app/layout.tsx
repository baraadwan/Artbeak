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

        {/* PostHog main script */}
        <Script
          src="https://us.i.posthog.com/static/array.js"
          strategy="afterInteractive"
        />

        {/* PostHog init */}
        <Script
          id="posthog-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.posthog && posthog.init('phc_yzaLA9RsDwVzWB2m6KHplkQCoC3F3Onxt1bDpni42j', {
                api_host: 'https://us.i.posthog.com',
                person_profiles: 'identified_only',
                capture_pageview: true,
                capture_pageleave: true
              });
              posthog.identify('uxb_v6g5541rw');
              posthog.people.set({
                uxb_tracking_code: 'uxb_v6g5541rw',
                account_type: 'uxbreak_user'
              });
              posthog.capture('uxbreak_tracking_initialized');
            `,
          }}
        />

        {/* Keak script */}
        <Script
          id="keak-script"
          src="https://zzontar2hsjaawcn.public.blob.vercel-storage.com/scripts/domain-1072-httpartbeak.com.js"
          data-domain="1072"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
