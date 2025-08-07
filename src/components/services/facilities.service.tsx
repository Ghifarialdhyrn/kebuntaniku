import Image from "next/image";

const data = [
  {
    title: "Quality Standards",
    image: "/service-07.png",
  },
  {
    title: "Organic Farming",
    image: "/service-08.png",
  },
  {
    title: "Agriculture Products",
    image: "/service-09.png",
  },
];

export default function FacilitiesService() {
  return (
    <div className="w-full flex flex-col items-center mt-20">
      {/* Mobile: Static Scrollable Cards */}
      <div className="w-full md:hidden px-4 overflow-x-auto pb-4">
        <div className="flex gap-4" style={{ minWidth: "max-content" }}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 overflow-hidden transform hover:scale-[1.02]"
            >
              <div className="p-4 text-center font-semibold text-lg text-green-700">
                {item.title}
              </div>
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  placeholder="blur"
                  blurDataURL="/placeholder-blur.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Static Layout */}
      <div className="hidden md:flex justify-center gap-8 p-6 w-full max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-80 bg-white rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 overflow-hidden transform hover:scale-[1.02]"
          >
            <div className="p-4 text-center font-semibold text-xl text-green-700">
              {item.title}
            </div>
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
                placeholder="blur"
                blurDataURL="/placeholder-blur.png"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
