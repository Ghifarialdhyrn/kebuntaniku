"use client";

import { useEffect, useState } from "react";
import BlogPost from "@/components/blogs/detail.article";
import HeroBlogs from "@/components/blogs/hero.blogs";
import Footer from "@/ui/footer";

import ScrollToTopButton from "@/ui/scrollup";
import { createClient } from "contentful";
import NavbarCSR from "@/ui/cards/navbar.csr";

export default function Articles() {
  const [recentArticles, setRecentArticles] = useState<
    { title: string; date: string; slug: string }[]
  >([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
        });

        const blogRes = await client.getEntries({
          content_type: "blogKebunTaniku",
          order: ["-fields.date"],
        });

        const articles = blogRes.items.slice(0, 2).map((item: any) => ({
          title: item.fields.title || "",
          slug: item.fields.slug || "",
          date: new Date(item.fields.date).toISOString(),
        }));

        setRecentArticles(articles);
      } catch (error) {
        console.error("Client-side fetch error (Footer):", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarCSR />

      <div className="flex flex-grow justify-center items-center mb-10">
        <HeroBlogs />
      </div>

      <div className="flex flex-grow justify-center items-center mb-20">
        <BlogPost />
      </div>

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
