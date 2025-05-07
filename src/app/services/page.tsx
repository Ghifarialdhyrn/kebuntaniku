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

      <div className="flex flex-grow justify-center items-center mb-20">
        <HeroServices />
      </div>

      <div className="w-full flex flex-grow justify-center items-center mb-20">
        <ServicesCards />
      </div>

      <div className="w-full flex flex-col justify-center items-center mb-64">
        <BannerServices />
        <FacilitiesService />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <ActivitiesService />
        <div className="bg-[#4BAF47] p-10 h-[200px] flex flex-col justify-center relative overflow-hidden w-full pl-20">
          <h3 className="text-base text-[#EEC044] mb-2">
            Agriculture Market Leaders
          </h3>
          <p className="text-white font-bold mb-6 text-4xl z-10 relative">
            We're popular in agriculture market globally
          </p>
          <div className="absolute bottom-0 right-0 opacity-50 ">
            <Image
              src="/service-06.png"
              alt="CTA Image"
              width={650}
              height={650}
              className="object-cover"
            />
          </div>
        </div>
        <button className="absolute bg-[#EEC044] text-white font-medium rounded-md right-80 bottom-[-1780px] p-3">
          Discover More
        </button>
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
