"use client";

import React from "react";

interface LoaderProps {
  type?: "default" | "card" | "list" | "circle" | "text";
  className?: string;
}

export default function Loader({ type = "default", className = "" }: LoaderProps) {
  switch (type) {
    case "card":
      return (
        <div className={`w-full p-4 bg-white rounded-lg shadow animate-pulse ${className}`}>
          <div className="h-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      );

    case "list":
      return (
        <div className={`space-y-4 animate-pulse ${className}`}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      );

    case "circle":
      return (
        <div className={`flex justify-center items-center py-6 ${className}`}>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );

    case "text":
      return (
        <div className={`text-center text-gray-500 italic animate-pulse ${className}`}>
          Loading...
        </div>
      );

    case "default":
    default:
      return (
        <div className={`max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse ${className}`}>
          <div className="md:col-span-2 space-y-4">
            <div className="h-64 bg-gray-200 rounded-lg"></div>
            <div className="h-4 bg-gray-200 w-32 rounded"></div>
            <div className="h-4 bg-gray-300 w-24 rounded"></div>
            <div className="h-6 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
            <div className="h-4 bg-gray-200 w-4/6 rounded"></div>
            <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
          </div>
          <div className="space-y-6 mt-8 md:mt-0">
            <div className="bg-[#F8F7F0] p-4 rounded-lg space-y-3">
              <div className="h-4 bg-gray-300 w-24 rounded"></div>
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-300 w-3/4 rounded"></div>
                  <div className="h-3 bg-gray-200 w-1/2 rounded"></div>
                </div>
              </div>
            </div>
            <div className="bg-[#F8F7F0] p-4 rounded-lg space-y-2">
              <div className="h-4 bg-gray-300 w-32 rounded"></div>
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-3 bg-gray-200 w-2/3 rounded"></div>
                ))}
              </div>
            </div>
            <div className="bg-[#F8F7F0] p-6 rounded-lg">
              <div className="h-4 bg-gray-300 w-24 rounded mb-4"></div>
              <div className="flex gap-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gray-300 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
  }
}
