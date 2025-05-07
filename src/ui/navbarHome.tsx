"use client";

import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const NavbarHome: React.FC = () => {
  const [cartItems, setCartItems] = useState<number>(0);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#5ECDCF] text-black text-sm py-2 flex justify-between px-16">
        <div className="flex items-center space-x-2">
          <IoLocationSharp />
          <span className="pr-8">Antapani, Bandung</span>
          <MdEmail />
          <span>kebuntaniku@gmail.com</span>
        </div>
        <div className="flex space-x-3">
          <FaTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-4 px-32 flex justify-between items-center fixed top-0 w-full z-50">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="/logo.png"
              alt="Kebun Taniku"
              className="h-16 scale-125"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-black font-semibold gap-16">
          <a
            onClick={() => handleScroll("home")}
            className="hover:text-[#5ECDCF] hover:underline cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => handleScroll("aboutHome")}
            className="hover:text-[#5ECDCF] hover:underline cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => handleScroll("productsHome")}
            className="hover:text-[#5ECDCF] hover:underline cursor-pointer"
          >
            Products
          </a>
          <a
            onClick={() => handleScroll("servicesHome")}
            className="hover:text-[#5ECDCF] hover:underline cursor-pointer"
          >
            Services
          </a>
          <a
            onClick={() => handleScroll("blogsHome")}
            className="hover:text-[#5ECDCF] hover:underline cursor-pointer"
          >
            Blogs
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/6285951816788"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-xl" />
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
