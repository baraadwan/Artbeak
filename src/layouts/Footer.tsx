import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
              <span className="text-sm text-gray-400">
                Stay with our latest offers and
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Business newsletter
            </h3>

            {/* Newsletter Form */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors">
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>

            <p className="text-sm text-gray-400">
              By subscribing, you&apos;re accept our{" "}
              <span className="font-bold text-white">Privacy Policy</span>
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-8">
            {/* Work Inquiry */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Work Inquiry</h4>
              <div className="space-y-2 text-gray-300">
                <p>bara@artbeak.com</p>
                <p>+1 (934) 201-2621</p>
              </div>
            </div>

            {/* Brooklyn, NY */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Brooklyn, NY</h4>
              <div className="space-y-1 text-gray-300">
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
              <h4 className="text-white font-semibold">Open Position</h4>
              <div className="space-y-2 text-gray-300">
                <p>Front-end Developer (Remote)</p>
                <p>UI/UX Designer (Remote)</p>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Links</h4>
              <div className="space-y-2">
                <Link
                  href="/terms"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Artbeak LLC All Rights Reserved
            </p>

            {/* Scroll to top button */}
            <button className="mt-4 md:mt-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
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
