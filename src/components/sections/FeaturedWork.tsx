import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

const FeaturedWork = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-semibold">
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
          <div className="relative h-[540px] mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#002da3] to-[#02247f] rounded-2xl shadow-xl z-30">
              <Image
                src="/assets/images/project.png"
                alt="EventRythm Before & After"
                width={1000}
                height={450}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="absolute inset-0 bg-[#013ac9] opacity-90 rounded-2xl z-20 transform -translate-y-3.5 scale-[0.97]"></div>
            <div className="absolute inset-0 bg-[#013ac9] opacity-70 rounded-2xl z-10 transform -translate-y-7 scale-[0.94]"></div>
            <div className="absolute inset-0 bg-[#013ac9] opacity-50 rounded-2xl z-10 transform -translate-y-10 scale-[0.91]"></div>
          </div>

          {/* Project Details */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                EventRythm Before & After
              </h3>
              <p className="text-xs text-gray-500">
                Website Redesign & Webflow Development
              </p>
            </div>
            <button className="w-14 h-14 flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/icons/arrow-right-big.png"
                alt="Arrow Right"
                width={52}
                height={52}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
