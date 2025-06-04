"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const products = [
  {
    id: 1,
    title: "Quality Organic Food Store",
    description: "100% ORGANIC",
    buttonText: "Order Now",
    image: "/image1.png",
  },
  {
    id: 2,
    title: "Healthy Products Everyday",
    description: "100% ORGANIC",
    buttonText: "Order Now",
    image: "/image2.png",
  },
];

export default function ServicesHome() {
  // State untuk mendeteksi ukuran layar (optional)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0">
        <img
          src="/hero2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>

      {/* Konten utama */}

      {/* Cards produk: Carousel untuk mobile, grid untuk desktop */}
      <div className="absolute z-10 w-full max-w-[1000px] px-4 sm:px-0">
        {isMobile ? (
          // Carousel mobile
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="relative rounded-lg shadow-lg overflow-hidden max-w-[400px] mx-auto">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg filter brightness-90 w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-center text-white p-4">
                    <p className="text-sm font-light">{product.description}</p>
                    <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
                    <a href="https://wa.me/6285951816788">
                      <button className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-lg cursor-pointer">
                        <p className="font-bold">{product.buttonText}</p>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Grid desktop
          <div className="flex gap-20 justify-center flex-wrap">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative rounded-lg shadow-lg w-[400px] overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg filter brightness-90 w-full h-auto"
                />
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-center text-white p-4">
                  <p className="text-sm font-light">{product.description}</p>
                  <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
                  <a href="https://wa.me/6285951816788">
                    <button className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-lg cursor-pointer">
                      {product.buttonText}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
