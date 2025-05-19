"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Agriculture Products",
    icon: "🚜",
    image: "/service-01.png",
  },
  {
    title: "Organic Products",
    icon: "🌱",
    image: "/service-02.png",
  },
  {
    title: "Fresh Vegetables",
    icon: "🥕",
    image: "/service-03.png",
  },
  {
    title: "Dairy Products",
    icon: "🥛",
    image: "/service-04.png",
  },
];

const ServicesCards: React.FC = () => {
  return (
    <div className="w-full px-4">
      {/* Carousel untuk mobile */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-4">
                <div className="relative bg-white rounded-xl shadow-lg w-full h-64 overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative -mt-12 bg-white text-black p-4 w-full rounded-xl flex flex-col items-center shadow-2xl z-10">
                  <div className="absolute -top-8 w-16 h-16 rounded-full bg-[#C5CE38] flex justify-center items-center">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h2 className="text-md font-bold mt-8 text-center">{service.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid untuk tablet dan desktop */}
      <div className="hidden md:flex gap-6 justify-center items-center flex-wrap">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="relative bg-white rounded-xl shadow-lg w-56 h-64 overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative -mt-12 bg-white text-black p-4 w-[200px] h-[100px] rounded-xl flex flex-col items-center shadow-2xl z-10">
              <div className="absolute -top-8 w-16 h-16 rounded-full bg-[#C5CE38] flex justify-center items-center">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h2 className="text-md font-bold mt-8 text-center">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
