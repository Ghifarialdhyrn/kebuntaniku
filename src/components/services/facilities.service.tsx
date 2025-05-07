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
    <div className="absolute flex justify-center gap-6 p-6 mt-172">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-80 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-4 text-center font-semibold text-lg">
            {item.title}
          </div>
          <div className="relative h-48 w-full">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
