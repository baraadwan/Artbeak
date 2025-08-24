"use client";

import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-500 to-black overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main teardrop shape */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl transform rotate-12"></div>
        {/* Bottom circular shape */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gray-800 rounded-full opacity-30"></div>
        {/* Right curved shape */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Top text */}
            <div className="mb-6">
              <span className="text-gray-600 text-lg font-medium">
                Ready to
              </span>
              <span className="text-yellow-400 text-lg font-bold ml-2">
                elevate
              </span>
              <span className="text-gray-600 text-lg font-medium ml-2">
                your brand?
              </span>
            </div>

            {/* Main heading */}
            <div className="mb-8">
              <p className="text-gray-300 text-xl font-light mb-2">
                Let&apos;s start
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Your</span>
                <span className="block italic font-serif">Project</span>
              </h1>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => {}}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-medium rounded-lg flex items-center gap-3 group"
            >
              Start Now
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg
                  className="w-3 h-3 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Award Badge */}
      <div className="absolute bottom-8 right-8 w-32 h-32 bg-gray-900 bg-opacity-50 rounded-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-yellow-400 text-xs font-bold mb-1">
            AWARD WINNING
          </div>
          <div className="text-yellow-400 text-xs font-bold">AGENCY</div>
          <div className="text-yellow-400 text-xs font-bold mt-1">
            SINCE 2022
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full mx-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
