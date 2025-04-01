"use client";
import GallerySlider from "@/components/properties/GallerySlider";
import HeaderContent from "@/components/properties/HeaderContent";
import PropertyDetails from "@/components/properties/PropertyDetails";
import PropertyOwner from "@/components/properties/PropertyOwner";
import { useEffect, useState } from "react";

export default function page() {
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const type = sessionStorage.getItem("type");
      setFeatured(type === "featured");
    }
  }, []);

  return (
    <div className="pt-3 lg:pt-24 pb-20 max-w-[1115px] mx-auto">
      <HeaderContent />
      {!featured ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8 items-start">
          <div className="lg:col-span-3 px-5 lg:px-0">
            <GallerySlider />
            <PropertyDetails />
          </div>
          <div className="lg:col-span-1 relative">
            <PropertyOwner />
          </div>
        </div>
      ) : (
        <div className="mt-8 items-start px-5 lg:px-0">
          <div>
            <PropertyDetails />
          </div>
        </div>
      )}
    </div>
  );
}
