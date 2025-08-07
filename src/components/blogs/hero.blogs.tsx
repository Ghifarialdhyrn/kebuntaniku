"use client";

import React from "react";

const HeroBlogs = () => {
  return (
    <div className="relative w-full h-[400px] z-0 mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/hero1.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <p className="text-sm tracking-wider">HOME / BLOGS</p>
        <h1 className="text-5xl font-bold">ARTICLES</h1>
      </div>
    </div>
  );
};

export default HeroBlogs;
