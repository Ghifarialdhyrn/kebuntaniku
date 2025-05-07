import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Descriptions = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute top-5 left-5 bg-lime-300 w-[250px] h-[250px] rounded-xl -z-10"></div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/desc1.png"
              alt="Agriculture"
              width={400}
              height={500}
              className="w-[400px] h-[500px] object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/desc2.png"
              alt="Farmer"
              width={250}
              height={270}
              className="w-[250px] h-[270px] object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col space-y-4 p-4">
          <p className="text-yellow-600 font-semibold">Get to Know Us</p>
          <h1 className="text-5xl font-bold text-gray-900 w-[600px]">
            Kebun Taniku: Jembatan Petani dan Konsumen
          </h1>
          <p className="text-green-600 text-xl text-justify">
            Kebun Taniku hadir untuk menghubungkan petani lokal dengan
            masyarakat Kota Bandung, menyediakan sayuran dan buah segar
            berkualitas langsung dari kebun.
          </p>
          <p className="text-gray-600 text-justify">
            Didirikan oleh lima pemuda Bandung, kami berkomitmen mempercepat
            distribusi, meningkatkan kesejahteraan petani, dan mendorong gaya
            hidup sehat melalui produk organik.
          </p>

          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Distribusi cepat dan efisien</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Produk segar dan sehat</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Dukungan penuh untuk petani lokal</span>
            </li>
          </ul>

          <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
