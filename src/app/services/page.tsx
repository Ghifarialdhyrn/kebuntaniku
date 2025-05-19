import ActivitiesService from "@/components/services/activities.service";
import BannerServices from "@/components/services/banner.services";
import FacilitiesService from "@/components/services/facilities.service";
import HeroServices from "@/components/services/hero.services";
import ServicesCards from "@/components/services/list.services";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ScrollToTopButton from "@/ui/scrollup";
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow justify-center items-center mb-10 md:mb-20">
        <HeroServices />
      </div>

      <div className="w-full flex flex-grow justify-center items-center mb-10 md:mb-20">
        <ServicesCards />
      </div>

      <div className="w-full flex flex-col justify-center items-center mb-32">
        <BannerServices />
        <FacilitiesService />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <ActivitiesService />

        {/* CTA Section */}
        <div className="relative bg-[#4BAF47] px-4 py-10 md:py-16 w-full overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-sm md:text-base text-[#EEC044] mb-2">
              Agriculture Market Leaders
            </h3>
            <p className="text-white font-bold mb-6 text-2xl md:text-4xl">
              We are popular in agriculture market globally
            </p>
            <button className="bg-[#EEC044] text-white font-medium rounded-md px-6 py-3 w-fit">
              Discover More
            </button>
          </div>

          {/* Background Image */}
          <div className="absolute bottom-0 right-0 opacity-50 w-2/3 md:w-auto">
            <img
              src="/service-06.png"
              alt="CTA Image"
              width={650}
              height={650}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
