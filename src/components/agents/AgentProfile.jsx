import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { AiOutlineGlobal } from "react-icons/ai";

export default function AgentProfile() {
  return (
    <div>
      {/* persoanl info */}
      <div className="flex bg-white rounded-md mb-8">
        <div className="w-[385px] h-[335px] rounded-md">
          <Image
            src="/assets/images/agent1.webp"
            width={500}
            height={500}
            alt="agent"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="py-8 px-8">
          <h1 className="text-2xl font-semibold text-gray-800 pb-1">
            Lily Bicharm
          </h1>
          <div className="text-sm">
            Realtor, <span className="text-gray-800">Agency</span>
          </div>
          <div className="py-3 text-[15px]">
            <span className="font-semibold">Member of</span>: Global Real Estate
            Professionals Network
          </div>
          <p className="text-[15px]">
            1234 Elmwood Avenue Suite 567 Faketown, XY 12345 Countryland
          </p>

          {/* Social links */}
          <div className="flex items-center py-5 gap-3">
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedin />
            <FaPinterest />
            <FaInstagram />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-2">
            <button className="border py-[10px] px-4 rounded-md border-primary bg-primary text-white text-sm font-semibold ">
              Send Email
            </button>
            <button className="border py-[10px] px-4 rounded-md border-primary text-primary text-sm font-semibold flex items-center gap-2">
              <IoIosCall /> Call 877 765 8825
            </button>
            <button className="border py-[10px] px-4 rounded-md border-primary text-primary text-sm font-semibold flex items-center gap-2">
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        {/* About agent */}
        <div className="bg-white p-8 w-1/2">
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 pb-3">
              About Me
            </h2>
            <p className="text-[15px] leading-6 mb-4">
              Lily Bicharm is a dedicated and professional real estate agent who
              specializes in providing a seamless and personalized experience
              for every client. With a keen understanding of the local market
              and a passion for helping clients find their perfect property,
              Lily goes above and beyond to meet their needs
            </p>
            <p className="text-[15px] leading-6">
              Known for her strong communication skills, attention to detail,
              and proactive approach, she ensures her clients are well-informed
              and confident throughout the buying, selling, or investing
              process. Whether you’re looking for your dream home or making an
              investment, Lily Bicharm is committed to delivering exceptional
              results with integrity and care.
            </p>
          </div>

          {/* Specialties & Service Areas */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Specialties & Service Areas
            </h2>
            <div className="flex items-center gap-3">
              <button className="rounded-full bg-primary-50 text-primary border border-primary-100 text-xs py-2 px-4 hover:bg-primary hover:text-white transition-all duration-300">
                New York
              </button>
              <button className="rounded-full bg-primary-50 text-primary border border-primary-100 text-xs py-2 px-4 hover:bg-primary hover:text-white transition-all duration-300">
                Commercial
              </button>
              <button className="rounded-full bg-primary-50 text-primary border border-primary-100 text-xs py-2 px-4 hover:bg-primary hover:text-white transition-all duration-300">
                Residental
              </button>
            </div>
            <div className="grid grid-cols-2 mt-6 space-y-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Expericence
                </h3>
                <span className="text-[13px]">30 years as Realtor</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Certifications
                </h3>
                <span className="text-[13px]">Golden Agent Globe 2020</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Languages
                </h3>
                <span className="text-[13px]">English, Spanish, French</span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Agent */}
        <div className="w-1/2 bg-white p-8">
          <h2 className="text-lg font-semibold text-gray-800 pb-3">
            Contact Me
          </h2>

          <div className="flex items-center gap-2 text-[15px] pb-2">
            <IoCallOutline className="text-lg" />
            <span>800 900 8766</span>
          </div>
          <div className="flex items-center gap-2 text-[15px] pb-2">
            <MdPhoneIphone className="text-lg" />
            <span>877 765 6554</span>
          </div>
          <div className="flex items-center gap-2 text-[15px] pb-2">
            <MdOutlineMail className="text-lg" />
            <span>lily@myrealestate.com</span>
          </div>
          <div className="flex items-center gap-2 text-[15px] pb-2">
            <TiSocialSkypeOutline className="text-lg" />
            <span>lilicharm</span>
          </div>
          <div className="flex items-center gap-2 text-[15px] pb-2 mb-4">
            <AiOutlineGlobal className="text-lg" />
            <span>mywebsite.com</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <input
              className="w-full outline-none border text-[13px] py-2 px-2 rounded-md"
              type="text"
              placeholder="Your Name"
              name=""
              id=""
            />
            <input
              className="w-full outline-none border text-[13px] py-2 px-2 rounded-md"
              type="email"
              placeholder="Your Email"
              name=""
              id=""
            />
            <input
              className="w-full outline-none border text-[13px] py-2 px-2 rounded-md"
              type="number"
              placeholder="Your Phone"
              name=""
              id=""
            />
          </div>
          <textarea
            rows="9"
            className="w-full border outline-none p-2 mb-3 text-[13px]"
          ></textarea>
          <button className="bg-primary rounded-md text-sm font-semibold py-[10px] px-7 text-white">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
