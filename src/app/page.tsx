// app/(pages)/page.tsx atau app/page.tsx (tergantung struktur Next.js kamu)

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

export default async function Home() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  });

  let products: any[] = [];
  let blogs: any[] = [];
  let recentArticles: { title: string; date: string; slug: string }[] = [];

  try {
    const [productRes, blogRes] = await Promise.all([
      client.getEntries({ content_type: "productsKebunTaniku" }),
      client.getEntries({ content_type: "blogKebunTaniku", order: ["-fields.date"] }),
    ]);

    products = productRes.items;
    blogs = blogRes.items.slice(0, 4);
    recentArticles = blogRes.items.slice(0, 2).map((item: any) => ({
      title: item.fields.title || "",
      slug: item.fields.slug || "",
      date: new Date(item.fields.date).toISOString(),
    }));
  } catch (error) {
    console.error("SSR fetch error:", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarHome />
      <div id="home" className="flex flex-grow justify-center items-center mb-48 px-4 sm:px-6 lg:px-0">
        <Hero />
      </div>
      <div id="aboutHome" className="w-[75%] h-[500px] flex mx-auto max-w-full sm:w-[90%] sm:h-auto sm:flex-col">
        <AboutHome />
      </div>
      <div id="productsHome" className="w-[75%] min-h-screen flex flex-col mx-auto mb-[-200px] sm:mb-40 mt-112 sm:mt-0">
        <ProductsHome products={products} />
      </div>
      <div id="servicesHome" className="flex flex-grow justify-center items-center mb-24 px-4 sm:px-6 lg:px-0">
        <ServicesHome />
      </div>
      <div id="blogsHome" className="flex justify-center items-center mb-16 mt-16 px-4 sm:px-6 lg:px-0">
        <div className="w-[75%] max-w-full sm:w-[90%]">
          <BlogSectionHome blogs={blogs} />
        </div>
      </div>
      <div id="contactHome" className="flex justify-center items-center h-auto px-4 sm:px-6 lg:px-0 mb-16 sm:mb-24">
        <div className="w-[75%] max-w-full sm:w-[90%]">
          <ContactSectionHome />
        </div>
      </div>
      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
