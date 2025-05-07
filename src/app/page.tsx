import AboutHome from "@/components/landing/about.landing";
import BlogSectionHome from "@/components/landing/blogs.landing";
import ContactSectionHome from "@/components/landing/contact.landing";
import Hero from "@/components/landing/hero.landing";
import ProductsHome from "@/components/landing/products.landing";
import ServicesHome from "@/components/landing/services.landing";
import Footer from "@/ui/footer";
import NavbarHome from "@/ui/navbarHome";
import ScrollToTopButton from "@/ui/scrollup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarHome />
      <div className="flex flex-grow justify-center items-center mb-48">
        <Hero />
      </div>

      <div id="aboutHome" className="w-[75%] h-[500px] flex mx-auto mb-16">
        <AboutHome />
      </div>

      <div
        id="productsHome"
        className="w-[75%] min-h-screen flex flex-col mx-auto mb-40"
      >
        <ProductsHome />
      </div>

      <div
        id="servicesHome"
        className="flex flex-grow justify-center items-center mb-[-100px]"
      >
        <ServicesHome />
      </div>

      <div
        id="blogsHome"
        className="flex justify-center items-center min-h-screen mb-[-100px]"
      >
        <div className="w-[75%]">
          <BlogSectionHome />
        </div>
      </div>

      <div
        id="contactHome"
        className="flex justify-center items-center h-[700px]"
      >
        <div className="w-[75%]">
          <ContactSectionHome />
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
