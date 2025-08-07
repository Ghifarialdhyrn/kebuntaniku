const products = [
  {
    id: 1,
    title: "Quality Organic Food Store",
    description: "100% ORGANIC",
    buttonText: "Order Now",
    image: "/image1.png",
  },
  {
    id: 2,
    title: "Healthy Products Everyday",
    description: "100% ORGANIC",
    buttonText: "Order Now",
    image: "/image2.png",
  },
];

export default function ServicesHome() {
  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Konten utama */}
      <div className="absolute z-10 w-full max-w-[1000px] px-4 sm:px-0">
        {/* Mobile: Vertical Stack */}
        <div className="sm:hidden flex flex-col gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-full max-w-[400px] mx-auto overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20 text-white p-4 flex flex-col justify-center">
                  <p className="text-sm font-light">{product.description}</p>
                  <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
                  <a href="https://wa.me/6285951816788">
                    <button className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#5ECDCF] hover:text-white">
                      <p className="font-bold">{product.buttonText}</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:flex gap-20 justify-center flex-wrap">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative w-[400px] overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20 text-white p-4 flex flex-col justify-center">
                  <p className="text-sm font-light">{product.description}</p>
                  <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
                  <a href="https://wa.me/6285951816788">
                    <button className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#5ECDCF] hover:text-white">
                      {product.buttonText}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
