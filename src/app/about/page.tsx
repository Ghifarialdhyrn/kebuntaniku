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

      <div className="flex flex-grow justify-center items-center mb-[-100px]">
        <HeroAbout />
      </div>

      <div className="flex flex-grow justify-center items-center mb-[-100px]">
        <Descriptions />
      </div>

      <div className="flex flex-grow justify-center items-center">
        <BannerAbout />
      </div>

      <div className="flex flex-grow justify-center items-center">
        <TestimonialAbout />
      </div>

      <div className="flex flex-grow justify-center items-center">
        <TeamMembers />
      </div>

      <div className="bg-[#f8f5f0] w-full flex flex-grow justify-center items-center">
        <LocationAbout />
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
