import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CityTabFilter from "./CityTabFilter";
import PropertyCard from "../homepage/PropeertyCard";
import { propertiesData } from "@/common/data";

export default function PropertiesListedByCity({ cityName }) {
  function slugToCity(slug) {
    return slug
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  }

  return (
    <div className="max-w-[1030px] mx-auto mb-5">
      <div className="py-5">
        <div className="flex items-center text-xs gap-1 text-black">
          <span className="text-gray-600">Home</span> <IoIosArrowForward />{" "}
          Jersey City
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 pt-4 pb-1">
          Properties listed in {slugToCity(cityName)}
        </h1>
      </div>

      {/* City header tab menus */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="col-span-2 bg-white px-4 py-3 rounded-md">
            <CityTabFilter />
          </div>
          <div className="mt-5">
            {propertiesData.map((property) => (
              <PropertyCard key={property?.id} data={property} />
            ))}
          </div>
        </div>
        <div className="bg-white">
          <h1>Advanced Search</h1>
        </div>
      </div>
    </div>
  );
}
