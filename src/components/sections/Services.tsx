import Card from "../ui/Card";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

const services: Service[] = [
  {
    id: "design",
    title: "Design",
    description: "We design websites, web apps, and mobile apps",
    icon: (
      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
        <svg
          className="w-5 h-5 text-gray-900"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ),
  },
  {
    id: "webflow",
    title: "Webflow",
    description: "We build websites using Webflow",
    icon: (
      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    ),
    isHighlighted: true,
  },
  {
    id: "code",
    title: "Code",
    description: "We build web apps and websites using custom code",
    icon: (
      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">&lt;/&gt;</span>
      </div>
    ),
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Our</span>
            <span className="text-blue-400 italic"> Services</span>
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative p-6 rounded-lg transition-all duration-300 ${
                service.isHighlighted
                  ? "bg-gray-800 border-l-4 border-blue-400"
                  : "bg-gray-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <h3
                    className={`text-2xl font-bold ${
                      service.isHighlighted ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{service.description}</p>
                </div>
                <div className="flex-shrink-0">{service.icon}</div>
              </div>

              {/* Separator line */}
              {index < services.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-600"></div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="mt-16">
          <Card className="bg-gray-800 border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left - Testimonial */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="text-8xl text-blue-400 font-bold">&quot;</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white text-xs uppercase tracking-wider">
                      <div>TRUSTED BY CLIENTS</div>
                      <div className="mt-2">TESTIMONIAL</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-white text-lg leading-relaxed">
                    &quot;Artbeak studio ability to create a high quality UI is
                    stands out. It&apos;s something we placed a premium on. A
                    studio with passionate, professional, fun and full
                    creativity. Recommend!&quot;
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                    <div>
                      <p className="text-white font-semibold">Conor Bradley</p>
                      <p className="text-gray-300 text-sm">
                        Senior Marketing, Spotify
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                      <button className="p-1 hover:text-blue-400 transition-colors">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <span className="text-sm">1 / 3</span>
                      <button className="p-1 hover:text-blue-400 transition-colors">
                        <svg
                          className="w-4 h-4"
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Partner Brands */}
              <div className="space-y-6">
                <p className="text-lime-400 text-sm uppercase tracking-wider">
                  PARTNER WITH +150 BRANDS
                </p>

                <div className="grid grid-cols-5 gap-4">
                  {[
                    "ZUMAR CONS",
                    "GitHub",
                    "mathew coo.",
                    "archin",
                    "Square",
                  ].map((brand, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xs text-center font-medium">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
