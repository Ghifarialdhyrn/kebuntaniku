'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BannerAbout = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerabout.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Title */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-20 sm:mb-20 -mt-8">
          ECO-Friendly Products can be Made from Scratch
        </h1>
      </div>

      {/* Footer Stats with Carousel */}
      <div className="absolute bottom-0 w-full py-8 bg-black bg-opacity-90 text-white">
        <div className="container mx-auto relative text-gray-400 px-4">
          {/* Sayura Image */}
          <div className="hidden md:block absolute -left-10 bottom-0">
            <img
              src="/sayura.png"
              alt="Sayura"
              width={300}
              height={100}
              className="w-[200px] md:w-[300px] h-auto"
            />
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]} // ✅ tambahkan modul autoplay (opsional)
            autoplay={{ delay: 2500, disableOnInteraction: false }} // ✅ opsional
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="text-center"
          >
            {[
              "Agriculture Products",
              "Projects Completed",
              "Satisfied Clients",
              "Experts Farmers",
            ].map((item, idx) => (
              <SwiperSlide key={idx}>
                <h2 className="text-base sm:text-lg">{item}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
