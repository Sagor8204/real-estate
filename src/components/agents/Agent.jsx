import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import AgentProfile from "./AgentProfile";
import MyListings from "./MyListings";
import AgentReviews from "./AgentReviews";

export default function Agent() {
  return (
    <div>
      <div className="bg-primary-100 pb-32">
        <div className="max-w-[1100px] mx-auto flex items-center text-xs gap-1 text-black py-5">
          <span className="text-gray-600">Home</span> <IoIosArrowForward />{" "}
          Jersey City
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto -mt-28 mb-10">
        {/* Agent profile */}
        <AgentProfile />
        {/* My Listings */}
        <MyListings />
        {/* Agent reviews */}
        <AgentReviews />
      </div>
    </div>
  );
}
