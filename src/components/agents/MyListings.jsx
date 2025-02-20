import { propertiesData } from "@/common/data";
import React from "react";
import PropertyCard from "../homepage/PropeertyCard";

export default function MyListings() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">My Listings</h1>
      {/* buttons */}
      <div className="bg-white flex items-center">
        <button className="bg-primary px-8 rounded-[4px] py-3 text-sm font-semibold text-white">
          All (4)
        </button>
        <button className="px-8 py-3 text-sm font-semibold text-gray-800">
          Apartments (4)
        </button>
      </div>

      {/* my listings properties */}
      <div className="grid grid-cols-3 gap-7 mt-6">
        {propertiesData.map((property) => (
          <PropertyCard key={property?.id} data={property} />
        ))}
      </div>
    </div>
  );
}
