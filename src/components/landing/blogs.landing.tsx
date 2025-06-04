"use client";

import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogKebunTanikuSkeleton } from "@/contentful/types/blogKebunTaniku.type";
import { Asset } from "contentful";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  day: string;
  monthYear: string;
}

const BlogSectionHome = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response =
          await contentfulClient.getEntries<TypeBlogKebunTanikuSkeleton>({
            content_type: "blogKebunTaniku",
          });

        const posts = response.items.map((item) => {
          const fields = item.fields;
          const date =
            typeof fields.date === "string" || typeof fields.date === "number"
              ? new Date(fields.date)
              : new Date();

          const image = isAsset(fields.banner)
            ? `https:${fields.banner.fields?.file?.url}` || "/default-image.jpg"
            : "/default-image.jpg";

          return {
            title: typeof fields.title === "string" ? fields.title : "Untitled",
            author:
              typeof fields.author === "string" ? fields.author : "Unknown",
            date: date.toISOString(),
            image,
            slug: String(fields.slug ?? ""),
            day: date.getDate().toString(),
            monthYear: date.toLocaleString("default", {
              month: "short",
              year: "numeric",
            }),
            category: String(fields.categories ?? "Uncategorized"),
          };
        });

        setBlogPosts(posts.slice(0, 4)); // ✅ BATAS MAKSIMAL 4 CARD
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const isAsset = (field: unknown): field is Asset => {
    return (field as Asset)?.fields?.file !== undefined;
  };

  const renderCard = (post: BlogPost, index: number) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative w-full h-48 sm:h-56">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-3 left-3 bg-[#5ECDCF] text-white p-2 rounded-md text-center">
          <p className="text-xl font-bold">{post.day}</p>
          <p className="text-xs sm:text-sm bg-green-600 text-white px-2 py-1 rounded-b-md">
            {post.monthYear}
          </p>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">
          {post.author} •{" "}
          {new Date(post.date).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          {post.title}
        </h3>
        <a
          href={`/blogs/${post.slug}`}
          className="mt-3 inline-block text-green-600 font-semibold hover:underline transition duration-200 text-sm sm:text-base"
        >
          CONTINUE READING →
        </a>
      </div>
    </div>
  );

  return (
    <section className="pb-20 -mt-28 sm:pb-0 text-center px-4 sm:px-8 max-w-screen-xl mx-auto">
      <h3 className="text-green-500 text-lg mt-10">Latest News</h3>
      <h2 className="text-2xl sm:text-3xl font-bold mt-2">
        Check out our blog posts
      </h2>

      {/* Grid untuk tablet dan desktop */}
      <div className="hidden sm:grid mt-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {blogPosts.map((post, index) => renderCard(post, index))}
      </div>

      {/* Carousel untuk mobile */}
      <div className="sm:hidden mt-8 relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="pb-10"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>{renderCard(post, index)}</SwiperSlide>
          ))}
        </Swiper>

        {/* Dot Pagination */}
        <div className="custom-pagination absolute left-0 right-0 bottom-0 flex justify-center gap-2 mt-4 z-10" />

        {/* Prev & Next Buttons */}
        <button className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow">
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
        <button className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow">
          <ArrowRight className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Tombol Lihat Semua */}
      <Link href="/blogs">
        <button className="mt-8 mb-4 sm:mt-16 px-5 py-3 bg-[#5ECDCF] text-black text-base sm:text-lg font-semibold rounded-lg hover:bg-[#5ECDCF] hover:text-white hover:cursor-pointer transition">
          See More
        </button>
      </Link>
    </section>
  );
};

export default BlogSectionHome;
