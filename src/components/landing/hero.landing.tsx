import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="filter brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-16 lg:px-48">
        <h1 className="text-yellow-300 text-5xl md:text-6xl font-bold">
          Agriculture
        </h1>
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          & Organic Market
        </h1>
        <button className="mt-6 px-6 py-3 bg-[#5ECDCF] text-black text-lg font-semibold rounded-lg hover:bg-[#5db9ba] hover:text-yellow-300 hover:cursor-pointer transition">
          Show Now
        </button>
      </div>

      {/* Features Section */}
      <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-3/4 bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <FeatureItem
          icon="💰"
          title="Return Policy"
          description="Money Back Guarantee"
        />
        <FeatureItem
          icon="🚚"
          title="Free Shipping"
          description="On All Orders Over Rp. 50.000"
        />
        <FeatureItem
          icon="🛒"
          title="Store Locator"
          description="Find Your Nearest Store"
        />
      </div>
    </section>
  );
}

// Component untuk item fitur
interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center md:items-start px-4 py-2">
      <div className="text-green-500 text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
