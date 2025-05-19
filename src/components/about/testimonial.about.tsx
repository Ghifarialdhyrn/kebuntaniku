'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Rina Saputri",
    role: "Ibu Rumah Tangga",
    text: "Sejak belanja di Kebun Taniku, saya merasa lebih tenang memberikan sayuran organik untuk keluarga. Produknya segar, pengirimannya cepat, dan harganya pun sangat bersahabat!",
    image: "/hijab.png",
  },
  {
    name: "Dedi Pratama",
    role: "Petani Lokal",
    text: "Berkat Kebun Taniku, hasil panen saya bisa langsung sampai ke tangan konsumen tanpa perantara. Penghasilan saya jadi lebih stabil dan saya merasa lebih dihargai sebagai petani.",
    image: "/boss.png",
  },
  {
    name: "Andi Wijaya",
    role: "Pengusaha Kafe Sehat",
    text: "Kami butuh pasokan buah dan sayuran organik setiap hari. Kebun Taniku selalu memberikan kualitas terbaik, membuat menu di kafe kami semakin dipercaya pelanggan.",
    image: "/boss.png",
  },
  {
    name: "Maya Lestari",
    role: "Mahasiswa Pecinta Lingkungan",
    text: "Kebun Taniku bukan cuma soal belanja produk segar, tapi juga soal mendukung gerakan lokal dan keberlanjutan. Saya bangga jadi bagian dari perubahan ini.",
    image: "/woman.png",
  },
  {
    name: "Siti Aisyah",
    role: "Pengusaha Catering Sehat",
    text: "Kebun Taniku selalu menyediakan bahan makanan organik yang berkualitas. Ini sangat membantu kami dalam menyediakan makanan sehat bagi pelanggan kami.",
    image: "/hijab.png",
  },
  {
    name: "Budi Santoso",
    role: "Ahli Gizi",
    text: "Sebagai ahli gizi, saya selalu merekomendasikan produk organik. Kebun Taniku memberikan sayuran dan buah yang tidak hanya sehat, tetapi juga berkualitas tinggi.",
    image: "/boss.png",
  },
];

const TestimonialAbout = () => {
  return (
    <div
      className="py-16 md:py-20 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/bgtesti.png')" }}
    >
      <div className="container mx-auto text-center mb-12 md:mb-16 px-4">
        <h3 className="text-yellow-500 text-lg md:text-xl mb-2">Our Testimonials</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">What They Say</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center text-center mx-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-5 sm:mb-6"
                />
                <p className="text-gray-600 mb-5 sm:mb-6 italic text-sm sm:text-base">&quot;{testimonial.text}&quot;</p>
                <h4 className="text-md sm:text-lg font-bold text-gray-900">{testimonial.name}</h4>
                <span className="text-xs sm:text-sm text-green-600 mt-1">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialAbout;
