import Image from "next/image";
import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiMonitorLight } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="py-10 lg:py-20 bg-[#001a33] bg-fixed">
      <div className="max-w-[1200px] px-5 lg:px-[30px] mx-auto grid grid-cols-1 lg:grid-cols-4 text-white">
        <div className="lg:col-span-2 mb-5 lg:mb-0">
          <h2 className="mb-3">Contact us</h2>
          <ul className="text-gray-400">
            <li className="flex items-start text-sm lg:text-[15px] gap-2 pb-2">
              <FaRegAddressBook className="mt-1" />
              <p>
                3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755
                Commercial OR 97302
              </p>
            </li>
            <li className="flex items-center text-sm lg:text-[15px] gap-2 pb-2">
              <FaPhoneAlt />
              <p>(305) 555-4446</p>
            </li>
            <li className="flex items-center text-sm lg:text-[15px] gap-2 pb-2">
              <FaPhoneAlt />
              <p>(305) 555-4555</p>
            </li>
            <li className="flex items-center text-sm lg:text-[15px] gap-2 pb-2">
              <MdOutlineEmail />
              <p>youremail@gmail.com</p>
            </li>
            <li className="flex items-center text-sm lg:text-[15px] gap-2 pb-2">
              <PiMonitorLight />
              <p>WP RESIDENCE</p>
            </li>
          </ul>
        </div>

        <div className="mb-5 lg:mb-0">
          <h2 className="mb-3">Lists by Category</h2>
          <ul className="text-gray-400">
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Apartments (17)</span>
            </li>
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Condos (8)</span>
            </li>
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Houses (5)</span>
            </li>
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Industrial (1)</span>
            </li>
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Lend (1)</span>
            </li>
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Offices (2)</span>
            </li>
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Retail (4)</span>
            </li>
            <li className="text-sm lg:text-[15px] pb-2">
              <span>Vilas (4)</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3">Latest Properties</h2>
          <div>
            <div className="flex gap-5 pb-4">
              <Image
                src="/assets/images/footer1.webp"
                width={200}
                height={200}
                alt="footer-iamge"
                className="w-24 rounded-md"
              />
              <div className="text-sm lg:text-[15px]">
                <h3 className="text-gray-400">Luxury House in</h3>
                <div className="text-gray-400 pb-2">Greenville</div>
                <span className="text-[13px]">$ 860,000</span>
              </div>
            </div>
            <div className="flex gap-5 pb-4">
              <Image
                src="/assets/images/footer2.webp"
                width={200}
                height={200}
                alt="footer-iamge"
                className="w-24 rounded-md"
              />
              <div className="text-sm lg:text-[15px]">
                <h3 className="text-gray-400">Luxury House in</h3>
                <div className="text-gray-400 pb-2">Sale</div>
                <span className="text-[13px]">$ 860,000</span>
              </div>
            </div>
            <div className="flex gap-5 pb-4">
              <Image
                src="/assets/images/footer3.webp"
                width={200}
                height={200}
                alt="footer-iamge"
                className="w-24 rounded-md"
              />
              <div className="text-sm lg:text-[15px]">
                <h3 className="text-gray-400">Luxury House in</h3>
                <div className="text-gray-400 pb-2">Subunits</div>
                <span className="text-[13px]">$ 860,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
