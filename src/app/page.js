import Banner from "@/components/homepage/Banner";
import LatestProperties from "@/components/homepage/LatestProperties";
import PropertiesByArea from "@/components/homepage/PropertiesByArea";
import PropertyByCategory from "@/components/homepage/PropertyByCategory";
import PropertyFilter from "@/components/homepage/PropertyFilter";
import PropertyForRent from "@/components/homepage/PropertyForRent";

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
      </div>
    </div>
  );
}
