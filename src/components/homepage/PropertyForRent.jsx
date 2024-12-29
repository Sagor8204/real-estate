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

export default function PropertyForRent() {
  return (
    <div className="pb-20">
      <Heading
        title="Properties for Rent"
        desc="These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
      />

      <div className="max-w-[1030px] mx-auto -mt-5">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          slidesPerView={3}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {propertiesData.map((property) => (
            <SwiperSlide key={property?.id}>
              <PropertyCard data={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
