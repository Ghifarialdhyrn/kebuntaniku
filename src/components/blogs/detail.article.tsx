"use client";

import { useEffect, useState } from "react";
import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogKebunTanikuSkeleton } from "@/contentful/types/blogKebunTaniku.type";
import { Asset } from "contentful";
import {
  FaArrowLeft,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import RichText from "../global/RichText";
import Loader from "../global/Loader"; // ⬅️ Import Loader
import { Document } from "@contentful/rich-text-types";

interface Post {
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  body: Document;
  slug: string;
}

export default function BlogPost() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [slug, setSlug] = useState<string | null>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

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

            const postData: Post = {
              title: typeof item.fields.title === "string" ? item.fields.title : "",
              author: typeof item.fields.author === "string" ? item.fields.author : "",
              date: typeof item.fields.date === "string" ? item.fields.date : "",
              category: typeof item.fields.categories === "string" ? item.fields.categories : "",
              image: imageUrl,
              body: item.fields.body || null,
              slug: typeof item.fields.slug === "string" ? item.fields.slug : "",
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

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response =
          await contentfulClient.getEntries<TypeBlogKebunTanikuSkeleton>({
            content_type: "blogKebunTaniku",
            order: ["-fields.date"],
            limit: 1,
          });

        const posts: Post[] = response.items.map((item) => {
          const banner = item.fields.banner as Asset | undefined;
          const imageUrl = banner?.fields?.file?.url
            ? `https:${banner.fields.file.url}`
            : "/default-image.jpg";

          return {
            title: typeof item.fields.title === "string" ? item.fields.title : "",
            author: typeof item.fields.author === "string" ? item.fields.author : "",
            date: typeof item.fields.date === "string" ? item.fields.date : "",
            category: typeof item.fields.categories === "string" ? item.fields.categories : "",
            image: imageUrl,
            body: item.fields.body || null,
            slug: typeof item.fields.slug === "string" ? item.fields.slug : "",
          };
        });

        setLatestPosts(posts);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  if (loading) {
    return <Loader />; // ⬅️ Gunakan Loader saat data dimuat
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  function openShareWindow(url: string) {
    const width = 600;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    window.open(
      url,
      "ShareWindow",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
    );
  }

  function handleShare(platform: string) {
    const pageUrl = encodeURIComponent(window.location.href);
    const postTitle = encodeURIComponent(post!.title);

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${postTitle}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case "pinterest":
        const media = encodeURIComponent(post!.image);
        shareUrl = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${media}&description=${postTitle}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/`;
        break;
      default:
        return;
    }

    openShareWindow(shareUrl);
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Post */}
      <div className="md:col-span-2 relative">
        <button
          onClick={() => window.history.back()}
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
        >
          <FaArrowLeft className="text-gray-600 cursor-pointer" />
        </button>
        <img
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="w-full max-w-full h-auto rounded-lg object-cover"
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
          <h1 className="text-2xl md:text-3xl font-bold mt-2">{post.title}</h1>
          <div className="text-gray-700 mt-4 text-justify space-y-4">
            {post.body && <RichText document={post.body} />}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6 mt-8 md:mt-0">
        {/* Latest Posts */}
        <div className="bg-[#F8F7F0] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Latest Posts</h2>
          {latestPosts.length > 0 && (
            <div
              className="flex items-center space-x-4 mb-3 p-2 rounded-lg hover:bg-white cursor-pointer"
              onClick={() =>
                (window.location.href = `/blogs/${latestPosts[0].slug}`)
              }
            >
              <img
                src={latestPosts[0].image}
                alt={latestPosts[0].title}
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-xs text-gray-600">
                  by {latestPosts[0].author}
                </p>
                <p className="text-sm font-medium">
                  {latestPosts[0].title}
                </p>
              </div>
            </div>
          )}
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
            <FaXTwitter
              className="cursor-pointer hover:text-blue-500"
              onClick={() => handleShare("twitter")}
              title="Share on Twitter"
            />
            <FaFacebookF
              className="cursor-pointer hover:text-blue-700"
              onClick={() => handleShare("facebook")}
              title="Share on Facebook"
            />
            <FaPinterestP
              className="cursor-pointer hover:text-red-500"
              onClick={() => handleShare("pinterest")}
              title="Share on Pinterest"
            />
            <FaLinkedinIn
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleShare("linkedin")}
              title="Share on LinkedIn"
            />
            <FaInstagram
              className="cursor-pointer hover:text-pink-600"
              onClick={() => handleShare("instagram")}
              title="Share on Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
