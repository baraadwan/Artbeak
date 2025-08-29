"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          ? "bg-[#000000]/70 backdrop-blur-md border-b border-gray-800"
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
                >
                  <path
                    d="M29.9509 24.8835H10.3348L6.23662 33.0799H0.0663058L17.0577 0.340383H22.9978L40.2654 33.0799H34.1872L29.9509 24.8835ZM20.0047 5.5437L12.6832 20.1867H27.5564L20.0047 5.5437Z"
                    fill="white"
                  />
                </svg>
                <div className="w-5 h-5 relative">
                  <motion.svg
                    className="absolute -top-3 -right-2 w-5 h-6 text-[#c5f011]"
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
          <div className="hidden md:flex items-center space-x-4 text-white">
            <span className="text-sm font-medium">Cairo, Egypt</span>
            <span className="text-sm font-medium">{getCurrentTime()}</span>
          </div>

          {/* Right - Menu Button */}
          <div className="flex items-center space-x-4">
            <span className="text-white text-sm font-medium hidden md:block">
              Menu
            </span>
            <button
              onClick={toggleMenu}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <div className="w-4 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-700 mt-4">
              <Link
                href="/"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
