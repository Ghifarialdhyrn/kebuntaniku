import React from "react";

const HeroServices = () => {
  return (
    <div className="relative w-full h-[400px] z-0 mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <p className="text-sm tracking-wider">HOME / SERVICES</p>
        <h1 className="text-5xl font-bold">SERVICES</h1>
      </div>
    </div>
  );
};

export default HeroServices;
