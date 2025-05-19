import React from "react";

const BannerServices = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerabout.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative flex flex-col px-4 md:pl-52 justify-center h-full text-white z-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight md:leading-[4rem] max-w-4xl">
          Agriculture Matters to the Future of Development
        </h1>
      </div>
    </div>
  );
};

export default BannerServices;
