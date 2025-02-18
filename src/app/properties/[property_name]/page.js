import GallerySlider from "@/components/properties/GallerySlider";
import HeaderContent from "@/components/properties/HeaderContent";
import PropertyDetails from "@/components/properties/PropertyDetails";
import PropertyOwner from "@/components/properties/PropertyOwner";

export default function page() {
  return (
    <div className="pt-32 pb-20 max-w-[1115px] mx-auto">
      <HeaderContent />
      <div className="grid grid-cols-4 gap-4 mt-8 items-start">
        <div className="col-span-3">
          <GallerySlider />
          <PropertyDetails />
        </div>
        <div className="col-span-1 relative">
          <PropertyOwner />
        </div>
      </div>
    </div>
  );
}
