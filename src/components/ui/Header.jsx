"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Direct scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change '50' to the desired scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-50 w-full px-14 py-5 shadow-sm flex items-center justify-between transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-0 bg-white text-black"
          : pathname === "/"
          ? "top-6 bg-transparent text-white"
          : "top-6 bg-white text-gray-800"
      }`}
    >
      <div>
        {isScrolled ? (
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
        )}
      </div>

      <div>
        <ul className={`flex items-center space-x-8 text-[15px] font-semibold`}>
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

        <Button text="Add Listing" />
      </div>
    </div>
  );
}
