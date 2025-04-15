"use client";
import Heading from "../ui/Heading";
import styles from "@/app/styles/Home.module.css";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

const datas = [
  {
    id: 1,
    image: "/assets/images/featured1.webp",
    avatar: "/assets/images/featured1-avatar.webp",
    type: "Active",
    title: "Villa on Washington Avenue",
    price: "150,000",
    desc: "Beautiful, updated, ground level Co-op apartment in the desirable Bay",
    bedroom: "5",
    bath: "3",
    sft: "250",
    status: "Active",
  },
  {
    id: 2,
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
    <div className={`${styles.linear_gradient}`}>
      <Heading
        title="Featured Properties"
        desc="Here are two listings displayed with the featured property shortcode, which you can use when you have some special properties to present."
      />

      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 px-5 lg:px-0">
        {datas.map((data) => (
          <FeaturedPropertyCard data={data} key={data.title} />
        ))}
      </div>
    </div>
  );
}
