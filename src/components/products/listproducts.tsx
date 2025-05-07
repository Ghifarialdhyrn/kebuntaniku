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
  const [products, setProducts] = useState<any[]>([]); // Menyimpan produk dari Contentful
  const itemsPerPage = 8;

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
    <div className="p-8 w-full bg-[#E9F1EE] min-h-screen py-20 px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-64 bg-white border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 w-64 bg-white border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          <option value="Crop">Crop</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Fish">Fish</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => {
          console.log(product.fields); // Menampilkan data produk untuk debug
          return (
            <div
              key={product.sys.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.fields.image.fields.file.url}
                alt={product.fields.productName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.fields.productName}
                </h3>
                <p className="text-gray-500">{product.fields.categories}</p>
                <div className="flex items-baseline justify-center gap-2 mt-2">
                  <p className="text-green-600 font-bold text-lg">
                    {product.fields.price
                      ? `Rp ${product.fields.price
                          .toFixed(0)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                      : "Rp 0"}
                  </p>
                </div>
                <div className="flex items-baseline justify-center gap-2 mt-2">
                  <p className="text-gray-500 font-bold">
                    {product.fields.soldItems ? product.fields.soldItems : "0"}{" "}
                    Sold
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {Array.from({ length: itemsPerPage - paginatedProducts.length }).map(
          (_, index) => (
            <div
              key={`placeholder-${index}`}
              className="bg-transparent rounded-xl"
            />
          )
        )}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg text-white transition ${
            page === 1 ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600 font-semibold pt-1.5">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * itemsPerPage >= filteredProducts.length}
          className={`px-4 py-2 rounded-lg text-white transition ${
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
