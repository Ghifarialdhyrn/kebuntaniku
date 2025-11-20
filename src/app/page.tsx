"use client";

import { useEffect, useState } from "react";
import { createClient } from "contentful";

import AboutHome from "@/components/landing/about.landing";
import BlogSectionHome from "@/components/landing/blogs.landing";
import ContactSectionHome from "@/components/landing/contact.landing";
import Hero from "@/components/landing/hero.landing";
import ProductsHome from "@/components/landing/products.landing";
import ServicesHome from "@/components/landing/services.landing";
import Footer from "@/ui/footer";
import NavbarHome from "@/ui/navbarHome";
import ScrollToTopButton from "@/ui/scrollup";

type Product = any;
type Blog = any;

type RecentArticle = {
  title: string;
  date: string;
  slug: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [recentArticles, setRecentArticles] = useState<RecentArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    });

    const fetchData = async () => {
      try {
        const [productRes, blogRes] = await Promise.all([
          client.getEntries({ content_type: "productsKebunTaniku" }),
          client.getEntries({
            content_type: "blogKebunTaniku",
            order: ["-fields.date"],
          }),
        ]);

        const productItems = productRes.items as any[];
        const blogItems = blogRes.items as any[];

        setProducts(productItems);
        setBlogs(blogItems.slice(0, 4));
        setRecentArticles(
          blogItems.slice(0, 2).map((item: any) => ({
            title: item.fields.title || "",
            slug: item.fields.slug || "",
            date: new Date(item.fields.date).toISOString(),
          }))
        );
      } catch (err) {
        console.error("CSR fetch error:", err);
        setError("Gagal memuat data, silakan coba refresh halaman.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarHome />

      <div
        id="home"
        className="flex flex-grow justify-center items-center mb-48 px-4 sm:px-6 lg:px-0"
      >
        <Hero />
      </div>

      <div
        id="aboutHome"
        className="w-[75%] h-[500px] flex mx-auto max-w-full sm:w-[90%] sm:h-auto sm:flex-col"
      >
        <AboutHome />
      </div>

      <div
        id="productsHome"
        className="w-[75%] min-h-screen flex flex-col mx-auto mb-[-200px] sm:mb-40 mt-112 sm:mt-0"
      >
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <ProductsHome products={products} />
        )}
        {error && (
          <p className="mt-4 text-center text-red-500 text-sm">{error}</p>
        )}
      </div>

      <div
        id="servicesHome"
        className="flex flex-grow justify-center items-center mb-24 px-4 sm:px-6 lg:px-0"
      >
        <ServicesHome />
      </div>

      <div
        id="blogsHome"
        className="flex justify-center items-center mb-16 mt-16 px-4 sm:px-6 lg:px-0"
      >
        <div className="w-[75%] max-w-full sm:w-[90%]">
          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : (
            <BlogSectionHome blogs={blogs} />
          )}
        </div>
      </div>

      <div
        id="contactHome"
        className="flex justify-center items-center h-auto px-4 sm:px-6 lg:px-0 mb-16 sm:mb-24"
      >
        <div className="w-[75%] max-w-full sm:w-[90%]">
          <ContactSectionHome />
        </div>
      </div>

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
