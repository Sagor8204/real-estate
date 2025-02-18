"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegImage } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { IoLocationSharp } from "react-icons/io5";
import styles from "../../app/styles/Properties.module.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`${styles.gallery_slider} relative`}>
      <span className="absolute top-4 right-4 z-50 bg-primary text-white px-5 py-1 text-xs rounded-[4px]">
        Active
      </span>
      <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
        <span className="bg-primary text-white p-3 rounded-md cursor-pointer">
          <FaRegImage />
        </span>
        <span className="bg-black/50 text-white p-3 rounded-md cursor-pointer hover:bg-primary transition-all duration-300">
          <IoLocationSharp />
        </span>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/assets/properties/property1image1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image5.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image4.webp" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/properties/property1image1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image5.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/properties/property1image4.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
