"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const data = [
  {
    title: "Quality Standards",
    image: "/service-07.png",
  },
  {
    title: "Organic Farming",
    image: "/service-08.png",
  },
  {
    title: "Agriculture Products",
    image: "/service-09.png",
  },
];

export default function FacilitiesService() {
  return (
    <div className="w-full flex flex-col items-center mt-20">
      {/* Mobile: Carousel */}
      <div className="w-full md:hidden px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 text-center font-semibold text-lg">
                  {item.title}
                </div>
                <div className="relative h-48 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Static Layout */}
      <div className="hidden md:flex justify-center gap-6 p-6 w-full max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-80 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-4 text-center font-semibold text-lg">
              {item.title}
            </div>
            <div className="relative h-48 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
