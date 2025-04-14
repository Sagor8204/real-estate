"use client";
import Image from "next/image";
import React, { act, useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import WeeklySlider from "./WeeklyDateSlider";
import { BsPerson } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";

export default function PropertyOwner() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("request_info");
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
    <div
      className={`bg-white mt-10 lg:mt-0 w-full px-5 lg:px-0 lg:min-w-[270px] ${
        isScrolled && "relative lg:fixed lg:max-w-[370.59px] lg:top-36"
      }`}
    >
      <div className="flex items-center text-sm">
        <button
          onClick={() => setActiveTab("request_info")}
          className={`w-1/2 text-center py-3 font-semibold text-gray-600 transition-all duration-300 ${
            activeTab === "request_info" ? "bg-white" : "bg-gray-100"
          }`}
        >
          Request Info
        </button>
        <button
          onClick={() => setActiveTab("schedule_tour")}
          className={`w-1/2 text-center py-3 font-semibold text-gray-600 transition-all duration-300 ${
            activeTab === "schedule_tour" ? "bg-white" : "bg-gray-100"
          }`}
        >
          Schedule a tour
        </button>
      </div>
      {/* request info */}
      {activeTab === "request_info" && (
        <div className="p-8">
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
              <h2 className="text-lg text-primary font-semibold">
                John Collins
              </h2>
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

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
            <button className="flex items-center border border-primary py-2 rounded-md w-full lg:w-1/2 justify-center gap-1 text-[15px]">
              <IoIosCall /> Call
            </button>
            <button className="flex items-center border border-primary py-2 rounded-md w-full lg:w-1/2 justify-center gap-1 text-[15px]">
              <FaWhatsapp /> Whatsapp
            </button>
          </div>
        </div>
      )}

      {/* schedule a tour */}
      {activeTab === "schedule_tour" && (
        <div className="p-8">
          <div className="mb-8 relative">
            <WeeklySlider tabSchedule />
          </div>
          <div>
            <select className="w-full bg-gray-100 p-3 rounded-md text-sm outline-none mb-3">
              <option value="">Please select the time</option>
              <option value="">10:00 am</option>
              <option value="">10:30 am</option>
              <option value="">11:00 am</option>
              <option value="">11:30 am</option>
              <option value="">12:00 pm</option>
              <option value="">12:30 pm</option>
              <option value="">01:00 pm</option>
              <option value="">01:30 pm</option>
              <option value="">02:00 pm</option>
              <option value="">02:30 pm</option>
            </select>
            <div className="flex items-center gap-3 mb-3">
              <button className="flex items-center gap-2 border border-primary text-sm py-3 w-full justify-center rounded-md">
                <BsPerson className="text-lg" /> In Person
              </button>
              <button className="flex items-center gap-2 border text-sm py-3 w-full justify-center rounded-md">
                <IoVideocamOutline className="text-lg" /> Video Chat
              </button>
            </div>
            <div>
              <input
                className="w-full p-2 rounded-md text-sm border outline-none mb-3"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full p-2 rounded-md text-sm border outline-none mb-3"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="w-full p-2 rounded-md text-sm border outline-none mb-3"
                type="number"
                placeholder="Your Phone"
              />
              <textarea
                className="w-full border outline-none rounded-md text-sm p-2 mb-3"
                rows="7"
              ></textarea>
            </div>

            <button className="w-full bg-primary text-white font-semibold py-2 rounded-md text-[15px] mb-2">
              Send Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
