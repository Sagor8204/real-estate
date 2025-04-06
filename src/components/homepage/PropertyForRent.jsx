"use client";
import React from "react";
import { propertiesData } from "@/common/data";
import Heading from "../ui/Heading";
import PropertyCard from "./PropeertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import styles from "../../app/styles/Home.module.css";

export default function PropertyForRent() {
  return (
    <div className="pb-20 bg-white overflow-hidden">
      <Heading
        title="Properties for Rent"
        desc="These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
      />

      <div
        className={`max-w-[1140px] mx-auto px-5 lg:px-0 relative ${styles.properSwiper}`}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={32}
          navigation={{
            nextEl: ".swiper-next-button",
            prevEl: ".swiper-prev-button",
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="mySwiper"
        >
          {propertiesData.map((property) => (
            <SwiperSlide key={property?.id}>
              <PropertyCard data={property} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="hidden swiper-next-button absolute top-[38%] translate-y-[-50%] right-[-70px] bg-[#f7f8f8] w-10 rounded-md h-10 lg:flex items-center justify-center border text-[#0274e2]">
          <FaArrowRightLong />
        </button>
        <button className="hidden swiper-prev-button absolute top-[38%] translate-y-[-50%] left-[-70px] bg-[#f7f8f8] w-10 rounded-md h-10 lg:flex items-center justify-center border text-[#0274e2]">
          <FaArrowLeftLong />
        </button>
      </div>
    </div>
  );
}
