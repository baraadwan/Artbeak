"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get current time and format it
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-[99] transition-colors ${
        isScrolled
          ? "bg-white/90 dark:bg-black/70 backdrop-blur-md border-b border-zinc-200 dark:border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  width="41"
                  height="34"
                  viewBox="0 0 41 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-zinc-900 dark:text-white"
                >
                  <path
                    d="M29.9509 24.8835H10.3348L6.23662 33.0799H0.0663058L17.0577 0.340383H22.9978L40.2654 33.0799H34.1872L29.9509 24.8835ZM20.0047 5.5437L12.6832 20.1867H27.5564L20.0047 5.5437Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="w-5 h-5 relative">
                  <motion.svg
                    className="absolute -top-3 right-1 w-5 h-6 text-[#0047ff] dark:text-[#c5f011]"
                    fill="currentColor"
                    viewBox="0 0 25 24"
                    style={{ originX: 0.5, originY: 0.5 }}
                    animate={{ rotate: [0, 360], scale: [1, 0.92, 1.06, 1] }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      times: [0, 0.4, 0.65, 1],
                    }}
                  >
                    <path d="M0.651611 11.9974C6.65029 11.9974 12.649 5.99868 12.649 0C12.649 5.99868 18.6477 11.9974 24.6463 11.9974C18.6477 11.9974 12.649 17.996 12.649 23.9947C12.649 17.996 6.65029 11.9974 0.651611 11.9974Z" />
                  </motion.svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Center - Location & Time */}
          <div className="hidden md:flex items-center space-x-4 text-zinc-700 dark:text-white">
            <span className="text-sm font-medium font-inter">Cairo, Egypt</span>
            <span className="text-sm font-medium font-inter">
              {getCurrentTime()}
            </span>
          </div>

          {/* Right - Theme toggle + Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-[#0047ff] dark:hover:text-[#0047ff] hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <span className="text-zinc-700 dark:text-white text-sm font-medium hidden md:block font-inter">
              Menu
            </span>
            <Popover
              placement="bottom-end"
              offset={8}
              isOpen={menuOpen}
              onOpenChange={setMenuOpen}
            >
              <PopoverTrigger>
                <button
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  <div className="relative w-5 h-5">
                    <motion.span
                      className="absolute left-1/2 top-1/2 block h-0.5 w-5 bg-white"
                      style={{ translateX: "-50%", translateY: "-50%" }}
                      animate={{
                        rotate: menuOpen ? 45 : 0,
                        y: menuOpen ? 0 : -3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                    <motion.span
                      className="absolute left-1/2 top-1/2 block h-0.5 w-5 bg-white"
                      style={{ translateX: "-50%", translateY: "-50%" }}
                      animate={{
                        rotate: menuOpen ? -45 : 0,
                        y: menuOpen ? 0 : 3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-2 bg-white dark:bg-[#1a1a1a] backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-[#2a2a2a] shadow-xl">
                <div className="px-2 py-1 space-y-1 min-w-48">
                  <button
                    onClick={() => {
                      document.getElementById("hero")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setMenuOpen(false);
                    }}
                    className="text-zinc-800 dark:text-white hover:text-[#0047ff] block w-full text-left px-3 py-2 text-base font-medium transition-colors font-inter"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("services")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setMenuOpen(false);
                    }}
                    className="text-zinc-800 dark:text-white hover:text-[#0047ff] block w-full text-left px-3 py-2 text-base font-medium transition-colors font-inter"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("work")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setMenuOpen(false);
                    }}
                    className="text-zinc-800 dark:text-white hover:text-[#0047ff] block w-full text-left px-3 py-2 text-base font-medium transition-colors font-inter"
                  >
                    Work
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("pricing")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setMenuOpen(false);
                    }}
                    className="text-zinc-800 dark:text-white hover:text-[#0047ff] block w-full text-left px-3 py-2 text-base font-medium transition-colors font-inter"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("faq")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setMenuOpen(false);
                    }}
                    className="text-zinc-800 dark:text-white hover:text-[#0047ff] block w-full text-left px-3 py-2 text-base font-medium transition-colors font-inter"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("cta")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setMenuOpen(false);
                    }}
                    className="text-zinc-800 dark:text-white hover:text-[#0047ff] block w-full text-left px-3 py-2 text-base font-medium transition-colors font-inter"
                  >
                    Start Now
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* Line that disappears when scrolling */}
        {!isScrolled && <div className="h-px bg-zinc-300 dark:bg-white"></div>}
      </div>
    </header>
  );
};

export default Header;
