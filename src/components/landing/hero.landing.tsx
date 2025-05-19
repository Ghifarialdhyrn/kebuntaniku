import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          quality={100}
        />
      </div>

      {/* Main Content */}
<div className="relative z-10 -mt-20 sm:-mt-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-center sm:items-start max-w-screen-xl w-full text-center sm:text-left">
  <h1 className="text-yellow-400 text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
    Agriculture
  </h1>
  <h1 className="text-white text-4xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
    & Organic Market
  </h1>
  <button className="mt-4 mb-28 sm:mb-20 px-6 py-3 bg-[#5ECDCF] text-black text-base sm:text-lg font-semibold rounded-lg hover:bg-[#5db9ba] hover:text-yellow-300 transition">
    Show Now
  </button>
</div>







      {/* Features Section */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-5/6 md:w-3/4 bg-white shadow-lg rounded-xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <FeatureItem
          icon="💰"
          title="Return Policy"
          description="Money Back Guarantee"
        />
        <FeatureItem
          icon="🚚"
          title="Free Shipping"
          description="Orders Over Rp. 50.000"
        />
        <FeatureItem
          icon="🛒"
          title="Store Locator"
          description="Find Nearest Store"
        />
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-green-500 text-2xl sm:text-3xl">{icon}</div>
      <h3 className="text-sm sm:text-base font-semibold mt-1 sm:mt-2">{title}</h3>
      <p className="text-gray-500 text-xs sm:text-sm">{description}</p>
    </div>
  );
}
