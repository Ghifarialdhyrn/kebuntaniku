"use client";

import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

const ContactSectionHome = () => {
  return (
    <section className="flex flex-col md:flex-row bg-green-500 text-white relative rounded-lg">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-gray-100 p-10 flex items-center justify-center relative rounded-l-lg">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg z-10">
          <h3 className="text-green-600 text-lg font-semibold">
            Have Questions?
          </h3>
          <h2 className="text-3xl font-bold mt-2 text-black">
            Send us a message
          </h2>
          <form className="mt-6 space-y-4 text-black">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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

        {/* Gambar Petani */}
        <div className="absolute left-[-80px] bottom-0 hidden md:block">
          <Image
            src="/petani.png"
            alt="Farmer Illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center relative">
        <h2 className="text-3xl font-bold relative inline-block pb-5">
          Contact Information
          <span className="absolute bottom-0 left-0 h-1 w-full bg-yellow-500"></span>
        </h2>
        <p className="mt-4 text-lg">
          Plan upon yet way get cold spot its week. Almost do am or limits
          hearts. Resolve parties but why she shewing.
        </p>
        <div className="mt-6 space-y-4">
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

        {/* Gambar Padi */}
        <div className="absolute right-[-50px] bottom-0 hidden md:block">
          <Image
            src="/padi.png"
            alt="Rice Plant Illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSectionHome;
