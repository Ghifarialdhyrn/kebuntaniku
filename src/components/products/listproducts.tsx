"use client";

import { useState, useEffect } from "react";
import { createClient } from "contentful";

// Membuat client Contentful
const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

const ListProducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Responsif

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // max 2 item di mobile (Tailwind breakpoint < sm)
      } else {
        setItemsPerPage(8); // default desktop
      }
    };

    handleResize(); // set awal
    window.addEventListener("resize", handleResize); // update saat resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "productsKebunTaniku",
        });
        setProducts(response.items);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.fields.productName.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category ? product.fields.categories.includes(category) : true
    );

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="bg-[#E9F1EE] w-full min-h-screen py-10 px-4 sm:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-full sm:w-64 bg-white border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 w-full sm:w-64 bg-white border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          <option value="Sayuran Daun">Sayuran Daun</option>
          <option value="Sayuran Bumbu">Sayuran Bumbu</option>
          <option value="Buah">Buah</option>
          <option value="Kacang-Kacangan">Kacang-Kacangan</option>
          <option value="Umbi">Umbi</option>
          <option value="Sayuran Buah">Sayuran Buah</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product.sys.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={product.fields.image.fields.file.url}
              alt={product.fields.productName}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {product.fields.productName}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {product.fields.categories}
              </p>
              <div className="flex items-baseline justify-center gap-2 mt-2">
                <p className="text-green-600 font-bold text-base sm:text-lg">
                  {product.fields.price
                    ? `Rp ${product.fields.price
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                    : "Rp 0"}
                </p>
              </div>
              <div className="flex items-baseline justify-center gap-2 mt-2">
                <p className="text-gray-500 font-bold text-sm sm:text-base">
                  {product.fields.soldItems ? product.fields.soldItems : "0"} Sold
                </p>
              </div>
            </div>
          </div>
        ))}

        {Array.from({ length: itemsPerPage - paginatedProducts.length }).map(
          (_, index) => (
            <div
              key={`placeholder-${index}`}
              className="bg-transparent rounded-xl"
            />
          )
        )}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg text-white transition w-full sm:w-auto ${
            page === 1 ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600 font-semibold pt-1.5 text-center">
          Page {page}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * itemsPerPage >= filteredProducts.length}
          className={`px-4 py-2 rounded-lg text-white transition w-full sm:w-auto ${
            page * itemsPerPage >= filteredProducts.length
              ? "bg-gray-300"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListProducts;
