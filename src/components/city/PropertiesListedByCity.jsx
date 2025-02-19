import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CityTabFilter from "./CityTabFilter";
import PropertyCard from "../homepage/PropeertyCard";
import { propertiesData } from "@/common/data";
import AdvancedSearch from "./AdvancedSearch";
import ListBy from "./ListBy";

export default function PropertiesListedByCity({ cityName }) {
  function slugToCity(slug) {
    return slug
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  }

  return (
    <div className="max-w-[1100px] mx-auto mb-5">
      <div className="flex items-center text-xs gap-1 text-black py-5">
        <span className="text-gray-600">Home</span> <IoIosArrowForward /> Jersey
        City
      </div>
      {/* City header tab menus */}
      <div className="grid grid-cols-[2.8fr,1.2fr] gap-8 items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 pb-6">
            Properties listed in {slugToCity(cityName)}
          </h1>
          <div className="bg-white px-4 py-3 rounded-md">
            <CityTabFilter />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-5">
            {propertiesData.map((property) => (
              <PropertyCard key={property?.id} data={property} />
            ))}
          </div>
        </div>
        <div>
          <AdvancedSearch />
          <ListBy />
        </div>
      </div>
    </div>
  );
}
