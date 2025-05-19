import BannerAbout from "@/components/about/banner.about";
import Descriptions from "@/components/about/description.about";
import HeroAbout from "@/components/about/hero.about";
import LocationAbout from "@/components/about/location.about";
import TeamMembers from "@/components/about/team.about";
import TestimonialAbout from "@/components/about/testimonial.about";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ScrollToTopButton from "@/ui/scrollup";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow justify-center items-center pb-12 sm:pb-16">
        <HeroAbout />
      </div>

      <div className="flex flex-grow justify-center items-center py-12 sm:py-16 px-4">
        <Descriptions />
      </div>

      <div className="flex flex-grow justify-center items-center py-12 sm:py-16 px-4">
        <BannerAbout />
      </div>

      <div className="flex flex-grow justify-center items-center py-12 sm:py-16 px-4">
        <TestimonialAbout />
      </div>

      <div className="flex flex-grow justify-center items-center py-12 sm:py-16 px-4">
        <TeamMembers />
      </div>

      <div className="bg-[#f8f5f0] w-full flex flex-grow justify-center items-center py-12 sm:py-16 px-4">
        <LocationAbout />
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

