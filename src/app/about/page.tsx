"use client";

import { useInView } from "@/components/hooks/useInView";
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
  const heroInView = useInView<HTMLDivElement>();
  const descriptionsInView = useInView<HTMLDivElement>();
  const bannerInView = useInView<HTMLDivElement>();
  const testimonialInView = useInView<HTMLDivElement>();
  const teamInView = useInView<HTMLDivElement>();
  const locationInView = useInView<HTMLDivElement>();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div
        ref={heroInView.ref}
        className={`flex flex-grow justify-center items-center pb-12 sm:pb-16 transition-opacity duration-500 ease-in-out
          ${heroInView.isInView ? "opacity-100" : "opacity-0"}`}
      >
        <HeroAbout />
      </div>

      <div
        ref={descriptionsInView.ref}
        className={`flex flex-grow justify-center items-center py-12 sm:py-16 px-4 transition-opacity duration-500 ease-in-out
          ${descriptionsInView.isInView ? "opacity-100" : "opacity-0"}`}
      >
        <Descriptions />
      </div>

      <div
        ref={bannerInView.ref}
        className={`flex flex-grow justify-center items-center py-12 sm:py-16 px-4 transition-opacity duration-500 ease-in-out
          ${bannerInView.isInView ? "opacity-100" : "opacity-0"}`}
      >
        <BannerAbout />
      </div>

      <div
        ref={testimonialInView.ref}
        className={`flex flex-grow justify-center items-center py-12 sm:py-16 px-4 transition-opacity duration-500 ease-in-out
          ${testimonialInView.isInView ? "opacity-100" : "opacity-0"}`}
      >
        <TestimonialAbout />
      </div>

      <div
        ref={teamInView.ref}
        className={`flex flex-grow justify-center items-center py-12 sm:py-16 px-4 transition-opacity duration-500 ease-in-out
          ${teamInView.isInView ? "opacity-100" : "opacity-0"}`}
      >
        <TeamMembers />
      </div>

      <div
        ref={locationInView.ref}
        className={`bg-[#f8f5f0] w-full flex flex-grow justify-center items-center py-12 sm:py-16 px-4 transition-opacity duration-500 ease-in-out
          ${locationInView.isInView ? "opacity-100" : "opacity-0"}`}
      >
        <LocationAbout />
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
