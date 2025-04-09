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
    <div className="pt-3 lg:pt-24 pb-20 max-w-[1170px] mx-auto">
      <HeaderContent />
      {!featured ? (
        <div className="grid grid-cols-1 lg:grid-cols-[2.06fr_1fr] gap-9 mt-8 items-start">
          <div className="px-5 lg:px-0 overflow-hidden">
            <GallerySlider />
            <PropertyDetails />
          </div>
          <div className="relative">
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
