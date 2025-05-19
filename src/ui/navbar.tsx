"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blogs", path: "/blogs" },
];

const isActive = (pathname: string, path: string) => {
  if (path === "/blogs") return pathname.startsWith("/blogs");
  return pathname === path;
};

const DesktopNavbar = ({ pathname }: { pathname: string }) => (
  <div className="hidden sm:flex flex-col w-full fixed top-0 left-0 z-[1000] bg-white shadow-md">
    {/* Top Bar */}
    <div className="flex justify-between items-center py-3 px-10 text-sm text-gray-600">
      <div className="flex items-center space-x-8">
        <a href="/">
          <img src="/logo.png" alt="Agrios" className="h-12" />
        </a>
        <div className="flex space-x-5 text-gray-500">
          <FaTwitter className="hover:text-gray-700 cursor-pointer" />
          <FaFacebookF className="hover:text-gray-700 cursor-pointer" />
          <FaPinterest className="hover:text-gray-700 cursor-pointer" />
          <FaInstagram className="hover:text-gray-700 cursor-pointer" />
        </div>
      </div>
      <div className="flex space-x-14">
        <div>
          <p>Call anytime</p>
          <p className="font-semibold">+62 859 5181 6788</p>
        </div>
        <div>
          <p>Send email</p>
          <p className="font-semibold">kebuntaniku@gmail.com</p>
        </div>
        <div>
          <p>Address</p>
          <p className="font-semibold">Antapani, Bandung</p>
        </div>
      </div>
    </div>

    {/* Navigation Bar */}
    <nav
      className="flex justify-center bg-[url('/bgnav.png')] bg-center bg-cover py-4 px-10"
      aria-label="Primary Navigation"
    >
      <ul className="flex space-x-14 text-gray-600 font-semibold max-w-screen-xl w-full justify-center items-center">
        {navLinks.map(({ name, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={`${
                isActive(pathname, path)
                  ? "text-[#5ECDCF] border-b-2 border-[#5ECDCF]"
                  : "hover:text-[#5ECDCF]"
              } transition-colors duration-200`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const MobileNavbar = ({ pathname }: { pathname: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sm:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-[2000] flex items-center justify-between px-5 py-3">
        <img src="/logo.png" alt="Agrios" className="h-10" />

        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[2100] text-gray-700 bg-gray-200 border border-gray-400 rounded p-2 focus:outline-none"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden fixed top-[56px] left-0 right-0 bg-white shadow-lg z-[1900] p-6">
          <ul className="flex flex-col space-y-5 text-center">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-semibold ${
                    isActive(pathname, path)
                      ? "text-[#5ECDCF]"
                      : "text-gray-700 hover:text-[#5ECDCF]"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center space-x-8 text-[#5ECDCF] text-2xl">
            <FaTwitter className="cursor-pointer hover:text-[#3AAFA9]" />
            <FaFacebookF className="cursor-pointer hover:text-[#3AAFA9]" />
            <FaPinterest className="cursor-pointer hover:text-[#3AAFA9]" />
            <FaInstagram className="cursor-pointer hover:text-[#3AAFA9]" />
          </div>

          <div className="mt-8 text-center text-gray-700 text-sm space-y-3">
            <p>
              Call anytime:{" "}
              <span className="font-semibold">+62 859 5181 6788</span>
            </p>
            <p>
              Email:{" "}
              <span className="font-semibold">kebuntaniku@gmail.com</span>
            </p>
            <p>
              Address: <span className="font-semibold">Antapani, Bandung</span>
            </p>
          </div>
        </nav>
      )}
    </>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <DesktopNavbar pathname={pathname} />
      <MobileNavbar pathname={pathname} />
    </>
  );
};

export default Navbar;
