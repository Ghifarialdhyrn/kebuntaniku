import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const NavbarHome: React.FC = () => {
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
        {/* Logo (Left) */}
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="Kebun Taniku" className="h-10 sm:h-12" />
        </a>

        {/* Center Menu */}
        <div className="hidden md:flex gap-10 text-base font-medium text-black">
          <a href="#home" className="hover:text-[#5ECDCF] transition">
            Home
          </a>
          <a href="#aboutHome" className="hover:text-[#5ECDCF] transition">
            About
          </a>
          <a href="#productsHome" className="hover:text-[#5ECDCF] transition">
            Products
          </a>
          <a href="#servicesHome" className="hover:text-[#5ECDCF] transition">
            Services
          </a>
          <a href="#blogsHome" className="hover:text-[#5ECDCF] transition">
            Blogs
          </a>
        </div>

        {/* Contact Button (Right) */}
        <div className="flex items-center">
          <a
            href="https://wa.me/6285951816788"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
          >
            <FaWhatsapp className="text-lg" />
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;