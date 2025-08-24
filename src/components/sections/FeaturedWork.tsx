import Link from "next/link";
import Button from "../ui/Button";

const FeaturedWork = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-white">Featured</span>
            <span className="text-blue-400 italic"> Work</span>
          </h2>
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              See More
              <svg
                className="w-5 h-5 ml-2"
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

        {/* Main Project Showcase */}
        <div className="space-y-6">
          {/* Project Container */}
          <div className="bg-blue-900 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before Design */}
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">Before</h3>
                <div className="bg-gray-800 rounded-lg p-4 space-y-4">
                  <div className="bg-gray-700 h-32 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-orange-500 rounded w-20"></div>
                    <div className="h-8 bg-orange-500 rounded w-20"></div>
                  </div>
                </div>
              </div>

              {/* After Design */}
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">After</h3>
                <div className="bg-green-800 rounded-lg p-4 space-y-4">
                  <div className="bg-green-700 h-32 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-green-600 rounded w-3/4"></div>
                    <div className="h-3 bg-green-600 rounded w-1/2"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-orange-500 rounded w-20"></div>
                    <div className="h-8 bg-green-600 rounded w-20 border border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                EventRythm Before & After
              </h3>
              <p className="text-gray-300">
                Website Redesign & Webflow Development
              </p>
            </div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-900"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
