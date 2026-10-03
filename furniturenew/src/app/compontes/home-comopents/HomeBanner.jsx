"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import axios from "axios";

export default function HomeBanner() {
  const [sliders, setSliders] = useState([]);
  const [sliderPath, setSliderPath] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://monsta-backend-production.up.railway.app/web/";
  const baseOrigin = apiUrl.replace(/\/web\/?$/, "");

  const defaultImages = [
    "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg",
    "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg",
  ];

  useEffect(() => {
    axios
      .get(`${apiUrl}home/sliders`)
      .then((res) => res.data)
      .then((resData) => {
        if (resData.status && Array.isArray(resData.data) && resData.data.length > 0) {
          setSliders(resData.data);
          const p = resData.path;
          const resolved =
            !p || (p.includes("localhost:8000") && !apiUrl.includes("localhost:8000"))
              ? `${baseOrigin}/uploads/slider/`
              : p;
          setSliderPath(resolved);
        }
      })
      .catch((err) => {
        // Fallback gracefully to default images
      });
  }, [apiUrl, baseOrigin]);

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {sliders.length > 0
          ? sliders.map((item, idx) => (
              <SwiperSlide key={item._id || idx}>
                <img
                  src={sliderPath + item.image}
                  alt={item.title || "Slider"}
                  className="w-full h-auto object-cover max-h-[600px]"
                />
              </SwiperSlide>
            ))
          : defaultImages.map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={imgSrc}
                  alt="Furniture Banner"
                  className="w-full h-auto object-cover max-h-[600px]"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
