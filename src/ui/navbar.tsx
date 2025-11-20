import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blogs", path: "/blogs" },
];

// Logic active menu
function isActive(pathname: string, path: string) {
  if (path === "/blogs") return pathname.startsWith("/blogs");
  return pathname === path;
}

type NavbarProps = {
  currentPath: string;
};

export default function NavbarSSR({ currentPath }: NavbarProps) {
  const pathname = currentPath;

  return (
    <div className="w-full z-[1000]">
      <div className="hidden sm:flex flex-col fixed top-0 left-0 w-full bg-white shadow-md">
        {/* TOP BAR */}
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

        {/* NAV MENU */}
        <nav className="flex justify-center bg-[url('/bgnav.png')] bg-center bg-cover py-4 px-10">
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
    </div>
  );
}
