import Banner from "@/components/homepage/Banner";
import FeaturedGallery from "@/components/homepage/FeaturedGallery";
import FeaturedProperty from "@/components/homepage/FeaturedProperty";
import LatestProperties from "@/components/homepage/LatestProperties";
import PropertiesByArea from "@/components/homepage/PropertiesByArea";
import PropertyByCategory from "@/components/homepage/PropertyByCategory";
import PropertyFilter from "@/components/homepage/PropertyFilter";
import PropertyForRent from "@/components/homepage/PropertyForRent";
import RealEstateAgents from "@/components/homepage/RealEstateAgents";

export default function Home() {
  return (
    <div className="">
      <div>
        <Banner />

        <div className="relative z-10">
          <PropertyFilter />
        </div>

        <PropertiesByArea />
        <LatestProperties />
        <PropertyByCategory />
        <PropertyForRent />
        <FeaturedProperty />
        <FeaturedGallery />
        <RealEstateAgents />
      </div>
    </div>
  );
}
