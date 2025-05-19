import React from "react";

const HeroAbout = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[350px] xs:h-[280px] mobile:h-[220px] z-0 mt-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: "url('/bghero.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <p className="text-sm tracking-wider">HOME / ABOUT</p>
        <h1 className="text-5xl sm:text-5xl xs:text-3xl mobile:text-3xl font-bold text-center">
          KEBUN TANIKU
        </h1>
      </div>
    </div>
  );
};

export default HeroAbout;
