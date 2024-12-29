"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
          : "top-6 bg-white text-black"
      }`}
    >
      <div>
        <h2>Real Estate</h2>
      </div>

      <div>
        <ul className="flex items-center space-x-4 text-[15px]">
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

      <div>+54823556+568</div>
    </div>
  );
}
