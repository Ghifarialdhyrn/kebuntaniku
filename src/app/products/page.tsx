import HeroProducts from "@/components/products/hero.products";
import ListProducts from "@/components/products/listproducts";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ScrollToTopButton from "@/ui/scrollup";

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow justify-center items-center">
        <HeroProducts />
      </div>

      <div className="w-full flex flex-grow justify-center items-center">
        <ListProducts />
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
