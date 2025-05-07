import React from "react";

const BannerServices = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerabout.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative flex flex-col pl-52 justify-center h-full text-white z-10">
        <h1 className="text-6xl font-bold w-100 leading-20">
          Agriculture Matters to the Future of Development
        </h1>
      </div>
    </div>
  );
};

export default BannerServices;
