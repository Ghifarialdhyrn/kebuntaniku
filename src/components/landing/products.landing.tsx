"use client";

import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Loader from "../global/Loader";



// Contentful Client Setup
const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export default function ProductsHome() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await contentfulClient.getEntries({
          content_type: "productsKebunTaniku",
        });
        setProducts(response.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    // Tampilkan loader saat data sedang dimuat
    return (
      <section className="py-12 bg-white w-full">
        <div className="text-center mb-10 px-4">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wide">
            Recently Added
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Latest Products
          </h2>
        </div>
        <Loader type="default" />
      </section>
    );
  }

  return (
    <section className="py-12 bg-white w-full">
      <div className="text-center mb-10 px-4">
        <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wide">
          Recently Added
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Latest Products
        </h2>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Carousel with Swiper */}
        <div className="sm:hidden pb-10 -mx-4 px-4">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {products.slice(0, 6).map((product) => {
              const rating = product.fields.rating || 0;
              const fullStars = Math.floor(rating);
              const halfStar = rating % 1 !== 0;

              return (
                <SwiperSlide key={product.sys.id}>
                  <div className="min-w-[250px] bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4 text-center">
                    <div className="relative w-full h-40 mb-4">
                      <img
                        src={`https:${product.fields.image.fields.file.url}`}
                        alt={product.fields.productName}
                        className="rounded-md object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {product.fields.productName}
                    </h3>
                    <p className="text-green-600 font-medium mb-2">
                      {product.fields.price
                        ? `Rp ${product.fields.price}`
                        : "Rp 0"}
                    </p>
                    <div className="flex justify-center gap-1 mt-auto">
                      {[...Array(5)].map((_, index) => {
                        if (index < fullStars) {
                          return (
                            <FaStar
                              key={index}
                              className="text-yellow-500 w-4 h-4"
                            />
                          );
                        } else if (index === fullStars && halfStar) {
                          return (
                            <FaStar
                              key={index}
                              className="text-yellow-400 w-4 h-4 opacity-75"
                            />
                          );
                        } else {
                          return (
                            <FaStar
                              key={index}
                              className="text-yellow-200 w-4 h-4"
                            />
                          );
                        }
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => {
            const rating = product.fields.rating || 0;
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 !== 0;

            return (
              <div
                key={product.sys.id}
                className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-5 text-center flex flex-col"
              >
                <div className="relative w-full h-48 mb-4">
                  <img
                    src={`https:${product.fields.image.fields.file.url}`}
                    alt={product.fields.productName}
                    className="rounded-md object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.fields.productName}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {product.fields.price
                    ? `Rp ${product.fields.price}`
                    : "Rp 0"}
                </p>
                <div className="flex justify-center gap-1 mt-auto">
                  {[...Array(5)].map((_, index) => {
                    if (index < fullStars) {
                      return (
                        <FaStar
                          key={index}
                          className="text-yellow-500 w-4 h-4"
                        />
                      );
                    } else if (index === fullStars && halfStar) {
                      return (
                        <FaStar
                          key={index}
                          className="text-yellow-400 w-4 h-4 opacity-75"
                        />
                      );
                    } else {
                      return (
                        <FaStar
                          key={index}
                          className="text-yellow-200 w-4 h-4"
                        />
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Button to See More */}
      <div className="text-center mt-0 sm:mt-10">
        <Link href="/products">
          <button className="px-6 py-3 bg-[#5ECDCF] text-black text-base font-semibold rounded-lg hover:bg-[#50b8b9] hover:text-white transition">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}
