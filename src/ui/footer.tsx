import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";

interface BlogPost {
  title: string;
  date: string;
  slug: string;
}

interface FooterProps {
  articles: BlogPost[];
}

export default function Footer({ articles }: FooterProps) {
  return (
    <footer className="bg-[#161611] text-white py-12 px-6 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-8">
        {/* Logo & Description */}
        <div>
          <Image
            src="/logo.png"
            alt="Agriculture Logo"
            width={500}
            height={96}
            className="h-20 sm:h-24 mb-4 object-contain"
          />
          <p className="text-gray-400 text-justify text-sm sm:text-base leading-relaxed">
            Kebun Taniku adalah platform yang menghubungkan petani dan
            masyarakat di Kota Bandung untuk mendistribusikan sayuran dan buah
            organik segar, mendukung petani, dan mendorong gaya hidup sehat.
            Didirikan oleh lima pemuda lokal.
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="p-2 bg-black rounded-full hover:bg-[#5ECDCF] transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-black rounded-full hover:bg-[#5ECDCF] transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-black rounded-full hover:bg-[#5ECDCF] transition"
            >
              <FaPinterest size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-black rounded-full hover:bg-[#5ECDCF] transition"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="pl-20">
          <h3 className="text-lg font-semibold">Explore</h3>
          <div className="w-10 h-1 bg-[#5ECDCF] my-2"></div>
          <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Articles */}
        <div className="pr-10">
          <h3 className="text-lg font-semibold">Articles</h3>
          <div className="w-10 h-1 bg-[#5ECDCF] my-2"></div>
          <div className="text-gray-400 space-y-4 text-sm sm:text-base">
            {articles.map((article, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white truncate">
                  {article.title}
                </h4>
                <p className="text-yellow-500 text-xs sm:text-sm">
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
          <div className="text-gray-400 space-y-2 text-sm sm:text-base">
            <p className="flex items-center space-x-2">
              <FiPhone className="text-[#5ECDCF]" />
              <span>+62 859 5181 6788</span>
            </p>
            <p className="flex items-center space-x-2">
              <FiMail className="text-[#5ECDCF]" />
              <span>kebuntaniku@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FiMapPin className="text-[#5ECDCF]" />
              <span>Antapani, Bandung</span>
            </p>
          </div>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l-lg bg-gray-800 text-white w-full text-sm focus:outline-none"
            />
            <button className="bg-[#5ECDCF] p-2 rounded-r-lg flex items-center justify-center">
              <a href="#">
                <FaPaperPlane size={16} />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4 text-xs sm:text-sm">
        <p>© All Copyright 2025 by Kebun Taniku</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
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
