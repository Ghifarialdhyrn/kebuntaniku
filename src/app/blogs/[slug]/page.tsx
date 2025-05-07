import BlogPost from "@/components/blogs/detail.article";
import HeroBlogs from "@/components/blogs/hero.blogs";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ScrollToTopButton from "@/ui/scrollup";

export default function DetailBlogs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow justify-center items-center mb-10">
        <HeroBlogs />
      </div>

      <div className="flex flex-grow justify-center items-center mb-20">
        <BlogPost />
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
