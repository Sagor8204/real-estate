import Image from "next/image";
import Heading from "../ui/Heading";
import styles from "@/app/styles/Home.module.css";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { BsArrowsFullscreen } from "react-icons/bs";

const datas = [
  {
    image: "/assets/images/featured1.webp",
    avatar: "/assets/images/featured1-avatar.webp",
    type: "Active",
    title: "Villa on Washington Avenue",
    price: "150,000",
    desc: "Beautiful, updated, ground level Co-op apartment in the desirable Bay",
    bedroom: "5",
    bath: "3",
    sft: "250",
  },
  {
    image: "/assets/images/featured2.webp",
    avatar: "/assets/images/featured2-avatar.webp",
    title: "Luxury villa in Rego Park",
    price: "420,000",
    desc: "Just steps away from QM2 express bus to Manhattan and local buses; onl",
    bedroom: "3",
    bath: "2",
    sft: "150",
  },
];

export default function FeaturedProperty() {
  return (
    <div className={styles.featured_properties}>
      <Heading
        title="Featured Properties"
        desc="Here are two listings displayed with the featured property shortcode, which you can use when you have some special properties to present."
      />

      <div className="max-w-[1030px] mx-auto flex gap-5 pb-20">
        {datas.map((data) => (
          <div
            className="w-1/2 flex relative bg-white rounded-r-md"
            key={data.title}
          >
            <div className="w-1/2">
              <Image
                src={data.image}
                width={500}
                height={500}
                alt="featured-properties-image"
                className="h-full object-cover rounded-l-md"
              />
              <Image
                src={data.avatar}
                width={250}
                height={250}
                alt="featured-properties-avatar"
                className="absolute left-5 bottom-5 w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="w-1/2">
              <div className="mb-12 p-5">
                <h2 className="text-lg font-semibold text-black pb-2">
                  {data.title}
                </h2>
                <h3 className="text-primary font-semibold pb-3">
                  $ {data.price}
                </h3>
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
              <div className="flex items-center justify-around border-t p-2">
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
        ))}
      </div>
    </div>
  );
}
