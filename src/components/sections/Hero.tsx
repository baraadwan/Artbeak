import Link from "next/link";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center overflow-hidden pb-16 pt-28">
      {/* Background decorative element */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Only Pay </span>
                <span className="inline mr-5">When you Convert</span>
                <span className="inline text-4xl md:text-6xl italic font-normal text-gray-300">
                  more
                </span>
              </h1>
            </div>

            {/* Social Proof */}
            <div className="space-y-4 pt-8">
              <p className="text-white text-lg">
                5.0 Average Rating on <span className="underline">Google</span>
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">X</span>
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Description, CTA & Stats */}
          <div className="space-y-8">
            {/* Description */}
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              A US Wyoming company based in Cairo, we are performance based,
              risk-free website re-design agency that focus on turning normal
              websites into conversion machines.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start Now
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </Link>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-lime-400 mb-2">95%</div>
                <div className="text-white text-sm leading-tight">
                  CLIENTS SATISFIED AND REPEATING
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-lime-400 mb-2">47+</div>
                <div className="text-white text-sm leading-tight">
                  PROJECTS COMPLETED IN 6 COUNTRIES
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Guarantees & Founders */}
        <div className="mt-16 space-y-8">
          {/* Guarantees */}
          <div className="space-y-4">
            <div className="h-px bg-gray-600"></div>
            <div className="flex items-center justify-between text-white text-sm">
              <span>Refund Guaranteed</span>
              <span>100% Risk Free</span>
              <span>Flexible Pricing</span>
            </div>
          </div>

          {/* Founders Section */}
          <div className="space-y-4">
            <div className="h-px bg-gray-600"></div>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white"></div>
                <div className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <p className="text-white text-xs uppercase tracking-wider mb-2">
                  FOUNDERS OF ARTBEAK
                </p>
                <p className="text-white text-sm leading-relaxed">
                  We help business redesign their normal websites and turn them
                  into conversion machines risk free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
