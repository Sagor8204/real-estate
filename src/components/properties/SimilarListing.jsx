import { propertiesData } from "@/common/data";
import React from "react";
import PropertyCard from "../homepage/PropeertyCard";

export default function SimilarListing() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl text-black font-medium pb-3">Similar Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {propertiesData.slice(1, 3).map((data) => (
          <PropertyCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
