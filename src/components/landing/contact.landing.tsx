"use client";

import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ContactSectionHome = () => {
  return (
    <section className="bg-green-500 text-white relative rounded-lg ">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="md:flex md:space-x-6 md:space-y-0"
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {/* Form Section */}
        <SwiperSlide>
          <div className="bg-gray-100 p-6 sm:p-10 flex items-center justify-center relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <div className="max-w-md w-full bg-white p-6 sm:p-8 rounded-lg shadow-lg z-10">
              <h3 className="text-green-600 text-lg font-semibold">Have Questions?</h3>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-black">Send us a message</h2>
              <form className="mt-6 space-y-4 text-black">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full sm:w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full sm:w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <textarea
                  placeholder="Tell Us About Project *"
                  className="w-full px-4 py-3 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition"
                >
                  <FaPaperPlane />
                  Get In Touch
                </button>
              </form>
            </div>

            {/* Gambar Petani - sembunyikan di mobile */}
            <div className="absolute left-[-10px] bottom-0 hidden md:block">
              <Image
                src="/petani.png"
                alt="Farmer Illustration"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Contact Information */}
        <SwiperSlide>
          <div className="p-6 sm:p-10 flex flex-col justify-center relative rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
            <h2 className="text-2xl sm:text-3xl font-bold relative inline-block pb-5 text-white">
              Contact Information
              <span className="absolute bottom-0 left-0 h-1 w-full bg-yellow-500"></span>
            </h2>
            <p className="mt-4 text-base sm:text-lg">
              Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
            </p>
            <div className="mt-6 space-y-4 text-white">
              <div>
                <h3 className="font-bold text-lg">Hotline</h3>
                <p>+4733378901</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Our Location</h3>
                <p>55 Main Street, The Grand Avenue 2nd Block, New York City</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Official Email</h3>
                <p>info@agrul.com</p>
              </div>
            </div>

            {/* Gambar Padi - sembunyikan di mobile */}
            <div className="absolute right-[-50px] -bottom-32 hidden md:block">
              <Image
                src="/padi.png"
                alt="Rice Plant Illustration"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ContactSectionHome;
