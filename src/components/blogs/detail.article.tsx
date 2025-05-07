"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogKebunTanikuSkeleton } from "@/contentful/types/blogKebunTaniku.type";
import { Asset } from "contentful";
import {
  FaArrowLeft,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import RichText from "../global/RichText";

interface Post {
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  body: any; // Update type to match RichText document
}

export default function BlogPost() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const url = window.location.pathname;
    const slug = url.split("/").pop() || null;
    setSlug(slug);
  }, []);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const response =
            await contentfulClient.getEntries<TypeBlogKebunTanikuSkeleton>({
              content_type: "blogKebunTaniku",
              "fields.slug": slug,
            });

          if (response.items.length > 0) {
            const item = response.items[0];
            const banner = item.fields.banner as Asset | undefined;
            const imageUrl = banner?.fields?.file?.url
              ? `https:${banner.fields.file.url}`
              : "/default-image.jpg";

            const postData = {
              title:
                typeof item.fields.title === "string" ? item.fields.title : "",
              author:
                typeof item.fields.author === "string"
                  ? item.fields.author
                  : "",
              date:
                typeof item.fields.date === "string" ? item.fields.date : "",
              category:
                typeof item.fields.categories === "string"
                  ? item.fields.categories
                  : "",
              image: imageUrl,
              body: item.fields.body || null, // Store the body as Contentful's RichText format
            };
            setPost(postData);
          } else {
            console.error("Post not found");
          }
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Post */}
      <div className="md:col-span-2 relative">
        <button
          onClick={() => window.history.back()}
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowLeft className="text-gray-600 cursor-pointer" />
        </button>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="w-[1000px] h-[400px] rounded-lg"
        />
        <div className="mt-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm">
          {new Date(post.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
          </span>
          <p className="text-gray-600 mt-2">by {post.author}</p>
          <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
          <div className="text-gray-700 mt-4 text-justify space-y-4">
            {post.body && <RichText document={post.body} />}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Latest Posts */}
        <div className="bg-[#F8F7F0] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Latest Posts</h2>
          <div className="flex items-center space-x-4 mb-3 p-2 rounded-lg hover:bg-white">
            <Image
              src={post.image}
              alt={post.title}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div>
              <p className="text-xs text-gray-600">by {post.author}</p>
              <p className="text-sm font-medium">{post.title}</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-[#F8F7F0] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {[
              "Agriculture",
              "Farm",
              "Farming",
              "Fresh Vegetables",
              "Harvest",
              "Organic Food",
            ].map((category, index) => (
              <li
                key={index}
                className="text-gray-700 hover:underline cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Share Section */}
        <div className="bg-[#F8F7F0] p-6 rounded-lg text-center">
          <h2 className="text-lg font-semibold mb-6">Share</h2>
          <div className="flex justify-center gap-10 text-gray-800 text-xl">
            <FaTwitter className="cursor-pointer hover:text-blue-500" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700" />
            <FaPinterestP className="cursor-pointer hover:text-red-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
