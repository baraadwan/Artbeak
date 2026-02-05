"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "artbeak-exit-intent-shown";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch (_) {}
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (sessionStorage.getItem(STORAGE_KEY) === "true") return;
      if (e.clientY <= 10) {
        setIsOpen(true);
      }
    };

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    return () =>
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
  }, [mounted]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />

      {/* Popup card */}
      <div
        className="relative w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-xl p-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2
          id="exit-intent-title"
          className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-white pr-10 mb-5"
        >
          Free website audit
        </h2>

        <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
          Redesigns are overwhelming. Want simple, practical tips to skyrocket your conversion rate — for free?
        </p>

        <form
          className="space-y-4 mb-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const value = email.trim();
            if (!value) return;
            setStatus("loading");
            setErrorMessage("");
            try {
              const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: value }),
              });
              const data = await res.json().catch(() => ({}));
              if (!res.ok) {
                setStatus("error");
                setErrorMessage(data?.error || "Something went wrong. Please try again.");
                return;
              }
              setStatus("success");
              setEmail("");
              setTimeout(close, 1500);
            } catch {
              setStatus("error");
              setErrorMessage("Something went wrong. Please try again.");
            }
          }}
        >
          <label htmlFor="exit-popup-email" className="sr-only">
            Email address
          </label>
          <input
            id="exit-popup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            disabled={status === "loading"}
            className="w-full rounded-lg border border-zinc-300 dark:border-white/20 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#0047ff] focus:border-transparent disabled:opacity-60"
          />
          {errorMessage && (
            <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Thanks! We&apos;ll send your free audit soon.
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex-1 rounded-full bg-[#0047ff] hover:bg-blue-700 text-white font-medium px-5 py-3 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : "Send free audit"}
            </button>
            <button
              type="button"
              onClick={close}
              disabled={status === "loading"}
              className="flex-1 rounded-full border border-zinc-300 dark:border-white/20 bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 font-medium px-5 py-3 transition-colors disabled:opacity-60"
            >
              No thanks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
