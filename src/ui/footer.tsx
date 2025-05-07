"use client";

import { useEffect, useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import contentfulClient from "@/contentful/contentfulClient";
import { Entry } from "contentful";
import Image from "next/image";

interface BlogPost {
  title: string;
  date: string;
  slug: string;
}

export default function Footer() {
  const [articles, setArticles] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "blogKebunTaniku",
          order: ["-fields.date"],
        });        

        const posts = response.items.map((item) => {
          const blogItem = item as Entry<any>;
        
          const rawTitle = blogItem.fields.title;
          const rawSlug = blogItem.fields.slug;
          const rawDate = blogItem.fields.date;
        
          const title = typeof rawTitle === "string" ? rawTitle : String(rawTitle ?? "");
          const slug = typeof rawSlug === "string" ? rawSlug : String(rawSlug ?? "");
          const date =
            typeof rawDate === "string" || typeof rawDate === "number"
              ? new Date(rawDate)
              : new Date();
        
          return {
            title,
            date: date.toISOString(),
            slug,
          };
        });
        

        setArticles(posts.slice(0, 2)); // Ambil hanya 2 artikel terbaru
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <footer className="bg-[#161611] text-white py-12 px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Image src="/logo.png" alt="Agriculture Logo" width={500} height={96} className="h-24 mb-4" />
          <p className="text-gray-400 text-justify">
            Kebun Taniku adalah platform yang menghubungkan petani dan
            masyarakat di Kota Bandung untuk mendistribusikan sayuran dan buah
            organik segar, mendukung petani, dan mendorong gaya hidup sehat.
            Didirikan oleh lima pemuda lokal.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 bg-black rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-black rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-black rounded-full">
              <FaPinterest />
            </a>
            <a href="#" className="p-2 bg-black rounded-full">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-semibold">Explore</h3>
          <div className="w-10 h-1 bg-[#5ECDCF] my-2"></div>
          <ul className="text-gray-400 space-y-2">
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* News Section */}
        <div>
          <h3 className="text-lg font-semibold">Articles</h3>
          <div className="w-10 h-1 bg-[#5ECDCF] my-2"></div>
          <div className="text-gray-400 space-y-4">
            {articles.map((article, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white">{article.title}</h4>
                <p className="text-yellow-500 text-sm">
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="w-10 h-1 bg-[#5ECDCF] my-2"></div>
          <div className="text-gray-400 space-y-2">
            <p className="flex items-center space-x-2">
              <FiPhone className="text-[#5ECDCF]" />{" "}
              <span>+62 859 5181 6788</span>
            </p>
            <p className="flex items-center space-x-2">
              <FiMail className="text-[#5ECDCF]" />{" "}
              <span>kebuntaniku@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FiMapPin className="text-[#5ECDCF]" />{" "}
              <span>Antapani, Bandung</span>
            </p>
          </div>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l-lg bg-gray-800 text-white w-full focus:outline-none"
            />
            <button className="bg-[#5ECDCF] p-2 rounded-r-lg">
              <a href="#">
                <FaPaperPlane />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>© All Copyright 2025 by Kebun Taniku</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
