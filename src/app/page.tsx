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
      <div className="flex flex-grow justify-center items-center mb-48 px-4 sm:px-6 lg:px-0">
        {/* Hero section diberi padding horizontal di mobile */}
        <Hero />
      </div>

      <div
        id="aboutHome"
        className="w-[75%] h-[500px] flex mx-auto
                   max-w-full sm:w-[90%] sm:h-auto sm:flex-col"
      >
        {/* Untuk mobile: lebar 90%, tinggi auto, dan kolom */}
        <AboutHome />
      </div>

      <div
  id="productsHome"
  className="w-[75%] min-h-screen flex flex-col mx-auto mb-[-200px] sm:mb-40 mt-112 sm:mt-0"
>
  <ProductsHome />
</div>


      <div
  id="servicesHome"
  className="flex flex-grow justify-center items-center mb-24 px-4 sm:px-6 lg:px-0"
>
  <ServicesHome />
</div>

<div
  id="blogsHome"
  className="flex justify-center items-center mb-16 mt-16 px-4 sm:px-6 lg:px-0"
>
  <div className="w-[75%] max-w-full sm:w-[90%]">
    <BlogSectionHome />
  </div>
</div>

<div
  id="contactHome"
  className="flex justify-center items-center h-auto px-4 sm:px-6 lg:px-0 mb-16 sm:mb-24"
>
  <div className="w-[75%] max-w-full sm:w-[90%]">
    <ContactSectionHome />
  </div>
</div>


      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
