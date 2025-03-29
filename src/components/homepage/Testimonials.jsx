import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import styles from "@/app/styles/Home.module.css";

const datas = [
  {
    image: "/assets/images/testimonial1.webp",
    name: "Dana Gilmore",
    designation: "developer",
    desc: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    rating_start: 5,
  },
  {
    image: "/assets/images/testimonial2.webp",
    name: "Susan Barkley",
    designation: "happy seller",
    desc: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
    rating_start: 5,
  },
  {
    image: "/assets/images/testimonial3.webp",
    name: "Lisa Simpson",
    designation: "happy seller",
    desc: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
    rating_start: 5,
  },
  {
    image: "/assets/images/testimonial4.webp",
    name: "Sara Loreley",
    designation: "buyer",
    desc: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    rating_start: 5,
  },
  {
    image: "/assets/images/testimonial5.webp",
    name: "Virginia Wolf",
    designation: "happy seller",
    desc: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
    rating_start: 5,
  },
  {
    image: "/assets/images/testimonials6.webp",
    name: "Jessica Fowley",
    designation: "happy seller",
    desc: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
    rating_start: 5,
  },
];

export default function Testimonials() {
  return (
    <div className={styles.linear_gradient}>
      <Heading
        title="Testimonials"
        desc="Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust."
      />

      <div className="max-w-[1140px] mx-auto pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 lg:px-0">
        {datas.map((data) => (
          <div className="rounded-md p-10 bg-white shadow-sm" key={data.name}>
            <div className="flex items-center gap-8 pb-6">
              <Image
                src={data.image}
                width={100}
                height={100}
                alt="testimonial-image"
                className="rounded-full w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {data.name}
                </h3>
                <span className="text-sm">{data.designation}</span>
              </div>
            </div>
            <p className="text-sm leading-6 pb-4 text-gray-400">{data.desc}</p>
            <div className="flex items-center">
              {Array.from({ length: data.rating_start }, (_, index) => (
                <IoIosStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
