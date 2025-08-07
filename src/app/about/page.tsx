import { createClient } from "contentful";
import BannerAbout from "@/components/about/banner.about";
import Descriptions from "@/components/about/description.about";
import HeroAbout from "@/components/about/hero.about";
import LocationAbout from "@/components/about/location.about";
import TeamMembers from "@/components/about/team.about";
import TestimonialAbout from "@/components/about/testimonial.about";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ScrollToTopButton from "@/ui/scrollup";

export default async function About() {
  let recentArticles: { title: string; date: string; slug: string }[] = [];

  try {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    });

    const blogRes = await client.getEntries({
      content_type: "blogKebunTaniku",
      order: ["-fields.date"],
    });

    recentArticles = blogRes.items.slice(0, 2).map((item: any) => ({
      title: item.fields.title || "",
      slug: item.fields.slug || "",
      date: new Date(item.fields.date).toISOString(),
    }));
  } catch (error) {
    console.error("SSR fetch error (Footer):", error);
  }

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

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
