import Image from "next/image";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { IoVideocamSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import styles from "@/app/styles/Home.module.css";
import { useRouter } from "next/navigation";

export default function PropertyCard({ data }) {
  const router = useRouter();

  const handleClick = (id, name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    sessionStorage.setItem("property_id", id);
    router.push(`/properties/${slug}`);
  };

  return (
    <div
      onClick={() => handleClick(data.id, data.title)}
      className={`bg-white rounded-md shadow-sm overflow-hidden cursor-pointer ${styles.property_card}`}
    >
      <div className="h-[230px] overflow-hidden relative">
        <Image
          width={1000}
          height={1000}
          src={data?.image}
          alt="property-image"
          className={`rounded-t-md h-full ${styles.property_card_image}`}
        />

        {/* Radial Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 40%)",
          }}
        ></div>

        {/* status section */}
        <div className="absolute top-2 left-0 w-full flex justify-between items-center px-2">
          {data?.status?.[0] && (
            <span className="bg-green-500 text-white text-[10px] py-1 px-3 rounded-md">
              {data.status[0]}
            </span>
          )}

          <div className="flex space-x-2">
            {data?.status?.slice(1).map((item, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white text-[10px] py-1 px-3 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute left-0 bottom-2 w-full flex justify-between items-center px-3">
          <div className="text-white text-xs flex items-center gap-1">
            <MdLocationOn className="text-sm" />
            {data?.location}
          </div>

          <div className="flex items-center gap-2 text-white">
            <div className="flex items-center gap-1 text-xs">
              <IoVideocamSharp className="text-[15px]" />
              {data?.media?.videos > 0 && data.media.videos}
            </div>

            <div className="flex items-center gap-1 text-xs">
              <FaCamera className="text-sm" />
              {data?.media?.photos}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-3 mt-3 pb-4 border-b">
        <h3 className="text-lg text-gray-700">{data?.title}</h3>
        <span className="text-[15px] text-blue-500 font-semibold block py-[2px]">
          $ {data?.price}
        </span>
        <p className="text-[13px] line-clamp-2">{data?.description}</p>

        <div className="flex gap-4 pt-3">
          <div className="flex items-center gap-[6px] text-[13px]">
            <LiaBedSolid className="text-lg -mt-[2px]" />
            {data?.bedrooms}
          </div>
          <div className="flex items-center gap-[6px] text-[13px]">
            <LiaBathSolid className="text-lg -mt-[2px]" />
            {data?.bathrooms}
          </div>
          <div className="flex items-center gap-[6px] text-[13px]">
            <BsArrowsFullscreen className="text-sm" />
            {data?.area}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <Image
            width={100}
            height={100}
            src={data?.agent?.profilePicture}
            alt="agent-profile-picture"
            className="w-6 h-6 rounded-full"
          />
          <h4 className="text-xs">{data?.agent?.name}</h4>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1 border rounded-[4px] transition-all duration-300 hover:border-blue-500 hover:text-blue-500">
            <IoMdShare className="text-sm" />
          </button>
          <button className="p-1 border rounded-[4px] transition-all duration-300 hover:border-blue-500 hover:text-blue-500">
            <CiHeart className="text-[15px]" />
          </button>
          <button className="p-1 border rounded-[4px] transition-all duration-300 hover:border-blue-500 hover:text-blue-500">
            <GoPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
