"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarHome: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#5ECDCF] text-black text-xs sm:text-sm py-1.5 px-4 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
        <div className="flex items-center gap-2 flex-wrap justify-center text-center sm:text-left">
          <IoLocationSharp />
          <span>Antapani, Bandung</span>
          <MdEmail />
          <span>kebuntaniku@gmail.com</span>
        </div>
        <div className="flex space-x-3 text-lg pt-1 sm:pt-0">
          <FaTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-3 px-4 sm:px-6 md:px-12 lg:px-32 flex justify-between items-center fixed top-0 w-full z-50">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Kebun Taniku" className="h-10 sm:h-12" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
          {["home", "aboutHome", "productsHome", "servicesHome", "blogsHome"].map((id, idx) => (
            <span
              key={id}
              onClick={() => handleScroll(id)}
              className="cursor-pointer hover:text-[#5ECDCF] transition"
            >
              {["Home", "About", "Products", "Services", "Blogs"][idx]}
            </span>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <a
            href="https://wa.me/6285951816788"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-lg" />
            <span>Contact</span>
          </a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-black">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[65px] w-full bg-white shadow-md px-4 py-6 space-y-4 z-40 transition-all duration-200 ease-in-out">
          {["home", "aboutHome", "productsHome", "servicesHome", "blogsHome"].map((id, idx) => (
            <div
              key={id}
              onClick={() => handleScroll(id)}
              className="text-black font-medium text-sm hover:text-[#5ECDCF] cursor-pointer"
            >
              {["Home", "About", "Products", "Services", "Blogs"][idx]}
            </div>
          ))}
          <a
            href="https://wa.me/6285951816788"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-lg" />
            <span>Contact</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default NavbarHome;
