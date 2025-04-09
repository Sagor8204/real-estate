import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { FaPrint } from "react-icons/fa6";

export default function HeaderContent() {
  return (
    <div className="px-5 lg:px-0">
      <span className="flex items-center text-sm mb-6">
        Home <IoIosArrowForward /> Houses <IoIosArrowForward /> Luxury House in
        Greenville
      </span>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* for mobile deveice */}
        <div className="flex lg:hidden items-center gap-2 mb-3">
          <span className="flex items-center gap-1 border bg-white px-3 py-1 rounded-md text-xs font-semibold">
            <IoShareSocialSharp className="text-[15px] text-black" /> Share
          </span>
          <span className="flex items-center gap-1 border bg-white px-3 py-1 rounded-md text-xs font-semibold">
            <MdFavorite className="text-[16px] text-black" /> Favorite
          </span>
          <span className="flex items-center gap-1 border bg-white px-3 py-1 rounded-md text-xs font-semibold">
            <FaPrint className="text-sm text-black" /> Print
          </span>
        </div>

        <div>
          <div className="flex gap-2 mb-3">
            <span className="rounded-md text-xs text-white bg-primary inline-block px-3 py-1">
              Sales
            </span>
            <span className="rounded-md text-xs text-white bg-primary inline-block px-3 py-1">
              Houses
            </span>
          </div>

          <h1 className="text-2xl lg:text-4xl text-black font-semibold mb-2">
            Luxury House in Greenville
          </h1>

          {/* for mobile device */}
          <div className="relative lg:hidden mb-2">
            <h3 className="text-primary lg:text-right">$ 1,098 /sq ft</h3>
            <h1 className="text-primary text-2xl lg:text-[32px] font-semibold">
              $ 860,000
            </h1>
          </div>
          <div className="flex items-center text-sm gap-1">
            <IoLocationSharp />
            <span>Ferris Park, Jersey City, Greenville</span>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:items-end">
          {/* for large device */}
          <div className="hidden lg:flex lg:flex-col">
            <h3 className="text-primary -mb-1 lg:text-right">$ 1,098 /sq ft</h3>
            <h1 className="text-primary text-[32px] font-semibold">
              $ 860,000
            </h1>
          </div>
          {/* for large device */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-md text-xs font-semibold">
              <IoShareSocialSharp className="text-[15px] text-black" /> Share
            </span>
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-md text-xs font-semibold">
              <MdFavorite className="text-[16px] text-black" /> Favorite
            </span>
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-md text-xs font-semibold">
              <FaPrint className="text-sm text-black" /> Print
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
