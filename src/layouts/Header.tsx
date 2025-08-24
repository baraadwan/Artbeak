"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 text-xl font-bold">A</span>
              </div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse"></div>
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
