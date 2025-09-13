"use client";

import { Crown } from "lucide-react";
import { IconBrandWebflow, IconCode } from "@tabler/icons-react";
import SpotlightCard from "../ui/SpotlightCard/SpotlightCard";
import CircularText from "../ui/CircularText/CircularText";
import { AnimatedTestimonials } from "../ui/AnimatedTestimonials";
import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "design",
    title: "Design",
    description: "We design websites, web apps, and mobile apps",
    icon: (
      <div className="w-10 h-10 bg-transparent border-[1px] border-[#c5f011]/50 rounded-full flex items-center justify-center">
        <Crown className="w-4 h-4 text-[#c5f011]" />
      </div>
    ),
  },
  {
    id: "webflow",
    title: "Webflow",
    description: "We build websites using Webflow",
    icon: (
      <div className="w-10 h-10 bg-transparent border-[1px] border-[#c5f011]/50 rounded-full flex items-center justify-center">
        <IconBrandWebflow className="w-5 h-5 text-[#c5f011]" />
      </div>
    ),
  },
  {
    id: "code",
    title: "Code",
    description: "We build web apps and websites using custom code",
    icon: (
      <div className="w-10 h-10 bg-transparent border-[1px] border-[#c5f011]/50 rounded-full flex items-center justify-center">
        <IconCode className="w-5 h-5 text-[#c5f011]" />
      </div>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            <span className="text-white">Our</span>
            <span className="text-[#0047ff] font-display font-[400] italic">
              {" "}
              Services
            </span>
          </h2>
        </div>

        <div className="">
          {/* Top divider */}
          <div className="w-full h-px bg-gray-600"></div>

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative rounded-lg transition-all duration-300 group hover:bg-[#151515] hover:shadow-lg hover:shadow-blue-500/20 hover:border-l-4 hover:border-blue-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="grid grid-cols-12 items-center gap-x-4 gap-y-3 py-5">
                <h3
                  className={`col-span-12 md:col-span-7 text-4xl sm:text-6xl lg:text-8xl font-bold text-left ml-0 md:ml-8 text-white group-hover:text-[#0047ff] transition-colors`}
                >
                  {service.title}
                </h3>
                <p className="col-span-12 md:col-span-2 text-gray-300 text-xs sm:text-sm text-left">
                  {service.description}
                </p>
                <div className="col-span-12 md:col-span-3 flex justify-start md:justify-end mr-0 md:mr-8 mt-2 md:mt-0">
                  {service.icon}
                </div>
              </div>

              {/* Separator line */}
              <div className="w-full h-px bg-gray-600"></div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="mt-12 sm:mt-14 lg:mt-16 relative">
          {/* <Card className="bg-gray-800 border-gray-700"> */}
          <SpotlightCard
            className="custom-spotlight-card z-50"
            spotlightColor="rgba(0, 71, 255, 0.2)"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center justify-center md:justify-between w-full md:w-1/3">
                <div className="relative mb-12">
                  <CircularText
                    text="TRUSTED BY CLIENTS - TESTIMONIAL - "
                    onHover="speedUp"
                    spinDuration={20}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                      <div>
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 104 81"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.972962 18.2241C0.972962 13.492 2.83552 9.46977 6.56063 6.15732C10.2857 2.60827 14.6761 0.83374 19.7316 0.83374C21.8602 0.83374 24.1219 1.30695 26.5166 2.25336L26.1175 1.89846L28.5122 2.96317H28.9113C29.7096 3.43638 30.6408 4.02789 31.7051 4.7377C31.7051 4.9743 32.1043 5.44751 32.9025 6.15732C39.5545 12.0724 42.3483 20.945 41.284 32.7752C40.2197 49.8106 30.1087 65.1899 10.9509 78.9129C9.88663 79.8593 8.68927 80.3325 7.35887 80.3325C5.23023 80.3325 3.50072 79.5044 2.17032 77.8482C-0.224396 75.0089 0.174723 72.4063 3.36768 70.0402C19.0664 58.6833 27.5809 46.3799 28.9113 33.1301C25.9844 34.7863 22.9245 35.6144 19.7316 35.6144C14.6761 35.6144 10.2857 33.9582 6.56063 30.6458C2.83552 27.0967 0.972962 22.9562 0.972962 18.2241ZM62.8365 18.2241C62.8365 13.492 64.699 9.46977 68.4241 6.15732C72.1492 2.60827 76.5396 0.83374 81.5951 0.83374C83.7237 0.83374 85.9854 1.30695 88.3801 2.25336L87.981 1.89846C88.7792 2.13506 89.5774 2.48996 90.3757 2.96317H90.7748C91.8391 3.43638 92.7704 4.02789 93.5686 4.7377C93.5686 4.9743 93.9678 5.44751 94.766 6.15732C101.418 12.0724 104.212 20.945 103.148 32.7752C102.083 49.8106 91.9722 65.1899 72.8144 78.9129C71.7501 79.8593 70.5528 80.3325 69.2224 80.3325C67.0937 80.3325 65.4972 79.5044 64.4329 77.8482C61.7721 75.0089 62.0382 72.4063 65.2312 70.0402C80.9299 58.6833 89.4444 46.3799 90.7748 33.1301C87.8479 34.7863 84.788 35.6144 81.5951 35.6144C76.5396 35.6144 72.1492 33.9582 68.4241 30.6458C64.699 27.0967 62.8365 22.9562 62.8365 18.2241Z"
                            fill="#0047FF"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 w-full md:w-2/3">
                <AnimatedTestimonials
                  autoplay
                  testimonials={[
                    {
                      name: "Kevin Quah",
                      designation: "",
                      quote: `Responsive and relentlessly hardworking on different aspects of website building. Bara is experienced in Webflow and I'd recommend him for rebuillding your website from scratch.`,
                      src: "/assets/clients/client-kevin-.jpeg",
                    },
                    {
                      name: "Param Singh",
                      designation: "",
                      quote: `I had a very professional experience working with Bara and would recommend him for website design. Hopefully we will work together again.`,
                      src: "/assets/clients/client-param-singh.jpeg",
                    },
                  ]}
                />
              </div>
            </div>

            <div className="mt-18">
              <div className="space-y-8">
                <p className="text-lime-400 text-sm uppercase tracking-wider">
                  PARTNER WITH +150 BRANDS
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    "/assets/icons/companys/inhub.png",
                    "/assets/icons/companys/excelsior_icon.png",
                    "/assets/icons/companys/forum.png",
                    "/assets/icons/companys/tictag.png",
                    "/assets/icons/companys/snaprent.png",
                  ].map((brand, index) => (
                    <div
                      key={index}
                      className="w-full h-20 sm:h-24 md:h-28 lg:h-32 border border-[#494949] rounded-full flex items-center justify-center"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative flex items-center justify-center">
                        <img
                          src={brand}
                          alt=""
                          className={` object-contain w-full h-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>
          <div className="absolute inset-0 bg-[#171717] opacity-90 rounded-2xl z-20 transform translate-y-4 scale-[0.97]"></div>
          <div className="absolute inset-0 bg-[#171717] opacity-40 rounded-2xl z-10 transform translate-y-8 scale-[0.94]"></div>
          {/* </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
