import HeroBlogs from "@/components/blogs/hero.blogs";
import ListBlog from "@/components/blogs/list.blog";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ScrollToTopButton from "@/ui/scrollup";

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow justify-center items-center mb-10">
        <HeroBlogs />
      </div>

      <div className="flex flex-grow justify-center items-center mb-20">
        <ListBlog />
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
