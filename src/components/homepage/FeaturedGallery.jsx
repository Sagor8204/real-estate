import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturedGallery() {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-2 h-[350px] lg:h-[650px] relative">
        <div className="h-[300px] lg:h-[650px] relative group">
          <div className="h-full overflow-hidden">
            <Image
              src="/assets/images/gallery1.webp"
              width={1000}
              height={1000}
              alt="gallery-image"
              className="h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[300px] lg:h-[650px]">
          {[
            "gallery2.webp",
            "gallery3.webp",
            "gallery4.webp",
            "gallery5.webp",
          ].map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden ${
                index < 2 ? "h-[150px]" : "hidden lg:flex"
              } lg:h-[325px]`}
            >
              <Image
                src={`/assets/images/${image}`}
                width={1000}
                height={1000}
                alt="gallery-image"
                className="h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        {["gallery4.webp", "gallery5.webp"].map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden h-[50px] lg:hidden"
          >
            <Image
              src={`/assets/images/${image}`}
              width={1000}
              height={1000}
              alt="gallery-image"
              className="h-full object-top object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        ))}

        <div className="absolute bottom-0 left-5 lg:left-1/2 transform lg:-translate-x-1/2 w-[1140px]">
          <div className="bg-white w-[295px] lg:w-[355px] p-7 rounded-t-md h-[250px] lg:h-[350px]">
            <h2 className="text-primary font-semibold">$ 770,000</h2>
            <Link href={`/properties/gorgeous-home-for-sale-in-jersey`}>
              <h1 className="text-2xl lg:text-3xl py-3 font-semibold text-black">
                Gorgeous Home for Sale in Jersey
              </h1>
            </Link>
            <div className="flex items-center gap-3 font-semibold pb-3 text-black">
              <span>5 BD</span>
              <span>6 BD</span>
              <span>190 ft²</span>
            </div>
            <p className="line-clamp-3 text-sm pb-2 leading-6 hidden lg:flex">
              This property is mostly wooded and sits high on a hilltop
              overlooking the Mohawk River Valley. Located right in the heart of
              Upsta
            </p>
            <button className="text-sm font-semibold flex items-center hover:text-primary transition-all duration-300">
              discover more <IoIosArrowForward className="mt-[2px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
