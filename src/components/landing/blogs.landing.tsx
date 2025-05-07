"use client";

import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogKebunTanikuSkeleton } from "@/contentful/types/blogKebunTaniku.type";
import { Asset } from "contentful"; // Impor Asset untuk menangani tipe banner
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        const response = await contentfulClient.getEntries<TypeBlogKebunTanikuSkeleton>({
          content_type: "blogKebunTaniku",
        });        

        const posts = response.items.map((item) => {
          const fields = item.fields;
          const date = typeof fields.date === "string" || typeof fields.date === "number"
            ? new Date(fields.date)
            : new Date();
        
          const image = isAsset(fields.banner)
            ? `https:${fields.banner.fields?.file?.url}` || "/default-image.jpg"
            : "/default-image.jpg";
        
          return {
            title: typeof fields.title === "string" ? fields.title : "Untitled",
            author: typeof fields.author === "string" ? fields.author : "Unknown",
            date: date.toISOString(),
            image,
            slug: String(fields.slug ?? ""),
            day: date.getDate().toString(),
            monthYear: date.toLocaleString("default", { month: "short", year: "numeric" }),
            category: String(fields.categories ?? "Uncategorized"),
          };
        });        

        // Ambil hanya 5 artikel terbaru
        setBlogPosts(posts.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  // Fungsi untuk mengecek apakah objek adalah Asset
  const isAsset = (field: unknown): field is Asset => {
    return (field as Asset)?.fields?.file !== undefined;
  };

  return (
    <section className="py-16 text-center">
      <h3 className="text-green-500 text-lg">Latest News</h3>
      <h2 className="text-3xl font-bold mt-2">Check out our blog posts</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-3 left-3 bg-[#5ECDCF] text-white p-2 rounded-md text-center">
                <p className="text-xl font-bold">{post.day}</p>
                <p className="text-sm bg-green-600 text-white px-2 py-1 rounded-b-md">
                  {post.monthYear}
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">
                {post.author} • {new Date(post.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h3>
              <a
                href={`/blogs/${post.slug}`}
                className="mt-4 inline-block text-green-600 font-semibold hover:underline transition duration-200"
              >
                CONTINUE READING →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol See More */}
      <Link href="/blogs">
        <button className="mt-16 px-6 py-3 bg-[#5ECDCF] text-black text-lg font-semibold rounded-lg hover:bg-[#5ECDCF] hover:text-white hover:cursor-pointer transition">
          See More
        </button>
      </Link>
    </section>
  );
};

export default BlogSectionHome;
