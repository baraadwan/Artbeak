import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

const FeaturedWork = () => {
  return (
    <section className="py-0 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-row gap-6 items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-white">Featured</span>
            <span className="text-[#0047ff] font-display italic font-normal">
              {" "}
              Work
            </span>
          </h2>
          <Link href="/portfolio">
            <Button>See More</Button>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="relative h-56 sm:h-80 md:h-[420px] lg:h-[540px] mb-8 sm:mb-10 lg:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#002da3] to-[#02247f] rounded-2xl shadow-xl z-30 overflow-hidden">
              <Image
                src="/assets/images/project.png"
                alt="EventRythm Before & After"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                className="object-cover rounded-2xl"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-[#013ac9] opacity-90 rounded-2xl z-20 transform -translate-y-2 sm:-translate-y-3.5 scale-[0.97]"></div>
            <div className="absolute inset-0 bg-[#013ac9] opacity-70 rounded-2xl z-10 transform -translate-y-4 sm:-translate-y-7 scale-[0.94]"></div>
            <div className="absolute inset-0 bg-[#013ac9] opacity-50 rounded-2xl z-10 transform -translate-y-6 sm:-translate-y-10 scale-[0.91]"></div>
          </div>

          {/* Project Details */}
          <div className="flex gap-4 items-center justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                EventRythm Before & After
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500">
                Website Redesign & Webflow Development
              </p>
            </div>
            <button className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/icons/arrow-right-big.png"
                alt="Arrow Right"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
