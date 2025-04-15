"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Button from "./Button";
import { MdMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [responsiveHeader, setIsResponsiveHeader] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Direct scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (isHomePage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage]);

  return (
    <>
      {/* header */}
      <div
        className={`fixed hidden left-0 right-0 z-[9999] w-full px-14 py-5 shadow-sm lg:flex items-center justify-between transition-all duration-300 ease-in-out ${
          isHomePage
            ? isScrolled
              ? "top-0 bg-white text-black"
              : "top-6 bg-transparent text-white"
            : "top-0 bg-white text-black"
        }`}
      >
        <div>
          <Link href="/">
            {isHomePage ? (
              isScrolled ? (
                <Image
                  src="/assets/images/logo-black.png"
                  width={200}
                  height={200}
                  alt="logo"
                  className="w-40"
                />
              ) : (
                <Image
                  src="/assets/images/logo.png"
                  width={200}
                  height={200}
                  alt="logo"
                  className="w-40"
                />
              )
            ) : (
              <Image
                src="/assets/images/logo-black.png"
                width={200}
                height={200}
                alt="logo"
                className="w-40"
              />
            )}
          </Link>
        </div>

        <div>
          <ul className={`flex items-center space-x-8 text-[15px] font-medium`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>Properties</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex gap-2">
            <FaPhoneAlt className="mt-[3px]" />
            <span className="font-semibold">+54823556+568</span>
          </div>
          <div
            className={`flex gap-1 w-6 h-6 rounded-full p-1 items-center justify-center ${
              isScrolled ? "bg-primary text-white" : "bg-white text-gray-700"
            }`}
          >
            <FaUser className="text-[15px]" />
          </div>

          <Button text="Add Listing" custom="before:bg-black" />
        </div>
      </div>

      {/* responsive header */}
      <div className="bg-[#001a33] flex lg:hidden py-2 px-5 items-center justify-between">
        <div onClick={() => setIsResponsiveHeader(!responsiveHeader)}>
          <MdMenu className="text-2xl text-white" />
          <div
            className={`bg-black fixed top-0 left-0 h-full z-50 w-56 transform transition-all duration-300 ease-in-out ${
              responsiveHeader
                ? "translate-x-0 pointer-events-auto"
                : "-translate-x-[100%] pointer-events-none"
            }`}
          >
            <div className="flex justify-end px-1 py-2 text-xl">
              <IoMdClose
                onClick={() => setIsResponsiveHeader(false)}
                className="text-white"
              />
            </div>
            <div className="px-4 mb-2">
              <button className="w-full border border-primary rounded-sm py-2 text-sm font-medium text-primary">
                Add Listing
              </button>
            </div>
            <ul>
              <li className="flex items-center justify-between py-4 px-4 border-b border-b-gray-600 text-white text-[13px]">
                <span>Home</span> <IoIosArrowDown />
              </li>
              <li className="flex items-center justify-between py-4 px-4 border-b border-b-gray-600 text-white text-[13px]">
                <span>Demos</span> <IoIosArrowDown />
              </li>
              <li className="flex items-center justify-between py-4 px-4 border-b border-b-gray-600 text-white text-[13px]">
                <span>Lists</span> <IoIosArrowDown />
              </li>
              <li className="flex items-center justify-between py-4 px-4 border-b border-b-gray-600 text-white text-[13px]">
                <span>Property</span> <IoIosArrowDown />
              </li>
              <li className="flex items-center justify-between py-4 px-4 border-b border-b-gray-600 text-white text-[13px]">
                <span>Pages</span> <IoIosArrowDown />
              </li>
              <li className="flex items-center justify-between py-4 px-4 border-b border-b-gray-600 text-white text-[13px]">
                <span>Elements</span> <IoIosArrowDown />
              </li>
              <li className="flex items-center justify-between py-4 px-4 border-b border-b-gray-600 text-white text-[13px]">
                <span>Search</span> <IoIosArrowDown />
              </li>
            </ul>
          </div>
        </div>
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={200}
            height={200}
            alt="logo"
            className="w-[190px]"
          />
        </Link>
        <div className="bg-white p-1 rounded-full">
          <Image
            src="/assets/images/avatar.svg"
            width={200}
            height={200}
            alt="avatar"
            className="w-3"
          />
        </div>
      </div>
    </>
  );
}
// [#0073e1]
