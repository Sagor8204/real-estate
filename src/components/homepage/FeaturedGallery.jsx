import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturedGallery() {
  return (
    <div className="grid grid-cols-2 h-[650px]">
      <div className="h-[650px] relative group">
        <div className="h-full relative overflow-hidden">
          <Image
            src="/assets/images/gallery1.webp"
            width={1000}
            height={1000}
            alt="gallery-image"
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] bg-white w-[355px] p-7 rounded-t-md h-[350px]">
          <h2 className="text-primary font-semibold">$ 770,000</h2>
          <h1 className="text-3xl py-3 font-semibold text-black">
            Gorgeous Home for Sale in Jersey
          </h1>
          <div className="flex items-center gap-3 font-semibold pb-3 text-black">
            <span>5 BD</span>
            <span>6 BD</span>
            <span>190 ft²</span>
          </div>
          <p className="line-clamp-3 text-sm pb-2 leading-6">
            This property is mostly wooded and sits high on a hilltop
            overlooking the Mohawk River Valley. Located right in the heart of
            Upsta
          </p>
          <button className="text-sm font-semibold flex items-center hover:text-primary transition-all duration-300">
            discover more <IoIosArrowForward className="mt-[2px]" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[650px]">
        {[
          "gallery2.webp",
          "gallery3.webp",
          "gallery4.webp",
          "gallery5.webp",
        ].map((image, index) => (
          <div key={index} className="h-[325px] relative group overflow-hidden">
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
    </div>
  );
}
