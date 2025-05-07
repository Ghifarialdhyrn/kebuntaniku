import Image from "next/image";
import React from "react";

const BannerAbout = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerabout.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white z-10">
        <h1 className="text-5xl font-bold mb-8">
          ECO-Friendly Products can be Made from Scratch
        </h1>
      </div>

      {/* Footer Stats */}
      <div className="absolute bottom-0 w-full py-8 bg-black bg-opacity-90 text-white">
        <div className="container mx-auto flex justify-center items-center gap-16 relative text-gray-400">
          <div className="absolute left-[-50px]">
            <img src="/sayura.png" alt="" width={300} height={100} className="w-[300px] h-[100px]" />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-base">Agriculture Products</h2>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-base">Projects Completed</h2>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-base">Satisfied Clients</h2>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-base">Experts Farmers</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
