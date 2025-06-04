"use client";

import { useEffect, useState } from "react";
import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogKebunTanikuSkeleton } from "@/contentful/types/blogKebunTaniku.type";
import { Entry, Asset } from "contentful";
import Loader from "../global/Loader";

interface Post {
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function ListBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // ✅ Loading State
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("name");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(6);
      }
    }
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // ✅ Start Loading
      try {
        const response =
          await contentfulClient.getEntries<TypeBlogKebunTanikuSkeleton>({
            content_type: "blogKebunTaniku",
          });

        const mappedPosts = response.items.map(
          (item: Entry<TypeBlogKebunTanikuSkeleton>) => {
            const banner = item.fields.banner as Asset | undefined;
            const imageUrl = banner?.fields?.file?.url
              ? `https:${banner.fields.file.url}`
              : "/default-image.jpg";

            return {
              title:
                typeof item.fields.title === "string"
                  ? item.fields.title
                  : Object.values(item.fields.title)[0] || "",
              author:
                typeof item.fields.author === "string"
                  ? item.fields.author
                  : Object.values(item.fields.author)[0] || "",
              date:
                typeof item.fields.date === "string"
                  ? item.fields.date
                  : Object.values(item.fields.date)[0] || "",
              category:
                typeof item.fields.categories === "string"
                  ? item.fields.categories
                  : Object.values(item.fields.categories)[0] || "",
              image: imageUrl,
              slug:
                typeof item.fields.slug === "string"
                  ? item.fields.slug
                  : Object.values(item.fields.slug)[0] || "",
            };
          }
        );

        setPosts(mappedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // ✅ End Loading
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "All" || post.category === filter)
    )
    .sort((a, b) => {
      if (sort === "name") return a.title.localeCompare(b.title);
      if (sort === "date")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      return 0;
    });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  return (
    <div className="w-full flex flex-col items-center mx-auto px-4 sm:px-6 py-6 max-w-7xl">
      {/* Search, Filter, Sort */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center mb-6 w-full">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-auto shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="All">All Categories</option>
          <option value="Urban Farming">Urban Farming</option>
          <option value="Technology">Technology</option>
          <option value="Agronomy">Agronomy</option>
          <option value="Organic Farming">Organic Farming</option>
          <option value="Livestock">Livestock</option>
          <option value="Harvest">Harvest</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-auto shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="name">Name</option>
          <option value="date">Release Date</option>
        </select>
      </div>

      {/* Loading Spinner menggunakan Loader */}
      {loading ? (
        <Loader type="circle" className="w-full py-10" />
      ) : (
        <>
          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {paginatedPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl duration-300 w-full"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-sm rounded-md">
                    {post.category}
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-between h-full">
                  <p className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">by {post.author}</p>
                  <a
                    href={`/blogs/${post.slug}`}
                    className="text-green-600 font-medium mt-2 text-right text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center mt-6 gap-2 w-full">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  index + 1 === currentPage
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
