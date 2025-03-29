import React from "react";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { IoCarSportSharp } from "react-icons/io5";

export default function Overview() {
  return (
    <div>
      {/* overview */}
      <div className="mt-10 bg-white p-6">
        <div className="flex items-center justify-between cursor-pointer">
          <h2 className="text-gray-800 font-semibold">Overview</h2>
        </div>
        <div
          className={`flex items-center justify-between transition-all duration-700 overflow-hidden mt-3`}
        >
          <div>
            <h4>Updated On:</h4>
            <span>February 13, 2024</span>
          </div>
          <div>
            <LiaBedSolid />
            <span>5 Bedrooms</span>
          </div>
          <div>
            <LiaBathSolid />
            <span>6 Bathrooms</span>
          </div>
          <div>
            <IoCarSportSharp />
            <span>2 Garages</span>
          </div>
          <div>
            <IoCarSportSharp />
            <span>190 ft2</span>
          </div>
          <div>
            <IoCarSportSharp />
            <span>Year Built:2005</span>
          </div>
        </div>
      </div>
    </div>
  );
}
