import React from "react";
import Link from "next/link";

export default function NewSection() {
  return (
    <section
      className="w-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] my-5 relative flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg)",
      }}
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 sm:px-12 py-10">
        <div className="max-w-[650px]">
          <h2 className="font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            New Trending Collection
          </h2>
          <p className="py-3 sm:py-4 text-sm sm:text-base md:text-lg text-gray-700">
            We Believe That Good Design is Always in Season
          </p>
          <div className="pt-2">
            <Link
              href="/product"
              className="inline-block border border-[#C09578] hover:bg-[#C09578] uppercase px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#C09578] hover:text-white transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
