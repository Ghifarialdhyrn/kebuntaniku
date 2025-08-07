import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function ProductsHome({ products }: { products: any[] }) {
  return (
    <section className="py-12 bg-white w-full mb-40 sm:mb-[-160px]">
      <div className="text-center mb-10 px-4">
        <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wide">
          Recently Added
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Latest Products
        </h2>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product, index) => {
            const rating = product.fields.rating || 0;
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 !== 0;

            return (
              <div
                key={product.sys.id}
                className={`bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-5 text-center flex flex-col ${
                  index > 2 ? "hidden sm:block" : ""
                }`}
              >
                <div className="relative w-full h-48 mb-4">
                  <img
                    src={`https:${product.fields.image.fields.file.url}`}
                    alt={product.fields.productName}
                    className="rounded-md object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.fields.productName}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {product.fields.price ? `Rp ${product.fields.price}` : "Rp 0"}
                </p>
                <div className="flex justify-center gap-1 mt-auto">
                  {[...Array(5)].map((_, i) => {
                    if (i < fullStars) {
                      return (
                        <FaStar key={i} className="text-yellow-500 w-4 h-4" />
                      );
                    } else if (i === fullStars && halfStar) {
                      return (
                        <FaStar
                          key={i}
                          className="text-yellow-400 w-4 h-4 opacity-75"
                        />
                      );
                    } else {
                      return (
                        <FaStar key={i} className="text-yellow-200 w-4 h-4" />
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <Link href="/products">
          <button className="px-6 py-3 bg-[#5ECDCF] text-black text-base font-semibold rounded-lg hover:bg-[#50b8b9] hover:text-white transition">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}
