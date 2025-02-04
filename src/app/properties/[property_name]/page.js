import GallerySlider from "@/components/properties/GallerySlider";
import HeaderContent from "@/components/properties/HeaderContent";
import PropertyOwner from "@/components/properties/PropertyOwner";

export default function page() {
  return (
    <div className="pt-32 pb-20 max-w-[1115px] mx-auto">
      <HeaderContent />
      <div className="grid grid-cols-4 gap-4 mt-8">
        <GallerySlider />
        <PropertyOwner />
      </div>
    </div>
  );
}
