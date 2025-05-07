"use client";

import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { FaStar } from "react-icons/fa"; // Menggunakan ikon bintang dari react-icons
import Image from "next/image";

// Membuat client Contentful
const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export default function ProductsHome() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Mengambil data produk dari Contentful
    const fetchProducts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "productsKebunTaniku", // Ganti dengan ID content model di Contentful
        });
        setProducts(response.items);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-10 bg-white flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <p className="text-yellow-600 text-lg font-semibold">Recently Added</p>
        <h2 className="text-3xl font-bold text-gray-900">Latest Products</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16">
        {products.map((product) => {
          const rating = product.fields.rating || 0; // Mengambil rating produk dari Contentful, default 0
          const fullStars = Math.floor(rating); // Menghitung jumlah bintang penuh
          const halfStar = rating % 1 !== 0; // Cek apakah ada setengah bintang

          return (
            <div
              key={product.sys.id}
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.fields.image.fields.file.url} // Mengambil URL gambar dari Contentful
                  alt={product.fields.productName}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {product.fields.productName} {/* Nama produk */}
              </h3>
              <p className="text-green-600 font-medium">
                {product.fields.price ? `Rp ${product.fields.price}` : "Rp 0"}{" "}
                {/* Harga produk */}
              </p>
              <div className="mt-2">
                {/* Menampilkan bintang berdasarkan rating */}
                {[...Array(5)].map((_, index) => {
                  if (index < fullStars) {
                    return (
                      <FaStar
                        key={index}
                        className="inline-block w-5 h-5 text-yellow-500" // Bintang penuh berwarna kuning terang
                      />
                    );
                  } else if (index === fullStars && halfStar) {
                    return (
                      <FaStar
                        key={index}
                        className="inline-block w-5 h-5 text-yellow-400 opacity-75" // Bintang setengah
                      />
                    );
                  } else {
                    return (
                      <FaStar
                        key={index}
                        className="inline-block w-5 h-5 text-yellow-300" // Bintang kosong berwarna kuning pudar
                      />
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>

      <a href="/products">
        <button className="mt-16 px-6 py-3 bg-[#5ECDCF] text-black text-lg font-semibold rounded-lg hover:bg-[#5ECDCF] hover:text-white hover:cursor-pointer transition">
          See More
        </button>
      </a>
    </section>
  );
}
