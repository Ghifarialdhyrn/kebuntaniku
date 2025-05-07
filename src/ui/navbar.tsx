"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagram,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
  ];

  const isActive = (path: string) => {
    if (path === "/blogs") {
      return pathname.startsWith("/blogs");
    }
    return pathname === path;
  };

  return (
    <div className="w-full absolute z-20">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-4 px-16 text-sm">
        {/* Logo and Social Icons */}
        <div className="flex items-center space-x-6">
          <img src="/logo.png" alt="Agrios" className="h-12" />
          <div className="flex space-x-4">
            <FaTwitter className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaFacebookF className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaPinterest className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <FaInstagram className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex space-x-12">
          <div className="flex flex-col items-start">
            <span className="text-gray-700">Call anytime</span>
            <span className="font-semibold">+62 859 5181 6788</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700">Send email</span>
            <span className="font-semibold">kebuntaniku@gmail.com</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700">Address</span>
            <span className="font-semibold">Antapani, Bandung</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="flex justify-center items-center py-3 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgnav.png')" }}
      >
        {/* Navigation Links */}
        <div className="flex space-x-8 text-gray-500 font-semibold gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                isActive(link.path)
                  ? "font-bold text-black pointer-events-none"
                  : "hover:text-[#5ECDCF]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
