import ActivitiesService from "@/components/services/activities.service";
import BannerServices from "@/components/services/banner.services";
import FacilitiesService from "@/components/services/facilities.service";
import HeroServices from "@/components/services/hero.services";
import ServicesCards from "@/components/services/list.services";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ScrollToTopButton from "@/ui/scrollup";
import { createClient } from "contentful";
import Image from "next/image";

export default async function Services() {
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
          <div className="absolute bottom-0 right-0 opacity-100 w-2/3 md:w-auto">
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

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
