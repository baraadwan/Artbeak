"use client";

import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

type Item = { label: string; detail?: string };

const stage1: Item[] = [
  {
    label: "Conversion audit",
    detail: "Review of current website performance, CTAs, and messaging",
  },
  {
    label: "SEO audit",
    detail: "Current rankings, structure, and technical setup",
  },
  {
    label: "AEO audit",
    detail:
      "Assessment of visibility in AI search tools such as ChatGPT and Google AI",
  },
  {
    label: "Baseline documentation",
    detail: "Recording current conversion rate and key metrics",
  },
  {
    label: "Analytics setup",
    detail:
      "Google Analytics, conversion tracking, heatmaps via Microsoft Clarity",
  },
  {
    label: "Wireframes",
    detail: "Page structure, layout, and conversion flow planning",
  },
];

const stage2: Item[] = [
  { label: "Website redesign", detail: "Up to 20 pages" },
  { label: "Conversion-focused UX and layout" },
  { label: "Development in Webflow" },
  { label: "Full preview before launch for review and approval" },
  {
    label: "SEO foundation setup",
    detail: "Metadata, schema markup, sitemap, heading structure",
  },
  {
    label: "Performance optimization",
    detail: "Core Web Vitals, page speed, mobile responsiveness",
  },
  { label: "Migration and launch with tracking verification" },
];

const growthGroups: { title: string; items: Item[] }[] = [
  {
    title: "Conversion Optimization (CRO)",
    items: [
      { label: "Monthly funnel and conversion review" },
      { label: "Heatmap and session recording analysis" },
      { label: "Weekly A/B testing" },
      { label: "CTA and lead form optimization" },
      { label: "Monthly CRO performance report" },
      { label: "Quarterly strategy meeting" },
    ],
  },
  {
    title: "SEO (Search Engine Optimization)",
    items: [
      { label: "Monthly keyword research" },
      { label: "2 SEO-optimized blog posts per month" },
      { label: "Internal linking updates" },
      { label: "Google Search Console monitoring" },
      { label: "Technical SEO checks and fixes" },
    ],
  },
  {
    title: "AEO (Answer Engine Optimization)",
    items: [
      {
        label: "Content structured for AI search tools",
        detail: "e.g., ChatGPT, Google AI, Perplexity",
      },
      { label: "FAQ and featured snippet optimization" },
      { label: "Structured data and schema updates" },
    ],
  },
  {
    title: "Development & Maintenance",
    items: [
      { label: "Up to 5 page requests per month", detail: "New pages or edits" },
      { label: "Bug fixes and maintenance" },
      { label: "Uptime monitoring" },
      { label: "Performance checks" },
    ],
  },
];

const deliverables: Item[] = [
  { label: "Design tasks", detail: "2–3 business days" },
  {
    label: "Development tasks",
    detail: "3–5 business days, depending on complexity",
  },
  { label: "Revisions", detail: "1–2 business days" },
  {
    label: "Monthly deliverables (reporting, blog posts)",
    detail: "Delivered by the end of each month",
  },
];

const requestProcess: Item[] = [
  { label: "Requests are submitted through the client portal" },
  { label: "Tasks are completed one at a time in priority order" },
  { label: "Clients can submit multiple requests and assign priority" },
  { label: "Feedback and revisions are handled within each task" },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.91a.75.75 0 0 1 .08 1.06l-4.5 5.25a.75.75 0 0 1-1.12.02l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.67 1.67 3.99-4.66a.75.75 0 0 1 1.07-.03Z"
      clipRule="evenodd"
    />
  </svg>
);

const ItemList = ({ items }: { items: Item[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item.label} className="flex items-start gap-3 text-sm">
        <CheckIcon />
        <div className="min-w-0">
          <span className="text-zinc-900 dark:text-white">{item.label}</span>
          {item.detail && (
            <p className="mt-0.5 text-zinc-500 dark:text-zinc-400">
              {item.detail}
            </p>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const StageCard = ({
  stage,
  tag,
  title,
  description,
  children,
}: {
  stage: string;
  tag: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/60 p-6 md:p-8">
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-[#0047ff] dark:text-[#c5f011]">
        {stage}
      </span>
      <span className="rounded-full bg-zinc-100 dark:bg-white/10 px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300">
        {tag}
      </span>
    </div>
    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
    <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
      {description}
    </p>
    <div className="mt-6">{children}</div>
  </div>
);

const Pricing = () => {
  const PRICING_CONTACT_URL =
    "https://pgraqmyxdqr.typeform.com/to/PBkWGxPz#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx";

  const openContact = () => {
    window.open(PRICING_CONTACT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="pricing"
      className="relative w-full bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            <span className="text-zinc-900 dark:text-white">
              One plan for your redesign
            </span>
            <br />
            <span className="text-[#0047ff] font-display font-normal italic">
              and every month after
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-sm md:text-base text-zinc-600 dark:text-zinc-300">
            We rebuild your website first, then keep improving it every month
            with optimization, SEO, AEO, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">
          {/* Plan card */}
          <motion.div
            className="lg:sticky lg:top-28 rounded-3xl border border-zinc-200 dark:border-transparent bg-white dark:bg-zinc-950/60 p-8 ring-1 ring-blue-500/50 shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Website Growth Retainer
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-semibold">$1,000</span>
              <span className="text-zinc-500 dark:text-zinc-400">/ month</span>
            </div>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              A complete website redesign followed by ongoing growth,
              optimization, SEO, AEO, and maintenance.
            </p>

            <div className="mt-6">
              <Button variant="primary" className="w-full" onClick={openContact}>
                Get Started
              </Button>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-100 dark:bg-white/10 p-4">
              <p className="text-sm font-medium">Guarantee</p>
              <ul className="mt-3 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>
                    If no measurable results are achieved within the first 3
                    months, all payments are refunded
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>The client retains the completed website</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
              Stages 1 and 2 are completed at the start. Stage 3 continues
              monthly.
            </p>
          </motion.div>

          {/* Stages */}
          <div className="space-y-6">
            <StageCard
              stage="Stage 1"
              tag="One-time"
              title="Audit & Wireframe"
              description="This stage establishes the current baseline and defines the structure of the new website."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <ItemList items={stage1.slice(0, 3)} />
                <ItemList items={stage1.slice(3)} />
              </div>
            </StageCard>

            <StageCard
              stage="Stage 2"
              tag="One-time"
              title="Design & Development"
              description="This stage includes the full redesign and build of the website."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <ItemList items={stage2.slice(0, 4)} />
                <ItemList items={stage2.slice(4)} />
              </div>
            </StageCard>

            <StageCard
              stage="Stage 3"
              tag="Recurring monthly"
              title="Monthly Growth Plan"
              description="This stage includes ongoing optimization, content, and support."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {growthGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-4 text-base font-semibold">
                      {group.title}
                    </h4>
                    <ItemList items={group.items} />
                  </div>
                ))}
              </div>
            </StageCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/60 p-6 md:p-8">
                <h3 className="mb-5 text-xl font-semibold tracking-tight">
                  Deliverables & Timelines
                </h3>
                <ItemList items={deliverables} />
              </div>
              <div className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/60 p-6 md:p-8">
                <h3 className="mb-5 text-xl font-semibold tracking-tight">
                  Request Process
                </h3>
                <ItemList items={requestProcess} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
