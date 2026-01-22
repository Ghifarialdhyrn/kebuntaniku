"use client";

import useSWR from "swr";
import { fetchProducts } from "@/lib/fetchProducts";
import { fetchBlogs } from "@/lib/fetchBlogs";

import AboutHome from "@/components/landing/about.landing";
import BlogSectionHome from "@/components/landing/blogs.landing";
import ContactSectionHome from "@/components/landing/contact.landing";
import Hero from "@/components/landing/hero.landing";
import ProductsHome from "@/components/landing/products.landing";
import ServicesHome from "@/components/landing/services.landing";
import Footer from "@/ui/footer";
import NavbarHome from "@/ui/navbarHome";
import ScrollToTopButton from "@/ui/scrollup";

type RecentArticle = {
  title: string;
  date: string;
  slug: string;
};

export default function Home() {
  // 🔥 PRODUCTS AUTO UPDATE
  const {
    data: products,
    isLoading: loadingProducts,
    error: productsError,
  } = useSWR("products-home", fetchProducts, {
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });

  // 🔥 BLOGS AUTO UPDATE
  const {
    data: blogs,
    isLoading: loadingBlogs,
    error: blogsError,
  } = useSWR("blogs-home", fetchBlogs, {
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });

  // Footer recent articles ikut auto update
  const recentArticles: RecentArticle[] =
    blogs?.slice(0, 2).map((item: any) => ({
      title: item.fields.title || "",
      slug: item.fields.slug || "",
      date: new Date(item.fields.date).toISOString(),
    })) || [];

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarHome />

      {/* HERO */}
      <div id="home" className="mb-48">
        <Hero />
      </div>

      {/* ABOUT */}
      <div id="aboutHome" className="w-[75%] mx-auto sm:w-[90%]">
        <AboutHome />
      </div>

      {/* PRODUCTS */}
      <div
        id="productsHome"
        className="w-[75%] mx-auto min-h-screen sm:w-[90%]"
      >
        {loadingProducts && (
          <p className="text-center text-gray-500">
            Loading products...
          </p>
        )}

        {productsError && (
          <p className="text-center text-red-500">
            Gagal memuat produk
          </p>
        )}

        {products && <ProductsHome products={products} />}
      </div>

      {/* SERVICES */}
      <div id="servicesHome" className="mb-24">
        <ServicesHome />
      </div>

      {/* BLOGS */}
      <div id="blogsHome" className="mb-16">
        {loadingBlogs && (
          <p className="text-center text-gray-500">
            Loading blogs...
          </p>
        )}

        {blogsError && (
          <p className="text-center text-red-500">
            Gagal memuat blog
          </p>
        )}

        {blogs && <BlogSectionHome blogs={blogs.slice(0, 4)} />}
      </div>

      {/* CONTACT */}
      <div id="contactHome" className="mb-24">
        <ContactSectionHome />
      </div>

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
