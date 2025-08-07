"use client";

import { useEffect, useState } from "react";
import HeroProducts from "@/components/products/hero.products";
import ListProducts from "@/components/products/listproducts";
import Footer from "@/ui/footer";

import ScrollToTopButton from "@/ui/scrollup";
import { createClient } from "contentful";
import NavbarCSR from "@/ui/cards/navbar.csr";

export default function Products() {
  const [recentArticles, setRecentArticles] = useState<
    { title: string; date: string; slug: string }[]
  >([]);

  useEffect(() => {
    const fetchRecentArticles = async () => {
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
        console.error("Client-side fetch error:", error);
      }
    };

    fetchRecentArticles();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarCSR />

      <div className="flex flex-grow justify-center items-center">
        <HeroProducts />
      </div>

      <div className="w-full flex flex-grow justify-center items-center">
        <ListProducts />
      </div>

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
