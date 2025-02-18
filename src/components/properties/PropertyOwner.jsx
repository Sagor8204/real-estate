"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function PropertyOwner() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [message, setMessage] = useState(
    "I'm interested in [ Luxury House in Greenville ]"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={`bg-white max-w-[270px] ${isScrolled && "fixed top-36"}`}>
      <div className="flex items-center text-sm">
        <div className="w-1/2 text-center bg-white py-2 font-semibold text-gray-600">
          Request Info
        </div>
        <div className="w-1/2 text-center bg-gray-100 py-2 font-semibold text-gray-600">
          Schedule a tour
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[75px] h-[75px]">
            <Image
              src="/assets/properties/person.webp"
              alt="person-image"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <h2 className="text-lg text-primary font-semibold">John Collins</h2>
            <span className="text-sm">Member ID:</span>
            <p className="text-sm">98765452143</p>
          </div>
        </div>

        <span className="block bg-primary text-white text-xs py-1 px-2 rounded-md mb-2">
          Schedule a showing?
        </span>

        <div>
          <input
            className="w-full p-2 rounded-md text-sm border outline-none mb-2"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-2 rounded-md text-sm border outline-none mb-2"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="w-full p-2 rounded-md text-sm border outline-none mb-2"
            type="number"
            placeholder="Your Phone"
          />
          <textarea
            className="w-full border outline-none rounded-md text-sm p-2 mb-2"
            rows="7"
            value={message}
            onChange={onChangeHandler}
          ></textarea>
        </div>

        <button className="w-full bg-primary text-white font-semibold py-2 rounded-md text-[15px] mb-2">
          Send Email
        </button>

        <div className="flex items-center gap-2">
          <button className="flex items-center border border-primary py-2 rounded-md w-1/2 justify-center gap-1 text-[15px]">
            <IoIosCall /> Call
          </button>
          <button className="flex items-center border border-primary py-2 rounded-md w-1/2 justify-center gap-1 text-[15px]">
            <FaWhatsapp /> Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}
