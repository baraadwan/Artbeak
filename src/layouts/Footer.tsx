"use client";
import { IconSend2 } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-white border-t border-gray-800 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Newsletter */}
          <div className="space-y-6 max-w-80">
            <div className="space-y-4">
              <motion.svg
                className="w-12 h-12 text-[#c5f011]"
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
              <h3 className="text-white text-xl font-semibold font-inter">
                Stay with our latest offers and Business newsletter
              </h3>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-2">
              <label
                htmlFor="email-address"
                className="block text-xs font-normal text-gray-200 font-inter"
              >
                Email Address
              </label>
              <div className="relative" suppressHydrationWarning>
                <input
                  type="email"
                  id="email-address"
                  placeholder="Enter your email address"
                  className="w-full bg-[#151515] rounded-lg px-4 py-2 text-white placeholder-[#999999] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 font-inter"
                  suppressHydrationWarning
                />
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
                  suppressHydrationWarning
                >
                  <IconSend2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-inter">
              By subscribing, you&apos;re accept our{" "}
              <span className="font-bold text-white underline">
                Privacy Policy
              </span>
            </p>
          </div>
          <div className="space-y-8 grid grid-cols-1 md:grid-cols-2">
            {/* Column 2: Contact Information */}
            <div className="space-y-8">
              {/* Work Inquiry */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg font-inter">
                  Work Inquiry
                </h4>
                <div className="space-y-2 text-gray-300 text-sm font-inter">
                  <p>bara@artbeak.com</p>
                  <p>+1 (934) 201-2621</p>
                </div>
              </div>

              {/* Brooklyn, NY */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg font-inter">
                  Brooklyn, NY
                </h4>
                <div className="space-y-1 text-gray-300 text-sm font-inter">
                  <p>3336 Fulton St, Brooklyn</p>
                  <p>NY 11208</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            {/* Column 3: Open Positions & Links */}
            <div className="space-y-8">
              {/* Open Positions */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg font-inter">
                  Open Position
                </h4>
                <div className="space-y-2 text-gray-300 text-sm font-inter">
                  <p>Front-end Developer (Remote)</p>
                  <p>UI/UX Designer (Remote)</p>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg font-inter">
                  Links
                </h4>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/terms"
                    className="block text-gray-300 hover:text-white transition-colors font-inter"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="/privacy"
                    className="block text-gray-300 hover:text-white transition-colors font-inter"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-4 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-inter">
              © {currentYear} Artbeak LLC All Rights Reserved
            </p>

            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-14 h-14 flex items-center justify-center transform hover:scale-110 transition-all rounded-full font-inter cursor-pointer"
              aria-label="Scroll to top"
            >
              <svg
                width="35"
                height="42"
                viewBox="0 0 35 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
              >
                <path
                  d="M33.5486 18.43C33.5799 18.3989 33.8187 17.4461 34.0792 16.3128C34.3396 15.1794 34.5129 14.2399 34.4646 14.2248C34.416 14.2098 33.6294 14.0925 32.7164 13.9643C30.8829 13.7067 28.7423 13.083 27.4035 12.4166C23.231 10.3393 20.4683 6.6123 19.7502 2.09195L19.5674 0.940854L17.7242 0.940854L15.8809 0.940854L15.7058 1.98417C14.5591 8.81952 9.4482 13.2758 1.79978 14.1095C1.30034 14.1639 0.891844 14.2289 0.891844 14.254C0.891844 14.4845 1.81241 18.3043 1.88534 18.3766C1.93807 18.4288 2.40627 18.3899 2.92561 18.2901C8.67638 17.1847 13.3559 14.0198 15.3126 9.91278L15.7819 8.9276L15.8187 29.1866L15.842 41.9971L19.5723 41.9971L19.5957 29.1536L19.6326 8.94242L20.2628 10.1862C21.8975 13.4128 25.1041 15.9674 29.4083 17.4718C30.6345 17.9005 33.4301 18.5474 33.5486 18.43Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
