import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Agriculture Products",
    icon: "🚜",
    image: "/service-01.png",
  },
  {
    title: "Organic Products",
    icon: "🌱",
    image: "/service-02.png",
  },
  {
    title: "Fresh Vegetables",
    icon: "🥕",
    image: "/service-03.png",
  },
  {
    title: "Dairy Products",
    icon: "🥛",
    image: "/service-04.png",
  },
];

const ServicesCards: React.FC = () => {
  return (
    <div className="flex gap-6 justify-center items-center p-10">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <div className="relative bg-white rounded-xl shadow-lg w-56 h-64 overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute mt-48 bg-white text-black p-4 w-[200px] h-[100px] rounded-xl flex flex-col items-center shadow-2xl">
            <div className="absolute w-16 h-16 rounded-full bg-[#C5CE38] flex justify-center items-center bottom-16">
              <span className="text-4xl">{service.icon}</span>
            </div>
            <h2 className="text-md font-bold h-full mt-8">{service.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;
