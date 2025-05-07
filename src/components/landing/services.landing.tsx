import Image from "next/image";

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

export default function LandingPage() {
  return (
    <div className="relative w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0">
        <Image
          src="/hero2.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="filter brightness-50"
        />
      </div>
      <div className="relative z-10 text-center text-white w-[1000px]">
        <h1 className="text-6xl font-bold mt-20 mb-10">
          Be Healthy & Eat Only Fresh Organic Vegetables
        </h1>
        <a href="/services">
        <button className="mt-4 px-6 py-2 bg-[#5ECDCF] text-black rounded-lg font-semibold hover:bg-[#5ECDCF] hover:text-white hover:cursor-pointer transition">
          Learn More
        </button>
        </a>
      </div>
      <div className="absolute z-10 mb-[500px] flex gap-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg shadow-lg w-[400px] overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={800}
              height={800}
              className="rounded-lg filter brightness-90 w-full h-auto"
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-center text-white p-4 ">
              <p className="text-sm font-light">{product.description}</p>
              <h2 className="text-3xl font-bold mt-2">{product.title}</h2>
              <a href="https://wa.me/6285951816788">
                <button className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-lg cursor-pointer">
                  {product.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
