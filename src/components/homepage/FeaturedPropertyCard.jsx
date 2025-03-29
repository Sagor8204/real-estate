import React from "react";
import Image from "next/image";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function FeaturedPropertyCard({ data }) {
  const router = useRouter();

  const handleClick = (id, name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    sessionStorage.setItem("property_id", id);
    sessionStorage.setItem("type", "featured");
    router.push(`/properties/${slug}`);
  };

  return (
    <div
      onClick={() => handleClick(data.id, data.title)}
      className="flex flex-wrap lg:flex-nowrap relative bg-white rounded-r-md group shadow-sm cursor-pointer"
    >
      <div className="w-full lg:w-1/2 overflow-hidden rounded-l-md relative">
        <Image
          src={data.image}
          width={500}
          height={500}
          alt="featured-properties-image"
          className="h-[330px] lg:h-full object-cover rounded-md lg:rounded-l-md scale-100 group-hover:scale-110 transition-all duration-700"
        />
        <Image
          src={data.avatar}
          width={250}
          height={250}
          alt="featured-properties-avatar"
          className="absolute left-5 bottom-5 w-12 h-12 rounded-full object-cover"
        />
        {data.status && (
          <span className="absolute right-5 top-5 bg-primary rounded-md text-white text-[11px] px-3 py-[2px]">
            {data.status}
          </span>
        )}
      </div>
      <div className="w-full lg:w-1/2">
        <div className="lg:mb-12 p-5">
          <h2 className="text-lg font-semibold text-black pb-2">
            {data.title}
          </h2>
          <h3 className="text-primary font-semibold pb-3">$ {data.price}</h3>
          <p className="text-[15px] pb-4">{data.desc}</p>
          <div className="flex items-center gap-5">
            <button className="w-7 h-7 rounded-md border flex items-center justify-center text-lg">
              <IoMdShare />
            </button>
            <button className="w-7 h-7 rounded-md border flex items-center justify-center text-lg">
              <CiHeart />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-around border-t px-2 py-3 lg:py-2">
          <div className="flex gap-1 items-center">
            <LiaBedSolid className="text-xl" />{" "}
            <span className="text-xs">{data.bedroom}</span>
          </div>
          <div className="flex gap-1 items-center">
            <LiaBathSolid className="text-xl" />{" "}
            <span className="text-xs">{data.bath}</span>
          </div>
          <div className="flex gap-1 items-center">
            <BsArrowsFullscreen className="text-sm" />{" "}
            <span className="text-xs">{data.sft} ft²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
